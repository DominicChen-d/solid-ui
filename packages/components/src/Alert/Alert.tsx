import { Component, JSX, Show } from 'solid-js';
import { useTheme } from '@solid-ui/theme';
import { styled } from '@solid-ui/utils';

export interface AlertProps extends JSX.HTMLAttributes<HTMLDivElement> {
  title: string;
  type?: 'success' | 'warning' | 'info' | 'error';
  description?: string;
}

export const Alert: Component<AlertProps> = (props) => {
  const { theme } = useTheme();
  return (
    <StyledAlert theme={theme()} class={`${theme().name} ${props.type}`}>
      <div class="alert-content">
        <span class={`alert-title ${theme().name} ${props.type}`}>{props.title}</span>
        <Show when={props.description}>
          <p class={`alert-description ${theme().name} ${props.type}`}>{props.description}</p>
        </Show>
      </div>
    </StyledAlert>
  );
};

const StyledAlert = styled('div')`
  position: relative;
  width: 100%;
  padding: 8px 16px;
  box-sizing: border-box;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  align-items: center;
  transition: opacity 2s;

  &.light.success {
    background-color: rgb(239.8, 248.9, 235.3);
    color: #67c23a;
  }
`;
