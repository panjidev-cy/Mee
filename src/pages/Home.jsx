import Hero from "../home/Hero";
import Tools from "../home/Tools";
import ScrollingCards from "../home/ScrollingCard";

export default function Home() {
  return (
    <>
      <div className=" h-auto md:h-screen md:flex md:flex-col md:justify-end">
        <Hero></Hero>
        <Tools></Tools>
      </div>
      <ScrollingCards></ScrollingCards>
    </>
  );
}
