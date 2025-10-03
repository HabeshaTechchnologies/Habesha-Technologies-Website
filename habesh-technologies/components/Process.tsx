import React from "react";
import Parteners from "./Parteners";

type Props = {};

const Process = (props: Props) => {
  return (
    <div>
      <div className="tp-process-it-bg">
        <div className="tp-process-area">
          <div className="tp-text-moving-area black-bg-4 pt-140 pb-150">
            <div className="tp-text-it-moving-top moving-text mb-40">
              <div className="tp-text-it-item wrapper-text d-flex align-items-center">
                <span>Brand _ </span>
                <span>Strategy _</span>
                <span> Development _ </span>
                <span>Management _ </span>
              </div>
            </div>
            <div className="tp-text-it-moving-bottom moving-text">
              <div className="tp-text-it-item wrapper-text d-flex align-items-center">
                <span>IT _ </span>
                <span>Solutions _ </span>
                <span>Development _ </span>
                <span>Production _</span>
                <span>Business _</span>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-process-area pb-145 p-relative z-index-1">
          <img
            className="tp-process-it-shape"
            data-speed="0.8"
            src="assets/img/process/it/shape.png"
            alt=""
          />
          <div className="container-fluid container-1524">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="tp-process-pp-video-wrap tp-process-it-video-thumb d-flex mb-50">
                  <span className="tp-process-it-icon d-none d-xl-block">
                    <svg
                      width="155"
                      height="310"
                      viewBox="0 0 155 310"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M155 155C155 240.604 85.6041 310 0 310V0C85.6041 0 155 69.3959 155 155Z"
                        fill="#B4E717"
                      />
                    </svg>
                  </span>
                  <div className="tp-process-pp-video-inner tp-process-it-wrap p-relative d-inline-block">
                    <img
                      className="tp-process-pp-video-img"
                      src="assets/img/process/it/thumb.png"
                      alt=""
                    />
                    <div className="tp-video-main tp-process-it-video">
                      <a
                        className="tp-hero-video-btn popup-video"
                        href="https://www.youtube.com/watch?v=go7QYaQR494"
                      >
                        <span>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.5645 10.1224C15.0631 9.1342 15.0631 6.93206 13.5645 5.94387L5.18141 0.416189C3.51284 -0.684068 1.29437 0.527069 1.31261 2.52828L1.41277 13.5176C1.43082 15.4982 3.63024 16.673 5.2816 15.5841L13.5645 10.1224Z"
                              fill="#030303"
                            />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="tp-process-it-title-wrap mb-50">
                  <h2 className="tp-text-revel-anim fix tp-ff-inter fs-60 fs-xs-40 ls-m-4 tp-text-common-black-1 mb-20">
                    Guided by Process,
                    <br /> Driven by Results.
                  </h2>
                  <p className="tp-section-it-para tp-text-common-black-4 fs-24 fs-xs-18 tp-ff-inter lh-150-per">
                    We follow a streamlined, intelligent workflow designed
                    <br />
                    to eliminate friction and deliver consistent results.
                  </p>
                </div>
              </div>
            </div>
            <div className="row gx-30 pt-30">
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div
                  className="tp-process-it-item text-center mb-30 tp_fade_anim"
                  data-delay=".3"
                >
                  <span className="tp-process-it-position tp-ff-inter fs-24 fw-600 tp-text-common-black-1 mb-110 d-inline-block">
                    {"01"}
                  </span>
                  <h4 className="tp-process-it-title tp-ff-inter fs-28 lh-120-per tp-text-common-black-1 mb-20">
                    Design
                    <br /> & Prototyping
                  </h4>
                  <p className="tp-process-it-para tp-ff-inter fs-16 lh-150-per tp-text-common-black-1">
                    Conduct user research (interviews, surveys, analytics).
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div
                  className="tp-process-it-item text-center mb-30 tp_fade_anim"
                  data-delay=".5"
                >
                  <span className="tp-process-it-position tp-ff-inter fs-24 fw-600 tp-text-common-black-1 mb-110 d-inline-block">
                    {"02"}
                  </span>
                  <h4 className="tp-process-it-title tp-ff-inter fs-28 lh-120-per tp-text-common-black-1 mb-20">
                    Research
                    <br /> & Analysis
                  </h4>
                  <p className="tp-process-it-para tp-ff-inter fs-16 lh-150-per tp-text-common-black-1">
                    Conduct user research (interviews, surveys, analytics).
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div
                  className="tp-process-it-item text-center mb-30 tp_fade_anim"
                  data-delay=".7"
                >
                  <span className="tp-process-it-position tp-ff-inter fs-24 fw-600 tp-text-common-black-1 mb-110 d-inline-block">
                    {"03"}
                  </span>
                  <h4 className="tp-process-it-title tp-ff-inter fs-28 lh-120-per tp-text-common-black-1 mb-20">
                    Testing <br /> & Iteration
                  </h4>
                  <p className="tp-process-it-para tp-ff-inter fs-16 lh-150-per tp-text-common-black-1">
                    Conduct user research (interviews, surveys, analytics).
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div
                  className="tp-process-it-item text-center mb-30 tp_fade_anim"
                  data-delay=".9"
                >
                  <span className="tp-process-it-position tp-ff-inter fs-24 fw-600 tp-text-common-black-1 mb-110 d-inline-block">
                    {"04"}
                  </span>
                  <h4 className="tp-process-it-title tp-ff-inter fs-28 lh-120-per tp-text-common-black-1 mb-20">
                    Prepare <br /> for Delivery
                  </h4>
                  <p className="tp-process-it-para tp-ff-inter fs-16 lh-150-per tp-text-common-black-1">
                    Conduct user research (interviews, surveys, analytics).
                  </p>
                </div>
              </div>
              <div className="col-lg-12">
                <div
                  className="tp-skill-wd-bottom text-center mt-30 tp_fade_anim"
                  data-delay=".4"
                  data-fade-from="bottom"
                  data-ease="bounce"
                >
                  <p className="tp-process-it-para-2 tp-skill-wd-para tp-ff-inter fw-500 fs-16 tp-text-common-black-4">
                    Don’t hesitate collaborate with expertise-
                    <a
                      href="/contact"
                      className="ml-20 d-inline-block lh-0 tp-round-26 fs-16 ls-m-3 text-uppercase ls-0 tp-btn-switch-animation tp-text-common-black tp-ff-inter fw-700"
                    >
                      <span className="d-flex align-items-center justify-content-center">
                        <span className="btn-text">Let’s Talk</span>
                        <span className="btn-icon">
                          <svg
                            width="14"
                            height="12"
                            viewBox="0 0 14 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8 11L13 6M13 6L8 1M13 6H1"
                              stroke="#10302A"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <span className="btn-icon">
                          <svg
                            width="14"
                            height="12"
                            viewBox="0 0 14 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8 11L13 6M13 6L8 1M13 6H1"
                              stroke="#10302A"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Parteners/>
      </div>
    </div>
  );
};

export default Process;
