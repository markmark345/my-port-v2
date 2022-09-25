import { NextPage } from 'next';
import React, { ReactElement, ReactNode } from 'react';
import Layout from '../layouts/layout';
// import ContextProvider from '../contexts/ContextProvider';

import '../styles/globals.css';

// export type NextPageWithLayout = NextPage & {
//   getLayout?: (page: ReactElement) => ReactNode;
// };

function MyApp({ Component, pageProps }: any) {
  // const getLayout = Component.getLayout || ((page: any) => page);

  return (
    // <ContextProvider>{getLayout(<Component {...pageProps} />)}</ContextProvider>
    // <>{getLayout(<Component {...pageProps} />)}</>
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
