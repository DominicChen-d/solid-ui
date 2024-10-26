import { JSX } from 'solid-js';
export interface ComponentDoc {
    name: string;
    description: string;
    props?: PropDoc[];
    examples: Example[];
}
export interface PropDoc {
    name: string;
    type: string;
    required: boolean;
    default?: string;
    description: string;
}
export interface Example {
    title: string;
    description: string;
    code: string;
    component: () => JSX.Element;
}
export declare function createComponentDoc(options: ComponentDoc): ComponentDoc;
