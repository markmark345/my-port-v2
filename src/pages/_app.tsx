import { NextPage } from 'next';
import React, { ReactElement, ReactNode } from 'react';

import '../styles/index.css';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

function MyApp({ Component, pageProps }: any) {
  return <Component {...pageProps} />;
}

export default MyApp;
