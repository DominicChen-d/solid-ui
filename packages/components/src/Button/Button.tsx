import { Component, JSX } from 'solid-js';
import { useTheme } from '@solid-ui/theme';
import { styled } from '@solid-ui/utils';

export interface ButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

export const Button: Component<ButtonProps> = (props) => {
  const { theme } = useTheme();

  return (
    <StyledButton
      {...props}
      theme={theme()}
      class={`btn ${props.variant || 'primary'} ${props.size || 'medium'}`}
    >
      {props.children}
    </StyledButton>
  );
};

const StyledButton = styled('button')`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &.primary {
    background-color: ${(props) => props.theme.colors.primary};
    color: #ffffff;

    &:hover {
      opacity: 0.9;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }

  &.secondary {
    background-color: ${(props) => props.theme.colors.secondary};
    color: #ffffff;

    &:hover {
      opacity: 0.9;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }

  &.small {
    padding: ${(props) => props.theme.spacing.small};
    font-size: 12px;
  }

  &.medium {
    padding: ${(props) => props.theme.spacing.medium};
    font-size: 14px;
  }

  &.large {
    padding: ${(props) => props.theme.spacing.large};
    font-size: 16px;
  }
`;
