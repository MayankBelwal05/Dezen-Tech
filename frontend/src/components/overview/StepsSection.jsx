import React from 'react'

const StepsSection = () => {
    const steps = [
        {
            stepNo: "STEP 01",
            title: "REQUEST A QUOTE:",
            description: "Use the form below to provide project details.",
        },
        {
            stepNo: "STEP 02",
            title: "CHOOSE THE RIGHT SCAFFOLDING:",
            description: "We'll help you select the appropriate equipment.",
        },
        {
            stepNo: "STEP 03",
            title: "DELIVERY & SETUP:",
            description: "We deliver and install scaffolding on-site.",
        },
        {
            stepNo: "STEP 04",
            title: "WE DELIVER AND INSTALL SCAFFOLDING ON-SITE:",
            description: "Access 24/7 customer support during your rental.",
        },
    ];

    return (
        <div className="w-[1420px] h-[286px] mt-[100px] mx-auto flex flex-col gap-6 ">
            {/* Heading */}
            <h2 className="w-[1420px] h-[64px] text-[#04080B] font-bold text-[48px]">
                STEP-BY-STEP PROCESS
            </h2>
            {/* Steps Container */}
            <div className="w-[1420px] h-[198px] flex gap-5 items-center">
                {steps.map((step, index) => (
                    <div key={index} className="relative flex items-center">
                        {/* Card */}
                        <div className="w-[340px] h-[198px] bg-[#E96F501A] rounded-[8px] p-4 flex flex-col gap-[20px]">
                            <div className="w-[308px] h-[40px] text-[#E96F50] font-bold text-[40px]  flex items-center">
                                {step.stepNo}
                            </div>
                            <div className="w-[308px] h-[24px] text-[#04080B] font-bold text-[16px] mt-[0px]">
                                {step.title}
                            </div>
                            <div className="w-[308px] h-[42px] text-[#04080B] font-medium text-[14px]  mt-[8px]">
                                {step.description}
                            </div>
                        </div>
                        {index !== steps.length - 1 && (
                            <div className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 w-[40px] h-[40px] bg-white rounded-[8px] flex items-center justify-center shadow-md z-10">
                                ➜
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StepsSection