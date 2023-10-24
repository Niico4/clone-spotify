import { ComponentType, FC, SVGProps } from 'react';

type SvgComponentProps = SVGProps<SVGSVGElement>;

interface Props {
  size?: string | number;
  color?: string;
  style?: React.CSSProperties;
  component: ComponentType<SvgComponentProps>;
}

const Icon: FC<Props> = ({
  size = 24,
  color = '#B3B3B3',
  style,
  component: Component,
}) => {
  const width = size;
  const height = size;
  return <Component width={width} height={height} fill={color} style={style} />;
};

export default Icon;
