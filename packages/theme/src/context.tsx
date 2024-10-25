import { Component, JSX, createContext, useContext } from "solid-js";
import { Theme, defaultTheme } from "./theme";

// 创建主题上下文
const ThemeContext = createContext<Theme>(defaultTheme);

interface ThemeProviderProps {
  children?: JSX.Element;
}

export const ThemeProvider: Component<ThemeProviderProps> = (props) => {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
