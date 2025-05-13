import PageTransitionLayout from "./PageTransitionLayout";
import Footer from "../components/shared/Footer";

export default function PageLayout({ children }) {
  return (
    <>
      <PageTransitionLayout>
        {children}
        <Footer />
      </PageTransitionLayout>
    </>
  );
}
