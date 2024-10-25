import { Component, JSX } from "solid-js";
export interface ButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
    size?: "small" | "medium" | "large";
}
export declare const Button: Component<ButtonProps>;
