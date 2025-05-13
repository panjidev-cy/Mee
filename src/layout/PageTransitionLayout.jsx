import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const variants = {
  hidden: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function PageTransitionLayout({ children }) {
  const router = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.main key={router.asPath} variants={variants} initial="hidden" animate="enter" exit="exit" transition={{ duration: 0.4, ease: "easeInOut" }}>
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
