import type { CustomNextPage } from "next";
import { Home } from "src/components/pages/index";
import { Layout } from "src/layout";

const IndexPage: CustomNextPage = () => {
  return <Home />;
};

IndexPage.getLayout = Layout;

export default IndexPage;
