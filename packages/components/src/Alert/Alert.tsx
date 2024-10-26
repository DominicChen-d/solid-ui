import { Component, JSX, JSXElement, Match, Show, Switch } from 'solid-js';
import { useTheme } from '@solid-ui/theme';
import { styled } from '@solid-ui/utils';
import { Close } from '../Icon/Close';
import { Check } from '../Icon';

export interface AlertProps extends JSX.HTMLAttributes<HTMLDivElement> {
  title: string;
  type?: 'success' | 'warning' | 'info' | 'error';
  description?: string;
  onClose?: () => void;
  close?: JSXElement;
  showIcon?: boolean;
}

export const Alert: Component<AlertProps> = (props) => {
  const { theme } = useTheme();

  const handleClickClose = () => {
    if (props.onClose) {
      props.onClose();
    }
  };

  const successIcon = () => {
    return <Check fill="#67c23a" size={32} strokeWidth={0} stroke="#fff" />;
  };

  const infoIcon = () => {
    return <Check fill="#909399" size={32} strokeWidth={0} stroke="#fff" />;
  };

  const warningIcon = () => {
    return <Check fill="#e6a23c" size={32} strokeWidth={0} stroke="#fff" />;
  };

  const errorIcon = () => {
    return <Check fill="#f56c6c" size={32} strokeWidth={0} stroke="#fff" />;
  };

  return (
    <StyledAlert theme={theme()} class={`${theme().name} ${props.type}`}>
      <Show when={props.showIcon}>
        <Switch>
          <Match when={props.type === 'success'}>{successIcon()}</Match>
          <Match when={props.type === 'info'}>{infoIcon()}</Match>
          <Match when={props.type === 'warning'}>{warningIcon()}</Match>
          <Match when={props.type === 'error'}>{errorIcon()}</Match>
        </Switch>
      </Show>
      <div class="alert-content">
        <span class={`alert-title`}>{props.title}</span>
        <Show when={props.description}>
          <p class={`alert-description`}>{props.description}</p>
        </Show>
        <div class={`${theme().name} close-btn`}>
          <Show when={props.close} fallback={<Close onclick={handleClickClose} />}>
            {props.close}
          </Show>
        </div>
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
  margin: 20px 0;
  display: flex;
  align-items: center;

  > svg {
    margin-right: 12px;
  }

  .alert-title {
    font-size: 16px;
  }

  .alert-description {
    font-size: 14px;
    margin: 0;
    line-height: 1.7;
  }

  &:first-child {
    margin: 0;
  }

  &.light.success {
    background-color: rgb(239.8, 248.9, 235.3);
    color: #67c23a;
  }

  &.dark.success {
    background-color: #67c23a;
    color: #fff;
  }

  &.light.info {
    background-color: rgb(243.9, 244.2, 244.8);
    color: #909399;
  }

  &.dark.info {
    background-color: #909399;
    color: #fff;
  }

  &.light.warning {
    background-color: rgb(252.5, 245.7, 235.5);
    color: #e6a23c;
  }

  &.dark.warning {
    background-color: #e6a23c;
    color: #fff;
  }

  &.light.error {
    background-color: rgb(254, 240.3, 240.3);
    color: #f56c6c;
  }

  &.dark.error {
    background-color: #f56c6c;
    color: #fff;
  }

  .close-btn {
    opacity: 1;
    position: absolute;
    top: 12px;
    right: 16px;
    cursor: pointer;
    color: #a8abb2;
  }

  .dark.close-btn {
    color: #fff;
  }
`;
