function ButtonCta({ text = "" }) {
  return (
    <button className="w-auto  p-[2.4px]  bg-blue text-white rounded-full ">
      <div className="flex gap-2 items-center">
        <div className="bg-black rounded-full px-6 py-3 font-f1 capitalize italic font-medium text-xs text-gray-100">{text}</div>
        <div className=" rounded-full w-9 h-9 text-black  font-f1 font-bold text-2xl flex items-center justify-center">
          <div className="bg-white-blue rounded-full w-8 h-8 flex items-center justify-center ">{">"}</div>
        </div>
      </div>
    </button>
  );
}

export default ButtonCta;
