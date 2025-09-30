import About from '@/components/About';
import Banner from '@/components/Banner';
import Blog from '@/components/Blog';
import Counter from '@/components/Counter';
import CTA from '@/components/CTA';
import Gallery from '@/components/Gallery';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Process from '@/components/Process';
import Service from '@/components/Service';
import Team from '@/components/Team';
import Testimonial from '@/components/Testimonial';
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main>
          <Hero />
          <Banner/>
          <About/>
          <Counter/>
          <Service/>
          <Process/>
          <Portfolio/>
          {/* <Team/> */}
          <Testimonial/>
          {/* <Gallery/> */}
          <Blog/>
          <CTA/>
        </main>
      </div>
    </div>
  );
}

export default page