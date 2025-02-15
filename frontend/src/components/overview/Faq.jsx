import { FiPlus } from "react-icons/fi";

export default function Faq() {
  const faqs = [
    "How long can I rent scaffolding for?",
    "Do you provide delivery and setup for the scaffolding?",
    "Is there a minimum rental period?",
    "What safety measures do you follow for scaffolding?",
    "How do I know which type of scaffolding I need?",
    "Do you offer scaffolding inspections?",
    "What happens if the scaffolding is damaged during the rental period?",
    "How do I request a scaffolding rental quote?",
    "Can I extend my rental period?",
  ];

  return (
    <div className="w-[1420px] h-auto mt-[100px] flex flex-col gap-6 mx-auto">
      {/* Heading */}
      <div className="w-full">
        <h2 className="text-[#04080B]  font-bold text-[48px] leading-[64px]">
          FREQUENTLY ASKED QUESTIONS [FAQ'S]
        </h2>
        <p className="text-[#475467]  font-bold text-[14px]  text-justify">
          Everything you need to know about the Scaffolding Rental Service
        </p>
      </div>

      {/* FAQ */}
      <div className="w-full flex flex-col ">

        <div className="w-full h-[59px] flex flex-col">
          <div className="w-full flex justify-between items-center">
            <p className="text-[#04080B]  font-semibold text-[16px]">
              Q. What types of scaffolding do you offer for rental?
            </p>
          </div>
          <p className="text-[#475467]  font-semibold text-[14px] mt-2">
            We offer a variety of scaffolding types, including frame scaffolding, 
            system scaffolding, mobile scaffolding, and suspended scaffolding 
            to meet different project needs.
          </p>
        </div>

        {faqs.map((question, index) => (
          <div key={index} className="w-full flex h-[54px] mt-[32px] flex-col border-t border-[#EAECF0] justify-end">
            <div className="w-full flex justify-between items-center">
              <p className="text-[#04080B]  font-semibold text-[16px]">
                Q. {question}
              </p>
              <div className="w-[20px] h-[20px] border-2 border-[#E96F50] flex items-center justify-center text-[#E96F50] rounded-full">
                <FiPlus size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
