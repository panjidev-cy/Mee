import Hero from "../components/home/Hero";
import Marquee from "../components/shared/Marquee";
import ScrollingCards from "../components/home/ScrollingCard";
import Service from "../components/home/Service";
import Tools from "../components/home/Tools";

function Home() {
  return (
    <section>
      <Hero></Hero>
      <Marquee></Marquee>
      <Service></Service>
      <Tools></Tools>

      <div className="w-full my-16 flex justify-center items-center">
        <ScrollingCards></ScrollingCards>
      </div>
    </section>
  );
}

export default Home;
