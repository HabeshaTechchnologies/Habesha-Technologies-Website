import React from "react";

type Props = {};

const Parteners = (props: Props) => {
  return (
    <div>
      <div className="tp-brand-area tp-brand-spacing tp-bg-common-white z-index-1 p-relative">
        <span className="tp-brand-bottom-border"></span>

        <div className="tp-brand-customer-wrap">
          <span className="tp-brand-customer tp-ff-heading fs-18 fs-xs-15 fw-700 tp-text-common-black">
            Our Clients
          </span>
        </div>

        <div className="tp-brand-wrap">
          <div className="swiper-container tp-brand-slide-active">
            <div className="swiper-wrapper slide-transtion flex items-center justify-center gap-6">
              {[
                {
                  src: "assets/img/habesha/customer-1.png",
                  link: "https://mamigaspharmaceuticals.com/",
                },
                {
                  src: "assets/img/habesha/customer-2.png",
                  link: "https://sharjahelevator.com/",
                },
                {
                  src: "assets/img/habesha/customer-3.png",
                  link: "http://greenpowersystemsplc.com/",
                },
                {
                  src: "assets/img/habesha/customer-4.png",
                  link: "https://www.packerrdj.com/",
                },
                {
                  src: "assets/img/habesha/customer-1.png",
                  link: "https://mamigaspharmaceuticals.com/",
                },
                {
                  src: "assets/img/habesha/customer-2.png",
                  link: "https://sharjahelevator.com/",
                },
                {
                  src: "assets/img/habesha/customer-3.png",
                  link: "http://greenpowersystemsplc.com/",
                },
                {
                  src: "assets/img/habesha/customer-4.png",
                  link: "https://www.packerrdj.com/",
                },
              ].map((partner, i) => (
                <div key={i} className="swiper-slide">
                  <div className="tp-brand-item flex items-center justify-center">
                    <a
                      href={partner.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={partner.src}
                        alt={`Client ${i + 1}`}
                        className="w-70 h-30 sm:w-40 md:w-44 lg:w-48 object-contain"
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parteners;
