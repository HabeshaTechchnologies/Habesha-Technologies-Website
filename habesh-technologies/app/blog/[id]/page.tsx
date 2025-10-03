import Banner from '@/components/Banner'
import BlogDetailFirstSection from '@/components/blogs/blog-detail/BlogDetailFirstSection'
import BlogDetailSecondSection from '@/components/blogs/blog-detail/BlogDetailSecondSection'
import TextSlider from '@/components/TextSlider'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <BlogDetailFirstSection/>
        <Banner/>
        <BlogDetailSecondSection/>
        <TextSlider/>
    </div>
  )
}

export default page