import { FaCrown, FaClipboardCheck, FaTruck, FaShieldAlt } from "react-icons/fa";

const KeyFeatures = () => {
  return (
    <div className="w-[1420px] h-[248px] flex flex-col items-center mt-[100px] gap-[48px] ">
      {/* Heading */}
      <h1 className="font-bold text-[48px] text-center text-[#04080B]">
        KEY FEATURES
      </h1>
      {/* Features*/}
      <div className="w-[1420px] h-[130px] flex justify-between items-center">
        {/* Cards */}
        {[
          { icon: <FaCrown />, text: "High-quality scaffolding materials" },
          { icon: <FaClipboardCheck />, text: "Flexible rental terms" },
          { icon: <FaTruck />, text: "On-site delivery and setup" },
          { icon: <FaShieldAlt />, text: "Compliance with safety standards" },
        ].map((feature, index) => (
          <div key={index} className="flex flex-col items-center w-[349px]">
            <div className="w-[96px] h-[96px] bg-[#E96F50] flex items-center justify-center rounded-[9.6px]">
              <span className="text-white text-[48px]">{feature.icon}</span>
            </div>
            <p className="text-center text-[16px] font-medium mt-[8px] w-full">
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyFeatures;
