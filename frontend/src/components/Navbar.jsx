import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import call from "../assets/images/call-calling.png";
import sms from "../assets/images/sms.png";
import topnavlogo from "../assets/images/topnavlogo.png";

const Navbar = () => {
  return (
    <header className="w-[1920px] ">
      {/* top bar */}
      <div className="bg-[#1E3A5F] text-white text-sm px-[150px] h-[40px] flex justify-between items-center">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2 font-medium text-[12px]">
           <img src={call} className="h-[20px] w-[20px]" alt="callicon" /> +966 66 830 9142
          </span>
          <span className="flex items-center gap-2 font-medium text-[12px]">
          <img src={sms} className="h-[20px] w-[20px]" alt="smsicon" /> support@swsol.com
          </span>
        </div>
        <img src={topnavlogo} className="w-[64px] h-[24px]" alt="topnavlogo" />
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md px-[150px] h-[80px] flex justify-between items-center">
        <div className="w-[133px] h-[48px]">
          <img src={logo} alt="Scaffolding Worker" className="w-full h-full object-cover" />
        </div>
        {/*link */}
        <div className="flex items-center w-[719px] h-[44px] gap-[40px] ">
          <ul className="flex justify-between w-[565px] gap-[16px] font-medium text-[12px] text-[##04080B] ">
            <li className="cursor-pointer">HOME</li>
            <li className="cursor-pointer">ABOUT US</li>
            <li className="cursor-pointer">PROJECTS  <i class="fas fa-chevron-down"> </i></li>
            <li className="text-red-500 cursor-pointer">OUR SERVICES <i class="fas fa-chevron-down"></i></li>
            <li className="cursor-pointer">MEDIA <i class="fas fa-chevron-down"> </i></li>
            <li className="cursor-pointer">CAREERS</li>
            <li className="cursor-pointer">CONTACT US</li>
          </ul>

          {/*button*/}
          <button className="bg-[#E96F50] text-white w-[114px] h-[44px]  font-semibold text-[12px] ">
            GET QUOTE
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
