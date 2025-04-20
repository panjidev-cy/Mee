import ButtonCta from "../shared/ButtonCta";
import image from "../../assets/card.jpg";
import Icons from "../shared/Icons";
export default function Hero() {
  return (
    <section>
      <div className=" flex items-center justify-start px-24 w-full h-screen">
        <div className="w-1/2  flex flex-col gap-2 mt-[15%]">
          <h1 className="text-5xl font-semibold font-f1 text-black capitalize w-4/5 leading-tight">
            Lorem <span className="text-blue font-medium italic ">ipsum</span>
            <br /> dolor sit amet
          </h1>
          <h3 className="font-f1 font-medium text-xl -mt-4 text-slate-600 flex gap-2 items-center">
            <span className="w-4 h-1 bg-blue inline-block rounded-md"></span>Lorem ipsum <span className="bg-blue text-white-blue px-1">dolor sit</span> amet
          </h3>
          <p className=" mt-10 w-3/5 text-justify font-medium text-xs text-gray-700 font-f1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda suscipit fugit quod illo asperiores, !</p>
          <div className="mt-2 flex gap-3">
            <ButtonCta text="click now"></ButtonCta>
            <button className="px-4 py-2 bg-white-blue border-2 border-black text-black rounded-full text-sm font-f1 font-medium">Hire Me</button>
          </div>
          <div className="">
            <span className="font-f1 font-medium text-sm text-slate-600">current favorite tech stack/tools:</span>
            <div className="">
              <Icons></Icons>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="w-full h-full flex items-center justify-center mt-[15%]">
            <img src={image} alt="" width={350} className="rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
