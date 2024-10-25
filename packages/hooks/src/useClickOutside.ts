import { onCleanup, onMount } from "solid-js";

export function useClickOutside(
  ref: () => HTMLElement | undefined,
  handler: (event: MouseEvent) => void
) {
  onMount(() => {
    const listener = (event: MouseEvent) => {
      const el = ref();
      if (!el || el.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    onCleanup(() => {
      document.removeEventListener("mousedown", listener);
    });
  });
}
