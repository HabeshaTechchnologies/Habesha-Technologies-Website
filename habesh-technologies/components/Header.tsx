import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
        <div id="header-sticky" className="tp-header-area pre-header tp-header-it-wrap sticky-white-bg tp-header-blur header-transparent tp-header-lg-spacing">
         <div className="container-fluid container-1524">
            <div className="tp-header-it-bg">
               <div className="row align-items-center">
                  <div className="col-xxl-3 col-xl-2 col-lg-4 col-md-4 col-sm-4 col-6">
                     <div className="tp-header-logo">
                        <a href="index.html"><img data-width="150" src="assets/img/habesha/habesha-logo-removebg.png" alt="logo"/></a>
                     </div>
                  </div>
                  <div className="col-xxl-6 col-xl-7 d-none d-xl-block">
                     <div className="tp-main-menu tp-main-menu-it tp-header-dropdown dropdown-white-bg d-flex justify-content-center">
                        <nav className="tp-mobile-menu-active">
                           <ul>
                              <li className="has-dropdown p-inherit">
                                 <a href="index.html">Demo
                                    <span>
                                       <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M2.7 4.93333L0.2 1.6C-0.294427 0.940764 0.175955 0 1 0H6C6.82405 0 7.29443 0.940764 6.8 1.6L4.3 4.93333C3.9 5.46667 3.1 5.46667 2.7 4.93333Z" fill="currentColor" />
                                       </svg>
                                    </span>
                                 </a>
                              </li>
                              <li className="has-dropdown p-inherit">
                                 <a href="portfolio-details-light.html">Portfolio
                                    <span>
                                       <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M2.7 4.93333L0.2 1.6C-0.294427 0.940764 0.175955 0 1 0H6C6.82405 0 7.29443 0.940764 6.8 1.6L4.3 4.93333C3.9 5.46667 3.1 5.46667 2.7 4.93333Z" fill="currentColor" />
                                       </svg>
                                    </span>
                                 </a>
                              </li>
                              
                              <li className="has-dropdown">
                                 <a href="blog-details-light.html">Blog
                                    <span>
                                       <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M2.7 4.93333L0.2 1.6C-0.294427 0.940764 0.175955 0 1 0H6C6.82405 0 7.29443 0.940764 6.8 1.6L4.3 4.93333C3.9 5.46667 3.1 5.46667 2.7 4.93333Z" fill="currentColor" />
                                       </svg>
                                    </span>
                                 </a>
                                 {/* <!-- <ul className="tp-submenu submenu">
                                    <li><a href="blog-grid-light.html">Blog Grid</a></li>
                                    <li><a href="blog-grid-2-light.html">Blog Grid Two</a></li>
                                    <li><a href="blog-standard-light.html">Blog Standard</a></li>
                                    <li><a href="blog-details-light.html">Blog Details</a></li>
                                    <li><a href="blog-details-2-light.html">Blog Details Two</a></li>
                                 </ul> --> */}
                              </li>
                              <li className="has-dropdown">
                                 <a href="contact-light.html">Contact
                                    <span>
                                       <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M2.7 4.93333L0.2 1.6C-0.294427 0.940764 0.175955 0 1 0H6C6.82405 0 7.29443 0.940764 6.8 1.6L4.3 4.93333C3.9 5.46667 3.1 5.46667 2.7 4.93333Z" fill="currentColor" />
                                       </svg>
                                    </span>
                                 </a>
                                 {/* <!-- <ul className="tp-submenu submenu">
                                    <li><a href="contact-light.html">Contact</a></li>
                                    <li><a href="contact-dark.html">Contact Dark</a></li>
                                    <li><a href="contact-us-light.html">Contact Us</a></li>
                                    <li><a href="contact-us-dark.html">Contact Us Dark</a></li>
                                 </ul> --> */}
                              </li>
                           </ul>
                        </nav>
                     </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-8 col-md-8 col-sm-8 col-6">
                     <div className="tp-header-right d-flex align-items-center justify-content-end">
                        <div className="tp-header-btn d-none d-sm-inline-block">
                           <a href="register-light.html" className="tp-btn-lg tp-header-it-btn d-inline-block tp-bg-common-black-1 tp-text-grey-5 lh-1 tp-round-26 fs-16 fw-600 tp-ff-inter">Contact Us</a>
                        </div>
                        {/* <button className="tp-menu-bar tp-header-sidebar-btn tp-header-2-menu-btn tp-header-it-menu-btn ml-20">
                           <span></span>
                           <span></span>
                           <span></span>
                        </button>  */}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Header