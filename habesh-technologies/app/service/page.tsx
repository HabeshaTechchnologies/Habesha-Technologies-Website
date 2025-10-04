import AboutThirdSection from "@/components/about/AboutThirdSection";
import Banner from "@/components/Banner";
import BreadCrumb from "@/components/BreadCrumb";
import Process from "@/components/Process";
import ServiceFirstSection from "@/components/service/ServiceFirstSection";
import ServiceSecondSection from "@/components/service/ServiceSecondSection";
import ServiceThirdSection from "@/components/service/ServiceThirdSection";
import Testimonial from "@/components/Testimonial";
import TextSlider from "@/components/TextSlider";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <BreadCrumb name="Services" />
      <ServiceFirstSection />
      <Banner />
      <ServiceSecondSection />
      {/* <ServiceThirdSection/> */}
      <AboutThirdSection />
      <Process/>
      <Testimonial />
      <TextSlider />
    </div>
  );
};

export default page;
