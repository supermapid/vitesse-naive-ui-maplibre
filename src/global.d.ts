export {}
declare global {
  import type { DialogApi, LoadingBarApi, MessageApi, NotificationApi } from "naive-ui"

  interface Window {
    $dialog: DialogApi
    $loading: LoadingBarApi
    $message: MessageApi
    $notification: NotificationApi
  }
}

declare module "vue-router" {
  interface RouteMeta {
    requiresAuth?: boolean
    layout?: string
    differentLayout?: boolean
  }
}
