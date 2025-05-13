import LineTime from "@/components/shared/LineTime";

const workFocusList = [
  {
    title: "Frontend Web Development",
    tools: "React, Tailwind, Framer Motion",
  },
  {
    title: "UI/UX Design",
    tools: "Figma, Canva",
  },
  {
    title: "Website Landing Page, Portofolio, dan E-commerce mini",
  },
];

export default function AboutFocus() {
  return (
    <LineTime title="What Do I Do?">
      <h2 className="text-fluid-h2 italic font-semibold font-poppins text-slate-700 w-4/5  md:w-full mt-3">
        -Build <span className="ml-4 text-blue">-Design</span> <span>-Repeat</span>
      </h2>

      <h6 className=" font-normal font-poppins text-slate-600 w-4/5 mt-8">Aku fokus di:</h6>

      <ul className="ml-8 md:ml-0 mt-3 space-y-4">
        {workFocusList.map((item, index) => (
          <li key={index} className="flex gap-3 text-slate-700 leading-relaxed">
            <span className="mt-1 w-3 h-3 rounded-sm bg-slate-600 flex-shrink-0" />
            <p className="text-fluid-caption text-justify font-medium font-poppins text-slate-800 w-4/5 md:w-full">
              {item.title}
              {item.tools && <span className="font-normal text-slate-500"> ({item.tools})</span>}
            </p>
          </li>
        ))}
      </ul>

      <h3 className="text-fluid-caption text-justify font-normal font-poppins text-slate-600 w-4/5 md:w-full mt-10 mb-10">
        Setiap project aku bawa dengan semangat fresh dan pendekatan yang relevan buat Gen Z. Desain yang relatable, loading cepat, dan pastinya responsif di semua device.
      </h3>
    </LineTime>
  );
}
