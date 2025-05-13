// import HeaderHero from "../../components/shared/HeaderHero";
// import LineTime from "../../components/shared/LineTime";
// import Paddings from "../../components/shared/paddings";
// import PageLayout from "../../layout/PageLayout";

// const workFocusList = [
//   {
//     title: "Frontend Web Development",
//     tools: "React, Tailwind, Framer Motion",
//   },
//   {
//     title: "UI/UX Design",
//     tools: "Figma, Canva",
//   },
//   {
//     title: "Website Landing Page, Portofolio, dan E-commerce mini",
//   },
// ];

// const funFacts = ["🌙 Paling kreatif jam 2 pagi", "🎧 Ngoding sambil denger playlist chill lo-fi", "📱 Iseng redesign tampilan app yang rame di TikTok", "☕ Kopi itu debug helper terbaik"];

// export default function About() {
//   return (
//     <PageLayout id="about">
//       <HeaderHero headline="Behind the Scenes of Digital Creativity" subtitle="About Me" caption="Hi! I'm Panji, a web developer & creative designer who loves to tinker with pixels until they feel just right." />

//       <div className="mt-10" />

//       <Paddings>
//         <LineTime first="true">
//           <h3 className="text-fluid-caption text-justify font-normal font-poppins text-slate-600 w-4/5 md:w-full mt-10 mb-10">
//             I help small brands, students, and SMEs who want to stand out more through clean, modern, and fun websites. For me, coding is like putting together a puzzle — it's so satisfying when all the pieces click together.
//           </h3>
//         </LineTime>

//         <LineTime title="What Do I Do?">
//           <h2 className="text-fluid-h2 italic font-semibold font-poppins text-slate-700 w-4/5  md:w-full mt-3">
//             -Build <span className="ml-4 text-blue">-Design</span> <span>-Repeat</span>
//           </h2>

//           <h4 className="text-fluid-body font-normal font-poppins text-slate-600 w-4/5 mt-8">Aku fokus di:</h4>

//           <ul className="ml-8 md:ml-0 mt-3 space-y-4">
//             {workFocusList.map((item, index) => (
//               <li key={index} className="flex gap-3 text-slate-700 leading-relaxed">
//                 <span className="mt-1 w-3 h-3 rounded-sm bg-slate-600 flex-shrink-0" />
//                 <p className="text-fluid-caption text-justify font-medium font-poppins text-slate-800 w-4/5 md:w-full">
//                   {item.title}
//                   {item.tools && <span className="font-normal text-slate-500"> ({item.tools})</span>}
//                 </p>
//               </li>
//             ))}
//           </ul>

//           <h3 className="text-fluid-caption text-justify font-normal font-poppins text-slate-600 w-4/5 md:w-full mt-10 mb-10">
//             Setiap project aku bawa dengan semangat fresh dan pendekatan yang relevan buat Gen Z. Desain yang relatable, loading cepat, dan pastinya responsif di semua device.
//           </h3>
//         </LineTime>

//         <LineTime title="Some Fun Facts 🤙">
//           <h4 className="text-fluid-body font-medium font-poppins text-slate-600 w-4/5 md:w-full mt-8">
//             Karena <span className="text-blue">hidup</span> gak harus serius terus kan?
//           </h4>

//           <ul className="ml-8 md:ml-0 mt-3 space-y-4">
//             {funFacts.map((fact, index) => (
//               <li key={index} className="text-fluid-caption text-justify font-medium font-poppins text-slate-800 w-4/5 md:w-full">
//                 {fact}
//               </li>
//             ))}
//           </ul>
//         </LineTime>

//         <LineTime title="My Work Vibes" end="true">
//           <h2 className="text-fluid-h2 italic font-semibold font-poppins text-slate-700 w-4/5 md:w-full mt-3">
//             -Simple <span className="ml-4 text-blue">-Efisien</span> <span>-Estetik</span>
//           </h2>

//           <h3 className="text-fluid-caption text-justify font-normal font-poppins text-slate-600 w-4/5 md:w-full mt-10 mb-10">
//             Aku suka desain yang nggak ribet, tapi berkesan. Clean layout, animasi halus, dan pesan yang sampai dalam 5 detik — itu goals tiap website yang aku bikin. Karena pertama kali orang lihat website, mereka gak baca. Mereka ngerasa.
//           </h3>
//         </LineTime>
//       </Paddings>
//     </PageLayout>
//   );
// }

// import HeaderHero from "@/components/shared/HeaderHero";
// import Paddings from "@/components/shared/paddings";
// import PageLayout from "@/layout/PageLayout";

// import AboutIntro from "@/components/about/AboutIntro";
// import AboutFocus from "@/components/about/AboutFocus";
// import AboutFunFacts from "@/components/about/AboutFunFacts";
// import AboutVibes from "@/components/about/AboutVibes";

import HeaderHero from "@/components/shared/HeaderHero";
import Paddings from "@/components/shared/paddings";
import PageLayout from "@/layout/PageLayout";

import AboutIntro from "./section/AboutIntro";
import AboutFocus from "./section/AboutFocus";
import AboutFunFacts from "./section/AboutFunFacts";
import AboutVibes from "./section/AboutVibes";

export default function About() {
  return (
    <PageLayout id="about">
      <HeaderHero headline="Behind the Scenes of Digital Creativity" subtitle="About Me" caption="Hi! I'm Panji, a web developer & creative designer who loves to tinker with pixels until they feel just right." />

      <div className="mt-10" />

      <Paddings>
        <AboutIntro />
        <AboutFocus />
        <AboutFunFacts />
        <AboutVibes />
      </Paddings>
    </PageLayout>
  );
}
