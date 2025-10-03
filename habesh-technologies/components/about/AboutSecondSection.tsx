import React from "react";
import Image from "next/image";

type Props = {};

const AboutSecondSection = (props: Props) => {
  return (
    <section className="tp-about-area pt-140 pb-125">
      <div className="container">
        <div className="row">
          {/* Subtitle */}
          <div className="col-xxl-5 col-xl-4 col-lg-4">
            <div
              className="tp-about-subtitle mb-30 tp_fade_anim"
              data-delay=".3"
            >
              <span className="tp-section-subtitle tp-ff-heading fw-500 tp-text-common-black fs-16">
                <span className="borders d-inline-block"></span> Who We Are
              </span>
            </div>
          </div>

          {/* About Content */}
          <div className="col-xxl-7 col-xl-8 col-lg-8">
            <div className="tp-about-content mb-30">
              <h4
                className="tp-about-title fs-50 fs-xl-45 fs-lg-35 fw-500 lh-120-per ls-0 mb-25 tp_fade_anim"
                data-delay=".5"
              >
                <span></span>
                Habesha Technologies is committed to delivering{" "}
                <strong>future-ready IT solutions</strong> that empower
                organizations.
              </h4>
              <div className="tp_fade_anim" data-delay=".6">
                <p className="tp-about-para tp-ff-heading fw-500 fs-22 tp-text-grey-1">
                  We specialize in building innovative digital systems that
                  drive growth, efficiency, and long-term success for modern
                  businesses.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="tp-about-bottom pt-40 mt-30">
          <div className="row">
            {/* Experience */}
            <div className="col-lg-3">
              <div
                className="tp-about-expreance d-flex align-items-end mb-30 tp_fade_anim"
                data-delay=".3"
              >
                <h2 className="fw-500 fs-100 p-relative d-inline-block mb-0 lh-1">
                  12 <span className="plus fs-25">+</span>
                </h2>
                <span className="tp-ff-heading fs-18 fw-700 tp-text-common-black mb-15 ml-35">
                  Years of <br /> Experience
                </span>
              </div>
            </div>

            {/* Images */}
            <div className="col-lg-2 col-md-6">
              <div
                className="tp-about-thumb text-end mb-30 tp_fade_anim"
                data-delay=".5"
              >
                <div className="tp-about-thumb-height mb-40 fix">
                  <Image
                    data-speed=".9"
                    className="img-cover"
                    src="/assets/img/about/thumb.jpg"
                    alt="Habesha Technologies Workspace"
                    width={250}
                    height={300}
                  />
                </div>
                <Image
                  className="mr-25"
                  src="/assets/img/about/shape.png"
                  alt="Habesha Technologies Shape"
                  width={120}
                  height={120}
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="tp-about-thumb tp-about-thumb-height-2 fix mb-30 tp_fade_anim"
                data-delay=".7"
              >
                <Image
                  data-speed=".9"
                  className="img-cover"
                  src="/assets/img/about/thumb-2.jpg"
                  alt="Habesha Technologies Team"
                  width={400}
                  height={400}
                />
              </div>
            </div>

            {/* Button */}
            <div className="col-lg-3">
              <div
                className="tp-rounded-btn-wrap text-md-end mr-40 mb-30 tp_fade_anim"
                data-delay=".8"
                data-fade-from="top"
                data-ease="bounce"
              >
                <div className="btn_wrapper d-inline-block">
                  <a href="/about" className="tp-btn-rounded btn-item">
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
                        />
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
    </section>
  );
};

export default AboutSecondSection;
