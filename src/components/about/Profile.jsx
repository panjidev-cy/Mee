import CardTabel from "../shared/CardTable";
import Paddings from "../shared/paddings";

import image from "../../assets/card.jpg";
export default function Profile() {
  return (
    <>
      <Paddings>
        <div className="py-3 px-8 border-l-[1.9px] border-slate-300 relative mt-10">
          <div className="w-3 h-3 bg-periwinkle  absolute -top-1 -left-[6px] rounded-full flex items-center justify-center">
            {" "}
            <div className="w-2 h-2 bg-blue rounded-full"></div>
          </div>
          <h2 className="text-fluid-h2 font-poppins font-semibold text-slate-700 tracking-normal">Profile</h2>
          <div className="">
            <img src={image} alt="" className="w-[clamp(10rem,15rem,30rem)]  rounded-2xl" />
          </div>
          <CardTabel title="Profile">
            <div className="w-full mx-auto ">
              <div className="grid grid-cols-[1fr,4fr] md:grid-cols-[1fr,3fr] md:gap-x-10 md:gap-y-2 gap-x-20 gap-y-5 text-slate-700 font-medium font-poppins text-[clamp(.8rem,2vw,1rem)] ">
                <div>OS</div>
                <div>Mac OS Sequoia 15.1 Beta</div>

                <div>Model lorem3</div>
                <div>MacBook Pro M1 2020</div>

                <div>Processor</div>
                <div>Apple M1 chip</div>

                <div>RAM</div>
                <div>8GB</div>

                <div>GPU</div>
                <div>8-core GPU</div>

                <div>Storage</div>
                <div>512GB SSD</div>
              </div>
            </div>
          </CardTabel>
        </div>
      </Paddings>
    </>
  );
}
