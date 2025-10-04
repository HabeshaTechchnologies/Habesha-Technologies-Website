import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div>
      <div className="tp-footer-area tp-bg-common-black p-relative z-index-1 pt-120 fix">
        <div className="tp-footer-wd-main pb-40">
          <div className="tp-footer-top pb-30">
            <div className="container">
              <div className="row align-items-end">
                <div className="col-lg-9">
                  <div className="tp-footer-top-social-wrap mb-30">
                    <span
                      className="tp-footer-top-subtitle tp-text-theme-primary fw-500 fs-18 tp-ff-heading tp_fade_anim"
                      data-delay=".3"
                    >
                      Ready to Start a Project?
                      <svg
                        className="ml-20"
                        width="74"
                        height="12"
                        viewBox="0 0 74 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M65.416 11.8926L73.62 6.76034C73.7367 6.67779 73.8325 6.56504 73.8989 6.43228C73.9652 6.29953 73.9999 6.15095 73.9999 6C73.9999 5.84905 73.9652 5.70048 73.8989 5.56772C73.8325 5.43496 73.7367 5.32221 73.62 5.23966L65.416 0.107354C65.2561 0.0134291 65.0719 -0.0202036 64.8925 0.0117582C64.713 0.04372 64.5485 0.139459 64.4248 0.28388C64.3011 0.428302 64.2254 0.613192 64.2094 0.809402C64.1935 1.00561 64.2383 1.20198 64.3369 1.36755L66.7161 5.11998L0.812592 5.11998C0.597076 5.11998 0.390396 5.21269 0.238007 5.37773C0.0856171 5.54277 0 5.7666 0 6C0 6.2334 0.0856171 6.45724 0.238007 6.62227C0.390396 6.78731 0.597076 6.88003 0.812592 6.88003L66.7161 6.88003L64.3369 10.6325C64.2383 10.798 64.1935 10.9944 64.2094 11.1906C64.2254 11.3868 64.3011 11.5717 64.4248 11.7161C64.5485 11.8605 64.713 11.9563 64.8925 11.9882C65.0719 12.0202 65.2561 11.9866 65.416 11.8926Z"
                          fill="#C4EE18"
                        ></path>
                      </svg>
                    </span>
                    <h2 className="tp-footer-top-title tp-text-common-white text-uppercase fw-500 rotate-text-anim">
                      <a href="contact-light.html">Let’s Talk</a>
                    </h2>
                    <div
                      className="tp-footer-social tp_fade_anim"
                      data-delay=".4"
                      data-fade-from="bottom"
                      data-ease="bounce"
                    >
                      <ul>
                        <li>
                          <a href="https://www.linkedin.com/company/habesha-technologies/">
                            <i className="fa-brands fa-linkedin"></i>
                            LinkedIn
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/Habesha_Tech">
                            <i className="fa-brands fa-x-twitter"></i>
                            Twitter
                          </a>
                        </li>
                        <li>
                          <a href="https://www.facebook.com/HabeshaTechPlc">
                            <i className="fa-brands fa-facebook-f"></i>
                            Facebook
                          </a>
                        </li>
                        <li>
                          <a href="https://t.me/HabeshaTechnologiesPLC">
                            <i className="fa-brands fa-telegram"></i>
                            Telegram
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div
                    className="tp-rounded-btn-wrap tp-footer-btn text-lg-end mb-40 tp_fade_anim"
                    data-delay=".5"
                    data-fade-from="top"
                    data-ease="bounce"
                  >
                    <div className="btn_wrapper d-inline-block">
                      <a href="/contact" className="tp-btn-rounded btn-item">
                        <span className="d-block mb-10">
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M11.3791 3.0269C14.6431 2.80336 18.8916 1.42595 21.9998 0C20.5732 3.10763 19.1953 7.35556 18.9723 10.6196L16.8276 6.04382L1.05193 21.82C0.936264 21.9354 0.779526 22.0001 0.616152 22C0.494263 22 0.375118 21.9638 0.273781 21.8961C0.172441 21.8284 0.0934544 21.7321 0.046814 21.6195C0.000171661 21.5069 -0.0120335 21.383 0.0117397 21.2634C0.035511 21.1439 0.0941944 21.034 0.18037 20.9478L15.956 5.17221L11.3791 3.0269Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        Start the Journey
                        <i className="tp-btn-circle-dot"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid container-1524">
            <div className="row mb-35">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div
                  className="tp-footer-widget tp-footer-cst-widget mb-45 tp_fade_anim"
                  data-delay=".3"
                >
                  <div className="tp-footer-logo mb-35">
                    <a href="/">
                      <img
                        data-width="150"
                        src="/assets/img/habesha/habesha-logo-white-text.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <p className="tp-footer-it-dec tp-text-grey-5 fs-18 tp-ff-inter lh-150-per mb-25">
                    Habesha Technologies – Global Digital Solutions Agency Since{" "}
                    <br /> 2018 Providing Smart Web, App, ERP & System
                    Solutions.
                  </p>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <div
                  className="tp-footer-wd-widget tp-footer-cst-widget tp-footer-it-widget mb-40 ml-45 tp_fade_anim"
                  data-delay=".5"
                >
                  <h3 className="tp-footer-widget-title tp-ff-inter fs-24 ls-m-4 fw-600 mb-30 tp-text-common-white">
                    Company
                  </h3>
                  <ul>
                    <li>
                      <a href="/home">Home</a>
                    </li>
                    <li>
                      <a href="/about">About Us</a>
                    </li>
                    <li>
                      <a href="/service">Our Work</a>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div
                  className="tp-footer-wd-widget tp-footer-cst-widget tp-footer-it-widget ml-115 mb-40 tp_fade_anim"
                  data-delay=".7"
                >
                  <h3 className="tp-footer-widget-title tp-ff-inter fs-24 ls-m-4 fw-600 mb-30 tp-text-common-white">
                    Solutions
                  </h3>
                  <ul>
                    <li>
                      <a href="/service">Web & App Development</a>
                    </li>
                    <li>
                      <a href="/service">ERP & Systems</a>
                    </li>
                    <li>
                      <a href="/service">Web Design</a>
                    </li>
                    <li>
                      <a href="/service">Digital Marketing</a>
                    </li>
                    <li>
                      <a href="/service">Custom Solutions</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div
                  className="tp-footer-it-widget mb-40 ml-80 tp_fade_anim"
                  data-delay=".9"
                >
                  <h3 className="tp-footer-widget-title tp-ff-inter fs-24 ls-m-4 fw-600 mb-30 tp-text-common-white">
                    Contact
                  </h3>
                  <a
                    className="tp-text-grey-5 opacity-8 tp-ff-inter fs-18 ls-m-2 lh-140-per hover-opacity-1 hover-text-white d-block mb-45"
                    href="https://www.google.com/maps"
                  >
                    CMC - MERI LOKE /WOSSEN ROAD , KIDUS MICHAEL BUILDING
                  </a>
                  <a
                    className="tp-ff-inter fs-18 lh-140-per ls-m-2 tp-text-grey-5 opacity-8 hover-opacity-1 hover-text-white d-block mb-45"
                    href="mailto:info@habeshatechnologies.com"
                  >
                    info@habeshatechnologies.com
                  </a>
                  <a
                    className="tp-ff-inter fw-600 fs-18 lh-140-per ls-m-2 tp-text-grey-5 opacity-8 hover-opacity-1 hover-text-white"
                    href="tel:+251985162424"
                  >
                    +251 985 162 424
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-footer-cst-bottom tp-footer-it-bottom">
          <div className="container-fluid container-1524">
            <div className="row">
              <div className="col-lg-6 col-md-7">
                <div className="tp-footer-copyright">
                  <p className="tp-footer-it-copyright mb-10 tp-text-grey-5 tp-ff-inter">
                    <span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="..." fill="#999999" />
                      </svg>
                    </span>
                    Copyright 2025{" "}
                    <a href="/" className="underline-white">
                      Habesha Technologies
                    </a>
                    . All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
