import { SVGProps } from 'react';

type SvgComponentProps = SVGProps<SVGSVGElement>;

const CollapsedIcon: React.FC<SvgComponentProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    <path d="m141.77-100.001-41.769-41.769 278.232-278.231H180.001V-480H480v299.999h-59.999v-198.232L141.77-100.001ZM480-480v-299.999h59.999v198.232L818.23-859.999l41.769 41.769-278.232 278.231h198.232V-480H480Z" />
  </svg>
);
export default CollapsedIcon;
