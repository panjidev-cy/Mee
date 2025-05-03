import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Paddings from "../components/shared/paddings";

const faqs = [
  { question: "Would you work without pay?", answer: "Only if it's for a noble cause or open source 😄." },
  { question: "How to get kawai waifu?", answer: "Be yourself. Or... learn to draw anime." },
  { question: "How to get a job?", answer: "Build skills, network, and apply smartly!" },
  { question: "What's the meaning of life?", answer: "42... or whatever brings you purpose." },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Paddings>
      <div className="w-full h-screen lg:h-auto px-4 py-16 font-poppins">
        <h2 className="text-fluid-h2 font-bold text-center text-slate-600">Questions that nobody asked</h2>
        <p className="text-center text-slate-500 text-lg mt-2 mb-8">But still may be helpful</p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className=" rounded-lg overflow-hidden transition-all duration-300">
              <button onClick={() => toggleFAQ(index)} className="w-full flex justify-between items-center text-left p-4 font-medium text-slate-800 bg-white hover:bg-slate-50 transition">
                <span>{faq.question}</span>
                <ChevronDown className={`w-5 h-5 transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} />
              </button>

              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="p-4 text-slate-600 bg-slate-50">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Paddings>
  );
}

// max-w-3xl mx-auto
