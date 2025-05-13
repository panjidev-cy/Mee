export default function LineTime({ children, title = "", first = false, end = false }) {
  return (
    <div className="py-3 px-8 border-l-[1.9px] border-slate-300 relative">
      {first && (
        <div className="w-3 h-3 bg-periwinkle absolute -top-1 -left-[6px] rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-blue rounded-full"></div>
        </div>
      )}
      {end && (
        <div className="w-3 h-3 bg-periwinkle absolute -bottom-1 -left-[6px] rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-blue rounded-full"></div>
        </div>
      )}
      {title?.trim() && (
        <div className="group flex items-center gap-2 relative overflow-visible">
          {/* Tagar */}
          <div
            className="transition-all duration-300 ease-in-out
              opacity-0 w-0 -translate-x-2
              group-hover:opacity-100 group-hover:w-6 group-hover:translate-x-0
              flex-shrink-0 md:translate-x-0 md:w-6 md:opacity-100"
          >
            <div className="font-poppins text-[clamp(.7rem,2vw,1rem)] w-6 h-6 bg-black flex items-center justify-center rounded-lg font-semibold text-lime shadow-sm">#</div>
          </div>

          {/* Title */}
          <h4 className=" font-poppins font-medium hover:font-semibold text-slate-500 hover:text-slate-600 tracking-normal transition-all duration-300 group-hover:translate-x-2">{title}</h4>
        </div>
      )}

      <div className="mb-10">{children}</div>
    </div>
  );
}
