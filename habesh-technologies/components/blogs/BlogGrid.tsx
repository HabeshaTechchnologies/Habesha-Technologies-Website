// components/BlogGridDynamic.tsx
export const dynamic = "force-dynamic";

import React from "react";
import { getBlogPosts } from "@/lib/sanity/fetchQueries";
import { urlForImage } from "@/lib/sanity/image";

// Define an interface for the blog post structure for better type safety (assuming 'any' from original is a placeholder)
interface BlogPost {
  slug: {
    current: string;
  };
  mainImage: any; // Type depends on Sanity image structure
  title: string;
  publishedAt: string;
  categories: { title: string }[];
}

/**
 * A dynamic component that fetches blog posts and displays them in a grid layout.
 * It combines the data fetching of BlogList with the styling structure of BlogGrid.
 */
async function BlogGridDynamic() {
  const blogPosts: BlogPost[] = await getBlogPosts();
  // We'll limit to 6 posts to fit the original BlogGrid's structure/example, but all fetched posts are in 'blogPosts'.
  const displayPosts = blogPosts.slice(0, 6);

  // Helper to safely format the post title
  const formatTitle = (title: string | undefined): string => {
    if (!title) return "Untitled Post";
    return title.length > 60 ? title.slice(0, 60) + "..." : title;
  };

  // Helper to get the image URL from Sanity
  const getImageUrl = (image: any, width: number, height: number): string => {
    return (
      urlForImage(image)?.width(width).height(height).url() ||
      "assets/images/blog/default.jpg"
    );
  };

  return (
    <div>
      <div className="tp-blog-area pt-140 pb-140">
        <div className="container">
          <div className="row">
            {/* Introductory Content (Retained from original BlogGrid) */}
            <div className="col-lg-4">
              <div
                className="tp-blog-subtitle mb-30 tp_fade_anim"
                data-delay=".3"
              >
                <span className="tp-section-subtitle tp-ff-heading fw-500 tp-text-common-black fs-16 mb-35">
                  <span className="borders d-inline-block"></span>Latest Journal
                </span>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tp-blog-title-wrap ml-20 mb-45">
                <h2
                  className="tp-section-title fs-70 fs-lg-50 fs-xs-40 fw-700 text-uppercase mb-50 tp_fade_anim"
                  data-delay=".5"
                >
                  Updated Blog
                </h2>
                <div
                  className="d-flex align-items-start tp_fade_anim"
                  data-delay=".7"
                >
                  <span className="mr-40 tp-service-shape d-inline-block">
                    {/* SVG content for shape */}
                    <svg
                      width="45"
                      height="45"
                      viewBox="0 0 45 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_191_87"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="45"
                        height="45"
                      >
                        <rect width="45" height="45" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_191_87)">
                        <rect y="13" width="30" height="30" fill="#030303" />
                        <rect
                          x="15"
                          y="1"
                          width="30"
                          height="30"
                          fill="#C4EE18"
                        />
                      </g>
                    </svg>
                  </span>
                  <p className="fs-18 tp-text-grey-1 lh-28">
                    Strategists dedicated to creating stunning,
                    <br /> functional websites that align with your unique
                    <br /> business goals.
                  </p>
                </div>
              </div>
            </div>

            {/* Dynamic Blog Post Grid */}
            {displayPosts.map((post, index) => (
              // The grid column structure is taken from BlogGrid
              <div key={post.slug.current} className="col-lg-4 col-md-6">
                {/* The card styling is taken from BlogGrid */}
                <div
                  className="tp-blog-item tp--hover-item mb-60 tp_fade_anim"
                  data-delay=".4"
                  // Dynamic fade-from based on index to mimic original staggered effect
                  data-fade-from={
                    index % 3 === 0
                      ? "left"
                      : index % 3 === 1
                        ? "bottom"
                        : "right"
                  }
                  data-ease="bounce"
                >
                  <a
                    href={`/blog/${post.slug.current}`}
                    className="tp-blog-thumb d-block mb-30 p-relative fix d-inline-block"
                  >
                    {/* The hover effect wrapper */}
                    <div
                      className="tp--hover-img"
                      data-displacement="assets/img/imghover/strip.png"
                      data-intensity="0.2"
                      data-speedin="1"
                      data-speedout="1"
                    >
                      <img
                        className="w-100"
                        src={getImageUrl(post.mainImage, 400, 300)} // Using a custom width/height for this grid
                        alt={post.title || "Blog"}
                        // Add some inline style for better consistency, though CSS classes may handle this
                        style={{ height: "300px", objectFit: "cover" }}
                      />
                    </div>
                  </a>
                  <div className="tp-blog-content text-center">
                    <div className="tp-blog-meta mb-15">
                      {/* Category */}
                      <span>{post.categories?.[0]?.title || "General"}</span>
                      <span className="borders"></span>
                      {/* Date */}
                      <span>
                        {new Date(post.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "short",
                            day: "2-digit",
                          }
                        ) || "N/A"}
                      </span>
                    </div>
                    {/* Title */}
                    <h3 className="fs-25 lh-120-per">
                      <a
                        className="underline-black"
                        href={`/blog/${post.slug.current}`}
                      >
                        {formatTitle(post.title)}
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
            {/* Static Pagination (Retained from original BlogGrid) */}
            {/* <div className="col-12">
              <div className="tp-blog-pagenation-wrap pt-20">
                <a
                  href="blog-grid-light.html#"
                  className="tp-blog-pagenation-nav"
                >
                  <svg
                    className="mr-10"
                    width="25"
                    height="10"
                    viewBox="0 0 25 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.32503 9.91054L0.279989 5.63362C0.194002 5.56483 0.123373 5.47086 0.0744866 5.36023C0.0256005 5.2496 0 5.12579 0 5C0 4.87421 0.0256005 4.7504 0.0744866 4.63977C0.123373 4.52914 0.194002 4.43518 0.279989 4.36638L6.32503 0.0894619C6.44282 0.0111909 6.57854 -0.0168364 6.71077 0.00979851C6.84301 0.0364334 6.96425 0.116215 7.05538 0.236567C7.1465 0.356918 7.20233 0.510993 7.21407 0.674501C7.2258 0.838009 7.19277 1.00165 7.12018 1.13963L5.36702 4.26665L24.4012 4.26665C24.56 4.26665 24.7123 4.34391 24.8246 4.48144C24.9369 4.61897 25 4.8055 25 5C25 5.1945 24.9369 5.38103 24.8246 5.51856C24.7123 5.65609 24.56 5.73335 24.4012 5.73335L5.36702 5.73335L7.12018 8.86038C7.19277 8.99835 7.2258 9.16199 7.21407 9.3255C7.20233 9.48901 7.1465 9.64308 7.05538 9.76343C6.96425 9.88378 6.84301 9.96357 6.71077 9.9902C6.57854 10.0168 6.44282 9.98881 6.32503 9.91054Z"
                      fill="currentColor"
                    />
                  </svg>
                  Previous
                </a>
                <div className="tp-blog-pagenation">
                  <ul>
                    <li>
                      <a className="active" href="blog-grid-light.html#">
                        01
                      </a>
                    </li>
                    <li>
                      <a href="blog-grid-light.html#">02</a>
                    </li>
                    <li>
                      <a href="blog-grid-light.html#">03</a>
                    </li>
                    <li>
                      <a href="blog-grid-light.html#">04</a>
                    </li>
                  </ul>
                </div>
                <a
                  href="blog-grid-light.html#"
                  className="tp-blog-pagenation-nav"
                >
                  NEXT
                  <svg
                    className="ml-10"
                    width="25"
                    height="10"
                    viewBox="0 0 25 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.675 9.91054L24.72 5.63362C24.806 5.56483 24.8766 5.47086 24.9255 5.36023C24.9744 5.2496 25 5.12579 25 5C25 4.87421 24.9744 4.7504 24.9255 4.63977C24.8766 4.52914 24.806 4.43518 24.72 4.36638L18.675 0.0894619C18.5572 0.0111909 18.4215 -0.0168364 18.2892 0.00979851C18.157 0.0364334 18.0358 0.116215 17.9446 0.236567C17.8535 0.356918 17.7977 0.510993 17.7859 0.674501C17.7742 0.838009 17.8072 1.00165 17.8798 1.13963L19.633 4.26665L0.598757 4.26665C0.439957 4.26665 0.287661 4.34391 0.175371 4.48144C0.0630817 4.61897 0 4.8055 0 5C0 5.1945 0.0630817 5.38103 0.175371 5.51856C0.287661 5.65609 0.439957 5.73335 0.598757 5.73335L19.633 5.73335L17.8798 8.86038C17.8072 8.99835 17.7742 9.16199 17.7859 9.3255C17.7977 9.48901 17.8535 9.64308 17.9446 9.76343C18.0358 9.88378 18.157 9.96357 18.2892 9.9902C18.4215 10.0168 18.5572 9.98881 18.675 9.91054Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogGridDynamic;
