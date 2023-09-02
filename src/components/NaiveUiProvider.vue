<script setup lang="ts">
import { useCssVar } from "@vueuse/core"
import type { GlobalThemeOverrides } from "naive-ui"
import { NDialogProvider, NMessageProvider, NNotificationProvider } from "naive-ui"

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: useCssVar("--primary-color").value,
    primaryColorHover: useCssVar("--primary-color--hover").value,
    primaryColorPressed: useCssVar("--primary-color--pressed").value,
    borderRadius: "0.5rem",
    fontFamily: "Poppins, sans-serif",
    // textColorBase: useCssVar("--text-body").value,
    fontSize: "14px",
    fontSizeSmall: "12px",
    fontFamilyMono: "Roboto Mono, sans-serif"
  },
  LoadingBar: {
    colorLoading: useCssVar("--primary-color--hover").value
  },
  Menu: {},
  Spin: {
    color: useCssVar("--primary-color").value
  }
}
</script>

<template>
  <NConfigProvider :theme-overrides="themeOverrides">
    <NGlobalStyle />
    <NLoadingBarProvider>
      <NNotificationProvider>
        <NMessageProvider
          :container-style="{
            transform: 'translateY(75px)'
          }"
        >
          <NDialogProvider>
            <slot></slot>
          </NDialogProvider>
        </NMessageProvider>
      </NNotificationProvider>
    </NLoadingBarProvider>
  </NConfigProvider>
</template>
