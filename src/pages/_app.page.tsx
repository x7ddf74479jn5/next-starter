import "src/styles/global.css";

import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import { usePageView } from "src/lib/gtag";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  usePageView();

  const getLayout =
    Component.getLayout ??
    ((page) => {
      return page;
    });

  return getLayout(<Component {...pageProps} />);
};

export default App;
