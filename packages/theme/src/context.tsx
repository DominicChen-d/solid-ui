import {
  Component,
  JSX,
  createContext,
  useContext,
  createSignal,
} from "solid-js";
import { Theme, lightTheme, darkTheme } from "./theme";

// 创建主题上下文
const ThemeContext = createContext<{
  theme: () => Theme;
  toggleTheme: () => void;
}>({
  theme: () => lightTheme,
  toggleTheme: () => {},
});

interface ThemeProviderProps {
  children?: JSX.Element;
}

export const ThemeProvider: Component<ThemeProviderProps> = (props) => {
  const [theme, setTheme] = createSignal<Theme>(lightTheme);

  const toggleTheme = () => {
    setTheme((prev) => (prev.name === "light" ? darkTheme : lightTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        style={{
          "background-color": theme().colors.background,
          color: theme().colors.text,
          "min-height": "100vh",
          transition: "all 0.3s ease",
        }}
      >
        {props.children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
