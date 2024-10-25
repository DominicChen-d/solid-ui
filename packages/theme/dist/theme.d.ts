export interface Theme {
    name: "light" | "dark";
    colors: {
        primary: string;
        secondary: string;
        background: string;
        text: string;
        border: string;
    };
    spacing: {
        small: string;
        medium: string;
        large: string;
    };
}
export declare const lightTheme: Theme;
export declare const darkTheme: Theme;
