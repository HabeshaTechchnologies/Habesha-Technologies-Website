import React from 'react'

type Props = {}

const Blog = (props: Props) => {
  return (
    <div>
        <div className="tp-blog-area pt-110 p-relative pb-120">
               <div className="container-fluid container-1524">
                  <div className="row gx-50">
                     <div className="col-12">
                        <div className="tp-team-it-big-title tp-text-perspective" data-delay=".5" data-fade-from="top" data-ease="bounce">
                           <h2 className="tp-ff-inter ls-m-2 lh-1">Our Blog</h2>
                        </div>
                     </div>
                     <div className="col-xl-5 col-lg-6 col-md-8">
                        <div className="tp-team-it-title-wrap mb-40 p-relative">
                           <span className="tp-about-it-blur"></span>
                           <span className="tp-section-it-subtitle d-inline-block tp-ff-inter fw-600 tp-text-common-black-1 fs-18 mb-30"> Our blog</span>
                           <h2 className="tp-text-revel-anim fix tp-text-common-black-1 fs-60 fs-xl-50 fs-lg-44 fs-xs-38 tp-ff-inter tp-text-common-black-1 mb-30">Our Experts Team<br/>  Is Always Ready To<br/>  Help You</h2>
                           <p className="tp-section-it-para tp-text-common-black-4 tp-ff-inter lh-150-per tp-text-common-black-4 fs-18 mb-35">Habesha Technologies delivered exactly what we needed — efficient, reliable,<br/>  and results- driven solutions. We’ve seen measurable.</p>
                           <a href="blog-grid-2-light.html" className="tp-btn-cst d-inline-block mr-5 lh-0 tp-round-26 fs-16 tp-bg-common-green-2 ls-m-2 text-uppercase tp-btn-switch-animation tp-text-common-black-1 fw-700 tp-ff-inter">
                              <span className="d-flex align-items-center justify-content-center">
                                 <span className="btn-text">See All Blog</span>
                                 <span className="btn-icon">
                                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M8 11L13 6M13 6L8 1M13 6H1" stroke="#10302A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                 </span>
                                 <span className="btn-icon">
                                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M8 11L13 6M13 6L8 1M13 6H1" stroke="#10302A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                 </span>
                              </span> 
                           </a>
                        </div>
                     </div>
                     <div className="col-xl-7">
                        <div className="tp-blog-it-item-right">
                           <div className="row gx-50">
                              <div className="col-lg-6 col-md-6">
                                 <div className="tp-blog-item tp-blog-it-item tp--hover-item mb-40 tp_fade_anim" data-delay=".3">
                                    <a href="blog-details-2-light.html" className="tp-blog-thumb d-block p-relative fix d-inline-block">
                                       <div className="tp--hover-img" data-displacement="assets/img/imghover/stripe-mul.png" data-intensity="0.2" data-speedin="1" data-speedout="1">
                                          <img className="w-100" src="assets/img/blog/it/thumb.jpg" alt=""/>
                                       </div>
                                    </a>
                                    <div className="tp-blog-content">
                                       <div className="tp-blog-meta mb-25">
                                          <span>Web Design</span>
                                          <span className="borders"></span>
                                          <span>02 Feb, 2025</span>
                                       </div>
                                       <h3 className="fs-28 tp-ff-inter tp-text-common-black-1"><a className="underline-black" href="blog-details-2-light.html">Mastering customer journeys with marketing.</a></h3>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                 <div className="tp-blog-item tp-blog-it-item tp--hover-item mb-40 mt-45 tp_fade_anim" data-delay=".5">
                                    <a href="blog-details-2-light.html" className="tp-blog-thumb d-block p-relative fix d-inline-block">
                                       <div className="tp--hover-img" data-displacement="assets/img/imghover/stripe-mul.png" data-intensity="0.2" data-speedin="1" data-speedout="1">
                                          <img className="w-100" src="assets/img/blog/it/thumb-2.jpg" alt=""/>
                                       </div>
                                    </a>
                                    <div className="tp-blog-content">
                                       <div className="tp-blog-meta mb-25">
                                          <span>AI Trends</span>
                                          <span className="borders"></span>
                                          <span>02 Feb, 2025</span>
                                       </div>
                                       <h3 className="fs-28 tp-ff-inter tp-text-common-black-1"><a className="underline-black" href="blog-details-2-light.html">How to build work culture for young office?</a></h3>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
    </div>
  )
}

export default Blog