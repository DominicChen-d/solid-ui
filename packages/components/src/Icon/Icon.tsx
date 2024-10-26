// Icon.tsx
import { JSX, splitProps } from 'solid-js';

export interface IconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: string | number;
  color?: string;
  stroke?: string;
  strokeWidth?: string | number;
}

export function Icon(props: IconProps) {
  const [local, others] = splitProps(props, ['size', 'color', 'stroke', 'strokeWidth']);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={local.size || '1em'}
      height={local.size || '1em'}
      fill={local.color || 'none'}
      stroke={local.stroke || 'currentColor'}
      stroke-width={local.strokeWidth || '2'}
      {...others}
    >
      {props.children}
    </svg>
  );
}
