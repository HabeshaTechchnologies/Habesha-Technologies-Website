import AboutFirstSection from '@/components/about/AboutFirstSection'
import AboutSecondSection from '@/components/about/AboutSecondSection'
import AboutTextSlider from '@/components/about/AboutTextSlider'
import AboutThirdSection from '@/components/about/AboutThirdSection'
import Banner from '@/components/Banner'
import BreadCrumb from '@/components/BreadCrumb'
import Counter from '@/components/Counter'
import Parteners from '@/components/Parteners'
import TextSlider from '@/components/TextSlider'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <BreadCrumb name="About Us" />
      <AboutFirstSection />
      <Banner />
      {/* <AboutTextSlider/> */}
      <AboutThirdSection />
      <AboutSecondSection />
      <Parteners />
      <Counter />
      <TextSlider />
    </div>
  );
}

export default page