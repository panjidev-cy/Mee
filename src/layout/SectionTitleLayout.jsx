export default function SectionTitleLayout({ children, title, subtitle = "", description = "" }) {
  return (
    <>
      <div className="w-full h-auto flex flex-col items-center my-14">
        <div className="flex flex-col items-center  text-center gap-3 font-poppins mb-5">
          <h6 className=" text-blue capitalize font-semibold">{subtitle}</h6>
          <h3 className=" text-slate-700  leading-none">{title}</h3>
          <p>{description}</p>
        </div>
        <div className="w-full ">{children}</div>
      </div>
    </>
  );
}
