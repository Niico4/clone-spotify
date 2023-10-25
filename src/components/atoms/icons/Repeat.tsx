import { SVGProps } from 'react';

type SvgComponentProps = SVGProps<SVGSVGElement>;

const RepeatIcon: React.FC<SvgComponentProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    <path d="M286.154-100.001 140.001-246.154l146.153-146.153 42.153 43.383-72.77 72.77h430.617v-160h59.999v219.999H255.537l72.77 72.77-42.153 43.384Zm-72.307-423.845v-219.999h490.616l-72.77-72.77 42.153-43.384 146.153 146.153-146.153 146.153-42.153-43.383 72.77-72.77H273.846v160h-59.999Z" />
  </svg>
);
export default RepeatIcon;
