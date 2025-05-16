import Hero from "./section/Hero";
import Tools from "./section/tools";
import ScrollingCards from "./section/ScrollingCard";
import Project from "./section/Projects";
import Faq from "./section/Faq";
import PageLayout from "../../layout/PageLayout";
export default function Home() {
  return (
    <PageLayout>
      <div id="home" className=" h-auto md:flex md:flex-col md:justify-end md:mt-32">
        <Hero></Hero>
        <Tools></Tools>
      </div>
      <ScrollingCards></ScrollingCards>
      <Project></Project>
      <Faq></Faq>
    </PageLayout>
  );
}
