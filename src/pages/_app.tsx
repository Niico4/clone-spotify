import type { AppProps } from 'next/app';
import { CacheProvider } from '@emotion/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import createCache from '@emotion/cache';
import '../styles/globals.css';

const App = ({ Component, pageProps: { ...pageProps } }: AppProps) => {
  const cache = createCache({
    key: 'css',
    prepend: true,
  });
  return (
    <CacheProvider value={cache}>
      <Component {...pageProps} />
    </CacheProvider>
  );
};

export default App;
