import React from "react";
import web from "@assets/web2.jpeg";
import web2 from "@assets/web.jpeg";
import SectionTitleLayout from "../../../layout/SectionTitleLayout";

const imageProject = [
  { id: 1, image: web, title: "MIND ID – Portal Recruitment.", desc: "MIND ID Portal Recruitment is ..." },
  { id: 2, image: web2, title: "Another Project", desc: "This is another sample project." },
  { id: 3, image: web, title: "MIND ID – Portal Recruitment.", desc: "MIND ID Portal Recruitment is ..." },
];

export default function Project() {
  return (
    <SectionTitleLayout title="Projects" subtitle="My Work">
      <div className="w-full h-auto mt-5 gap-10 flex overflow-x-auto scrollbar-hide">
        {imageProject.map((item, index) => (
          <div key={index} className="flex-shrink-0 relative w-full p-4 bg-periwinkle max-w-[950px] aspect-[16/9] mx-auto overflow-hidden shadow-md rounded-xl">
            {/* Gambar latar */}
            <div className="absolute inset-0 w-full object-cover flex items-center justify-center px-10 ">
              <img src={item.image} alt="Background" className="w-full " />
            </div>

            {/* Konten di atas gambar */}
            <div className="relative z-10 flex items-end justify-start h-full w-full">
              <h5 className="text-slate-500 font-poppins  mix-blend-difference font-medium text-center drop-shadow-md">{item.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </SectionTitleLayout>
  );
}
