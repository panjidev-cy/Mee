import ButtonCta from "../shared/ButtonCta";
import image from "../../assets/card.jpg";
import Icons from "../shared/Icons";
export default function Hero() {
  return (
    <section>
      <div className=" flex items-center justify-start pb-7 px-24 md:px-6 w-full h-screen md:h-auto">
        <div className="w-1/2  flex flex-col gap-2 mt-[15%] md:w-full">
          <h1 className="md:text-2xl 2xl:text-5xl font-medium font-header text-black capitalize w-4/5 md:w-full leading-tight">
            Lorem <span className="text-cartreuse font-medium italic  py-2 px-1 rounded-lg">ipsum</span>
            <br /> dolor sit amet
          </h1>
          <h3 className="font-subHeader font-normal text-xl -mt-1 text-gray flex gap-2 items-center">
            <span className="w-4 h-1 bg-cartreuse inline-block "></span>Lorem ipsum <span className="bg-blue text-white-blue px-1">dolor sit</span> amet
          </h3>
          <p className=" mt-10 w-3/5 md:w-4/5 text-justify font-medium text-xs text-gray font-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda suscipit fugit quod illo asperiores, !</p>
          <div className="mt-2 flex gap-3">
            <ButtonCta text="click now"></ButtonCta>
            <button className="px-4 py-2 bg-cartreuse border-2 border-black text-black rounded-full text-sm font-subHeader font-medium">Hire Me</button>
          </div>
          <div className="">
            <span className="font-f1 font-medium text-sm text-slate-600">current favorite tech stack/tools:</span>
            <div className="">
              <Icons></Icons>
            </div>
          </div>
        </div>
        <div className="w-1/2 md:hidden">
          <div className="w-full h-full flex items-center justify-center mt-[15%]">
            <img src={image} alt="" width={350} className="rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
