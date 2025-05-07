export default function CardTabel({
  title = "template",
  children,
  paddingX = "px-10 md:px-3", // default horizontal padding
  paddingY = "py-7 md:py-2", // default vertical padding
}) {
  const isTitleEmpty = title.trim() === "";

  return (
    <div className="w-auto inline-block max-w-[50rem] h-auto rounded-2xl border-[1.4px] border-periwinkle overflow-hidden my-10 shadow-sm bg-white">
      {/* Header */}
      {isTitleEmpty ? (
        <div className="max-h-16 min-h-10 w-full flex items-center justify-between  px-3  py-3 border-b-[1.4px] border-periwinkle">
          <div className="flex gap-2">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
        </div>
      ) : (
        <div className="max-h-16 min-h-10 w-full flex items-center justify-between px-5 md:px-3  py-2 border-b-[1.4px] border-periwinkle">
          <h3 className="font-poppins font-semibold text-slate-700 text-[clamp(1rem,3vw,1rem)]">{title}</h3>
        </div>
      )}

      {/* Content */}
      <div className={`min-h-20 ${paddingX} ${paddingY}`}>{children}</div>
    </div>
  );
}
