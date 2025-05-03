// import { Link } from "react-router-dom";

// import Paddings from "./paddings";

// let nav = [
//   { name: "Home", link: "/" },
//   { name: "About", link: "/about" },
//   { name: "Projects", link: "/projects" },
//   { name: "Contact", link: "/contact" },
// ];

// let comunity = [{ name: "kopico", link: "#" }];
// let social = [
//   { name: "Github", link: "#" },
//   { name: "Linkedin", link: "#" },
//   { name: "Instagram", link: "#" },
// ];

// function ListNav({ list, title, navigation }) {
//   return (
//     <div className="flex flex-col gap-4">
//       <h5 className="text-[clamp(13px,1.4vw,15px)] font-semibold text-slate-800 ">{title}</h5>
//       <div className="flex gap-2 items-start flex-col">
//         {list.map((item, index) => {
//           const isInternal = navigation && item.link.startsWith("/");

//           return (
//             <li key={index} className="list-none ">
//               {isInternal ? (
//                 <Link to={item.link} className="text-sm font-medium text-slate-500 hover:text-slate-800">
//                   {item.name}
//                 </Link>
//               ) : (
//                 <a href={item.link} className="text-sm font-medium text-slate-500 hover:text-slate-800">
//                   {item.name}
//                 </a>
//               )}
//             </li>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default function Footer() {
//   return (
//     <>
//       <footer className="font-poppins">
//         <Paddings>
//           <div className="flex md:flex-col ">
//             <div className="flex-1">
//               <h5 className="text-[clamp(14px,1.7vw,16px)] font-semibold text-slate-600">About Me</h5>
//               <p className="text-[clamp(13px,1.4vw,15px)] font-medium text-slate-800 w-4/5 lg:w-3/5  mt-4">
//                 I'm Panji bhekti, a <b>full-stack engineer</b> who loves intuitive, clean and modern UI design.
//               </p>
//             </div>
//             <div className="flex-1 flex gap-16  lg:my-5 justify-end lg:flex-wrap lg:justify-start">
//               <ListNav list={nav} title="Next-page" />
//               <ListNav comunity={comunity} title="Comunity" />
//               <ListNav social={social} title="Social" />
//             </div>
//           </div>
//         </Paddings>
//         <div className="w-full h-auto bg-ghost_white mt-10">
//           <Paddings>
//             <div className="flex justify-between py-7">
//               <p className="text-center text-slate-500 text-[clamp(11px,1.1vw,13px)] ">© 2023 vibloo</p>
//               <p className="text-center text-slate-500 text-[clamp(11px,1.1vw,13px)]">lets work with me</p>
//             </div>
//           </Paddings>
//         </div>
//       </footer>
//     </>
//   );
// }

import { Link } from "react-router-dom";
import Paddings from "./paddings";

const nav = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Projects", link: "/projects" },
  { name: "Contact", link: "/contact" },
];

const comunity = [{ name: "kopico", link: "#" }];
const social = [
  { name: "Github", link: "#" },
  { name: "Linkedin", link: "#" },
  { name: "Instagram", link: "#" },
];

// ✅ Nama fungsi dimulai dengan huruf kapital
function ListNav({ list, title }) {
  return (
    <div className="flex flex-col gap-4">
      <h5 className="text-[clamp(13px,1.4vw,15px)] font-semibold text-slate-800">{title}</h5>
      <ul className="flex gap-2 items-start flex-col">
        {list.map((item, index) => {
          const isInternal = item.link.startsWith("/"); // cek langsung dari item.link
          return (
            <li key={index} className="list-none">
              {isInternal ? (
                <Link to={item.link} className="text-sm font-medium text-slate-500 hover:text-slate-800">
                  {item.name}
                </Link>
              ) : (
                <a href={item.link} className="text-sm font-medium text-slate-500 hover:text-slate-800" target="_blank" rel="noopener noreferrer">
                  {item.name}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// ✅ Komponen Footer
export default function Footer() {
  return (
    <footer className="font-poppins">
      <Paddings>
        <div className="flex md:flex-col">
          <div className="flex-1">
            <h5 className="text-[clamp(14px,1.7vw,16px)] font-semibold text-slate-600">About Me</h5>
            <p className="text-[clamp(13px,1.4vw,15px)] font-medium text-slate-800 w-4/5 lg:w-3/5 mt-4">
              I'm Panji Bhekti, a <b>full-stack engineer</b> who loves intuitive, clean and modern UI design.
            </p>
          </div>
          <div className="flex-1 flex gap-16 lg:my-5 justify-end lg:flex-wrap lg:justify-start">
            <ListNav list={nav} title="Next-page" />
            <ListNav list={comunity} title="Comunity" />
            <ListNav list={social} title="Social" />
          </div>
        </div>
      </Paddings>
      <div className="w-full h-auto bg-ghost_white mt-10">
        <Paddings>
          <div className="flex justify-between py-7">
            <p className="text-center text-slate-500 text-[clamp(11px,1.1vw,13px)]">© 2023 vibloo</p>
            <p className="text-center text-slate-500 text-[clamp(11px,1.1vw,13px)]">let's work with me</p>
          </div>
        </Paddings>
      </div>
    </footer>
  );
}
