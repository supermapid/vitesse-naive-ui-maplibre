<script setup lang="ts">
import { Map as Mapl, NavigationControl } from "maplibre-gl"
import { onMapLoad } from "~/composables/maplibre-helper/onMapLoad"
import { addRasterLayer } from "~/composables/maplibre-helper/addRasterLayer"

const mapId = "map-index"
const map = shallowRef<Mapl>()

onMounted(async () => {
  map.value = new Mapl({
    container: mapId,
    style: {
      version: 8,
      center: [117.2, -3.2],
      zoom: 4,
      layers: [],
      sources: {},
      glyphs: "https://fontstack-pbf.supermap.id/{fontstack}/{range}.pbf"
    },
    antialias: true,
    preserveDrawingBuffer: true
  })

  map.value.addControl(
    new NavigationControl({
      visualizePitch: true
    }),
    "bottom-right"
  )

  await onMapLoad(map.value)

  addRasterLayer({
    map: map.value,
    urls: ["https://tiles.supermap.id/styles/positron/{z}/{x}/{y}.png"],
    spec: {
      type: "raster"
    }
  })
})
</script>

<template>
  <div id="container" class="absolute w-full h-full">
    <div id="map-index" class="map w-full h-full" style="left: 0; top: 0; background-color: #d4dadc"></div>
  </div>
</template>

<style>
@import "maplibre-gl/dist/maplibre-gl.css";
</style>
