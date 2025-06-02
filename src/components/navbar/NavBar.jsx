import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Paddings from "../shared/paddings";
import DarkModeToggle from "../DarkModeToggle";
import { motion, AnimatePresence } from "framer-motion";

const nav = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Project", link: "/project" },
  { name: "Contact", link: "/contact" },
];

function ListLink() {
  return (
    <>
      {nav.map((item, index) => (
        <li key={index} className="list-none w-full">
          <Link
            to={item.link}
            className="block text-[13px]  font-semibold text-slate-700 hover:text-slate-800 dark:text-blue-light dark:hover:text-blue md:w-full md:py-1 md:hover:bg-slate-200 dark:md:hover:bg-slate-900 md:rounded-lg md:px-2"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </>
  );
}

export default function NavBar() {
  const [showNav, setShowNav] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const [buttonNav, setButtonNav] = useState(false);
  const dropdownRef = useRef(null);

  // Handle scroll hide/show navbar + close dropdown
  useEffect(() => {
    let lastY = 0;
    let ticking = false;

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (currentY > lastY && currentY > 50) {
            setShowNav(false);
            setButtonNav(false); // close dropdown on scroll down
          } else if (currentY < lastY) {
            setShowNav(true);
          }
          lastY = currentY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update width on resize
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setButtonNav(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClickButtonNav = () => {
    setButtonNav((prev) => !prev);
  };

  return (
    <>
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 h-16 py-3 bg-white/40 dark:bg-dark/40 backdrop-blur-md font-poppins transition-all duration-300 ${showNav ? "translate-y-0" : "-translate-y-full"}`}>
        <Paddings>
          <div className="flex justify-between items-center h-full">
            {/* Desktop menu */}
            {width > 824 ? (
              <ul className="flex gap-5 items-center">
                <ListLink />
              </ul>
            ) : (
              // Mobile menu button
              <div className="flex gap-5 items-center">
                <button onClick={handleClickButtonNav} className="text-sm text-slate-700 dark:text-slate-200 font-medium">
                  Menu
                </button>
              </div>
            )}
            <DarkModeToggle />
          </div>
        </Paddings>
      </nav>

      {/* Dropdown menu (only on mobile) */}
      {width <= 1024 && (
        <AnimatePresence>
          {buttonNav && (
            <motion.div ref={dropdownRef} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="fixed top-20 left-3 z-30 w-fit">
              <ul className="flex flex-col font-poppins gap-1 px-1 py-2 bg-slate-100  dark:bg-slate-800 rounded-xl border dark:border-slate-700 shadow-md w-36 ">
                <ListLink />
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
}
