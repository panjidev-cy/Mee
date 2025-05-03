export default function CardTabel({ title = "template", children }) {
  return (
    <>
      <div className="w-full h-auto rounded-2xl  border-[1.4px] border-periwinkle overflow-hidden my-10">
        <div className="max-h-16 min-h-10 w-full  flex items-center px-10 py-3  border-b-[1.4px] border-periwinkle font-poppins font-medium text-slate-700 text-[clamp(1rem,3vw,1.2rem)]">{title}</div>
        <div className="min-h-20 px-10 py-7">{children}</div>
      </div>
    </>
  );
}
