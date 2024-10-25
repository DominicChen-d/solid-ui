import { JSX, Component } from "solid-js";
import { Theme } from "@solid-ui/theme";
type StyledProps = {
    theme: Theme;
    [key: string]: any;
};
export declare function styled(tag: keyof JSX.IntrinsicElements): (styles: TemplateStringsArray, ...interpolations: ((props: StyledProps) => string)[]) => Component<any>;
export {};
