export default function SectionTitleLayout({ children, title, subtitle = "", description = "" }) {
  return (
    <>
      <div className="w-full h-auto flex flex-col items-center my-14">
        <div className="flex flex-col items-center  text-center gap-3 font-poppins mb-5">
          <h6 className=" text-blue capitalize font-semibold">{subtitle} </h6>
          <h3 className=" text-hunyadi-yellow   leading-none">{title}</h3>
          <p className="text-slate-600 dark:text-slate-400">{description}</p>
        </div>
        <div className="w-full ">{children}</div>
      </div>
    </>
  );
}
