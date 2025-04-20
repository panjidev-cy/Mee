// import React from "react";

// const testimonials = [
//   { name: "Aldi", username: "@aldi", message: "Gila, ini sih keren parah! Makasih banyak, ya!" },
//   { name: "Rozan", username: "@rozan", message: "Super keren! Hasilnya luar biasa. Thank you banget!" },
//   { name: "Gandhi", username: "@gandhi", message: "Nggak nyangka bakal sekeren ini. Good job, bro!" },
//   { name: "Dewi", username: "@dewi", message: "Kerjaannya mantul banget! Terbaiklah pokoknya." },
//   { name: "Sinta", username: "@sinta", message: "Hasilnya bikin melongo! Keren banget, puas deh." },
//   { name: "Bayu", username: "@bayu", message: "Ini sih nggak ada lawan. Mantap jiwa!" },
//   { name: "Rina", username: "@rina", message: "Ga nyangka hasilnya bakal sekeren ini. Love it!" },
// ];

// const ScrollingCards = () => {
//   return (
//     <>
//       <div className="relative overflow-hidden  w-full h-48">
//         <div
//           className=" w-[10%] h-full bg-gradient-to-r from-white
//          to-indigo-100"
//         ></div>
//         <div className="flex w-max gap-4 hover:animate-none" style={{ animation: "scroll 20s linear infinite" }}>
//           {testimonials.concat(testimonials).map((testimonial, index) => (
//             <div key={index} className="bg-[#0e0741] rounded-2xl p-4 text-white shadow-md w-64 flex-shrink-0">
//               <div className="flex items-center gap-2 mb-2">
//                 <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
//                 <div>
//                   <p className="font-semibold">{testimonial.name}</p>
//                   <p className="text-sm text-gray-400">{testimonial.username}</p>
//                 </div>
//               </div>
//               <p>{testimonial.message}</p>
//             </div>
//           ))}
//         </div>
//         <style jsx>{`
//           @keyframes scroll {
//             0% {
//               transform: translateX(0);
//             }
//             100% {
//               transform: translateX(-50%);
//             }
//           }
//         `}</style>
//       </div>
//     </>
//   );
// };

// export default ScrollingCards;

// import React from "react";

// const testimonials = [
//   { name: "Aldi", username: "@aldi", message: "Gila, ini sih keren parah! Makasih banyak, ya!" },
//   { name: "Rozan", username: "@rozan", message: "Super keren! Hasilnya luar biasa. Thank you banget!" },
//   { name: "Gandhi", username: "@gandhi", message: "Nggak nyangka bakal sekeren ini. Good job, bro!" },
//   { name: "Dewi", username: "@dewi", message: "Kerjaannya mantul banget! Terbaiklah pokoknya." },
//   { name: "Sinta", username: "@sinta", message: "Hasilnya bikin melongo! Keren banget, puas deh." },
//   { name: "Bayu", username: "@bayu", message: "Ini sih nggak ada lawan. Mantap jiwa!" },
//   { name: "Rina", username: "@rina", message: "Ga nyangka hasilnya bakal sekeren ini. Love it!" },
// ];

// const ScrollingCards = () => {
//   return (
//     <div className="relative w-full h-auto overflow-hidden bg-white">
//       {/* Gradient overlay */}
//       <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10" />
//       <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10" />

//       {/* Scrolling content */}
//       <div className="flex gap-4 w-max animate-scroll px-8">
//         {testimonials.concat(testimonials).map((testimonial, index) => (
//           <div key={index} className="bg-[#0e0741] rounded-2xl p-4 text-white shadow-md w-64 flex-shrink-0">
//             <div className="flex items-center gap-2 mb-2">
//               <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
//               <div>
//                 <p className="font-semibold">{testimonial.name}</p>
//                 <p className="text-sm text-gray-400">{testimonial.username}</p>
//               </div>
//             </div>
//             <p>{testimonial.message}</p>
//           </div>
//         ))}
//       </div>
//       <div className="flex gap-4 w-max animate-scroll2 px-8">
//         {testimonials.concat(testimonials).map((testimonial, index) => (
//           <div key={index} className="bg-[#0e0741] rounded-2xl p-4 text-white shadow-md w-64 flex-shrink-0">
//             <div className="flex items-center gap-2 mb-2">
//               <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
//               <div>
//                 <p className="font-semibold">{testimonial.name}</p>
//                 <p className="text-sm text-gray-400">{testimonial.username}</p>
//               </div>
//             </div>
//             <p>{testimonial.message}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ScrollingCards;

import React from "react";

const testimonials = [
  { name: "Aldi", username: "@aldi", message: "Gila, ini sih keren parah! Makasih banyak, ya!" },
  { name: "Rozan", username: "@rozan", message: "Super keren! Hasilnya luar biasa. Thank you banget!" },
  { name: "Gandhi", username: "@gandhi", message: "Nggak nyangka bakal sekeren ini. Good job, bro!" },
  { name: "Dewi", username: "@dewi", message: "Kerjaannya mantul banget! Terbaiklah pokoknya." },
  { name: "Sinta", username: "@sinta", message: "Hasilnya bikin melongo! Keren banget, puas deh." },
  { name: "Bayu", username: "@bayu", message: "Ini sih nggak ada lawan. Mantap jiwa!" },
  { name: "Rina", username: "@rina", message: "Ga nyangka hasilnya bakal sekeren ini. Love it!" },
];

const ScrollingCards = () => {
  return (
    <div className=" relative w-full h-auto overflow-hidden bg-white py-10 space-y-6">
      <div className="absolute left-0 top-0 h-full w-[20%] bg-gradient-to-r from-white via-white/85 to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-[20%] bg-gradient-to-l from-white via-white/85 to-transparent z-10" />

      {/* Baris 1 - Kiri */}
      <div className="group">
        <div className="flex w-max gap-4 animate-scroll px-8 group-hover:[animation-play-state:paused]">
          {testimonials.concat(testimonials).map((testimonial, index) => (
            <div key={`row1-${index}`} className="bg-white-ghost rounded-2xl p-4 text-black shadow-md w-64 flex-shrink-0">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue to-white rounded-full"></div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.username}</p>
                </div>
              </div>
              <p>{testimonial.message}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Baris 2 - Kanan */}
      <div className="group">
        <div className="flex w-max gap-4 animate-scrollReverse px-8 group-hover:[animation-play-state:paused]">
          {testimonials.concat(testimonials).map((testimonial, index) => (
            <div key={`row2-${index}`} className="bg-white-blue rounded-2xl p-4 text-black shadow-md w-64 flex-shrink-0">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-yellow-500 rounded-full"></div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.username}</p>
                </div>
              </div>
              <p>{testimonial.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingCards;
