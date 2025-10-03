"use client";
import React, { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "sonner";

type Props = {};

const RefactoredContactForm = (props: Props) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // API endpoint from the original ContactUsForm
      const res = await axios.post("/api/send-email", {
        name: form.name,
        email: form.email,
        message: `${form.message}\n\nPhone: ${form.phone}`,
      });

      if (res.status === 200) {
        toast.success("Email sent successfully 😊");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error("Something went wrong, please try again 😔");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong, please try again 😔");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="tp-contact-area pre-header tp-contact-spacing pb-140">
        <div className="container containers">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="tp-contact-wrap">
                {/* Header Content */}
                <div className="text-center mb-60">
                  <h2 className="tp-section-title fs-70 fs-xl-60 fs-lg-50 fs-xs-40 mb-10">
                    Get in Touch
                  </h2>
                  <p className="fs-18 lh-150-per">
                    Have a project in mind? Need help with branding, web design,
                    or digital
                    <br /> marketing? Let’s discuss how we can bring your ideas
                    to life
                  </p>
                </div>
                {/* Contact Info (Kept static) */}
                <div className="tp-contact-number mb-70">
                  <div className="d-flex align-items-center mb-15 mr-20">
                    <span className="tp-contact-icon mr-15">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_863_33)">
                          <path
                            d="M5.83174 11.7413V14.8333C5.83225 14.9384 5.86581 15.0407 5.92767 15.1256C5.98953 15.2106 6.07655 15.2739 6.1764 15.3066C6.27625 15.3394 6.38388 15.3399 6.48403 15.3081C6.58418 15.2762 6.67177 15.2137 6.73441 15.1293L8.54308 12.668L5.83174 11.7413ZM15.7884 0.0926552C15.7133 0.0391576 15.6248 0.00748045 15.5328 0.001127C15.4408 -0.00522644 15.3488 0.0139914 15.2671 0.0566552L0.267077 7.88999C0.180772 7.9356 0.109661 8.00542 0.0624712 8.09087C0.0152814 8.17633 -0.00593423 8.2737 0.00142817 8.37104C0.00879056 8.46838 0.0444106 8.56145 0.103917 8.63883C0.163423 8.71622 0.244227 8.77454 0.336411 8.80666L4.50641 10.232L13.3871 2.63866L6.51508 10.918L13.5037 13.3067C13.5731 13.33 13.6467 13.3378 13.7194 13.3297C13.7921 13.3216 13.8622 13.2976 13.9246 13.2596C13.9871 13.2216 14.0405 13.1703 14.0812 13.1095C14.1218 13.0486 14.1486 12.9796 14.1597 12.9073L15.9931 0.573989C16.0066 0.482688 15.9947 0.389414 15.9586 0.304471C15.9225 0.219528 15.8636 0.146223 15.7884 0.0926552Z"
                            fill="#030303"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_863_33">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <a
                      className="tp-contact-email"
                      href="mailto:contact@habeshatechnologies.com"
                    >
                      contact@habeshatechnologies.com
                    </a>
                  </div>
                  <div className="d-flex align-items-center mb-15">
                    <span className="tp-contact-icon mr-15">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.5633 11.7424L13.3305 9.50954C12.5331 8.71209 11.1774 9.0311 10.8584 10.0678C10.6192 10.7855 9.82174 11.1842 9.10404 11.0247C7.50915 10.626 5.35604 8.5526 4.95732 6.87797C4.71809 6.16024 5.19656 5.36279 5.91426 5.12359C6.95094 4.80461 7.26991 3.44895 6.47247 2.65151L4.23962 0.418659C3.60166 -0.139553 2.64473 -0.139553 2.08652 0.418659L0.57137 1.93381C-0.943776 3.5287 0.73086 7.75516 4.47885 11.5032C8.22685 15.2511 12.4533 17.0056 14.0482 15.4106L15.5633 13.8955C16.1216 13.2575 16.1216 12.3006 15.5633 11.7424Z"
                          fill="#030303"
                        />
                      </svg>
                    </span>
                    <a className="tp-contact-email" href="mailto:+251935012620">
                      +251 935 012 620
                    </a>
                  </div>
                </div>
                {/* Contact Form Area */}
                <div className="tp-postbox-details-form-wrapper tp-contact-form tp-bg-common-white-2 p-relative z-index-1">
                  <img
                    className="tp-contact-shape"
                    src="assets/img/contact/shape.png"
                    alt=""
                  />
                  {/* Form with integrated logic */}
                  <form
                    onSubmit={handleSubmit}
                    id="contact-form"
                    // The action and method attributes are now handled by the onSubmit handler
                  >
                    <div className="row">
                      {/* Name Field */}
                      <div className="col-xl-6">
                        <div className="tp-postbox-details-input mb-25">
                          <label
                            className="fs-18 tp-ff-p tp-text-common-black mb-10"
                            htmlFor="name"
                          >
                            Full Name*
                          </label>
                          <input
                            name="name"
                            className="tp-input"
                            type="text"
                            id="name"
                            placeholder="Name"
                            value={form.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      {/* Email Field */}
                      <div className="col-xl-6">
                        <div className="tp-postbox-details-input mb-25">
                          <label
                            className="fs-18 tp-ff-p tp-text-common-black mb-10"
                            htmlFor="email"
                          >
                            Email Address*
                          </label>
                          <input
                            name="email"
                            className="tp-input"
                            type="email"
                            id="email"
                            placeholder="example@mail.com"
                            value={form.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      {/* Phone Field */}
                      <div className="col-xl-12">
                        <div className="tp-postbox-details-input mb-25">
                          <label
                            className="fs-18 tp-ff-p tp-text-common-black mb-10"
                            htmlFor="phone"
                          >
                            Phone
                          </label>
                          <input
                            name="phone"
                            className="tp-input"
                            type="text"
                            id="phone"
                            placeholder="+2519********"
                            value={form.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      {/* Message/Description Field */}
                      <div className="col-xl-12">
                        <div className="tp-postbox-details-input mb-10">
                          <label
                            className="fs-18 tp-ff-p tp-text-common-black mb-10"
                            htmlFor="msg"
                          >
                            Description
                          </label>
                          <textarea
                            name="message"
                            className="tp-input tp-textarea"
                            id="msg"
                            placeholder="Write your message here"
                            value={form.message}
                            onChange={handleChange}
                            required
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    {/* Submit Button */}
                    <div className="tp-postbox-details-input-box">
                      <button
                        type="submit"
                        disabled={loading}
                        className="tp-btn-sm tp-left-right fw-500 tp-ff-heading fs-15 text-uppercase tp-text-common-black tp-bg-theme-primary tp-round-36"
                      >
                        <span className="mr10 td-text d-inline-block mr-5">
                          {loading ? "Sending..." : "Submit"}
                        </span>
                      </button>
                      <p className="ajax-response mt-20"></p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* The second section (map area) from the original ContactUsForm is not present 
            in ContactFirstSection's structure, so it's omitted here to maintain the requested layout. */}
          </div>
        </div>
      </div>
      <Toaster position="bottom-right" richColors />
    </div>
  );
};

export default RefactoredContactForm;