import HeaderCenterSection from "../shared/HeaderCenterSection";
import canva from "../../assets/image/canva.png";
import figma from "../../assets/image/figma.png";
import vscode from "../../assets/image/vs code.png";
import { div } from "framer-motion/client";

const skills = [
  { name: "Canva", percent: 98, icon: canva },
  { name: "Figma", percent: 92, icon: figma },
  { name: "Vs code", percent: 90, icon: vscode },
];

function ToolProficiency() {
  return (
    <div className="w-full">
      <div className="overflow-x-auto snap-x snap-mandatory scrollbar-hide">
        <div className="flex gap-6 py-6 px-6 md:px-0 w-max mx-auto items-center">
          {/* Spacer kiri */}
          <div className="shrink-0 md:w-[50vw]" />

          {skills.map((skill, index) => (
            <div className="flex flex-col items-center gap-4 font-f1 snap-center" key={index}>
              <div className="flex-shrink-0 flex flex-col items-center bg-gray-100 rounded-full p-6 gap-16 w-40 shadow-md">
                <div className="w-16 h-16 mb-4">
                  <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                </div>
                <p className="text-xl font-semibold">{skill.percent}%</p>
              </div>
              <p className="text-gray-600 mt-1">{skill.name}</p>
            </div>
          ))}

          {/* Spacer kanan */}
          <div className="shrink-0 md:w-[50vw]" />
        </div>
      </div>
    </div>
  );
}

export default function Tools() {
  return (
    <>
      <section className="w-full h-screen flex flex-col justify-center bg-white-ghost gap-7">
        <HeaderCenterSection title="Tools" subtitle="I use" highlight="Tools" />
        <div className="w-full h-auto flex items-center justify-center relative">
          <div className="absolute left-0 top-0 h-full w-[20%] bg-gradient-to-r from-white via-white/85 to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-[20%] bg-gradient-to-l from-white via-white/85 to-transparent z-10" />

          <ToolProficiency />
        </div>
      </section>
    </>
  );
}
