import CardTabel from "../shared/CardTable";
import Paddings from "../shared/paddings";
import LineTime from "../shared/LineTime";
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
        <div className="mt-10"></div>
        <LineTime title="Profile" first="true">
          <div className="flex  items-center justify-center gap-20 md:flex-col mt-5 lg:mt-10 ">
            <div className="flex items-center justify-center w-auto h-full">
              <img src={image} alt="" className=" w-[clamp(200px,50vw,300px)] max-w-[300px]  rounded-xl" />
            </div>
            <div className=" w-auto md:w-full">
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
        </LineTime>
        <LineTime>
          <div className="">
            <div className="inline-block">
              <CardTabel title="" paddingX="px-1" paddingY="py-1">
                <img src={image} alt="" className=" w-[clamp(200px,50vw,300px)] max-w-[300px]   rounded-br-xl rounded-bl-xl" />
              </CardTabel>
            </div>
          </div>
        </LineTime>
        <LineTime title="Some Fun Facts 🤙">
          <h2 className="text-fluid-h2 text-justify font-semibold font-poppins text-slate-700 w-4/5 mt-3 italic">
            "-Build <span className="ml-4 text-blue">-Design</span> <span className="">-Repeat</span>"
          </h2>
          <h4 className="text-fluid-body text-justify font-normal font-poppins text-slate-600 w-4/5 mt-8">Aku fokus di:</h4>
          <div className="ml-8 md:ml-0 mt-3">
            <ul className="space-y-4">
              {["Frontend Web Development (React, Tailwind, Framer Motion)", "UI/UX Design (Figma, Canva)", "Website Landing Page, Portofolio, dan E-commerce mini"].map((text, index) => {
                const match = text.match(/^(.*?)\s*\((.*?)\)$/);

                return (
                  <li key={index} className="flex items-starts gap-3 text-slate-700 leading-relaxed">
                    <span className="mt-1 w-3 h-3 rounded-sm bg-slate-600 flex-shrink-0" />
                    <p className="text-fluid-caption text-justify font-medium font-poppins text-slate-800 w-4/5">
                      {match ? (
                        <>
                          {match[1].trim()} <span className="font-normal text-slate-500">{match[2]}</span>
                        </>
                      ) : (
                        text
                      )}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </LineTime>
      </Paddings>
    </>
  );
}
