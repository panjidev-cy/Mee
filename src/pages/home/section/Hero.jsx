import LoveButton from "../../../components/LoveButton";
import Button from "../../../components/shared/Button";
import Paddings from "../../../components/shared/paddings";
import profile from "@assets/dev.png";
export default function Hero() {
  return (
    <>
      <Paddings>
        <div className="w-full h-screen md:h-auto  flex items-end justify-between pb-10">
          <div>
            <h1 className="font-cal  text-fluid-h1 text-hunyadi-yellow ">
              I'm a <span className="bg-blue text-magenta px-3 py-2 rounded-lg">vibloo</span>
            </h1>
            <h4 className="font-poppins font-medium mt-10 md:mt-6 text-slate-700 dark:text-slate-200">I'm a web developer</h4>
            <p className="font-poppins  font-normal dark:text-slate-300 text-slate-600  md:w-4/5">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            <div className="mt-5 flex gap-5">
              <Button
                content="Hire Me"
                arrow={false}
                ref="mailto://mail.google.com/mail/?view=cm&fs=1&to=panjibhekti1@gmail.com&su=Permintaan%20Jasa&body=Halo,%20saya%20tertarik%20dengan%20jasa%20Anda.%20Bisakah%20kita%20diskusi%20lebih%20lanjut?"
                target="_blank"
              ></Button>
              <LoveButton></LoveButton>
            </div>
          </div>
          <div className=" h-full md:h-auto  flex items-end pb-[5%]">
            <img src={profile} alt="" width={330} className="rounded-3xl md:hidden " />
          </div>
        </div>
      </Paddings>
    </>
  );
}
