import { onMount } from 'solid-js';

export function useCapitalizeFirst(ref: () => HTMLElement | undefined) {
  onMount(() => {
    const el = ref();
    if (el && el.innerText) {
      el.innerText = el.innerText.charAt(0).toUpperCase() + el.innerText.slice(1);
    }
  });
}
