import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";

declare module "next" {
  type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
  };
}

declare module "next/app" {
  type AppPropsWithLayout = AppProps & {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Component: NextPageWithLayout;
  };
}
