import PageTransitionLayout from "./PageTransitionLayout";
import Footer from "../components/shared/Footer";
import NavBar from "../components/navbar/NavBar";

export default function PageLayout({ children }) {
  return (
    <div>
      <NavBar></NavBar>
      <PageTransitionLayout>{children}</PageTransitionLayout>
      <Footer />
    </div>
  );
}
