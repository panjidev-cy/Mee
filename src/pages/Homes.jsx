import Sections from "../components/shared/Sections";
import image from "../assets/card.jpg";
import { section } from "framer-motion/client";
export default function Homes() {
  return (
    <section className="mt-10 ">
      <Sections>
        <div className="w-full flex items-center justify-center">
          <div className="w-full max-w-4xl px-4">
            <h1 className="font-header text-7xl md:text-6xl 2xl:text-5xl text-black ">
              Lorem ipsum <span className="inline text-white bg-cartreuse py-2 px-3 rounded-xl">dolor sit.</span>
            </h1>
            <h2 className="font-subHeader text-2xl text-gray">Lorem ipsum dolor sit amet.</h2>
          </div>
          <div className="w-1/2">
            <div className="">
              <img src={image} alt="" className="rounded-2xl" />
            </div>
          </div>
        </div>
      </Sections>
    </section>
  );
}
