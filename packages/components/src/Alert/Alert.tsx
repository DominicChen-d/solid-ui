import { Component, JSX, JSXElement, Match, Show, Switch } from 'solid-js';
import { useTheme } from '@solid-ui/theme';
import { Close } from '../Icon/Close';
import { Check } from '../Icon';
import { StyledAlert } from './Style';

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
