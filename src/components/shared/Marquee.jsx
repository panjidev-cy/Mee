// export default function Marquee() {
//   return (
//     <div className="w-full relative">
//       <div className="w-full h-14 bg-black absolute top-0 z-10 rotate-1"></div>
//       <div className="w-full h-14 bg-blue absolute top-0 z-20 -rotate-1 ">
//         <span className="text-white font-f1 font-semibold animate-marquee duration-1000">
//           <span>Javascript</span>
//         </span>
//       </div>
//     </div>
//   );
// }

export default function Marquee() {
  return (
    <div className="w-full relative h-14 ">
      <div className="w-full h-14 bg-black absolute top-0 z-10 rotate-1"></div>
      <div className="w-full h-14 bg-cartreuse absolute top-0 z-20 -rotate-1 flex items-center overflow-hidden">
        <div className="whitespace-nowrap animate-marquee text-slate-700 -rotate-1 font-subHeader font-semibold w-full text-2xl flex gap-24">
          <span className="mx-4">JavaScript</span>
          <span className="mx-4">React</span>
          <span className="mx-4">Tailwind</span>
          <span className="mx-4">Node.js</span>
          <span className="mx-4">TypeScript</span>
        </div>
      </div>
    </div>
  );
}
