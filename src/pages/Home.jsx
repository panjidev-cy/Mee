import Hero from "../home/Hero";
import Tools from "../home/tools";
import ScrollingCards from "../home/ScrollingCard";
import Project from "../home/Projects";
import Faq from "../home/Faq";
export default function Home() {
  return (
    <>
      <div className=" h-auto md:flex md:flex-col md:justify-end md:mt-11">
        <Hero></Hero>
        <Tools></Tools>
      </div>
      <ScrollingCards></ScrollingCards>
      <Project></Project>
      <Faq></Faq>
    </>
  );
}
