import React from 'react';
import { AppProps } from 'next/app';
import GlobalStyles from '../../styles/GlobalStyles';
import { HeaderProvider } from '../contexts/HeaderContext';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <HeaderProvider>
        <Component {...pageProps} />
      </HeaderProvider>
    </>
  );
}
