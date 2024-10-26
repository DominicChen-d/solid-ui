// Close.tsx
import { mergeProps } from 'solid-js';
import { Icon, type IconProps } from './Icon';

export function Close(props: IconProps) {
  const merged = mergeProps(
    {
      size: '1em',
      stroke: 'currentColor',
      strokeWidth: 2,
    },
    props
  );

  return (
    <Icon {...merged}>
      <path d="M7 17L16.8995 7.10051" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M7 7.00001L16.8995 16.8995" stroke-linecap="round" stroke-linejoin="round" />
    </Icon>
  );
}
