import Hero from "../home/Hero";
import Tools from "../home/tools";
import ScrollingCards from "../home/ScrollingCard";
import Project from "../home/Projects";
import Faq from "../home/Faq";
import Footer from "../components/shared/Footer";
export default function Home() {
  return (
    <>
      <div id="home" className=" h-auto md:flex md:flex-col md:justify-end md:mt-11">
        <Hero></Hero>
        <Tools></Tools>
      </div>
      <ScrollingCards></ScrollingCards>
      <Project></Project>
      <Faq></Faq>
      <Footer></Footer>
    </>
  );
}
