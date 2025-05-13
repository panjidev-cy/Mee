import LineTime from "@/components/shared/LineTime";

export default function AboutVibes() {
  return (
    <LineTime title="My Work Vibes" end="true">
      <h3 className=" italic font-semibold font-poppins text-slate-700 w-4/5 md:w-full mt-3">
        -Simple <span className="ml-4 text-blue">-Efisien</span> <span>-Estetik</span>
      </h3>

      <h3 className="text-fluid-caption text-justify font-normal font-poppins text-slate-600 w-4/5 md:w-full mt-10 mb-10">
        Aku suka desain yang nggak ribet, tapi berkesan. Clean layout, animasi halus, dan pesan yang sampai dalam 5 detik — itu goals tiap website yang aku bikin. Karena pertama kali orang lihat website, mereka gak baca. Mereka ngerasa.
      </h3>
    </LineTime>
  );
}
