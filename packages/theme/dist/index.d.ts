export interface Theme {
    colors: {
        primary: string;
        secondary: string;
    };
    spacing: {
        small: string;
        medium: string;
        large: string;
    };
}
export declare const defaultTheme: Theme;
export * from "./theme";
export * from "./context";
