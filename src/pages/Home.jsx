import Hero from "../home/Hero";
import Tools from "../home/tools";
import ScrollingCards from "../home/ScrollingCard";

export default function Home() {
  return (
    <>
      <div className=" h-auto md:h-screen md:flex md:flex-col md:justify-center">
        <Hero></Hero>
        <Tools></Tools>
      </div>
      <ScrollingCards></ScrollingCards>
    </>
  );
}
