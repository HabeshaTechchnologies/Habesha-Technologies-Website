export const dynamic = "force-dynamic";

import React from "react";
// Assuming you have these utility functions in your project
import { getBlogPosts } from "@/lib/sanity/fetchQueries";
import { urlForImage } from "@/lib/sanity/image";

// Define a type for your blog posts to ensure type safety
type BlogPost = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  mainImage: any; // Use a more specific type if you have one
  author?: {
    name: string;
  };
};

// Change component to an async function to fetch data (Next.js App Router pattern)
async function Blog() {
  // Fetch data
  const blogPosts: BlogPost[] = await getBlogPosts();

  // Destructure the first two posts for the two slots in your layout
  const [firstPost, secondPost, thirdPost] = blogPosts;

  // Function to get the URL for an image, similar to the first example
  const getImageUrl = (image: any, width: number, height: number) => {
    return (
      urlForImage(image)?.width(width).height(height).url() ||
      "assets/img/blog/default.jpg" // Fallback path
    );
  };

  return (
    <div>
      <div className="tp-blog-area pt-110 p-relative pb-120">
        <div className="container-fluid container-1524">
          <div className="row gx-50">
            <div className="col-12">
              <div
                className="tp-team-it-big-title tp-text-perspective"
                data-delay=".5"
                data-fade-from="top"
                data-ease="bounce"
              >
                <h2 className="tp-ff-inter ls-m-2 lh-1">Our Blog</h2>
              </div>
            </div>
            {/* Left side: Text, Title, Button */}
            <div className="col-xl-5 col-lg-6 col-md-8">
              <div className="tp-team-it-title-wrap mb-40 p-relative">
                <span className="tp-about-it-blur"></span>
                <span className="tp-section-it-subtitle d-inline-block tp-ff-inter fw-600 tp-text-common-black-1 fs-18 mb-30">
                  {" "}
                  Our blog
                </span>
                <h2 className="tp-text-revel-anim fix tp-text-common-black-1 fs-60 fs-xl-50 fs-lg-44 fs-xs-38 tp-ff-inter tp-text-common-black-1 mb-30">
                  Our Experts Team
                  <br /> Is Always Ready To
                  <br /> Help You
                </h2>
                <p className="tp-section-it-para tp-text-common-black-4 tp-ff-inter lh-150-per tp-text-common-black-4 fs-18 mb-35">
                  Habesha Technologies delivered exactly what we needed —
                  efficient, reliable,
                  <br /> and results- driven solutions. We’ve seen measurable.
                </p>
                <a
                  href="/blog"
                  className="tp-btn-cst d-inline-block mr-5 lh-0 tp-round-26 fs-16 tp-bg-common-green-2 ls-m-2 text-uppercase tp-btn-switch-animation tp-text-common-black-1 fw-700 tp-ff-inter"
                >
                  <span className="d-flex align-items-center justify-content-center">
                    <span className="btn-text">See All Blog</span>
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
              </div>
            </div>
            {/* Right side: Blog Posts */}
            <div className="col-xl-7">
              <div className="tp-blog-it-item-right">
                <div className="row gx-50">
                  {/* First Blog Post - Top Right */}
                  {firstPost && (
                    <div className="col-lg-6 col-md-6">
                      <div
                        className="tp-blog-item tp-blog-it-item tp--hover-item mb-40 tp_fade_anim"
                        data-delay=".3"
                      >
                        <a
                          href={`/blog/${firstPost.slug.current}`}
                          className="tp-blog-thumb d-block p-relative fix d-inline-block"
                        >
                          <div
                            className="tp--hover-img"
                            data-displacement="assets/img/imghover/stripe-mul.png"
                            data-intensity="0.2"
                            data-speedin="1"
                            data-speedout="1"
                          >
                            <img
                              className="w-100"
                              src={getImageUrl(firstPost.mainImage, 600, 400)}
                              alt={firstPost.title || "Blog Post"}
                              // Added inline style for consistency in display
                              style={{ height: '300px', objectFit: 'cover' }}
                            />
                          </div>
                        </a>
                        <div className="tp-blog-content">
                          <div className="tp-blog-meta mb-25">
                            {/* Assuming category is not available, using a placeholder */}
                            {/* <span>Web Design</span> */}
                            <span className="borders"></span>
                            <span>
                              {new Date(
                                firstPost.publishedAt
                              ).toLocaleDateString()}
                            </span>
                          </div>
                          <h3 className="fs-28 tp-ff-inter tp-text-common-black-1">
                            <a
                              className="underline-black"
                              href={`/blog/${firstPost.slug.current}`}
                            >
                              {/* Truncate title like in the original example */}
                              {firstPost.title && firstPost.title.length > 60
                                ? firstPost.title.slice(0, 60) + "..."
                                : firstPost.title}
                            </a>
                          </h3>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Second Blog Post - Bottom Right */}
                  {secondPost && (
                    <div className="col-lg-6 col-md-6">
                      <div
                        className="tp-blog-item tp-blog-it-item tp--hover-item mb-40 mt-45 tp_fade_anim"
                        data-delay=".5"
                      >
                        <a
                          href={`/blog/${secondPost.slug.current}`}
                          className="tp-blog-thumb d-block p-relative fix d-inline-block"
                        >
                          <div
                            className="tp--hover-img"
                            data-displacement="assets/img/imghover/stripe-mul.png"
                            data-intensity="0.2"
                            data-speedin="1"
                            data-speedout="1"
                          >
                            <img
                              className="w-100"
                              src={getImageUrl(secondPost.mainImage, 600, 400)}
                              alt={secondPost.title || "Blog Post"}
                              // Added inline style for consistency in display
                              style={{ height: '300px', objectFit: 'cover' }}
                            />
                          </div>
                        </a>
                        <div className="tp-blog-content">
                          <div className="tp-blog-meta mb-25">
                            {/* Assuming category is not available, using a placeholder */}
                            {/* <span>AI Trends</span> */}
                            <span className="borders"></span>
                            <span>
                              {new Date(
                                secondPost.publishedAt
                              ).toLocaleDateString()}
                            </span>
                          </div>
                          <h3 className="fs-28 tp-ff-inter tp-text-common-black-1">
                            <a
                              className="underline-black"
                              href={`/blog/${secondPost.slug.current}`}
                            >
                              {/* Truncate title like in the original example */}
                              {secondPost.title && secondPost.title.length > 60
                                ? secondPost.title.slice(0, 60) + "..."
                                : secondPost.title}
                            </a>
                          </h3>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* NOTE: The original component only displayed two blog posts in this section. 
                  If you have a thirdPost and want to display it, you'd need to modify the 
                  HTML structure to accommodate it, as the existing one is set for a 2-column layout. 
                  I've kept it as two posts to maintain the visual structure. */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;