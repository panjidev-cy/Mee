import HeaderHero from "../components/shared/HeaderHero";
import Card from "../components/shared/Card";
import Paddings from "../components/shared/paddings";

import profile from "../assets/card.jpg";
import CardTabel from "../components/shared/CardTable";
export default function About() {
  return (
    <div>
      <HeaderHero headline="Behind the Scenes of Digital Creativity" subtitle="About Me" caption='"Hi, aku Panji Bhekti — Web Developer & Creative Designer yang suka bikin hal simpel jadi impactful."'></HeaderHero>
      <Paddings>
        <CardTabel>
          <div className="w-full  mx-auto ">
            <div className="grid grid-cols-[1fr,4fr] gap-x-20 gap-y-5 text-slate-700 font-medium font-poppins text-sm sm:text-base">
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
      </Paddings>
    </div>
  );
}
