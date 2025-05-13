import image1 from "../../assets/web.jpeg";
import image2 from "../../assets/web2.jpeg";
import Paddings from "../../components/shared/paddings";
import HeaderHero from "../../components/shared/HeaderHero";

import { motion } from "framer-motion";
import PageLayout from "../../layout/PageLayout";

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
    <PageLayout>
      <HeaderHero headline="Creative ideas that come true" subtitle="Latest Projects" caption="Every project here is not just about design — it's about real experience, message, and function." />
      <Paddings>
        {projects.map((proj, idx) => (
          <ProjectItem key={idx} {...proj} />
        ))}
      </Paddings>
    </PageLayout>
  );
}
