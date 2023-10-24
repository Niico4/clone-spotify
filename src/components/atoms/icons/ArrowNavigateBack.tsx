import { SVGProps } from 'react';

type SvgComponentProps = SVGProps<SVGSVGElement>;

const ArrowNavigateBackIcon: React.FC<SvgComponentProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    <path d="M560-276 356-480l204-204 20 20-184 184 184 184-20 20Z" />
  </svg>
);
export default ArrowNavigateBackIcon;
