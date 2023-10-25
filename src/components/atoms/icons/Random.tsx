import { SVGProps } from 'react';

type SvgComponentProps = SVGProps<SVGSVGElement>;

const RandomIcon: React.FC<SvgComponentProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    <path d="M564.616-180.001V-240h114L544.693-373.924l42.768-42.768L720-284.153V-394.23h59.999v214.229H564.616Zm-342.462 0-42.153-42.153L677.847-720H564.616v-59.999h215.383v214.229H720v-112.077L222.154-180.001Zm149.077-367L180.001-738.23l41.769-41.769 191.229 191.23-41.768 41.768Z" />
  </svg>
);
export default RandomIcon;
