import { Component, JSX } from "solid-js";
import { Theme } from "./theme";
interface ThemeProviderProps {
    children?: JSX.Element;
}
export declare const ThemeProvider: Component<ThemeProviderProps>;
export declare const useTheme: () => {
    theme: () => Theme;
    toggleTheme: () => void;
};
export {};
