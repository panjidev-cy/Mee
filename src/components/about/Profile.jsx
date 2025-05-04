import CardTabel from "../shared/CardTable";
import Paddings from "../shared/paddings";

import image from "../../assets/card.jpg";

let dataDiri = [
  { name: "Name", value: "Panji Bhekti" },
  { name: "Age", value: "19" },
  { name: "Address", value: "Indonesia" },
  { name: "Email", value: "panjibhekti1@gmail.com" },
];
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
          <div className="flex  items-center justify-center md:flex-col mt-5 lg:mt-10">
            <div className="flex-1 items-center justify-center w-full h-full">
              <img src={image} alt="" className=" w-[clamp(200px,50vw,350px)] max-w-[350px]  rounded-xl" />
            </div>
            <div className="flex-1 md:w-full">
              <CardTabel title="Profile">
                <div className="w-full mx-auto ">
                  <div className="grid grid-cols-[1fr,4fr] md:grid-cols-[1fr,3fr] md:gap-x-10 md:gap-y-2 gap-x-20 gap-y-5 text-slate-700  font-medium font-poppins text-[clamp(.8rem,2vw,1rem)] ">
                    {dataDiri.map((item, index) => {
                      return (
                        <>
                          <div key={index + "name"}>{item.name}</div>
                          <div key={index + "value"}>{item.value}</div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </CardTabel>
            </div>
          </div>
        </div>
      </Paddings>
    </>
  );
}
