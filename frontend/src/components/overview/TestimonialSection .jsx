import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "Wosol has been a game-changer for our business. The user-friendly interface and powerful features have streamlined our processes, allowing us to focus more on growth and less on technical issues. Highly recommend!",
    author: "John D.",
  },
  {
    quote:
      "The support team at Wosol is exceptional. Whenever we've had questions or needed assistance, they’ve been prompt and incredibly helpful. It’s refreshing to work with a company that genuinely cares about its clients.",
    author: "Sarah M.",
  },
  {
    quote:
      "We’ve seen a significant improvement in efficiency since we started using Wosol. The integration with our existing systems was seamless, and the results speak for themselves. It’s a fantastic tool for any modern business.",
    author: "Michael B.",
  },
];

const TestimonialSection = () => {
  return (
    <div className="max-w-[1420px] h-[424px] gap-[40px] mx-auto mt-[100px] flex flex-col ">
      {/* heading */}
      <div className="h-[108px] gap-[8px] text-center flex flex-col justify-start">
        <h3 className="text-[#1C4160] text-[24px] font-bold">TESTIMONIALS</h3>
        <h2 className="text-[#04080B] text-[48px] font-bold">
          TRANSFORMATIVE  EXPERIENCES WITH WOSOL
        </h2>
      </div>
      {/* Bottom */}
      <div className="flex flex-wrap lg:flex-nowrap gap-6 justify-center">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-full lg:w-[457px] h-[266px] bg-[#FCFCFC] p-6 rounded-lg shadow-md flex flex-col gap-[24px]"
          >
            <div className="w-[48px] h-[48px] flex items-center justify-center bg-[#E96F50] text-[#1C4160] text-2xl rounded-full">
            <FaQuoteLeft/>
            </div>
            <p className="text-[#1C4160] text-sm italic leading-6">
              {testimonial.quote}
            </p>
            <h4 className="text-[#04080B] text-lg font-semibold">
              {testimonial.author}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
