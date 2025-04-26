const services = [
  {
    title: "UI/UX Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ...",
    icon: "/icons/uiux.svg", // Ganti path ini sesuai ikonmu
    gradient: "bg-white",
  },
  {
    title: "Application Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ...",
    icon: "/icons/application.svg",
    gradient: "bg-white",
  },
  {
    title: "Website Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ...",
    icon: "/icons/website.svg",
    gradient: "bg-white",
  },
];

export default function CardService() {
  return (
    <div className="grid md:grid-cols-1 grid-cols-3 gap-6 p-4 font-f1">
      {services.map((service, idx) => (
        <div key={idx} className="rounded-2xl bg-white-blue shadow-sm p-6 flex flex-col gap-4 transition border-2 border-[#4046f641] hover:shadow-md">
          <div className={`w-14 h-14 rounded-full  ${service.gradient} flex items-center justify-center shadow`}>
            <img src={service.icon} alt={service.title} className="w-6 h-6" />
          </div>
          <h3 className="text-lg  font-semibold text-gray-800">{service.title}</h3>
          <p className="text-gray-500 text-sm">{service.description}</p>
          <div className="flex items-center gap-1 text-black font-semibold mt-auto cursor-pointer hover:underline">
            <span>Learn more</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}
