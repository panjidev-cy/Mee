import LineTime from "@/components/shared/LineTime";

const funFacts = ["🌙 Paling kreatif jam 2 pagi", "🎧 Ngoding sambil denger playlist chill lo-fi", "📱 Iseng redesign tampilan app yang rame di TikTok", "☕ Kopi itu debug helper terbaik"];

export default function AboutFunFacts() {
  return (
    <LineTime title="Some Fun Facts 🤙">
      <h6 className=" font-medium font-poppins text-slate-600 w-4/5 md:w-full mt-8">
        Karena <span className="text-blue">hidup</span> gak harus serius terus kan?
      </h6>

      <ul className="ml-8 md:ml-0 mt-3 space-y-4">
        {funFacts.map((fact, index) => (
          <li key={index} className="text-fluid-caption text-justify font-medium font-poppins text-slate-800 w-4/5 md:w-full">
            {fact}
          </li>
        ))}
      </ul>
    </LineTime>
  );
}
