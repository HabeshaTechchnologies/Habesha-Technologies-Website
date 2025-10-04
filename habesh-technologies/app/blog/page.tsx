import Banner from '@/components/Banner'
import BlogFirstSection from '@/components/blogs/BlogFirstSection'
import BlogGrid from '@/components/blogs/BlogGrid'
import BreadCrumb from '@/components/BreadCrumb'
import TextSlider from '@/components/TextSlider'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <BreadCrumb name="Blog's"/>
      <BlogFirstSection/>
      <Banner/>
      <BlogGrid/>
      <TextSlider/>
    </div>
  )
}

export default page