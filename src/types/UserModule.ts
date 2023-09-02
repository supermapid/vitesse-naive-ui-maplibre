import type { App } from "vue"
import type { Router } from "vue-router/auto"

export type UserModule = (ctx: { app: App<Element>; router: Router }) => void
