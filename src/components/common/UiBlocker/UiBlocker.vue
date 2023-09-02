<script setup lang="ts">
import { UiBlockerMessageKey, UiBlockerVisibleKey } from "~/components/common/UiBlocker/composable"

const visible = ref(false)
const invisible = computed(() => visible.value === false)

const message = ref<string>()
const loadingMessage = computed(() => message.value ?? "Loading...")

provide(UiBlockerVisibleKey, visible)
provide(UiBlockerMessageKey, message)

whenever(
  visible,
  () => {
    document.body.style.pointerEvents = "none"
  },
  {
    immediate: true
  }
)

whenever(invisible, () => {
  document.body.style.pointerEvents = "auto"
  message.value = undefined
})
</script>

<template>
  <Transition name="fade">
    <NSpin
      v-if="visible"
      style="
        backdrop-filter: blur(4px) saturate(180%);
        -webkit-backdrop-filter: blur(4px) saturate(180%);
        background-color: rgba(244, 244, 244, 0.75);
        z-index: 9999;
        position: fixed;
        width: 100%;
        height: 100%;
      "
      class="transition-all duration-300 cursor-wait"
    >
      <template #description>
        <div
          class="mt-5 px-3 py-1 flex justify-between items-center bg-white rounded-lg"
          style="border: 1px solid #e5e7eb; min-width: 6rem"
        >
          <div class="i-material-symbols:info-outline mr-2"></div>
          <Transition name="fade-bottom" mode="out-in" appear>
            <span :key="loadingMessage">{{ loadingMessage }}</span>
          </Transition>
        </div>
      </template>
    </NSpin>
  </Transition>

  <slot></slot>
</template>

<style scoped></style>
