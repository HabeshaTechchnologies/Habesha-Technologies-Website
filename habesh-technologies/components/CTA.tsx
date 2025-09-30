import React from 'react'

type Props = {}

const CTA = (props: Props) => {
  return (
    <div>
        <div className="tp-cta-area tp-bg-common-green-3 pt-180 pb-170 p-relative z-index-1 fix section-m-spacing">
               <div className="mil-scale-img tp-cta-it-scale h-100"  data-value-1="1.45" data-value-2="1">
                  <img className="tp-cta-it-shape" src="assets/img/cta/shape.png" alt=""/>
                  <img className="tp-cta-it-shape-2" src="assets/img/cta/shape-2.png" alt=""/>
               </div>
               <div className="container-fluid container-1524">
                  <div className="row justify-content-center">
                     <div className="col-lg-12">
                        <div className="tp-cta-it-content text-center">
                           <h2 className="tp-ff-inter fw-600 fs-36 ls-m-4 tp-text-common-black-1 mb-30">Stay informed with our newsletter.</h2>
                           <div className="tp-cta-it-form">
                              <form action="index-it-solution-light.html#">
                                 <input className="cta-it-input mb-30 mr-20" type="text" placeholder="Enter your email"/>
                                 <button type="submit" className="tp-btn-it-xl mb-30 fw-700 fs-16 ls-m-3 text-uppercase tp-text-grey-5 tp-ff-inter tp-bg-common-black-1 tp-round-10">Subscribe Now</button>
                              </form>
                           </div>
                           <p className="tp-cta-it-trams tp-ff-inter fw-400 fs-18 ls-m-4 tp-text-common-black-1">
                              <span className="d-inline-block mr-5">
                                 <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.9993 0.280273C6.87725 0.280273 0.279297 6.87822 0.279297 15.0003C0.279297 23.1223 6.87725 29.7203 14.9993 29.7203C23.1213 29.7203 29.7193 23.1223 29.7193 15.0003C29.7193 6.87822 23.1213 0.280273 14.9993 0.280273ZM14.9993 1.56027C22.4296 1.56027 28.4393 7.56999 28.4393 15.0003C28.4393 22.4306 22.4296 28.4403 14.9993 28.4403C7.56901 28.4403 1.5593 22.4306 1.5593 15.0003C1.5593 7.56999 7.56901 1.56027 14.9993 1.56027ZM14.9993 6.04027C14.4901 6.04027 14.0017 6.24256 13.6417 6.60263C13.2816 6.9627 13.0793 7.45106 13.0793 7.96027C13.0793 8.46949 13.2816 8.95785 13.6417 9.31792C14.0017 9.67799 14.4901 9.88027 14.9993 9.88027C15.5085 9.88027 15.9969 9.67799 16.3569 9.31792C16.717 8.95785 16.9193 8.46949 16.9193 7.96027C16.9193 7.45106 16.717 6.9627 16.3569 6.60263C15.9969 6.24256 15.5085 6.04027 14.9993 6.04027ZM12.4393 12.4403V13.7203H13.0793H13.7193V22.0403H13.0793H12.4393V23.3203H13.0793H13.7193H16.2793H16.9193H17.5593V22.0403H16.9193H16.2793V12.4403H15.6393H13.0793H12.4393Z" fill="currentColor" />
                                 </svg>
                              </span>
                              By sending the from you agree to the <a href="index-it-solution-light.html#"> Terms & Conditions </a> and <a href="index-it-solution-light.html#"> Privacy Policy. </a></p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
    </div>
  )
}

export default CTA