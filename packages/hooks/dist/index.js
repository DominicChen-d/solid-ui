import { onMount as a, onCleanup as c, createSignal as i } from "solid-js";
function d(o, s) {
  a(() => {
    const n = (e) => {
      const t = o();
      !t || t.contains(e.target) || s(e);
    };
    document.addEventListener("mousedown", n), c(() => {
      document.removeEventListener("mousedown", n);
    });
  });
}
function m(o) {
  const [s, n] = i(!1);
  return a(() => {
    const e = window.matchMedia(o);
    n(e.matches);
    const t = (r) => {
      n(r.matches);
    };
    e.addEventListener("change", t), c(() => {
      e.removeEventListener("change", t);
    });
  }), s;
}
export {
  d as useClickOutside,
  m as useMediaQuery
};
