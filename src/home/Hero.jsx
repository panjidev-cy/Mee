import Button from "../components/shared/Button";
import Paddings from "../components/shared/paddings";

import profile from "../assets/card.jpg";
export default function Hero() {
  return (
    <>
      <Paddings>
        <div className="w-full h-screen md:h-auto  flex items-end justify-between pb-10">
          <div>
            <h1 className="font-cal  text-fluid-h1 text-slate-600">
              I'm a <span className="bg-blue text-white px-3 py-2 rounded-lg">vibloo</span>
            </h1>
            <h3 className="font-poppins text-fluid-h3 font-semibold mt-10 md:mt-6 text-slate-500">I'm a web developer</h3>
            <p className="font-poppins text-fluid-body font-normal text-slate-400 md:w-4/5">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            <div className="mt-5">
              <Button content="Hire Me" arrow={false}></Button>
            </div>
          </div>
          <div className=" h-full md:h-auto">
            <img src={profile} alt="" width={330} className="rounded-3xl md:hidden mt-[40%]" />
          </div>
        </div>
      </Paddings>
    </>
  );
}
