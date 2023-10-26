import { SVGProps } from 'react';

type SvgComponentProps = SVGProps<SVGSVGElement>;

const ExpandIcon: React.FC<SvgComponentProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    <path d="M140.001-140.001V-440H200v198.232L718.232-760H520v-59.999h299.999V-520H760v-198.232L241.768-200H440v59.999H140.001Z" />
  </svg>
);
export default ExpandIcon;
