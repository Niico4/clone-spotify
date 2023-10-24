import { SVGProps } from 'react';

type SvgComponentProps = SVGProps<SVGSVGElement>;

const ArrowRightIcon: React.FC<SvgComponentProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    <path d="M665.078-450.001H180.001v-59.998h485.077L437.232-737.846 480-779.999 779.999-480 480-180.001l-42.768-42.153 227.846-227.847Z" />
  </svg>
);
export default ArrowRightIcon;
