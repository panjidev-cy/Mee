import HeaderHero from "../components/shared/HeaderHero";
import Paddings from "../components/shared/paddings";
import LineTime from "../components/shared/LineTime";
import CardTabel from "../components/shared/CardTable";
import Footer from "../components/shared/Footer";
export default function Contact() {
  const contactOptions = [
    { icon: "📩", label: "Email", value: "yourname@email.com", type: "email" },
    { icon: "📱", label: "WhatsApp", value: "+6281234567890", type: "whatsapp" },
    { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/yourprofile", type: "link" },
    { icon: "🧠", label: "Instagram", value: "instagram.com/yourcreativehandle", type: "link" },
  ];

  const renderLink = (item) => {
    let href = "#";

    switch (item.type) {
      case "email":
        href = `mailto:${item.value}`;
        break;
      case "whatsapp":
        const phone = item.value.replace(/\D/g, ""); // hilangkan non-digit
        href = `https://wa.me/${phone}`;
        break;
      case "link":
        href = item.value.startsWith("http") ? item.value : `https://${item.value}`;
        break;
    }

    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800">
        {item.value}
      </a>
    );
  };

  return (
    <>
      <HeaderHero
        headline="You have ideas. I have skills. Let’s talk!"
        subtitle="Let's chat together!"
        caption={`Punya ide yang pengen diwujudin jadi website?
Atau pengen ngobrol soal desain, kolaborasi, atau cuma nanya-nanya dulu?
Jangan malu-malu, inbox aku selalu terbuka 🙌`}
      />

      <div className="mt-10" />

      <Paddings>
        <LineTime first="true" title="Chat with us: 📫">
          <h3 className="text-fluid-caption text-justify font-normal font-poppins text-slate-600 w-4/5 md:w-full mt-5 mb-10">
            Setiap project aku bawa dengan semangat fresh dan pendekatan yang relevan buat Gen Z. Desain yang relatable, loading cepat, dan pastinya responsif di semua device.
          </h3>
        </LineTime>
        <LineTime title="Quick Contact Info ✅" end="true">
          <CardTabel>
            <ul className="space-y-4">
              {contactOptions.map((item, index) => (
                <li key={index} className="grid grid-cols-2 gap-4 items-center text-slate-800">
                  {/* Kategori (kiri) */}
                  <div className="flex items-center gap-2 font-semibold text-slate-600 ">
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </div>

                  {/* Value (kanan) */}
                  <div className="text-blue-600 underline break-words text-start md:text-left">{renderLink(item)}</div>
                </li>
              ))}
            </ul>
          </CardTabel>
        </LineTime>
      </Paddings>

      <Footer />
    </>
  );
}
