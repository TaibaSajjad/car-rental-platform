import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="DriveRent-footer">

      {/* BRAND */}
      <div className="DriveRent-footer-brand-area">

        <Link
          to="/"
          className="DriveRent-footer-brand"
        >
          DriveRent<span>.</span>
        </Link>

        <p>
          Premium cars for comfortable journeys,
          flexible rentals, and effortless driving.
        </p>

      </div>

      {/* QUICK LINKS */}
      <div className="DriveRent-footer-column">

        <span className="DriveRent-footer-title">
          EXPLORE
        </span>

        <div className="DriveRent-footer-links">

          <Link to="/cars">
            CARS
          </Link>

          <Link to="/about">
            ABOUT
          </Link>

          <Link to="/contact">
            CONTACT
          </Link>

        </div>

      </div>

      {/* SERVICE */}
      <div className="DriveRent-footer-column">

        <span className="DriveRent-footer-title">
          DRIVE WITH US
        </span>

        <p>
          Choose your car, select your dates,
          and enjoy a smooth rental experience.
        </p>

      </div>

      {/* COPYRIGHT */}
      <div className="DriveRent-footer-bottom">

        <span>
          © 2026 DriveRent RENTALS
        </span>

        <span>
          LAHORE · PAKISTAN
        </span>

      </div>

      <style>{`

        .DriveRent-footer {
          position: relative;
          z-index: 5;

          padding: 65px 7vw 30px;

          display: grid;
          grid-template-columns: 1.4fr .7fr 1fr;
          column-gap: 7vw;
          row-gap: 50px;

          background: #F0EFF5;
          border-top: 1px solid rgba(23,23,34,.08);

          font-family: "DM Sans", sans-serif;
          color: #171722;
        }

        .DriveRent-footer a {
          text-decoration: none;
        }

        /* =========================
           BRAND
        ========================= */

        .DriveRent-footer-brand-area {
          max-width: 330px;
        }

        .DriveRent-footer-brand {
          display: inline-block;

          color: #171722;

          font-size: 25px;
          font-weight: 700;
          letter-spacing: -1.2px;
        }

        .DriveRent-footer-brand span {
          color: #8F7BE8;
        }

        .DriveRent-footer-brand-area p {
          max-width: 300px;

          margin: 18px 0 0;

          color: rgba(23,23,34,.62);

          font-size: 14px;
          line-height: 1.8;
        }

        /* =========================
           FOOTER COLUMNS
        ========================= */

        .DriveRent-footer-column {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .DriveRent-footer-title {
          margin-bottom: 20px;

          color: #8F7BE8;

          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        /* =========================
           LINKS
        ========================= */

        .DriveRent-footer-links {
          display: flex;
          flex-direction: column;
          gap: 13px;
        }

        .DriveRent-footer-links a {
          color: rgba(23,23,34,.68);

          font-size: 13px;
          font-weight: 500;
          letter-spacing: .5px;

          transition: color .3s ease;
        }

        .DriveRent-footer-links a:hover {
          color: #8F7BE8;
        }

        /* =========================
           SERVICE TEXT
        ========================= */

        .DriveRent-footer-column > p {
          max-width: 280px;

          margin: 0;

          color: rgba(23,23,34,.62);

          font-size: 14px;
          line-height: 1.8;
        }

        /* =========================
           BOTTOM
        ========================= */

        .DriveRent-footer-bottom {
          grid-column: 1 / -1;

          padding-top: 25px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          border-top: 1px solid rgba(23,23,34,.1);
        }

        .DriveRent-footer-bottom span {
          color: rgba(23,23,34,.48);

          font-size: 10px;
          font-weight: 500;
          letter-spacing: 1.3px;
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 800px) {

          .DriveRent-footer {
            grid-template-columns: 1fr 1fr;
            padding: 55px 6vw 28px;
            gap: 45px;
          }

          .DriveRent-footer-brand-area {
            grid-column: 1 / -1;
          }

        }

        @media (max-width: 650px) {

          .DriveRent-footer {
            grid-template-columns: 1fr;
            padding: 50px 22px 25px;
            row-gap: 35px;
          }

          .DriveRent-footer-brand-area {
            grid-column: auto;
          }

          .DriveRent-footer-brand {
            font-size: 22px;
          }

          .DriveRent-footer-brand-area p {
            font-size: 13px;
          }

          .DriveRent-footer-title {
            font-size: 10px;
          }

          .DriveRent-footer-links {
            gap: 12px;
          }

          .DriveRent-footer-links a {
            font-size: 13px;
          }

          .DriveRent-footer-column > p {
            font-size: 13px;
          }

          .DriveRent-footer-bottom {
            padding-top: 22px;

            flex-direction: column;
            align-items: flex-start;

            gap: 10px;
          }

          .DriveRent-footer-bottom span {
            font-size: 9px;
          }

        }

      `}</style>
    </footer>
  );
}