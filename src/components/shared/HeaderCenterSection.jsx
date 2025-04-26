export default function HeaderCenterSection({ title = "lorem", subtitle = "ipsum", highlight = "coba coba" }) {
  return (
    <div className="w-full h-auto flex items-center justify-center">
      <div className="w-1/2 flex flex-col justify-center items-center gap-6 text-center">
        <div className="flex items-center justify-center gap-2">
          <span className="w-4 h-1 bg-blue inline-block"></span>
          <h1 className="text-xl font-medium font-body text-black capitalize leading-tight">{title}</h1>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <h3 className="font-body text-5xl -mt-4 text-blue italic font-medium">{highlight}</h3>
          <h3 className="font-subHeader font-medium text-5xl -mt-4 text-slate-600">{subtitle}</h3>
        </div>
      </div>
    </div>
  );
}
