import Hero from "../home/Hero";
import Tools from "../home/tools";
import ScrollingCards from "../home/ScrollingCard";

export default function Home() {
  return (
    <>
      <div className=" h-auto md:h-screen md:flex md:flex-col md:justify-end md:pb-[30%] md:bg-stone-500">
        <div className="bg-blue">
          <Hero></Hero>
          <Tools></Tools>
        </div>
      </div>
      <ScrollingCards></ScrollingCards>
    </>
  );
}
