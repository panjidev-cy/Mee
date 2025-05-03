import Paddings from "./paddings";

export default function HeaderHero({ headline = "lorem ipsum dolor sit amet ", subtitle = "lorem", caption = "lorem ipsum" }) {
  return (
    <>
      <div className="w-full h-auto py-10  flex items-center bg-lavender_web">
        <Paddings>
          <div className="flex flex-col gap-1 w-full">
            <h3 className="text-[clamp(1.2rem,4vw,1.8rem)] text-blue font-cal capitalize">{subtitle}</h3>
            <h1 className="text-fluid-h1 text-slate-700 font-cal leading-none">{headline}</h1>
            <p className="text-[clamp(.9rem,1.3vw,1.5rem)] font-normal font-poppins text-slate-500  w-4/5 lg:w-4/5 mt-10">{caption}</p>
          </div>
        </Paddings>
      </div>
    </>
  );
}
