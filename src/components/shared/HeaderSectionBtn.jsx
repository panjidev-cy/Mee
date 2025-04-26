import ButtonCta from "./ButtonCta";

export default function HeaderSectionBtn({ title = "lorem", subtitle = "ipsum", highlight = "coba coba" }) {
  return (
    <div className="w-full h-auto flex items-end justify-between px-[10%]">
      <div className="w-1/2 flex flex-col gap-6 md:gap-4">
        <span className="flex gap-2 items-center">
          <span className="w-4 h-1 bg-violet inline-block rounded-sm"></span>
          <h1 className="text-2xl md:text-xl font-medium font-body text-black capitalize w-4/5 leading-tight">{title}</h1>
        </span>
        <h3 className="font-subHeader font-medium text-5xl md:text-4xl -mt-4 text-slate-600 flex gap-2 items-center whitespace-nowrap">
          <span className="text-cartreuse italic font-normal">{highlight}</span> | {subtitle}
        </h3>
      </div>
      <div className="md:hidden">
        <ButtonCta text="click now"></ButtonCta>
      </div>
    </div>
  );
}
