import Banner from '@/components/Banner'
import BlogFirstSection from '@/components/blogs/BlogFirstSection'
import BlogGrid from '@/components/blogs/BlogGrid'
import TextSlider from '@/components/TextSlider'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <BlogFirstSection/>
      <Banner/>
      <BlogGrid/>
      <TextSlider/>
    </div>
  )
}

export default page