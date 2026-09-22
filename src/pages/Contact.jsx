import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="contact-page">

      {/* HERO */}
      <section className="contact-hero">

        <div className="contact-hero-number">
          06 / GET IN TOUCH
        </div>

        <div className="contact-hero-content">

          <span>LET'S TALK</span>

          <h1>
            START A
            <br />
            <i>CONVERSATION.</i>
          </h1>

          <p>
            Have a question about a vehicle, a booking,
            or your next journey? We're here to help.
          </p>

        </div>

        <div className="contact-orbit">
          <div className="contact-orbit-ring"></div>
          <div className="contact-orbit-ring second"></div>
          <div className="contact-orbit-dot"></div>

          <span>DriveRent / CONTACT</span>
        </div>

      </section>

      {/* CONTACT CONTENT */}
      <section className="contact-section">

        {/* LEFT SIDE */}
        <div className="contact-info">

          <div className="contact-label">
            01 / CONTACT DETAILS
          </div>

          <h2>
            WE'RE
            <br />
            <i>LISTENING.</i>
          </h2>

          <p className="contact-intro">
            Whether you need help choosing a car or
            simply want to know more about DriveRent,
            send us a message and we'll get back to you.
          </p>

          <div className="contact-details">

            <div className="contact-detail">
              <span>EMAIL</span>

              <a href="mailto:hello@DriveRent.com">
                driverent@gmail.com
              </a>
            </div>

            <div className="contact-detail">
              <span>PHONE</span>

              <a href="tel:+923000000000">
                +92 300 3256435
              </a>
            </div>

            <div className="contact-detail">
              <span>LOCATION</span>

              <p>Lahore, Pakistan</p>
            </div>

            <div className="contact-detail">
              <span>OFFICE HOURS</span>

              <p>
                Mon — Sat
                <br />
                09:00 — 10:00
              </p>
            </div>

          </div>

        </div>

        {/* FORM */}
        <div className="contact-form-wrapper">

          {!sent ? (
            <>
              <div className="contact-form-heading">

                <span>02 / SEND A MESSAGE</span>

                <h3>
                  TELL US
                  <br />
                  <i>WHAT'S ON YOUR MIND.</i>
                </h3>

              </div>

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                <div className="contact-field">
                  <label>YOUR NAME</label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label>EMAIL ADDRESS</label>

                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-field full">
                  <label>SUBJECT</label>

                  <input
                    type="text"
                    name="subject"
                    placeholder="What would you like to know?"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-field full message-field">
                  <label>MESSAGE</label>

                  <textarea
                    name="message"
                    placeholder="Write your message..."
                    value={form.message}
                    onChange={handleChange}
                    rows="6"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="contact-submit"
                >
                  SEND MESSAGE
                  <span>↗</span>
                </button>

              </form>
            </>
          ) : (
            <div className="contact-success">

              <div className="contact-success-icon">
                ✓
              </div>

              <span>MESSAGE SENT</span>

              <h3>
                THANK
                <br />
                <i>YOU.</i>
              </h3>

              <p>
                Thanks for reaching out, {form.name}.
                Your message has been received and we'll
                get back to you soon.
              </p>

              <button
                className="contact-reset"
                onClick={() => {
                  setSent(false);

                  setForm({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                  });
                }}
              >
                SEND ANOTHER MESSAGE ↗
              </button>

            </div>
          )}

        </div>

      </section>

      {/* QUICK CTA */}
      <section className="contact-cta">

        <div>

          <span>LOOKING FOR A CAR?</span>

          <h2>
            FIND YOUR
            <br />
            <i>NEXT RIDE.</i>
          </h2>

        </div>

        <Link
          to="/cars"
          className="contact-cta-button"
        >
          VIEW THE FLEET
          <span>↗</span>
        </Link>

      </section>

      <style>{`

        @import url(
          'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;1,500&display=swap'
        );

        * {
          box-sizing: border-box;
        }

        .contact-page {
          min-height: 100vh;
          background: #FAFAFC;
          color: #171722;
          font-family: "DM Sans", sans-serif;
          overflow: hidden;
        }

        .contact-page a {
          color: inherit;
          text-decoration: none;
        }

        /* =========================
           HERO
        ========================= */

        .contact-hero {
          position: relative;
          min-height: 100vh;
          padding: 120px 8vw;
          display: flex;
          align-items: center;
          overflow: hidden;

          background:
            radial-gradient(
              circle at 78% 50%,
              rgba(143,123,232,.16),
              transparent 35%
            ),
            #FAFAFC;
        }

        .contact-hero-number {
          position: absolute;
          top: 55px;
          right: 8vw;

          color: #8F7BE8;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2px;
        }

        .contact-hero-content {
          position: relative;
          z-index: 3;
          max-width: 850px;
        }

        .contact-hero-content > span {
          color: #8F7BE8;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2.5px;
        }

        .contact-hero h1 {
          margin: 25px 0 30px;

          font-size: clamp(58px, 8vw, 115px);
          line-height: .82;
          letter-spacing: -7px;
        }

        .contact-hero h1 i,
        .contact-info h2 i,
        .contact-form-heading h3 i,
        .contact-success h3 i,
        .contact-cta h2 i {
          color: #7D6BCF;
          font-family: "Playfair Display", serif;
          font-weight: 500;
        }

        .contact-hero-content p {
          max-width: 430px;

          color: rgba(23,23,34,.68);
          font-size: 16px;
          line-height: 1.8;
        }

        /* =========================
           ORBIT
        ========================= */

        .contact-orbit {
          position: absolute;
          right: 7vw;

          width: 400px;
          height: 400px;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-orbit-ring {
          position: absolute;

          width: 100%;
          height: 100%;

          border: 1px solid rgba(143,123,232,.18);
          border-radius: 50%;
        }

        .contact-orbit-ring.second {
          width: 65%;
          height: 65%;

          border-color: rgba(23,23,34,.08);
        }

        .contact-orbit-dot {
          width: 9px;
          height: 9px;

          border-radius: 50%;
          background: #8F7BE8;

          box-shadow:
            0 0 30px rgba(143,123,232,.45);
        }

        .contact-orbit span {
          position: absolute;
          bottom: 35px;

          color: rgba(23,23,34,.38);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 3px;
        }

        /* =========================
           CONTACT SECTION
        ========================= */

        .contact-section {
          padding: 120px 8vw;

          display: grid;
          grid-template-columns: .85fr 1.15fr;
          gap: 10vw;

          background: #F1EFF7;

          border-top: 1px solid rgba(23,23,34,.08);
        }

        .contact-label,
        .contact-form-heading > span {
          color: #8F7BE8;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .contact-info h2 {
          margin: 22px 0 30px;

          font-size: clamp(55px, 6vw, 90px);
          line-height: .82;
          letter-spacing: -5px;
        }

        .contact-intro {
          max-width: 420px;
          margin: 0 0 50px;

          color: rgba(23,23,34,.68);
          font-size: 15px;
          line-height: 1.85;
        }

        /* =========================
           DETAILS
        ========================= */

        .contact-details {
          border-top: 1px solid rgba(23,23,34,.1);
        }

        .contact-detail {
          padding: 20px 0;

          border-bottom: 1px solid rgba(23,23,34,.1);
        }

        .contact-detail span {
          display: block;
          margin-bottom: 9px;

          color: #777784;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 1.5px;
        }

        .contact-detail a,
        .contact-detail p {
          margin: 0;

          color: #171722;
          font-size: 15px;
          line-height: 1.6;
        }

        .contact-detail a {
          transition: .3s;
        }

        .contact-detail a:hover {
          color: #8F7BE8;
        }

        /* =========================
           FORM
        ========================= */

        .contact-form-wrapper {
          align-self: start;

          padding: 40px;

          border: 1px solid rgba(23,23,34,.1);

          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,.9),
              rgba(247,246,250,.95)
            );
        }

        .contact-form-heading h3 {
          margin: 18px 0 40px;

          font-size: clamp(35px, 4vw, 55px);
          line-height: .85;
          letter-spacing: -3px;
        }

        .contact-form {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;

          background: rgba(23,23,34,.1);
          border: 1px solid rgba(23,23,34,.1);
        }

        .contact-field {
          min-height: 105px;
          padding: 18px;

          background: #FFFFFF;
        }

        .contact-field.full {
          grid-column: 1 / -1;
        }

        .contact-field label {
          display: block;
          margin-bottom: 13px;

          color: #777784;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 1.5px;
        }

        .contact-field input,
        .contact-field textarea {
          width: 100%;

          border: 0;
          outline: 0;

          resize: vertical;

          background: transparent;
          color: #171722;

          font-family: inherit;
          font-size: 15px;
          line-height: 1.6;
        }

        .contact-field input::placeholder,
        .contact-field textarea::placeholder {
          color: rgba(23,23,34,.42);
        }

        .message-field {
          min-height: 180px;
        }

        .contact-submit {
          grid-column: 1 / -1;

          min-height: 65px;

          border: 0;

          background: #8F7BE8;
          color: white;

          font-family: inherit;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;

          cursor: pointer;

          transition: .3s;
        }

        .contact-submit span {
          margin-left: 18px;
          font-size: 19px;
        }

        .contact-submit:hover {
          background: #171722;
        }

        /* =========================
           SUCCESS
        ========================= */

        .contact-success {
          min-height: 500px;

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }

        .contact-success-icon {
          width: 58px;
          height: 58px;

          margin-bottom: 25px;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid rgba(143,123,232,.45);
          border-radius: 50%;

          color: #7D6BCF;
          font-size: 21px;
        }

        .contact-success > span {
          color: #8F7BE8;

          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .contact-success h3 {
          margin: 20px 0;

          font-size: 65px;
          line-height: .82;
          letter-spacing: -4px;
        }

        .contact-success p {
          max-width: 430px;

          color: rgba(23,23,34,.68);

          font-size: 15px;
          line-height: 1.8;
        }

        .contact-reset {
          margin-top: 25px;
          padding: 15px 21px;

          border: 1px solid rgba(23,23,34,.18);

          background: transparent;
          color: #171722;

          font-family: inherit;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 1.5px;

          cursor: pointer;
          transition: .3s;
        }

        .contact-reset:hover {
          background: #8F7BE8;
          border-color: #8F7BE8;
          color: white;
        }

        /* =========================
           CTA
        ========================= */

        .contact-cta {
          min-height: 550px;

          padding: 100px 8vw;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 50px;

          background:
            radial-gradient(
              circle at 50% 50%,
              rgba(143,123,232,.13),
              transparent 45%
            ),
            #FAFAFC;
        }

        .contact-cta > div > span {
          color: #8F7BE8;

          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
        }

        .contact-cta h2 {
          margin: 22px 0 0;

          font-size: clamp(55px, 7vw, 100px);
          line-height: .8;
          letter-spacing: -6px;
        }

        .contact-cta-button {
          width: 185px;
          height: 185px;

          flex-shrink: 0;

          border: 1px solid rgba(143,123,232,.35);
          border-radius: 50%;

          display: flex !important;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          gap: 8px;

          color: #171722;

          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;

          transition: .4s;
        }

        .contact-cta-button span {
          color: #7D6BCF;
          font-size: 23px;
        }

        .contact-cta-button:hover {
          background: #8F7BE8;
          color: white;
          border-color: #8F7BE8;

          transform: rotate(8deg);
        }

        .contact-cta-button:hover span {
          color: white;
        }

        /* =========================
           FOOTER
        ========================= */

        .contact-footer {
          min-height: 150px;

          padding: 40px 7vw;

          display: flex;
          align-items: center;
          justify-content: space-between;

          border-top: 1px solid rgba(23,23,34,.08);

          background: #F0EFF5;
        }

        .contact-footer > span {
          color: #777784;

          font-size: 10px;
          letter-spacing: 1.5px;
        }

        .contact-footer > div {
          display: flex;
          gap: 25px;
        }

        .contact-footer > div a {
          color: #777784;

          font-size: 10px;
          letter-spacing: 1.5px;

          transition: .3s;
        }

        .contact-footer > div a:hover {
          color: #171722;
        }

        /* =========================
           TABLET
        ========================= */

        @media (max-width: 900px) {

          .contact-orbit {
            right: -120px;
            opacity: .4;
          }

          .contact-section {
            grid-template-columns: 1fr;
            gap: 70px;
          }

        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 650px) {

          .contact-nav {
            height: 65px;
            padding: 0 20px;
          }

          .contact-nav-links {
            display: none;
          }

          .contact-nav-button {
            padding: 9px 11px;
            font-size: 8px;
          }

          .contact-hero {
            min-height: calc(100vh - 65px);
            padding: 80px 22px;
          }

          .contact-hero-number {
            top: 30px;
            right: 22px;
            font-size: 10px;
          }

          .contact-hero-content > span {
            font-size: 11px;
          }

          .contact-hero h1 {
            font-size: 57px;
            letter-spacing: -5px;
          }

          .contact-hero-content p {
            max-width: 330px;
            font-size: 14px;
            line-height: 1.8;
          }

          .contact-orbit {
            width: 280px;
            height: 280px;

            right: -130px;

            opacity: .3;
          }

          .contact-orbit span {
            font-size: 8px;
          }

          .contact-section {
            padding: 80px 18px;
            gap: 55px;
          }

          .contact-label,
          .contact-form-heading > span {
            font-size: 10px;
          }

          .contact-info h2 {
            font-size: 60px;
          }

          .contact-intro {
            font-size: 14px;
          }

          .contact-detail a,
          .contact-detail p {
            font-size: 14px;
          }

          .contact-form-wrapper {
            padding: 22px;
          }

          .contact-form {
            grid-template-columns: 1fr;
          }

          .contact-field,
          .contact-field.full,
          .contact-submit {
            grid-column: 1;
          }

          .contact-field input,
          .contact-field textarea {
            font-size: 14px;
          }

          .contact-cta {
            min-height: 600px;
            padding: 80px 22px;

            display: block;
          }

          .contact-cta > div > span {
            font-size: 10px;
          }

          .contact-cta h2 {
            font-size: 58px;
            letter-spacing: -4px;
          }

          .contact-cta-button {
            width: 155px;
            height: 155px;

            margin-top: 60px;
          }

          .contact-footer {
            padding: 35px 22px;

            flex-direction: column;
            align-items: flex-start;

            gap: 22px;
          }

        }

      `}</style>
    </main>
  );
}