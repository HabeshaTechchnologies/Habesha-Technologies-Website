import React from 'react'

type Props = {}

const Banner = (props: Props) => {
  return (
    <div>
        <div className="tp-banner-area fix scale-up-img tp-bg-common-green-3">
               <div className="box tp-banner-it-thumb">
                  <img data-speed=".8" className="img-cover scale-up" src="assets/img/banner/it/bg.jpg" alt=""/>
               </div>
            </div>
    </div>
  )
}

export default Banner