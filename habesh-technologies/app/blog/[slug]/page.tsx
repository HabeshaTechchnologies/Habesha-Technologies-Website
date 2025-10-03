import Banner from '@/components/Banner'
import BlogDetailFirstSection from '@/components/blogs/blog-detail/BlogDetailFirstSection'
import BlogDetailSecondSection from '@/components/blogs/blog-detail/BlogDetailSecondSection'
import BreadCrumb from '@/components/BreadCrumb'
import TextSlider from '@/components/TextSlider'
import React from 'react'

type Props = {
  params: { slug: string };
};

const page = ({ params }: Props) => {
  const { slug } = params;

  return (
    <div>
      <BreadCrumb name="Blog Details" />
      <Banner />
      <BlogDetailSecondSection params={{ slug }} />
      <TextSlider />
    </div>
  );
};

export default page