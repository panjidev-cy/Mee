import JavascriptIcon from "../../assets/icon/javascript.svg";
import ReactIcon from "../../assets/icon/react.svg";
import TailwindIcon from "../../assets/icon/tailwind.svg";
import VscodeIcon from "../../assets/icon/vscode.svg";
import TypescriptIcon from "../../assets/icon/typescript.svg";

const cycleColors = ["#f87171", "#60a5fa", "#34d399", "#facc15", "#a78bfa"];

export default function Icons() {
  return (
    <div className="flex gap-4">
      <img src={JavascriptIcon} alt="" className="w-7 h-7 " />
      <img src={ReactIcon} alt="" className="w-7 h-7" />
      <img src={TailwindIcon} alt="" className="w-7 h-7" />
      <img src={VscodeIcon} alt="" className="w-7 h-7" />
      <img src={TypescriptIcon} alt="" className="w-7 h-7" />
    </div>
  );
}
