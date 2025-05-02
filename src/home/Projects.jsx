// import Paddings from "../components/shared/paddings";
// import profile from "../assets/card.jpg";
// import Button from "../components/shared/Button";

// import React from "react";
// import web from "../assets/web2.jpeg";
// import web2 from "../assets/web.jpeg";

// const imageProject = [
//   { id: 1, image: web },
//   { id: 2, image: web2 },
//   { id: 3, image: web },
//   { id: 4, image: web2 },
//   { id: 5, image: web },
//   { id: 6, image: web2 },
// ];

// export default function Project() {
//   return (
//     <>
//       <div className="w-full h-auto flex items-center flex-col justify-center mt-10">
//         <h2 className="text-fluid-h2 font-poppins font-semibold text-slate-700 tracking-normal">Projects</h2>

//         {/* Container dibatasi 80% lebar layar */}
//         <div className="w-[90%]  h-[80vh] md:w-[100%] mb-14 overflow-y-hidden px-4 py-10 sm:px-8 md:px-10 mt-4 overflow-x-auto scrollbar-hide  mx-auto bg-red-900">
//           <div className="flex gap-6">
//             {imageProject.map((image, index) => (
//               <div key={index} className="flex-shrink-0 w-[90%]   h-[clamp(25rem, 30rem, 40rem)] rounded-2xl overflow-hidden shadow-md bg-yellow-400">
//                 {/* Card Image Container */}
//                 <div className="relative w-full h-full bg-blue border-2 border-black">
//                   <img src={image.image} alt="project" className="absolute inset-0 w-full h-full object-cover rounded-2xl" />

//                   {/* Gradient Layer */}
//                   <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-[#0f0f0f] rounded-2xl" />

//                   {/* Text */}
//                   <div className="absolute bottom-4 left-6">
//                     <h2 className="text-fluid-h3 sm:text-lg font-poppins font-semibold text-white mix-blend-difference">Lorem ipsum dolor sit amet</h2>
//                     <p className="text-fluid-caption font-poppins font-medium text-slate-500 md:hidden">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React from "react";
import web from "../assets/web2.jpeg";
import web2 from "../assets/web.jpeg";

const imageProject = [
  { id: 1, image: web, title: "MIND ID – Portal Recruitment.", desc: "MIND ID Portal Recruitment is ..." },
  { id: 2, image: web2, title: "Another Project", desc: "This is another sample project." },
  { id: 3, image: web, title: "MIND ID – Portal Recruitment.", desc: "MIND ID Portal Recruitment is ..." },
];

export default function Project() {
  return (
    <div className="w-full px-4 md:px-10 py-10 flex flex-col items-center">
      <h2 className="text-fluid-h2 font-poppins font-semibold text-slate-700 mb-3">Projects</h2>

      <div className="w-full h-auto mt-5">
        <div className="relative w-full p-4 bg-periwinkle max-w-[950px] aspect-[16/9] mx-auto overflow-hidden shadow-md rounded-xl">
          {/* Gambar latar */}
          <div className="absolute inset-0 w-full objekt-cover flex items-center justify-center px-10 ">
            <img src={web} alt="Background" className="w-full " />
          </div>

          {/* Konten di atas gambar */}
          <div className="relative z-10 flex items-center justify-center h-full w-full">
            <h1 className="text-white text-xl sm:text-4xl font-bold text-center drop-shadow-md">Judul Kamu</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
