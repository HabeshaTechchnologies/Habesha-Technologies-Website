"use client";
import React, { useState } from "react";

// Import your MobileMenu component here if you have one.
// For this example, I'll use a simple placeholder component.
const MobileMenu = () => (
  <div
    className="mobile-menu-offcanvas-content"
    style={{
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "space-between",
    }}
  >
    {/* Top Logo */}
    <div style={{ padding: "1rem 1.5rem" }}>
      <a href="/">
        <img
          src="/assets/img/habesha/habesha-logo-removebg.png"
          alt="Logo"
          style={{ height: "40px", objectFit: "contain" }}
        />
      </a>
    </div>

    {/* Navigation Links */}
    <ul
      style={{
        listStyle: "none",
        margin: 0,
        padding: "1rem 1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        flexGrow: 1,
      }}
    >
      <li
        style={{
          fontSize: "1.1rem",
          fontWeight: 500,
          paddingBottom: "0.75rem",
          borderBottom: "1px solid #eaeaea",
        }}
      >
        <a href="/" style={{ textDecoration: "none", color: "#111" }}>
          Home
        </a>
      </li>
      <li
        style={{
          fontSize: "1.1rem",
          fontWeight: 500,
          paddingBottom: "0.75rem",
          borderBottom: "1px solid #eaeaea",
        }}
      >
        <a href="/about" style={{ textDecoration: "none", color: "#111" }}>
          About Us
        </a>
      </li>
      <li
        style={{
          fontSize: "1.1rem",
          fontWeight: 500,
          paddingBottom: "0.75rem",
          borderBottom: "1px solid #eaeaea",
        }}
      >
        <a href="/service" style={{ textDecoration: "none", color: "#111" }}>
          Our Services
        </a>
      </li>
      <li
        style={{
          fontSize: "1.1rem",
          fontWeight: 500,
          paddingBottom: "0.75rem",
          borderBottom: "1px solid #eaeaea",
        }}
      >
        <a href="/blog" style={{ textDecoration: "none", color: "#111" }}>
          Blog
        </a>
      </li>
    </ul>

    {/* Bottom Contact Button */}
    <div
      style={{
        padding: "1.5rem",
        borderTop: "1px solid #eaeaea",
      }}
    >
      <a
        href="/contact"
        style={{
          display: "block",
          width: "100%",
          textAlign: "center",
          backgroundColor: "#111", // keep consistent with your theme
          color: "#fff",
          padding: "0.75rem",
          borderRadius: "8px",
          fontWeight: 600,
          textDecoration: "none",
        }}
      >
        Contact Us
      </a>
    </div>
  </div>
);



type Props = {};

const Header = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="tp-offcanvas-area"
          onClick={toggleMenu}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 9999,
            display: "block",
          }}
        >
          {/* Mobile Menu Wrapper */}
          <div
            className="tp-offcanvas-wrapper"
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%", // full width dropdown
              backgroundColor: "#fff",
              overflow: "hidden",
              maxHeight: isMenuOpen ? "100%" : "0",
              transition: "max-height 0.4s ease-in-out",
              boxShadow: isMenuOpen ? "0 8px 20px rgba(0, 0, 0, 0.15)" : "none",
              borderBottomLeftRadius: "12px",
              borderBottomRightRadius: "12px",
            }}
          >
            {/* Close button */}
            <div
              className="tp-offcanvas-close"
              onClick={toggleMenu}
              style={{
                textAlign: "right",
                padding: "1rem",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              <i className="fa-solid fa-xmark"></i>
            </div>
            <MobileMenu />
          </div>
        </div>
      )}

      {/* Header */}
      <div
        id="header-sticky"
        className="tp-header-area pre-header tp-header-it-wrap sticky-white-bg tp-header-blur header-transparent tp-header-lg-spacing"
      >
        <div className="container-fluid container-1524">
          <div className="tp-header-it-bg">
            <div className="row align-items-center">
              {/* Logo */}
              <div className="col-xxl-3 col-xl-2 col-lg-4 col-md-4 col-sm-4 col-6">
                <div className="tp-header-logo">
                  <a href="/">
                    <img
                      data-width="150"
                      src="/assets/img/habesha/habesha-logo-removebg.png"
                      alt="logo"
                    />
                  </a>
                </div>
              </div>

              {/* Desktop Menu */}
              <div className="col-xxl-6 col-xl-7 d-none d-xl-block">
                <div className="tp-main-menu tp-main-menu-it tp-header-dropdown dropdown-white-bg d-flex justify-content-center">
                  <nav className="tp-mobile-menu-active">
                    <ul>
                      <li className="has-dropdown p-inherit">
                        <a href="/">Home</a>
                      </li>
                      <li className="has-dropdown p-inherit">
                        <a href="/about">About Us</a>
                      </li>
                      <li className="has-dropdown p-inherit">
                        <a href="/service">Our Services</a>
                      </li>
                      <li className="has-dropdown">
                        <a href="/blog">Blog</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              {/* Right Side */}
              <div className="col-xxl-3 col-xl-3 col-lg-8 col-md-8 col-sm-8 col-6">
                <div className="tp-header-right d-flex align-items-center justify-content-end">
                  {/* Contact Button */}
                  <div className="tp-header-btn d-none d-sm-inline-block">
                    <a
                      href="/contact"
                      className="tp-btn-lg tp-header-it-btn d-inline-block tp-bg-common-black-1 tp-text-grey-5 lh-1 tp-round-26 fs-16 fw-600 tp-ff-inter"
                    >
                      Contact Us
                    </a>
                  </div>

                  {/* Mobile Menu Toggle */}
                  <div
                    className="tp-header-bar d-xl-none ml-20"
                    onClick={toggleMenu}
                    style={{ cursor: "pointer" }}
                  >
                    <button className="tp-menu-bar">
                      <i className="fa-solid fa-bars"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;