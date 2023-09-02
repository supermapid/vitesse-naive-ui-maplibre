/// <reference types="vitest" />

import path from "node:path"
import { defineConfig } from "vite"
import Vue from "@vitejs/plugin-vue"
import Components from "unplugin-vue-components/vite"
import AutoImport from "unplugin-auto-import/vite"
import { NaiveUiResolver } from "unplugin-vue-components/resolvers"
import UnoCSS from "unocss/vite"
import VueMacros from "unplugin-vue-macros/vite"
import VueRouter from "unplugin-vue-router/vite"
import { VueRouterAutoImports } from "unplugin-vue-router"

export default defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`
    }
  },
  plugins: [
    VueMacros({
      defineOptions: false,
      defineModels: false,
      plugins: {
        vue: Vue({
          script: {
            propsDestructure: true,
            defineModel: true
          }
        })
      }
    }),
    //
    // MetaLayouts({
    //   target: "./src/layouts"
    // }),

    VueRouter({
      dts: "./src/typed-router.d.ts"
    }),

    // // https://github.com/hannoeru/vite-plugin-pages
    // Pages(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ["vue", VueRouterAutoImports, "@vueuse/core"],
      dts: true,
      dirs: ["./src/composables"],
      vueTemplate: true
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
      resolvers: [NaiveUiResolver()],
      dts: "src/components.d.ts",
      dirs: ["./src/components/"],
      deep: true
    }),

    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    UnoCSS()
  ],

  // https://github.com/vitest-dev/vitest
  test: {
    environment: "jsdom"
  }
})
