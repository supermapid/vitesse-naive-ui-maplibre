import type { RasterLayerSpecification } from "maplibre-gl"
import { nanoid } from "nanoid"
import type { BaseAddLayerReturn } from "~/composables/maplibre-helper/base/BaseAddLayerReturn"
import type { BaseArgs } from "~/composables/maplibre-helper/base/BaseArgs"
import type { OmitIdNSource } from "~/composables/maplibre-helper/utils"

export type AddRasterLayerArgs = {
  id?: string
  beforeId?: string
  urls?: string[]
  sourceId?: string
  spec: OmitIdNSource<RasterLayerSpecification>
  tileSize?: number
} & BaseArgs

type AddRasterLayerFn = (args: AddRasterLayerArgs) => BaseAddLayerReturn

export const addRasterLayer: AddRasterLayerFn = ({
  map,
  id = nanoid(),
  beforeId,
  urls,
  sourceId,
  spec,
  tileSize = 256
}) => {
  if (sourceId == null && urls == null) {
    throw new Error("Either sourceid or urls should be passed")
  }

  const _sourceId = sourceId ?? `source__${id}`
  if (urls != null) {
    map.addSource(_sourceId, {
      type: "raster",
      tiles: urls,
      tileSize
    })
  }

  map.addLayer({ ...spec, id, type: "raster", source: _sourceId }, beforeId)

  return { id, sourceId: _sourceId }
}
