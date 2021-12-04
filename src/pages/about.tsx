import type { CustomNextPage } from "next";
import { About } from "src/components/pages/about";
import { Layout } from "src/layout";

const AboutPage: CustomNextPage = () => {
  return <About />;
};

AboutPage.getLayout = Layout;

export default AboutPage;
