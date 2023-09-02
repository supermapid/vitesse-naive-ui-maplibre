<script setup lang="ts">
import { useDialog, useLoadingBar, useMessage, useNotification } from "naive-ui"
import UiBlocker from "~/components/common/UiBlocker/UiBlocker.vue"

// import { useAuthStore } from "~/stores/auth.store"

window.$dialog = useDialog()
window.$loading = useLoadingBar()
window.$message = useMessage()
window.$notification = useNotification()
</script>

<template>
  <UiBlocker>
    <RouterView v-slot="{ Component, route }">
      <Component :is="Component" :key="route.name" />
    </RouterView>
  </UiBlocker>
</template>

<style></style>
