import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div>
      <div className="tp-about-area pt-160">
        <div className="container-fluid container-1524">
          <div className="row">
            <div className="col-lg-6">
              <div className="tp-about-it-content-wrap mb-40">
                <span className="tp-about-it-subtitle tp-section-it-subtitle d-inline-block tp-ff-inter fw-600 tp-text-common-black-1 fs-18 mb-90">
                  What We Do
                </span>
                <div className="tp-about-it-expreance-wrap p-relative">
                  <span className="tp-about-it-blur"></span>
                  <h2 className="tp-about-it-expreance tp-ff-inter fw-600 ls-m-4 mb-0 lh-1 tp-text-common-black-1">
                    <span
                      data-purecounter-duration="1"
                      data-purecounter-end="15"
                      className="purecounter"
                    >
                      0
                    </span>
                    +
                  </h2>
                  <div className="tp-about-it-feature">
                    <span className="feature-1">Web Development</span>
                    <span className="feature-2">App Development</span>
                    <span className="feature-3">UI/UX Design</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tp-about-it-content mb-40">
                <h2 className="tp-text-revel-anim fix fs-60 fs-xs-40 tp-ff-inter lh-120-per ls-m-4 tp-text-common-black-1 mb-40">
                  We're Habesha Technologies, Your Digital Solutions Partner
                </h2>
                <div className="tp-about-it-rating-wrap mb-50">
                  <div className="tp-about-it-total-rating">
                    <h3 className="tp-ff-inter  fs-40 lh-1 mb-5 ls-m-4 tp-text-common-black-1">
                      4.9
                    </h3>
                    <span className="tp-ff-inter fs-15 tp-text-common-black-1">
                      ( 24 review )
                    </span>
                  </div>
                  <div className="tp-about-it-rating">
                    <span className="fw-500 mb-5 fs-14 ls-m-4 tp-ff-inter d-block tp-text-common-black-1">
                      Average Rating
                    </span>
                    <span className="rating">
                      <i className="fa-solid fa-star-sharp"></i>
                      <i className="fa-solid fa-star-sharp"></i>
                      <i className="fa-solid fa-star-sharp"></i>
                      <i className="fa-solid fa-star-sharp"></i>
                      <i className="fa-solid fa-star-sharp"></i>
                    </span>
                  </div>
                </div>
                <p className="tp-text-common-black-4 fs-18 tp-ff-inter lh-150-per mb-50">
                  “Habesha Technologies has been a game-changer for our
                  business. Their team delivered exactly what we
                  needed—efficient, reliable, and results-driven digital
                  solutions. We’ve seen measurable improvements since partnering
                  with them; they truly bring ideas to life with creativity,
                  precision, and impact.”
                </p>
                <div className="tp-about-it-author">
                  <h6 className="fw-600 fs-25 tp-text-common-black-1 tp-ff-inter mb-5">
                    John Doe
                  </h6>
                  <span className="tp-text-common-black-4 tp-ff-inter fs-18">
                    CEO, InnovateTech
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About