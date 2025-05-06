// import HeaderHero from "../components/shared/HeaderHero";

// // import { Button } from "@/components/ui/button";

// import Button from "../components/shared/Button";
// import { motion } from "framer-motion";
// import image1 from "../assets/web.jpeg";
// import image2 from "../assets/web2.jpeg";

// const projects = [
//   {
//     title: "EcoEdu",
//     description: "Landing page edukasi ramah lingkungan untuk pelajar.",
//     tools: ["React", "Tailwind"],
//     image: image1,
//     link: "#",
//     reverse: false,
//   },
//   {
//     title: "MiniMarketku",
//     description: "Website toko online untuk UMKM lokal.",
//     tools: ["HTML", "CSS", "JavaScript"],
//     image: image2,
//     link: "#",
//     reverse: true,
//   },
// ];

// function ProjectsPage() {
//   return (
//     <div className="space-y-24 px-4 sm:px-8 md:px-16 py-16 ">
//       {/* HERO SECTION */}
//       <section className="text-center">
//         <h1 className="text-4xl font-bold mb-4">Proyek Terbaru</h1>
//         <p className="text-lg text-gray-600">Ide-ide kreatif yang jadi nyata dan bisa kamu jelajahi.</p>
//       </section>

//       {/* PROJECTS SECTION */}
//       {projects.map((project, index) => (
//         <motion.section
//           key={index}
//           className={`flex flex-col md:flex-row items-center gap-10 ${project.reverse ? "md:flex-row-reverse" : ""}`}
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <img src={project.image} alt={project.title} className="w-full md:w-1/2 rounded-xl shadow-lg" />
//           <div className="w-full md:w-1/2 space-y-3">
//             <h2 className="text-2xl font-semibold">{project.title}</h2>
//             <p className="text-gray-600">{project.description}</p>
//             <p className="text-sm text-gray-500">Tools: {project.tools.join(", ")}</p>
//             <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-violet-600 hover:underline">
//               🔗 Live Preview
//             </a>
//           </div>
//         </motion.section>
//       ))}

//       {/* CTA SECTION */}
//       <section className="text-center bg-gray-50 rounded-xl py-12">
//         <h2 className="text-2xl font-bold mb-2">Punya ide proyek juga?</h2>
//         <p className="text-gray-600 mb-4">Yuk ngobrol dan wujudkan bareng. Siapa tahu project kamu jadi yang selanjutnya di sini 🚀</p>
//         <Button asChild>
//           <a href="/contact">📩 Hubungi Aku</a>
//         </Button>
//       </section>
//     </div>
//   );
// }

// export default function Project() {
//   return (
//     <>
//       <HeaderHero
//         headline="Creative ideas that come to life."
//         subtitle="Latest Projects"
//         caption="Every project here is not just about design — it’s about real experience, message, and function. I believe that a website is not just about how it looks, but how we convey value online."
//       />

//       <ProjectsPage />
//     </>
//   );
// }

import image1 from "../assets/web.jpeg";
import image2 from "../assets/web2.jpeg";
import Paddings from "../components/shared/paddings";
import HeaderHero from "../components/shared/HeaderHero";
import Footer from "../components/shared/Footer";
import { motion } from "framer-motion";

function ProjectItem({ title, description, image, reverse = false }) {
  return (
    <motion.section
      className={`flex  md:flex-col-reverse items-center gap-10 mt-10 ${reverse ? "flex-row-reverse" : ""}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Gambar */}
      <div className="max-w-[550px]">
        <img src={image} alt={title} className="w-full  h-auto object-cover rounded-xl shadow-md transition-transform hover:scale-105 duration-300" />
      </div>

      {/* Teks */}
      <div className="w-4/5 md:w-full space-y-3 bg-slate-100 px-5 py-5 rounded-lg font-poppins">
        <h2 className="text-fluid-h3 font-bold">{title}</h2>
        <p className="text-gray-600 text-fluid-caption">{description}</p>
      </div>
    </motion.section>
  );
}

const projects = [
  {
    title: "EcoEdu",
    description: "Landing page edukasi ramah lingkungan.",
    image: image1,
    reverse: false,
  },
  {
    title: "MiniMarketku",
    description: "Website toko online untuk UMKM lokal.",
    image: image2,
    reverse: true,
  },
];

export default function Project() {
  return (
    <>
      <HeaderHero headline="Creative ideas that come true" subtitle="Latest Projects" caption="Every project here is not just about design — it's about real experience, message, and function." />
      <Paddings>
        {projects.map((proj, idx) => (
          <ProjectItem key={idx} {...proj} />
        ))}
      </Paddings>
      <Footer />
    </>
  );
}
