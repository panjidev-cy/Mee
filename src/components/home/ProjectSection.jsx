// import React from "react";
// import web from "../../assets/web2.jpeg";
// import web2 from "../../assets/web.jpeg";

// const imageProject = [
//   { id: 1, image: web },
//   { id: 2, image: web2 },
//   { id: 3, image: web },
//   { id: 4, image: web2 },
//   { id: 5, image: web },
//   { id: 6, image: web2 },
// ];

// const ProjectSection = () => {
//   return (
//     <div className="flex flex-col items-center justify-center my-10">
//       <h1 className="text-5xl font-subHeader font-medium mb-8">project</h1>

//       <div className="w-full px-4 sm:px-8 md:px-10 flex ">
//         {imageProject.map((image, index) => (
//           <div key={index} className="relative mx-auto w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl rounded-2xl overflow-hidden">
//             {/* Image + Aspect Ratio */}
//             <div className="relative w-full aspect-video">
//               <img src={image.image} alt="project" className="absolute inset-0 w-full  object-cover rounded-2xl" />

//               {/* Gradient Layer */}
//               <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-[#0f0f0f] rounded-2xl" />

//               {/* Text */}
//               <div className="absolute bottom-4 left-6">
//                 <h2 className="text-2xl md:text-3xl font-subHeader font-medium text-white">Lorem ipsum dolor sit amet</h2>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProjectSection;

import React from "react";
import web from "../../assets/web2.jpeg";
import web2 from "../../assets/web.jpeg";

const imageProject = [
  { id: 1, image: web },
  { id: 2, image: web2 },
  { id: 3, image: web },
  { id: 4, image: web2 },
  { id: 5, image: web },
  { id: 6, image: web2 },
];

const ProjectSection = () => {
  return (
    <div className="flex flex-col items-center justify-center my-10">
      <h1 className="text-5xl font-subHeader font-medium mb-8">project</h1>

      {/* Scrollable container */}
      <div className="w-full px-4 sm:px-8 md:px-10 overflow-x-auto scrollbar-hide">
        <div className="flex gap-6">
          {imageProject.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl rounded-2xl overflow-hidden">
              {/* Image + Aspect Ratio */}
              <div className="relative w-full aspect-video">
                <img src={image.image} alt="project" className="absolute inset-0 w-full h-full object-cover rounded-2xl" />

                {/* Gradient Layer */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-[#0f0f0f] rounded-2xl" />

                {/* Text */}
                <div className="absolute bottom-4 left-6 ">
                  <h2 className="text-5xl md:text-xl sm:text-lg font-subHeader font-medium text-white">Lorem ipsum dolor sit amet</h2>
                  <p className="text-lg font-body font-medium text-gray mt-2">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
