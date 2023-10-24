import { SVGProps } from 'react';

type SvgComponentProps = SVGProps<SVGSVGElement>;

const ArrowNavigateNextIcon: React.FC<SvgComponentProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    <path d="M540-480 356-664l20-20 204 204-204 204-20-20 184-184Z" />
  </svg>
);
export default ArrowNavigateNextIcon;
