import { section } from "framer-motion/client";
import HeaderSectionBtn from "../shared/HeaderSectionBtn";
import CardService from "../shared/CardService";
export default function Service() {
  return (
    <section className="w-full h-screen flex flex-col justify-center">
      <HeaderSectionBtn title="Service" subtitle="Provide" highlight="Services"></HeaderSectionBtn>
      <div className="px-[10%] mt-11 flex gap-10 justify-around">
        <CardService></CardService>
      </div>
    </section>
  );
}
