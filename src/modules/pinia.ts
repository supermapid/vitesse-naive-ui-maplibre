import type { Router } from "vue-router/auto"
import { createPinia } from "pinia"
import type { UserModule } from "~/types/UserModule"

declare module "pinia" {
  export interface PiniaCustomProperties {
    router: Router
  }
}

// Setup Pinia
// https://pinia.vuejs.org/
export const install: UserModule = ({ app, router }) => {
  const pinia = createPinia()
  pinia.use(({ store }) => {
    store.router = markRaw(router)
  })
  app.use(pinia)
}
