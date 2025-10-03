import AboutFirstSection from '@/components/about/AboutFirstSection'
import AboutSecondSection from '@/components/about/AboutSecondSection'
import AboutThirdSection from '@/components/about/AboutThirdSection'
import Counter from '@/components/Counter'
import Parteners from '@/components/Parteners'
import TextSlider from '@/components/TextSlider'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <AboutFirstSection/>
        <AboutSecondSection/>
        <Parteners/>
        <AboutThirdSection/>
        <Counter/>
        <TextSlider/>
    </div>
  )
}

export default page