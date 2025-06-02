import React from "react";
import web from "@assets/web2.jpeg";
import web2 from "@assets/web.jpeg";
import SectionTitleLayout from "../../../layout/SectionTitleLayout";
import Paddings from "../../../components/shared/paddings";

const imageProject = [
  { id: 1, image: web, title: "MIND ID – Portal Recruitment.", desc: "MIND ID Portal Recruitment is  ..." },
  { id: 2, image: web2, title: "Another Project", desc: "This is another sample project." },
  { id: 3, image: web, title: "MIND ID – Portal Recruitment.", desc: "MIND ID Portal Recruitment is ..." },
];

export default function Project() {
  return (
    <SectionTitleLayout title="Projects" subtitle="My Work">
      <div className="w-full h-auto mt-5 gap-10 flex overflow-x-auto scrollbar-hide">
        <div className="mx-10"></div>
        {imageProject.map((item, index) => (
          <div className="flex-shrink-0  relative w-full bg-periwinkle max-w-[800px]  aspect-[16/9] mx-auto bg-blue overflow-hidden drop-shadow-md rounded-xl " key={index}>
            {/* Gambar latar */}
            <div className="absolute inset-0 w-full  object-cover flex items-center justify-center px-10">
              <img src={item.image} alt="Background" className="w-full " />
            </div>
            <div className="">
              {/* Konten di atas gambar */}
              <div className="relative z-10 flex items-end justify-start h-full w-full">
                <h5 style={{ borderRadius: "0px 0px 20px 0px" }} className="text-slate-500 font-poppins bg-white  py-4 px-6 lg:px-3 lg:py-1  mix-blend-difference font-medium text-fluid-h6 text-center drop-shadow-md">
                  {item.title}
                </h5>
              </div>
              <div style={{ borderRadius: "0px 20px 0px 0px" }} className="absolute z-10 flex  bg-white  shadow-2xl  items-end justify-start  bottom-0 left-0 px-10 py-4 w-[70%]">
                <p className="text-slate-600 font-poppins text-sm">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="mx-10"></div>
      </div>
    </SectionTitleLayout>
  );
}

//  <div key={index} className="flex-shrink-0 relative w-full p-4 bg-periwinkle max-w-[950px] aspect-[16/9] mx-auto bg-blue overflow-hidden shadow-md rounded-xl py-2">
//             {/* Gambar latar */}
//             <div className="absolute inset-0 w-full object-cover flex items-center justify-center px-10 ">
//               <img src={item.image} alt="Background" className="w-full " />
//             </div>

//             {/* Konten di atas gambar */}
//             <div className="relative z-10 flex items-end justify-start h-full w-full">
//               <h5 className="text-slate-500 font-poppins  mix-blend-difference font-medium text-center drop-shadow-md">{item.title}</h5>
//             </div>
//           </div>
