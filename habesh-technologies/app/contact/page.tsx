import ContactFirstSection from '@/components/contact/ContactFirstSection'
import ContactMap from '@/components/contact/ContactMap'
import TextSlider from '@/components/TextSlider'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <ContactFirstSection/>
        <ContactMap/>
        <TextSlider/>
    </div>
  )
}

export default page