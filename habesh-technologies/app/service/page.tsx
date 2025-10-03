import Banner from '@/components/Banner'
import ServiceFirstSection from '@/components/service/ServiceFirstSection'
import ServiceSecondSection from '@/components/service/ServiceSecondSection'
import ServiceThirdSection from '@/components/service/ServiceThirdSection'
import Testimonial from '@/components/Testimonial'
import TextSlider from '@/components/TextSlider'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <ServiceFirstSection/>
        <Banner/>
        <ServiceSecondSection/>
        <ServiceThirdSection/>
        <Testimonial/>
        <TextSlider/>
    </div>
  )
}

export default page