import { SVGProps } from 'react';

type SvgComponentProps = SVGProps<SVGSVGElement>;

const SkipPreviousIcon: React.FC<SvgComponentProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    <path d="M244.617-267.694v-424.612h59.999v424.612h-59.999Zm470.766 0L396.924-480l318.459-212.306v424.612Z" />
  </svg>
);
export default SkipPreviousIcon;
