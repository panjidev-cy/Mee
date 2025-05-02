import Paddings from "./paddings";

let nav = [
  { name: "Home", link: "#" },
  { name: "About", link: "#" },
  { name: "Projects", link: "#" },
  { name: "Contact", link: "#" },
];

let comunity = [{ name: "kopico", link: "#" }];
let social = [
  { name: "Github", link: "#" },
  { name: "Linkedin", link: "#" },
  { name: "Instagram", link: "#" },
];

function listNav(list, title) {
  return (
    <div className="flex flex-col gap-4">
      <h5 className="text-[clamp(13px,1.4vw,15px)] font-semibold text-slate-800 ">{title}</h5>
      <div className="flex gap-2 items-start flex-col">
        {list.map((item, index) => (
          <li key={index} className="list-none ">
            <a href={item.link} className="text-sm font-medium text-slate-500 hover:text-slate-800">
              {item.name}
            </a>
          </li>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <>
      <footer className="font-poppins">
        <Paddings>
          <div className="flex md:flex-col ">
            <div className="flex-1">
              <h5 className="text-[clamp(13px,1.4vw,15px)] font-semibold text-slate-600">About Me</h5>
              <p className="text-[clamp(10px,1.1vw,13px)] font-medium text-slate-800 w-4/5 lg:w-3/5  mt-4">
                I'm Panji bhekti, a <b>full-stack engineer</b> who loves intuitive, clean and modern UI design.
              </p>
            </div>
            <div className="flex-1 flex gap-16  lg:my-5 justify-end lg:flex-wrap lg:justify-start">
              {listNav(nav, "Next-page")}
              {listNav(comunity, "Comunity")}
              {listNav(social, "Social")}
            </div>
          </div>
        </Paddings>
        <div className="w-full h-auto bg-ghost_white mt-10">
          <Paddings>
            <div className="flex justify-between py-7">
              <p className="text-center text-slate-500 text-[clamp(11px,1.1vw,13px)] ">© 2023 vibloo</p>
              <p className="text-center text-slate-500 text-[clamp(11px,1.1vw,13px)]">lets work with me</p>
            </div>
          </Paddings>
        </div>
      </footer>
    </>
  );
}
