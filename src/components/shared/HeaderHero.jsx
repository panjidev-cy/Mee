import Paddings from "./paddings";

export default function HeaderHero({ headline = "lorem ipsum dolor sit amet ", subtitle = "lorem", caption = "lorem ipsum" }) {
  return (
    <>
      <div className="w-full h-auto py-10  flex items-center mt-32 md:mt-14">
        <Paddings>
          <div className="flex flex-col gap-1 w-full">
            <h4 className=" text-blue-light font-poppins font-semibold capitalize">{subtitle}</h4>
            <h1 className=" text-hunyadi-yellow font-cal leading-none">{headline}</h1>
            <p className=" font-normal font-poppins text-slate-500 dark:text-slate-400  w-4/5 lg:w-4/5 mt-10">{caption}</p>
          </div>
        </Paddings>
      </div>
    </>
  );
}
