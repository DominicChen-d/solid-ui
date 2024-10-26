import { onMount as o, onCleanup as r, createSignal as c } from "solid-js";
function d(t, e) {
  o(() => {
    const i = (n) => {
      const s = t();
      !s || s.contains(n.target) || e(n);
    };
    document.addEventListener("mousedown", i), r(() => {
      document.removeEventListener("mousedown", i);
    });
  });
}
function m(t) {
  const [e, i] = c(!1);
  return o(() => {
    const n = window.matchMedia(t);
    i(n.matches);
    const s = (a) => {
      i(a.matches);
    };
    n.addEventListener("change", s), r(() => {
      n.removeEventListener("change", s);
    });
  }), e;
}
function l(t) {
  o(() => {
    const e = t();
    e && e.innerText && (e.innerText = e.innerText.charAt(0).toUpperCase() + e.innerText.slice(1));
  });
}
export {
  l as useCapitalizeFirst,
  d as useClickOutside,
  m as useMediaQuery
};
