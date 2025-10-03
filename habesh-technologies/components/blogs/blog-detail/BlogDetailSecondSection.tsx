import React from "react";
import { getSingleBlog, getRecentPosts } from "@/lib/sanity/fetchQueries";
import { urlForImage } from "@/lib/sanity/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link"; // Use Link for Next.js routing

// Define a basic structure for the fetched data for better type-safety
type Author = { name: string };
type Category = { title: string };
type Slug = { current: string };
type ImageAsset = { _ref: string }; // Simplified type for Sanity image asset

type BlogPost = {
  title: string;
  slug: Slug;
  mainImage?: ImageAsset;
  publishedAt: string;
  author?: Author;
  categories?: Category[];
  body: any; // PortableText value
};

type Props = { params: { slug: string } };

export const dynamic = "force-dynamic";

async function RefactoredSingleBlog({ params }: Props) {
  const slug = params.slug;
  // Use the defined type for better intellisense, though 'any' was in the original
  const blog: BlogPost = await getSingleBlog(slug);
  const recentPosts: BlogPost[] = await getRecentPosts();

  if (!blog) return <p>Blog not found</p>;

  return (
    <div className="tp-blog-details-area pt-140 pb-90">
      <div className="container">
        <div className="row">
          {/* Main Blog Content - Matches col-lg-8 in the second component */}
          <div className="col-lg-8">
            <div className="tp-postbox-wrapper mr-110 mb-50">
              {/* Image and Title Section - Adjusted to fit the second component's aesthetic */}
              {blog.mainImage && (
                <div className="tp-blog-details-img mb-50">
                  <img
                    src={
                      urlForImage(blog.mainImage)?.width(800).url() ||
                      "assets/images/blog/default.jpg"
                    }
                    alt={blog.title || "Blog"}
                  />
                </div>
              )}

              <h2 className="fs-50 fs-sm-40 fs-xs-30 lh-120-per mb-55">
                {blog.title}
              </h2>

              {/* Meta Info */}
              <div className="tp-blog-details-link-wrap mb-25">
                <div className="tp-blog-details-dates mr-20 mb-10">
                  {/* Display the first category, or all categories if preferred */}
                  <span>{blog.categories?.[0]?.title || "Habesha Technologies"}</span>
                  <span className="borders"></span>
                  <span>
                    {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </div>

              {/* Main Content Body */}
              <div className="tp-blog-details-content mb-70">
                <PortableText value={blog.body} />
                {/* Note: The second component had static lists (ul/li) inside 'tp-service-details-content'.
                  The PortableText component handles the structure from Sanity, which should include 
                  any lists or special formatting defined in the CMS 'body' field.
                  If you need a specific hardcoded section (like "Why Marketing Funnel Analytics Matters"),
                  you'll need to define a custom rendering rule for PortableText or add it manually outside it.
                */}
              </div>
            </div>
          </div>

          {/* Sidebar - Matches col-lg-4 in the second component */}
          <div className="col-lg-4">
            <div className="tp-sidebar-wrap mb-50">
              <div className="tp-sidebar-widget mb-30">
                <h3 className="tp-sidebar-widget-title mb-25">Recent Posts</h3>
                {recentPosts?.map((post) => (
                  <div
                    className="tp-sidebar-rc-post mb-15"
                    key={post.slug.current}
                  >
                    {/* The tag from the recent posts - displaying the first category */}
                    <a
                      href={`/blog/${post.slug.current}`}
                      className="tp-sidebar-rc-post-tag mb-15"
                    >
                      {post.categories?.[0]?.title || "Habesha Technologies"}
                    </a>
                    <h4 className="tp-sidebar-rc-post-title">
                      <Link
                        className="underline-black"
                        href={`/blog/${post.slug.current}`}
                      >
                        {post.title}
                      </Link>
                    </h4>
                    <span className="tp-sidebar-rc-post-dates">
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    {/* Border separator for all except the last one (for cleaner look) */}
                    {recentPosts.indexOf(post) < recentPosts.length - 1 && (
                      <span className="tp-sidebar-rc-border d-block mt-5">
                        <svg
                          viewBox="0 0 364 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM359 3.5L364 5.88675V0.113249L359 2.5V3.5ZM4.5 3.5H359.5V2.5H4.5V3.5Z"
                            fill="#EEEEEE"
                          />
                        </svg>
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RefactoredSingleBlog;
