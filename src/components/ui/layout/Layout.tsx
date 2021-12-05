import { Footer } from "src/components/ui/layout/Footer";
import { Header } from "src/components/ui/layout/Header";
import { LayoutErrorBoundary } from "src/components/ui/layout/LayoutErrorBoundary";

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
