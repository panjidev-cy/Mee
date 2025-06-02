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
    <div className=" relative w-full h-auto overflow-hidden  py-10 space-y-6">
      <div className="absolute left-0 top-0 h-full w-[20%] bg-gradient-to-r from-white via-white/85 to-transparent dark:bg-gradient-to-r dark:from-dark dark:via-dark/95 dark:to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-[20%] bg-gradient-to-l from-white via-white/85 to-transparent z-10 dark:bg-gradient-to-l dark:from-dark dark:via-dark/95 dark:to-transparent" />

      {/* Baris 1 - Kiri */}
      <div className="group font-poppins">
        <div className="flex w-max gap-4 animate-scroll px-8 group-hover:[animation-play-state:paused]">
          {testimonials.concat(testimonials).map((testimonial, index) => (
            <div key={`row1-${index}`} className="bg-slate-100 dark:bg-gray-900 rounded-2xl p-4 text-black shadow-md w-64 flex-shrink-0">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue to-white rounded-full"></div>
                <div>
                  <p className="font-semibold text-slate-700 dark:text-slate-300">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.username}</p>
                </div>
              </div>
              <p className="text-sm text-slate-400">{testimonial.message}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Baris 2 - Kanan */}
      <div className="group font-poppins">
        <div className="flex w-max gap-4 animate-scrollReverse px-8 group-hover:[animation-play-state:paused]">
          {testimonials.concat(testimonials).map((testimonial, index) => (
            <div key={`row2-${index}`} className="bg-slate-100 dark:bg-gray-900 rounded-2xl p-4 text-black shadow-md w-64 flex-shrink-0">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-yellow-500 rounded-full"></div>
                <div>
                  <p className="font-semibold text-slate-700 dark:text-slate-300">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.username}</p>
                </div>
              </div>
              <p className="text-sm text-slate-400">{testimonial.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingCards;
