import type { AppProps } from 'next/app';
import '../style/globals.css';

const App = ({ Component, pageProps: { ...pageProps } }: AppProps) => (
  <Component {...pageProps} />
);

export default App;
