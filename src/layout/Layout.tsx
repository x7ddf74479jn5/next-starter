import { Footer } from "src/layout/Footer";
import { Header } from "src/layout/Header";
import { LayoutErrorBoundary } from "src/layout/LayoutErrorBoundary";

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <LayoutErrorBoundary>
        <main>{children}</main>
      </LayoutErrorBoundary>
      <Footer />
    </>
  );
};
