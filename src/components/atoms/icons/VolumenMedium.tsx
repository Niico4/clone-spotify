import { SVGProps } from 'react';

type SvgComponentProps = SVGProps<SVGSVGElement>;

const VolumenMediumIcon: React.FC<SvgComponentProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    <path d="M220.001-380.001v-199.998h148.461l171.537-171.536v543.07L368.462-380.001H220.001Zm415.383 46.154v-294.306q38.846 21 61.73 60.961Q719.999-527.23 719.999-480q0 47.23-22.885 86.192-22.884 38.961-61.73 59.961Z" />
  </svg>
);
export default VolumenMediumIcon;
