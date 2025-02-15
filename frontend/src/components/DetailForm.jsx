const DetailForm=()=> {
    return (
        <div className="bg-[#C4300AF2] w-[1920px] mt-[100px] h-[1024px] flex justify-between items-center px-[250px] py-[150px] ">
            {/*Left*/}

            <div className="w-[691px] h-[291px] flex flex-col gap-[12px] ">
                <h3 className="w-[691px] h-[36px] text-white  font-bold text-[24px] leading-[36px]">
                    OUR SERVICES
                </h3>
               
                <h1 className="w-[691px] h-[192px] text-white  font-bold text-[46px] leading-[64px]">
                EXPERT SCAFFOLDING RENTAL SERVICES FOR SAFE CONSTRUCTION PROJECTS
                </h1>
               
                <p className="w-[900px] h-[21px] text-white  font-bold text-[14px] mt-[12px]">
                    Any Query Related to service please contact us
                </p>
            </div>


            {/*Right Form*/}
            <div className="w-[600px] h-auto rounded-[16px] bg-white px-6 pb-6 flex flex-col items-center">
                {/* Heading */}
                <div className="w-[600px] h-[131px] bg-[#E96F50] text-white flex flex-col items-center justify-center rounded-t-[16px]">
                    <div className="w-[413px] h-[58px] text-center  font-bold text-[28px] ">
                        LET'S HAVE YOUR DETAILS.
                    </div>
                    <div className="w-[193px] h-[25px] text-center  font-semibold text-[14px] ">
                        Rental | Sales | Purchase
                    </div>
                </div>



                {/* Inputs */}
                <div className="w-full flex flex-col gap-[16px] mt-6">
                    <label className=" font-semibold text-[14px] text-black">
                        Full Name *
                    </label>
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full h-[56px] bg-[#EAECF0] border border-gray-300 rounded-lg p-[12px] text-[16px]"
                    />

                    <label className=" font-semibold text-[14px] text-black">
                        Contact *
                    </label>
                    <input
                        type="tel"
                        placeholder="+966 | Enter 9 Digit Mobile Number"
                        className="w-full h-[56px] bg-[#EAECF0] border border-gray-300 rounded-lg p-[12px] text-[16px]"
                    />

                    <label className=" font-semibold text-[14px] text-black">
                        Service *
                    </label>
                    <select className="w-full h-[56px] bg-[#EAECF0] border border-gray-300 rounded-lg p-[12px] text-[16px]">
                        <option>Choose Your Service</option>
                    </select>

                    <label className=" font-semibold text-[14px] text-black">
                        Message *
                    </label>
                    <textarea
                        placeholder="Message..."
                        className="w-full h-[78px] bg-[#EAECF0] border border-gray-300 rounded-lg p-[12px] text-[16px]"
                    ></textarea>
                </div>

                {/* Get Updates*/}
                <div className="w-full flex items-center gap-[10px] py-[10px] mt-4">
                    <input type="checkbox" className="w-[16px] h-[16px]" />
                    <label className="text-[16px]">
                        Get Updates On <b className="text-green-600">🟢 WhatsApp</b>
                    </label>
                </div>

                {/* Button */}
                <button className="w-full h-[56px] bg-black text-white font-bold rounded-[12px] mt-4">
                    Click For a CallBack
                </button>
            </div>
        </div>
    );
}

export default DetailForm;