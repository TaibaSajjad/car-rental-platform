import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="DriveRent-navbar">

      {/* LOGO */}
      <Link
        to="/"
        className="DriveRent-brand"
        onClick={closeMenu}
      >
        DriveRent<span>.</span>
      </Link>

      {/* DESKTOP NAV LINKS */}
      <div className="DriveRent-nav-links">

        <Link
          to="/"
          className={isActive("/") ? "active" : ""}
        >
          Home
        </Link>

        <Link
          to="/cars"
          className={isActive("/cars") ? "active" : ""}
        >
          Cars
        </Link>

        <Link
          to="/about"
          className={isActive("/about") ? "active" : ""}
        >
          About
        </Link>

        <Link
          to="/contact"
          className={isActive("/contact") ? "active" : ""}
        >
          Contact
        </Link>

      </div>

      {/* DESKTOP CTA */}
      <Link
        to="/cars"
        className="DriveRent-nav-button"
      >
        EXPLORE FLEET ↗
      </Link>

      {/* MOBILE HAMBURGER */}
      <button
        className={`DriveRent-menu-button ${
          menuOpen ? "open" : ""
        }`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* MOBILE MENU */}
      <div
        className={`DriveRent-mobile-menu ${
          menuOpen ? "show" : ""
        }`}
      >

        <Link
          to="/"
          className={isActive("/") ? "active" : ""}
          onClick={closeMenu}
        >
          Home
        </Link>

        <Link
          to="/cars"
          className={isActive("/cars") ? "active" : ""}
          onClick={closeMenu}
        >
          Cars
        </Link>

        <Link
          to="/about"
          className={isActive("/about") ? "active" : ""}
          onClick={closeMenu}
        >
          About
        </Link>

        <Link
          to="/contact"
          className={isActive("/contact") ? "active" : ""}
          onClick={closeMenu}
        >
          Contact
        </Link>

        <Link
          to="/cars"
          className="DriveRent-mobile-cta"
          onClick={closeMenu}
        >
          EXPLORE FLEET
        </Link>

      </div>

      <style>{`

        .DriveRent-navbar {
          position: fixed;
          top: 0;
          left: 0;

          width: 100%;
          height: 76px;
          padding: 0 5vw;

          display: flex;
          align-items: center;
          justify-content: space-between;

          z-index: 1000;

          background: rgba(255,255,255,.82);
          border-bottom: 1px solid rgba(23,23,34,.08);

          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);

          font-family: Arial, sans-serif;
        }

        .DriveRent-navbar a {
          text-decoration: none;
        }

        /* =========================
           BRAND
        ========================= */

        .DriveRent-brand {
          color: #171722;
          font-size: 21px;
          font-weight: 700;
          letter-spacing: -1px;
        }

        .DriveRent-brand span {
          color: #8F7BE8;
        }

        /* =========================
           DESKTOP NAV LINKS
        ========================= */

        .DriveRent-nav-links {
          display: flex;
          align-items: center;
          gap: 38px;
        }

        .DriveRent-nav-links a {
          position: relative;

          color: rgba(23,23,34,.55);

          font-size: 10px;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;

          transition: color .3s ease;
        }

        .DriveRent-nav-links a:hover,
        .DriveRent-nav-links a.active {
          color: #171722;
        }

        .DriveRent-nav-links a.active::after {
          content: "";

          position: absolute;
          left: 0;
          bottom: -9px;

          width: 100%;
          height: 1px;

          background: #8F7BE8;
        }

        /* =========================
           DESKTOP BUTTON
        ========================= */

        .DriveRent-nav-button {
          padding: 11px 17px;

          border: 1px solid rgba(23,23,34,.18);

          color: #171722;

          font-size: 8px;
          font-weight: 600;
          letter-spacing: 1.5px;

          transition:
            background .3s ease,
            color .3s ease,
            border-color .3s ease;
        }

        .DriveRent-nav-button:hover {
          background: #8F7BE8;
          border-color: #8F7BE8;
          color: #FFFFFF;
        }

        /* =========================
           MOBILE HAMBURGER
        ========================= */

        .DriveRent-menu-button {
          display: none;

          width: 42px;
          height: 42px;

          padding: 0;

          border: 1px solid rgba(23,23,34,.12);
          background: rgba(255,255,255,.7);

          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 5px;

          cursor: pointer;

          transition:
            background .3s ease,
            border-color .3s ease;
        }

        .DriveRent-menu-button:hover {
          border-color: #8F7BE8;
        }

        .DriveRent-menu-button span {
          display: block;

          width: 17px;
          height: 1.5px;

          background: #171722;

          transition:
            transform .3s ease,
            opacity .3s ease;
        }

        /* HAMBURGER → X */

        .DriveRent-menu-button.open span:nth-child(1) {
          transform: translateY(6.5px) rotate(45deg);
        }

        .DriveRent-menu-button.open span:nth-child(2) {
          opacity: 0;
        }

        .DriveRent-menu-button.open span:nth-child(3) {
          transform: translateY(-6.5px) rotate(-45deg);
        }

        /* =========================
           MOBILE MENU
        ========================= */

        .DriveRent-mobile-menu {
          display: none;
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 650px) {

          .DriveRent-navbar {
            height: 65px;
            padding: 0 20px;
          }

          .DriveRent-brand {
            font-size: 19px;
          }

          /* Hide desktop navigation */

          .DriveRent-nav-links,
          .DriveRent-nav-button {
            display: none;
          }

          /* Show hamburger */

          .DriveRent-menu-button {
            display: flex;
          }

          /* Mobile dropdown */

          .DriveRent-mobile-menu {
            position: absolute;

            top: 65px;
            left: 0;

            width: 100%;

            display: flex;
            flex-direction: column;

            padding: 12px 20px 22px;

            background: rgba(255,255,255,.96);

            border-top: 1px solid rgba(23,23,34,.06);
            border-bottom: 1px solid rgba(23,23,34,.08);

            backdrop-filter: blur(18px);
            -webkit-backdrop-filter: blur(18px);

            opacity: 0;
            visibility: hidden;
            transform: translateY(-10px);

            transition:
              opacity .3s ease,
              transform .3s ease,
              visibility .3s ease;
          }

          .DriveRent-mobile-menu.show {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }

          .DriveRent-mobile-menu > a {
            position: relative;

            padding: 15px 4px;

            color: rgba(23,23,34,.62);

            font-size: 12px;
            font-weight: 600;
            letter-spacing: 1.5px;
            text-transform: uppercase;

            border-bottom: 1px solid rgba(23,23,34,.07);

            transition: color .3s ease;
          }

          .DriveRent-mobile-menu > a:hover,
          .DriveRent-mobile-menu > a.active {
            color: #171722;
          }

          .DriveRent-mobile-menu > a.active::before {
            content: "";

            position: absolute;

            left: -20px;
            top: 0;

            width: 3px;
            height: 100%;

            background: #8F7BE8;
          }

          /* Mobile CTA */

          .DriveRent-mobile-menu .DriveRent-mobile-cta {
            margin-top: 14px;

            padding: 13px 16px;

            border: 1px solid #8F7BE8;

            background: #8F7BE8;

            color: #FFFFFF;

            text-align: center;

            font-size: 9px;
            letter-spacing: 1.5px;

            border-bottom: 0;
          }

          .DriveRent-mobile-menu .DriveRent-mobile-cta:hover {
            background: #7D6BCF;
            color: #FFFFFF;
          }

        }

      `}</style>
    </nav>
  );
}