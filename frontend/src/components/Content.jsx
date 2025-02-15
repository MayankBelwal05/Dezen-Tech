import Faq from "./overview/Faq";
import Keyfeatures from "./overview/Keyfeatures";
import Overview from "./overview/Overview";
import StepsSection from "./overview/StepsSection";
import TestimonialSection from "./overview/TestimonialSection ";
import Whytochoose from "./overview/Whytochoose";

const Content = () => {
  return (
    <div className="w-[1420px] gap-[100px] relative left-[250px] ">
      <Overview />
      <Keyfeatures />
      <Whytochoose />
      <StepsSection />
      <Faq />
      <TestimonialSection />
    </div>
  );
};

export default Content;
