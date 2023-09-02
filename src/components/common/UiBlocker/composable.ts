import type { InjectionKey, Ref } from "vue"
import { injectStrict } from "~/utils/injectStrict"

export const UiBlockerVisibleKey = Symbol("UiBlockerVisibleKey") as InjectionKey<Ref<boolean>>
export const UiBlockerMessageKey = Symbol("UiBlockerVisibleKey") as InjectionKey<Ref<string | undefined>>

export function useUiBlocker() {
  const visible = injectStrict(UiBlockerVisibleKey)
  const message = injectStrict(UiBlockerMessageKey)
  const show = (mssg?: string) => {
    visible.value = true
    if (message != null) {
      message.value = mssg
    }
  }

  const hide = () => {
    visible.value = false
  }

  return {
    visible,
    message,
    show,
    hide
  }
}
