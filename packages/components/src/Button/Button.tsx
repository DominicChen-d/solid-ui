import { Component, JSX } from "solid-js";
import { useTheme } from "@solid-ui/theme";
import { styled } from "@solid-ui/utils";

export interface ButtonProps
  extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
}

export const Button: Component<ButtonProps> = (props) => {
  const theme = useTheme();

  return (
    <StyledButton
      {...props}
      class={`btn ${props.variant || "primary"} ${props.size || "medium"}`}
    >
      {props.children}
    </StyledButton>
  );
};

const StyledButton = styled("button")`
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &.primary {
    background-color: ${(props: StyledProps) => props.theme.colors.primary};
    color: white;
  }

  &.secondary {
    background-color: ${(props: StyledProps) => props.theme.colors.secondary};
    color: white;
  }
`;

type StyledProps = {
  theme: ReturnType<typeof useTheme>;
  [key: string]: any;
};
