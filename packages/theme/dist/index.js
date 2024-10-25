import { createContext as t, createComponent as n, useContext as m } from "solid-js";
const e = {
  colors: {
    primary: "#1890ff",
    secondary: "#f5222d"
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px"
  }
}, r = t(e), c = (o) => n(r.Provider, {
  value: e,
  get children() {
    return o.children;
  }
}), s = () => m(r), l = {
  colors: {
    primary: "#1890ff",
    secondary: "#f5222d"
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px"
  }
};
export {
  c as ThemeProvider,
  l as defaultTheme,
  s as useTheme
};
