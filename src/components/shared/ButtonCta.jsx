function ButtonCta({ text = "" }) {
  return (
    <button className="w-auto  p-[2.4px]  bg-cartreuse text-white rounded-full border-2 border-black">
      <div className="flex gap-2 items-center">
        <div className="bg-black rounded-full px-6 py-3 font-header capitalize italic font-medium text-xs text-gray-100">{text}</div>
        <div className=" rounded-full w-9 h-9 text-black  font-body font-bold text-2xl flex items-center justify-center">
          <div className="bg-violet rounded-full w-8 h-8 flex items-center justify-center ">{">"}</div>
        </div>
      </div>
    </button>
  );
}

export default ButtonCta;
