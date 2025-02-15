import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/images/logo.png"
import whatsapp from "../assets/images/whatsapp.png"

const Footer = () => {
    return (
        <footer className="bg-[#04080B] w-[1920px] h-[514px] pt-[64px] pr-[150px] pl-[150px]">
            {/* Upper Section */}
            <div className="w-[1620px] h-[304px] flex justify-between  ">

                {/* Left Section */}
                <div className="w-[527px] h-[304px] space-y-[28px]">
                    <img src={logo} className="h-[64px] w-[177.42px]" alt="logo" />
                    <p className="text-white text-sm text-[12px]">
                        At Woso, we are your trusted partner in achieving success efficiently and effortlessly. With an unwavering commitment to excellence, we offer expert solutions tailored to meet the unique needs of your business. Let us help you elevate your operations to new heights.
                    </p>
                    <p className="flex items-center gap-2 text-sm text-white text-[12px]">
                        <FaMapMarkerAlt velope className="text-white font-medium" /> 285, Jeddah 11771, Saudi Arabia
                    </p>
                    <p className="flex items-center gap-2 text-sm text-white text-[12px]">
                        <FaPhoneAlt className="text-white font-medium" /> +966 56 830 9142
                    </p>
                    <p className="flex items-center gap-2 text-sm text-white text-[12px]">
                        <FaEnvelope className="text-white font-medium" /> support@swsol.com
                    </p>   
                </div>

                
                {/* Right Section */}

                <div className="w-[788px] h-[304px] flex flex-row justify-between p-4 pt-0">
                    {/* Section 1 */}
                    <div className="flex flex-col text-white">
                        <h3 className="text-lg text-[14px] font-semibold text-white">QUICK LINKS</h3>
                        <ul className="mt-2 space-y-2 text-[12px]">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Career</a></li>
                            <li><a href="#">Gallery</a></li>
                        </ul>
                    </div>

                    {/* Section 2 */}
                    <div className="flex flex-col text-white">
                        <h3 className="text-lg  text-[14px] font-semibold text-white">OUR SERVICES</h3>
                        <ul className="mt-2 space-y-2 text-[12px]">
                            <li><a href="#" >Scaffolding Rental</a></li>
                            <li><a href="#" >Scaffolding Design</a></li>
                            <li><a href="#" >Scaffolding Contracting</a></li>
                            <li><a href="#" >Form Work and Shuttering</a></li>
                            <li><a href="#" >Scaffolding Erection</a></li>
                            <li><a href="#" >Manpower Supply</a></li>
                            <li><a href="#" >Mobile Scaffolding</a></li>
                            <li><a href="#" >Aluminium Scaffolding</a></li>
                            <li><a href="#" >Steal Scaffolding</a></li>
                            <li><a href="#" >FRP Scaffolding</a></li>
                        </ul>
                    </div>

                    {/* Section 3 */}
                    <div className="flex flex-col text-white">
                        <h3 className="text-lg text-[14px] font-semibold text-white">PROJECTS</h3>
                        <ul className="mt-2 space-y-2 text-[12px]">
                            <li><a href="#" >Indoor Projects</a></li>
                            <li><a href="#" >Outdoor Projects</a></li>
                            <li><a href="#" >Event Projects</a></li>
                        </ul>
                    </div>

                    {/* Section 4 */}
                    <div className="flex flex-col text-white">
                        <h3 className="text-[14px] font-semibold text-white">MEDIA</h3>
                        <ul className="mt-2 space-y-2 text-[12px] ">
                            <li><a href="#" >Blogs</a></li>
                            <li><a href="#" >News & Events</a></li>
                            <li><a href="#" >Resources</a></li>
                        </ul>
                    </div>
                    {/* Section 5 */}
                    <div className="flex flex-col items-center text-white">
                        <h3 className="text-[14px] font-semibold text-white gap-[8px]">Follow Us</h3>
                        <div className="flex flex-col space-y-2 mt-2 text-[12px] gap-[12px]">
                            <a href="#" className="w-8 h-8 bg-[#E96F50] rounded-full flex items-center justify-center"><FaFacebookF /></a>
                            <a href="#" className="w-8 h-8 bg-[#E96F50] rounded-full flex items-center justify-center"><FaInstagram /></a>
                            <a href="#" className="w-8 h-8 bg-[#E96F50] rounded-full flex items-center justify-center"><FaTwitter /></a>
                            <a href="#" className="w-8 h-8 bg-[#E96F50] rounded-full flex items-center justify-center"><FaLinkedinIn /></a>
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex items-center gap-[8px] w-[217px] h-[40px] bg-[#5BD06640] rounded-[8px] mt-6 ml-[1404px] pl-[20px]">
                <img src={whatsapp} alt="WhatsApp Logo" className='w-[24px] h-[24px]' />
                <span className="text-[#5BD066] text-sm font-medium">How can we help you?</span>
            </div>


            {/* Bottom */}
            <div className="w-[1620px] h-[50px]  mb-0 mt-6 border-t border-white-700 flex items-center justify-center px-4">
                <p className="text-white text-sm">&copy; 2024 Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
