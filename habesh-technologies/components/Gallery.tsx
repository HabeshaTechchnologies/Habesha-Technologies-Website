import React from 'react'

type Props = {}

const Gallery = (props: Props) => {
  return (
    <div>
        <div className="tp-gallery-it-area fix">
               <div className="container-fluid p-0">
                  <div className="row gx-10">
                     <div className="col-lg-6">
                        <div className="row gx-10">
                           <div className="col-lg-6 col-md-6 mb-10">
                              <div className="tp-gallery-it-thumb-main tp-bg-common-green-3 p-relative fix h-100" data-background="assets/img/gallery/thumb-2.jpg">
                                 <div className="tp-gallery-it-item-wrap">
                                    <div className="tp-gallery-it-item-icon mb-20">
                                       <span>
                                          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <circle opacity="0.1" cx="20" cy="20" r="20" fill="#10302A" />
                                             <path d="M26.9378 27.1129L21.2946 12.4752C21.195 12.1901 20.9295 12 20.5975 12H19.668C19.3693 12 19.0705 12.1901 18.971 12.4436L13.2946 27.1129C13.195 27.398 12.8963 27.5564 12.5975 27.5564H12V28H15.0539V27.5564H14.888C14.39 27.5564 14.0249 27.0812 14.1909 26.6059L17.4108 18.1149C17.6432 17.4812 18.5726 17.5129 18.805 18.1149L21.7925 26.6059C21.9585 27.0495 21.5934 27.5248 21.0954 27.5248V27.9683H28V27.5248H27.6349C27.3029 27.5881 27.0373 27.398 26.9378 27.1129Z" fill="#10302A" />
                                          </svg>
                                       </span>
                                    </div>
                                    <h4 className="tp-gallery-it-title tp-ff-inter fw-600 fs-30 fs-lg-25 ls-m-6 tp-text-common-black-1">Unique and<br/> New Business Tips</h4>
                                    <div className="tp-gallery-it-btn-box">
                                       <span className="tp-ff-inter fw-600 fs-16 ls-m-4 tp-text-common-black-1">42k people</span>
                                       <a href="https://html.aqlova.com/aleric-demo/aleric/contact.html" className="tp-left-right tp-ff-inter fw-600 fs-16 ls-m-4 tp-text-common-black-1">
                                          <span className="td-text d-inline-block mr-5">Explore</span>
                                          <span className="tp-arrow-angle">
                                             <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M2.41379 3.30208C5.97452 3.05821 10.6092 1.55558 14 0C12.4438 3.39014 10.9406 8.02425 10.6973 11.585L8.35765 6.59331L1.14783 13.8037C1.02165 13.9295 0.850656 14.0001 0.672431 14C0.539461 14 0.409486 13.9605 0.298934 13.8866C0.188382 13.8128 0.102217 13.7077 0.0513353 13.5849C0.000453949 13.462 -0.0128613 13.3269 0.013072 13.1965C0.0390053 13.066 0.103024 12.9462 0.197034 12.8522L7.40683 5.64241L2.41379 3.30208Z" fill="currentColor" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M2.41379 3.30208C5.97452 3.05821 10.6092 1.55558 14 0C12.4438 3.39014 10.9406 8.02425 10.6973 11.585L8.35765 6.59331L1.14783 13.8037C1.02165 13.9295 0.850656 14.0001 0.672431 14C0.539461 14 0.409486 13.9605 0.298934 13.8866C0.188382 13.8128 0.102217 13.7077 0.0513353 13.5849C0.000453949 13.462 -0.0128613 13.3269 0.013072 13.1965C0.0390053 13.066 0.103024 12.9462 0.197034 12.8522L7.40683 5.64241L2.41379 3.30208Z" fill="currentColor" />
                                             </svg>
                                          </span>
                                       </a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-6 col-md-6 mb-10">
                              <div className="tp-gallery-it-thumb fix scale-up-img h-100">
                                 <img className="w-100 scale-up h-100" src="assets/img/gallery/thumb-3.jpg" alt=""/>
                              </div>
                           </div>
                           <div className="col-lg-6 col-md-6 mb-10">
                              <div className="tp-gallery-it-thumb fix scale-up-img h-100">
                                 <img className="w-100 scale-up h-100" src="assets/img/gallery/thumb-4.jpg" alt=""/>
                              </div>
                           </div>
                           <div className="col-lg-6 col-md-6 mb-10">
                              <div className="tp-gallery-it-thumb fix scale-up-img h-100">
                                 <img className="w-100 scale-up h-100" src="assets/img/gallery/thumb-5.jpg" alt=""/>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-6 mb-10">
                        <div className="tp-gallery-it-thumb fix scale-up-img h-100">
                           <img className="w-100 scale-up h-100" src="assets/img/gallery/thumb.jpg" alt=""/>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
    </div>
  )
}

export default Gallery