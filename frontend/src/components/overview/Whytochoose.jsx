import { FaClock } from "react-icons/fa";
import workerimage from "../../assets/images/worker.jpg"

const Whytochoose = () => {
  return (
    <div className="w-[1420px] h-[460px] mt-[100px] flex justify-between items-center ">
      {/* Left*/}
      <div className="w-[450px] h-[450px]">
        <img src={workerimage} alt="Scaffolding Worker" className="w-full h-full object-cover" />
      </div>

      {/* Right Section*/}
      <div className="w-[663px] h-[404px] flex flex-col gap-[24px]">
        <h3 className="text-[24px] font-bold text-[#04080B]">
          WOSOL
        </h3>
        <h2 className="text-[48px] font-bold leading-[64px] text-[#04080B]">
          WHY CHOOSE OUR SCAFFOLDING RENTAL SERVICES?
        </h2>
        <div className="w-[663px] h-[144px] flex flex-col gap-[12px]">
          {[
            "Reduce construction downtime.",
            "Ensure the safety of workers.",
            "Increase project efficiency.",
          ].map((text, index) => (
            <div key={index} className="w-[663px] h-[26px] flex items-center gap-[8px]">
              <span className="text-[#E96F50] text-[20px]"><FaClock /></span>
              <p className="text-[16px] font-medium text-[#04080B]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Whytochoose;
