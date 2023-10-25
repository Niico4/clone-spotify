import { SVGProps } from 'react';

type SvgComponentProps = SVGProps<SVGSVGElement>;

const SkipNextIcon: React.FC<SvgComponentProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    <path d="M655.384-267.694v-424.612h59.999v424.612h-59.999Zm-410.767 0v-424.612L563.076-480 244.617-267.694Z" />
  </svg>
);
export default SkipNextIcon;
