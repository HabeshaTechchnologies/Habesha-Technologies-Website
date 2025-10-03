import React from 'react'

type Props = {}

const BlogDetailFirstSection = (props: Props) => {
  return (
    <div>
      <div className="tp-breadcrumb-area pre-header tp-pricing-2-spacing bg-position pb-90">
        <div className="container-fluid container-1524 containers">
          <div className="row">
            <div className="col-12">
              <div className="tp-breadcrumb-ai-title-wrap">
                <h2 className="tp-section-ai-title fs-72 fs-xl-65 fs-lg-55 fs-sm-45 fs-xs-40 fw-600 ls-m-4 tp-ff-dm mb-15 tp-text-common-black-5">
                  Blog Details
                </h2>
                <div className="tp-breadcrumb-list tp-breadcrumb-2-list tp-breadcrumb-3-border pt-25">
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <span></span>
                    </li>
                    <li>Blog Details</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetailFirstSection