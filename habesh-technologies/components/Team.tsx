import React from 'react'

type Props = {}

const Team = (props: Props) => {
  return (
    <div>
        <div className="tp-team-area pt-120 p-relative pb-115 z-index-1">
               <img className="tp-team-it-shape" data-speed="0.8" src="assets/img/team/it/shape.png" alt=""/>
               <div className="container-fluid container-1524">
                  <div className="row gx-50">
                     <div className="col-12">
                        <div className="tp-team-it-big-title tp-text-perspective">
                           <h2 className="tp-ff-inter ls-m-2 lh-1">Our Team</h2>
                        </div>
                     </div>
                     <div className="col-lg-5 col-md-8">
                        <div className="tp-team-it-title-wrap mb-40 p-relative">
                           <span className="tp-about-it-blur"></span>
                           <span className="tp-section-it-subtitle d-inline-block tp-ff-inter fw-600 tp-text-common-black-1 fs-18 mb-30"> What I Do</span>
                           <h2 className="tp-text-revel-anim fix tp-text-common-black-1 fs-60 fs-xl-50 fs-lg-44 fs-xs-38 tp-ff-inter tp-text-common-black-1 mb-30">Our Experts Team<br/>  Is Always Ready To<br/>  Help You</h2>
                           <p className="tp-section-it-para tp-text-common-black-4 tp-ff-inter lh-150-per tp-text-common-black-4 fs-18 mb-35">“Aleric delivered exactly what we needed — efficient, reliable,<br/>  and results- driven solutions. We’ve seen measurable.</p>
                           <a href="team-light.html" className="tp-btn-cst d-inline-block mr-5 lh-0 tp-round-26 fs-16 tp-bg-common-green-2 ls-m-2 text-uppercase tp-btn-switch-animation tp-text-common-black-1 fw-700 tp-ff-inter">
                              <span className="d-flex align-items-center justify-content-center">
                                 <span className="btn-text">Explore More</span>
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
                        <div className="row justify-content-end">
                           <div className="col-lg-7 d-md-none d-lg-inline-block">
                              <div className="tp-team-it-item-single mb-45 tp_fade_anim" data-delay=".7">
                                 <div className="tp-team-it-item">
                                    <a className="tp-team-it-thumb" href="team-details-light.html">
                                       <img src="assets/img/team/it/thumb-3.png" alt=""/>
                                    </a>
                                    <div className="tp-team-it-content p-relative">
                                       <div className="tp-team-it-socials">
                                          <div className="tp-team-it-socials-trigger">
                                             <span className="tp-team-it-socials-share">
                                                <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <path d="M5.68005 11.2873C5.41131 10.8172 4.9896 10.4471 4.48112 10.2352C3.97264 10.0233 3.40618 9.98159 2.87065 10.1165C2.33512 10.2515 1.86085 10.5555 1.52228 10.9808C1.1837 11.4062 1 11.9288 1 12.4666C1 13.0044 1.1837 13.527 1.52228 13.9523C1.86085 14.3777 2.33512 14.6817 2.87065 14.8166C3.40618 14.9516 3.97264 14.9098 4.48112 14.6979C4.9896 14.486 5.41131 14.116 5.68005 13.6459M5.68005 11.2873C5.87983 11.6368 5.99415 12.0382 5.99415 12.4666C5.99415 12.8949 5.87983 13.2974 5.68005 13.6459M5.68005 11.2873L16.2973 5.55355M5.68005 13.6459L16.2973 19.3796M16.2973 5.55355C16.4529 5.83855 16.6655 6.09052 16.9225 6.29473C17.1795 6.49894 17.4758 6.6513 17.7941 6.74288C18.1123 6.83447 18.4462 6.86346 18.7761 6.82814C19.1061 6.79283 19.4255 6.69392 19.7156 6.53721C20.0058 6.3805 20.2609 6.16913 20.466 5.91545C20.6712 5.66178 20.8223 5.37089 20.9104 5.05979C20.9986 4.74869 21.022 4.42363 20.9795 4.10361C20.9369 3.78359 20.8291 3.47503 20.6624 3.19598C20.334 2.64606 19.7967 2.24338 19.1661 2.0745C18.5355 1.90561 17.8619 1.984 17.2901 2.29282C16.7183 2.60164 16.294 3.11622 16.1083 3.72596C15.9226 4.33571 15.9905 4.99192 16.2973 5.55355ZM16.2973 19.3796C16.1379 19.6584 16.0367 19.9649 15.9992 20.2818C15.9618 20.5986 15.9889 20.9195 16.079 21.2261C16.1692 21.5328 16.3205 21.8192 16.5245 22.0689C16.7285 22.3187 16.9811 22.527 17.2678 22.6818C17.5546 22.8367 17.87 22.9351 18.1959 22.9715C18.5218 23.0079 18.8518 22.9816 19.1673 22.894C19.4827 22.8063 19.7773 22.6592 20.0342 22.4609C20.2911 22.2626 20.5054 22.017 20.6647 21.7383C20.9864 21.1752 21.0649 20.511 20.8829 19.8917C20.7008 19.2724 20.2732 18.7488 19.6941 18.436C19.1149 18.1233 18.4317 18.047 17.7946 18.2239C17.1576 18.4009 16.619 18.8166 16.2973 19.3796Z" stroke="#F3F1F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                             </span>
                                          </div>
                                          <div className="tp-team-it-socials-wrapper">
                                             <ul className="tp-team-it-socials-icon">
                                                <li><a href="index-it-solution-light.html#"><i className="fa-brands fa-pinterest"></i></a></li>
                                                <li><a href="index-it-solution-light.html#"><i className="fa-brands fa-linkedin"></i></a></li>
                                                <li><a href="index-it-solution-light.html#"><i className="fa-brands fa-instagram"></i></a></li>
                                                <li><a href="index-it-solution-light.html#"><i className="fa-brands fa-facebook"></i></a></li>
                                             </ul>
                                          </div>
                                       </div>
                                       <h3 className="fw-600 fs-28 fs-lg-25 ls-m-4 tp-ff-inter tp-text-common-black-1"><a href="team-details-light.html" className="underline-black">James Carter</a></h3>
                                       <span className="tp-text-common-black-4 ls-m-2 tp-ff-inter">Economy Manager</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-7">
                        <div className="tp-team-it-item-right ml-65">
                           <div className="row gx-50">
                              <div className="col-lg-6 col-md-6">
                                 <div className="tp-team-it-item mb-45 tp_fade_anim" data-delay=".3">
                                    <a className="tp-team-it-thumb" href="team-details-light.html">
                                       <img src="assets/img/team/it/thumb.png" alt=""/>
                                    </a>
                                    <div className="tp-team-it-content p-relative">
                                       <div className="tp-team-it-socials">
                                          <div className="tp-team-it-socials-trigger">
                                             <span className="tp-team-it-socials-share">
                                                <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <path d="M5.68005 11.2873C5.41131 10.8172 4.9896 10.4471 4.48112 10.2352C3.97264 10.0233 3.40618 9.98159 2.87065 10.1165C2.33512 10.2515 1.86085 10.5555 1.52228 10.9808C1.1837 11.4062 1 11.9288 1 12.4666C1 13.0044 1.1837 13.527 1.52228 13.9523C1.86085 14.3777 2.33512 14.6817 2.87065 14.8166C3.40618 14.9516 3.97264 14.9098 4.48112 14.6979C4.9896 14.486 5.41131 14.116 5.68005 13.6459M5.68005 11.2873C5.87983 11.6368 5.99415 12.0382 5.99415 12.4666C5.99415 12.8949 5.87983 13.2974 5.68005 13.6459M5.68005 11.2873L16.2973 5.55355M5.68005 13.6459L16.2973 19.3796M16.2973 5.55355C16.4529 5.83855 16.6655 6.09052 16.9225 6.29473C17.1795 6.49894 17.4758 6.6513 17.7941 6.74288C18.1123 6.83447 18.4462 6.86346 18.7761 6.82814C19.1061 6.79283 19.4255 6.69392 19.7156 6.53721C20.0058 6.3805 20.2609 6.16913 20.466 5.91545C20.6712 5.66178 20.8223 5.37089 20.9104 5.05979C20.9986 4.74869 21.022 4.42363 20.9795 4.10361C20.9369 3.78359 20.8291 3.47503 20.6624 3.19598C20.334 2.64606 19.7967 2.24338 19.1661 2.0745C18.5355 1.90561 17.8619 1.984 17.2901 2.29282C16.7183 2.60164 16.294 3.11622 16.1083 3.72596C15.9226 4.33571 15.9905 4.99192 16.2973 5.55355ZM16.2973 19.3796C16.1379 19.6584 16.0367 19.9649 15.9992 20.2818C15.9618 20.5986 15.9889 20.9195 16.079 21.2261C16.1692 21.5328 16.3205 21.8192 16.5245 22.0689C16.7285 22.3187 16.9811 22.527 17.2678 22.6818C17.5546 22.8367 17.87 22.9351 18.1959 22.9715C18.5218 23.0079 18.8518 22.9816 19.1673 22.894C19.4827 22.8063 19.7773 22.6592 20.0342 22.4609C20.2911 22.2626 20.5054 22.017 20.6647 21.7383C20.9864 21.1752 21.0649 20.511 20.8829 19.8917C20.7008 19.2724 20.2732 18.7488 19.6941 18.436C19.1149 18.1233 18.4317 18.047 17.7946 18.2239C17.1576 18.4009 16.619 18.8166 16.2973 19.3796Z" stroke="#F3F1F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                             </span>
                                          </div>
                                          <div className="tp-team-it-socials-wrapper">
                                             <ul className="tp-team-it-socials-icon">
                                                <li><a href="index-it-solution-light.html#"><i className="fa-brands fa-pinterest"></i></a></li>
                                                <li><a href="index-it-solution-light.html#"><i className="fa-brands fa-linkedin"></i></a></li>
                                                <li><a href="index-it-solution-light.html#"><i className="fa-brands fa-instagram"></i></a></li>
                                                <li><a href="index-it-solution-light.html#"><i className="fa-brands fa-facebook"></i></a></li>
                                             </ul>
                                          </div>
                                       </div>
                                       <h3 className="fw-600 fs-28 fs-lg-25 ls-m-4 tp-ff-inter tp-text-common-black-1"><a href="team-details-light.html" className="underline-black">Dianne M. Mason</a></h3>
                                       <span className="tp-text-common-black-4 ls-m-2 tp-ff-inter">Legal Officer</span>
                                    </div>
                                 </div>
                                 <div className="tp-team-it-item mb-45 tp_fade_anim" data-delay=".8">
                                    <a className="tp-team-it-thumb" href="team-details-light.html">
                                       <img src="assets/img/team/it/thumb-2.png" alt=""/>
                                    </a>
                                    <div className="tp-team-it-content p-relative">
                                       <div className="tp-team-it-socials">
                                          <div className="tp-team-it-socials-trigger">
                                             <span className="tp-team-it-socials-share">
                                                <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <path d="M5.68005 11.2873C5.41131 10.8172 4.9896 10.4471 4.48112 10.2352C3.97264 10.0233 3.40618 9.98159 2.87065 10.1165C2.33512 10.2515 1.86085 10.5555 1.52228 10.9808C1.1837 11.4062 1 11.9288 1 12.4666C1 13.0044 1.1837 13.527 1.52228 13.9523C1.86085 14.3777 2.33512 14.6817 2.87065 14.8166C3.40618 14.9516 3.97264 14.9098 4.48112 14.6979C4.9896 14.486 5.41131 14.116 5.68005 13.6459M5.68005 11.2873C5.87983 11.6368 5.99415 12.0382 5.99415 12.4666C5.99415 12.8949 5.87983 13.2974 5.68005 13.6459M5.68005 11.2873L16.2973 5.55355M5.68005 13.6459L16.2973 19.3796M16.2973 5.55355C16.4529 5.83855 16.6655 6.09052 16.9225 6.29473C17.1795 6.49894 17.4758 6.6513 17.7941 6.74288C18.1123 6.83447 18.4462 6.86346 18.7761 6.82814C19.1061 6.79283 19.4255 6.69392 19.7156 6.53721C20.0058 6.3805 20.2609 6.16913 20.466 5.91545C20.6712 5.66178 20.8223 5.37089 20.9104 5.05979C20.9986 4.74869 21.022 4.42363 20.9795 4.10361C20.9369 3.78359 20.8291 3.47503 20.6624 3.19598C20.334 2.64606 19.7967 2.24338 19.1661 2.0745C18.5355 1.90561 17.8619 1.984 17.2901 2.29282C16.7183 2.60164 16.294 3.11622 16.1083 3.72596C15.9226 4.33571 15.9905 4.99192 16.2973 5.55355ZM16.2973 19.3796C16.1379 19.6584 16.0367 19.9649 15.9992 20.2818C15.9618 20.5986 15.9889 20.9195 16.079 21.2261C16.1692 21.5328 16.3205 21.8192 16.5245 22.0689C16.7285 22.3187 16.9811 22.527 17.2678 22.6818C17.5546 22.8367 17.87 22.9351 18.1959 22.9715C18.5218 23.0079 18.8518 22.9816 19.1673 22.894C19.4827 22.8063 19.7773 22.6592 20.0342 22.4609C20.2911 22.2626 20.5054 22.017 20.6647 21.7383C20.9864 21.1752 21.0649 20.511 20.8829 19.8917C20.7008 19.2724 20.2732 18.7488 19.6941 18.436C19.1149 18.1233 18.4317 18.047 17.7946 18.2239C17.1576 18.4009 16.619 18.8166 16.2973 19.3796Z" stroke="#F3F1F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                             </span>
                                          </div>
                                          <div className="tp-team-it-socials-wrapper">
                                             <ul className="tp-team-it-socials-icon">
                                                <li><a href="index-it-solution-light.html#"><i className="fa-brands fa-pinterest"></i></a></li>
                                                <li><a href="index-it-solution-light.html#"><i className="fa-brands fa-linkedin"></i></a></li>
                                                <li><a href="index-it-solution-light.html#"><i className="fa-brands fa-instagram"></i></a></li>
                                                <li><a href="index-it-solution-light.html#"><i className="fa-brands fa-facebook"></i></a></li>
                                             </ul>
                                          </div>
                                       </div>
                                       <h3 className="fw-600 fs-28 fs-lg-25 ls-m-4 tp-ff-inter tp-text-common-black-1"><a href="team-details-light.html" className="underline-black">Daniel Kim</a></h3>
                                       <span className="tp-text-common-black-4 ls-m-2 tp-ff-inter">Hr Specialist</span>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                 <div className="tp-team-it-item mb-45 mt-60 tp_fade_anim" data-delay=".5">
                                    <a className="tp-team-it-thumb" href="team-details-light.html">
                                       <img src="assets/img/team/it/thumb-4.png" alt=""/>
                                    </a>
                                    <div className="tp-team-it-content p-relative">
                                       <div className="tp-team-it-socials">
                                          <div className="tp-team-it-socials-trigger">
                                             <span className="tp-team-it-socials-share">
                                                <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <path d="M5.68005 11.2873C5.41131 10.8172 4.9896 10.4471 4.48112 10.2352C3.97264 10.0233 3.40618 9.98159 2.87065 10.1165C2.33512 10.2515 1.86085 10.5555 1.52228 10.9808C1.1837 11.4062 1 11.9288 1 12.4666C1 13.0044 1.1837 13.527 1.52228 13.9523C1.86085 14.3777 2.33512 14.6817 2.87065 14.8166C3.40618 14.9516 3.97264 14.9098 4.48112 14.6979C4.9896 14.486 5.41131 14.116 5.68005 13.6459M5.68005 11.2873C5.87983 11.6368 5.99415 12.0382 5.99415 12.4666C5.99415 12.8949 5.87983 13.2974 5.68005 13.6459M5.68005 11.2873L16.2973 5.55355M5.68005 13.6459L16.2973 19.3796M16.2973 5.55355C16.4529 5.83855 16.6655 6.09052 16.9225 6.29473C17.1795 6.49894 17.4758 6.6513 17.7941 6.74288C18.1123 6.83447 18.4462 6.86346 18.7761 6.82814C19.1061 6.79283 19.4255 6.69392 19.7156 6.53721C20.0058 6.3805 20.2609 6.16913 20.466 5.91545C20.6712 5.66178 20.8223 5.37089 20.9104 5.05979C20.9986 4.74869 21.022 4.42363 20.9795 4.10361C20.9369 3.78359 20.8291 3.47503 20.6624 3.19598C20.334 2.64606 19.7967 2.24338 19.1661 2.0745C18.5355 1.90561 17.8619 1.984 17.2901 2.29282C16.7183 2.60164 16.294 3.11622 16.1083 3.72596C15.9226 4.33571 15.9905 4.99192 16.2973 5.55355ZM16.2973 19.3796C16.1379 19.6584 16.0367 19.9649 15.9992 20.2818C15.9618 20.5986 15.9889 20.9195 16.079 21.2261C16.1692 21.5328 16.3205 21.8192 16.5245 22.0689C16.7285 22.3187 16.9811 22.527 17.2678 22.6818C17.5546 22.8367 17.87 22.9351 18.1959 22.9715C18.5218 23.0079 18.8518 22.9816 19.1673 22.894C19.4827 22.8063 19.7773 22.6592 20.0342 22.4609C20.2911 22.2626 20.5054 22.017 20.6647 21.7383C20.9864 21.1752 21.0649 20.511 20.8829 19.8917C20.7008 19.2724 20.2732 18.7488 19.6941 18.436C19.1149 18.1233 18.4317 18.047 17.7946 18.2239C17.1576 18.4009 16.619 18.8166 16.2973 19.3796Z" stroke="#F3F1F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                             </span>
                                          </div>
                                          <div className="tp-team-it-socials-wrapper">
                                             <ul className="tp-team-it-socials-icon">
                                                <li><a href="index-it-solution-light.html#"><i className="fa-brands fa-pinterest"></i></a></li>
                                                <li><a href="index-it-solution-light.html#"><i className="fa-brands fa-linkedin"></i></a></li>
                                                <li><a href="index-it-solution-light.html#"><i className="fa-brands fa-instagram"></i></a></li>
                                                <li><a href="index-it-solution-light.html#"><i className="fa-brands fa-facebook"></i></a></li>
                                             </ul>
                                          </div>
                                       </div>
                                       <h3 className="fw-600 fs-28 fs-lg-25 ls-m-4 tp-ff-inter tp-text-common-black-1"><a href="team-details-light.html" className="underline-black">Michael Thomas</a></h3>
                                       <span className="tp-text-common-black-4 ls-m-2 tp-ff-inter">CEO Themepure</span>
                                    </div>
                                 </div>
                                 <div className="tp-team-it-item mb-45 tp_fade_anim" data-delay=".9">
                                    <a className="tp-team-it-thumb" href="team-details-light.html">
                                       <img src="assets/img/team/it/thumb-5.png" alt=""/>
                                    </a>
                                    <div className="tp-team-it-content p-relative">
                                       <div className="tp-team-it-socials">
                                          <div className="tp-team-it-socials-trigger">
                                             <span className="tp-team-it-socials-share">
                                                <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <path d="M5.68005 11.2873C5.41131 10.8172 4.9896 10.4471 4.48112 10.2352C3.97264 10.0233 3.40618 9.98159 2.87065 10.1165C2.33512 10.2515 1.86085 10.5555 1.52228 10.9808C1.1837 11.4062 1 11.9288 1 12.4666C1 13.0044 1.1837 13.527 1.52228 13.9523C1.86085 14.3777 2.33512 14.6817 2.87065 14.8166C3.40618 14.9516 3.97264 14.9098 4.48112 14.6979C4.9896 14.486 5.41131 14.116 5.68005 13.6459M5.68005 11.2873C5.87983 11.6368 5.99415 12.0382 5.99415 12.4666C5.99415 12.8949 5.87983 13.2974 5.68005 13.6459M5.68005 11.2873L16.2973 5.55355M5.68005 13.6459L16.2973 19.3796M16.2973 5.55355C16.4529 5.83855 16.6655 6.09052 16.9225 6.29473C17.1795 6.49894 17.4758 6.6513 17.7941 6.74288C18.1123 6.83447 18.4462 6.86346 18.7761 6.82814C19.1061 6.79283 19.4255 6.69392 19.7156 6.53721C20.0058 6.3805 20.2609 6.16913 20.466 5.91545C20.6712 5.66178 20.8223 5.37089 20.9104 5.05979C20.9986 4.74869 21.022 4.42363 20.9795 4.10361C20.9369 3.78359 20.8291 3.47503 20.6624 3.19598C20.334 2.64606 19.7967 2.24338 19.1661 2.0745C18.5355 1.90561 17.8619 1.984 17.2901 2.29282C16.7183 2.60164 16.294 3.11622 16.1083 3.72596C15.9226 4.33571 15.9905 4.99192 16.2973 5.55355ZM16.2973 19.3796C16.1379 19.6584 16.0367 19.9649 15.9992 20.2818C15.9618 20.5986 15.9889 20.9195 16.079 21.2261C16.1692 21.5328 16.3205 21.8192 16.5245 22.0689C16.7285 22.3187 16.9811 22.527 17.2678 22.6818C17.5546 22.8367 17.87 22.9351 18.1959 22.9715C18.5218 23.0079 18.8518 22.9816 19.1673 22.894C19.4827 22.8063 19.7773 22.6592 20.0342 22.4609C20.2911 22.2626 20.5054 22.017 20.6647 21.7383C20.9864 21.1752 21.0649 20.511 20.8829 19.8917C20.7008 19.2724 20.2732 18.7488 19.6941 18.436C19.1149 18.1233 18.4317 18.047 17.7946 18.2239C17.1576 18.4009 16.619 18.8166 16.2973 19.3796Z" stroke="#F3F1F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                             </span>
                                          </div>
                                          <div className="tp-team-it-socials-wrapper">
                                             <ul className="tp-team-it-socials-icon">
                                                <li><a href="index-it-solution-light.html#"><i className="fa-brands fa-pinterest"></i></a></li>
                                                <li><a href="index-it-solution-light.html#"><i className="fa-brands fa-linkedin"></i></a></li>
                                                <li><a href="index-it-solution-light.html#"><i className="fa-brands fa-instagram"></i></a></li>
                                                <li><a href="index-it-solution-light.html#"><i className="fa-brands fa-facebook"></i></a></li>
                                             </ul>
                                          </div>
                                       </div>
                                       <h3 className="fw-600 fs-28 fs-lg-25 ls-m-4 tp-ff-inter tp-text-common-black-1"><a href="team-details-light.html" className="underline-black">Robertson Crushe</a></h3>
                                       <span className="tp-text-common-black-4 ls-m-2 tp-ff-inter">CEO Themepure</span>
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

export default Team