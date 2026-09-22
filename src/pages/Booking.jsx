import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";

const cars = [
  {
    id: 1,
    name: "Mercedes S-Class",
    type: "Executive",
    price: 220,
    image:
      "https://pngimg.com/uploads/mercedes/mercedes_PNG80140.png",
  },
  {
    id: 2,
    name: "Mercedes AMG GT",
    type: "Performance",
    price: 280,
    image:
      "https://pngimg.com/uploads/mercedes/mercedes_PNG80133.png",
  },
  {
    id: 3,
    name: "Mercedes Coupe",
    type: "Luxury",
    price: 190,
    image:
      "https://pngimg.com/uploads/mercedes/mercedes_PNG80172.png",
  },
  {
    id: 4,
    name: "BMW 7 Series",
    type: "Executive",
    price: 240,
    image:
      "https://www.pngmart.com/files/22/BMW-7-Series-PNG-Transparent.png",
  },
  {
    id: 5,
    name: "BMW M4",
    type: "Performance",
    price: 260,
    image:
      "https://pngimg.com/uploads/bmw/bmw_PNG99564.png",
  },
  {
    id: 6,
    name: "Audi A8",
    type: "Luxury",
    price: 210,
    image:
      "https://pngimg.com/uploads/audi/audi_PNG1758.png",
  },
  {
    id: 7,
    name: "Porsche 911",
    type: "Sports",
    price: 320,
    image:
      "https://pngimg.com/uploads/porsche/porsche_PNG10627.png",
  },
  {
    id: 8,
    name: "Range Rover",
    type: "SUV",
    price: 290,
    image:
      "https://pngimg.com/uploads/range_rover/range_rover_PNG55.png",
  },
];

export default function Booking() {
  const { id } = useParams();

  const car = cars.find((item) => item.id === Number(id));

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",

    pickupCity: "",
    pickupAddress: "",

    returnCity: "",
    returnAddress: "",

    pickupDate: "",
    returnDate: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const rentalDays = useMemo(() => {
    if (!form.pickupDate || !form.returnDate) {
      return 1;
    }

    const pickup = new Date(form.pickupDate);
    const returned = new Date(form.returnDate);

    const difference = returned - pickup;

    const days = Math.ceil(
      difference / (1000 * 60 * 60 * 24)
    );

    return days > 0 ? days : 1;
  }, [form.pickupDate, form.returnDate]);

  const totalPrice = car ? car.price * rentalDays : 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  /* =========================
     CAR NOT FOUND
  ========================= */

  if (!car) {
    return (
      <main className="booking-page">
        <div className="booking-not-found">
          <span>DriveRent / 404</span>

          <h1>
            CAR NOT
            <br />
            <i>FOUND.</i>
          </h1>

          <Link to="/cars">BACK TO FLEET ↗</Link>
        </div>

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;1,500&display=swap');

          * {
            box-sizing: border-box;
          }

          .booking-page {
            min-height: 100vh;
            background: #FAFAFC;
            color: #171722;
            font-family: "DM Sans", sans-serif;
          }

          .booking-not-found {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
          }

          .booking-not-found span {
            color: #8F7BE8;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 2.5px;
          }

          .booking-not-found h1 {
            margin: 25px 0 35px;
            font-size: 80px;
            line-height: .8;
            letter-spacing: -5px;
          }

          .booking-not-found i {
            color: #7D6BCF;
            font-family: "Playfair Display", serif;
            font-weight: 500;
          }

          .booking-not-found a {
            padding: 15px 22px;
            background: #8F7BE8;
            color: white;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 1.5px;
            text-decoration: none;
            transition: .3s ease;
          }

          .booking-not-found a:hover {
            background: #171722;
          }
        `}</style>
      </main>
    );
  }

  /* =========================
     SUCCESS
  ========================= */

  if (submitted) {
    return (
      <main className="booking-page">
        <nav className="booking-nav">
          <Link to="/" className="booking-brand">
            DriveRent<span>.</span>
          </Link>

          <Link to="/cars" className="booking-back">
            BACK TO FLEET
          </Link>
        </nav>

        <section className="booking-success">
          <div className="success-circle">✓</div>

          <span>BOOKING REQUEST RECEIVED</span>

          <h1>
            YOU'RE
            <br />
            <i>ALL SET.</i>
          </h1>

          <p>
            Thank you, {form.name}. Your request for the{" "}
            <strong>{car.name}</strong> has been received.
          </p>

          <div className="success-details">
            <div>
              <span>VEHICLE</span>
              <strong>{car.name}</strong>
            </div>

            <div>
              <span>RENTAL PERIOD</span>
              <strong>
                {rentalDays} {rentalDays === 1 ? "DAY" : "DAYS"}
              </strong>
            </div>

            <div>
              <span>ESTIMATED TOTAL</span>
              <strong>${totalPrice}</strong>
            </div>
          </div>

          <Link to="/cars" className="success-button">
            EXPLORE MORE CARS
            <span>↗</span>
          </Link>
        </section>

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;1,500&display=swap');

          * {
            box-sizing: border-box;
          }

          .booking-page {
            min-height: 100vh;
            background: #FAFAFC;
            color: #171722;
            font-family: "DM Sans", sans-serif;
          }

          .booking-nav {
            height: 76px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 5vw;
            border-bottom: 1px solid rgba(23,23,34,.08);
            background: rgba(255,255,255,.78);
            backdrop-filter: blur(18px);
          }

          .booking-brand {
            color: #171722;
            font-size: 21px;
            font-weight: 700;
            letter-spacing: -1px;
            text-decoration: none;
          }

          .booking-brand span {
            color: #8F7BE8;
          }

          .booking-back {
            padding: 11px 17px;
            border: 1px solid rgba(23,23,34,.14);
            color: #171722;
            font-size: 9px;
            font-weight: 600;
            letter-spacing: 1.5px;
            text-decoration: none;
            transition: .3s ease;
          }

          .booking-back:hover {
            background: #8F7BE8;
            border-color: #8F7BE8;
            color: white;
          }

          .booking-success {
            min-height: calc(100vh - 76px);
            padding: 80px 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            background:
              radial-gradient(
                circle at 50% 45%,
                rgba(143,123,232,.15),
                transparent 35%
              ),
              #FAFAFC;
          }

          .success-circle {
            width: 65px;
            height: 65px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 25px;
            border: 1px solid rgba(143,123,232,.45);
            border-radius: 50%;
            color: #8F7BE8;
            font-size: 24px;
            background: #F1EFF7;
          }

          .booking-success > span {
            color: #8F7BE8;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 2.5px;
          }

          .booking-success h1 {
            margin: 22px 0;
            font-size: clamp(60px, 8vw, 110px);
            line-height: .78;
            letter-spacing: -6px;
          }

          .booking-success h1 i {
            color: #7D6BCF;
            font-family: "Playfair Display", serif;
            font-weight: 500;
          }

          .booking-success p {
            max-width: 500px;
            color: rgba(23,23,34,.62);
            font-size: 14px;
            line-height: 1.8;
          }

          .booking-success p strong {
            color: #171722;
            font-weight: 600;
          }

          .success-details {
            width: min(650px, 90vw);
            margin: 35px 0;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            border-top: 1px solid rgba(23,23,34,.1);
            border-bottom: 1px solid rgba(23,23,34,.1);
          }

          .success-details div {
            padding: 20px;
            border-right: 1px solid rgba(23,23,34,.1);
          }

          .success-details div:last-child {
            border-right: 0;
          }

          .success-details span {
            display: block;
            margin-bottom: 8px;
            color: #777784;
            font-size: 9px;
            font-weight: 600;
            letter-spacing: 1.3px;
          }

          .success-details strong {
            font-size: 13px;
            font-weight: 600;
          }

          .success-button {
            display: inline-flex;
            align-items: center;
            gap: 18px;
            padding: 16px 23px;
            background: #8F7BE8;
            color: white;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 1.3px;
            text-decoration: none;
            transition: .3s ease;
          }

          .success-button:hover {
            background: #171722;
            transform: translateY(-3px);
          }

          .success-button span {
            font-size: 17px;
          }

          @media (max-width: 600px) {
            .booking-nav {
              height: 65px;
              padding: 0 20px;
            }

            .booking-back {
              padding: 9px 11px;
              font-size: 8px;
            }

            .booking-success {
              min-height: calc(100vh - 65px);
              padding: 50px 22px;
            }

            .booking-success h1 {
              font-size: 60px;
              letter-spacing: -4px;
            }

            .success-details {
              grid-template-columns: 1fr;
            }

            .success-details div {
              border-right: 0;
              border-bottom: 1px solid rgba(23,23,34,.1);
            }

            .success-details div:last-child {
              border-bottom: 0;
            }
          }
        `}</style>
      </main>
    );
  }

  return (
    <main className="booking-page">

      {/* PAGE HEADER */}
      <section className="booking-header">
        <div className="booking-header-number">
          04 / RESERVATION
        </div>

        <span>DriveRent RENTAL SERVICE</span>

        <h1>
          BOOK YOUR
          <br />
          <i>JOURNEY.</i>
        </h1>

        <p>
          Complete your reservation details and
          get ready to hit the road.
        </p>
      </section>

      {/* BOOKING AREA */}
      <section className="booking-section">

        {/* FORM */}
        <div className="booking-form-wrapper">

          <div className="form-heading">
            <span>01 / YOUR DETAILS</span>

            <h2>
              LET'S GET
              <br />
              <i>STARTED.</i>
            </h2>
          </div>

          <form
            className="booking-form"
            onSubmit={handleSubmit}
          >

            {/* NAME */}
            <div className="form-field full">
              <label>FULL NAME</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* PHONE */}
            <div className="form-field">
              <label>PHONE NUMBER</label>

              <input
                type="tel"
                name="phone"
                placeholder="+92 300 0000000"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* EMAIL */}
            <div className="form-field">
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

            {/* PICKUP CITY */}
            <div className="form-field">
              <label>PICKUP CITY</label>

              <select
                name="pickupCity"
                value={form.pickupCity}
                onChange={handleChange}
                required
              >
                <option value="">
                  Select city
                </option>

                <option value="Lahore">
                  Lahore
                </option>

                <option value="Islamabad">
                  Islamabad
                </option>

                <option value="Karachi">
                  Karachi
                </option>

                <option value="Faisalabad">
                  Faisalabad
                </option>
              </select>
            </div>

            {/* PICKUP ADDRESS */}
            <div className="form-field">
              <label>EXACT PICKUP ADDRESS</label>

              <input
                type="text"
                name="pickupAddress"
                placeholder="House, street, building..."
                value={form.pickupAddress}
                onChange={handleChange}
                required
              />
            </div>

            {/* RETURN CITY */}
            <div className="form-field">
              <label>RETURN CITY</label>

              <select
                name="returnCity"
                value={form.returnCity}
                onChange={handleChange}
                required
              >
                <option value="">
                  Select city
                </option>

                <option value="Lahore">
                  Lahore
                </option>

                <option value="Islamabad">
                  Islamabad
                </option>

                <option value="Karachi">
                  Karachi
                </option>

                <option value="Faisalabad">
                  Faisalabad
                </option>
              </select>
            </div>

            {/* RETURN ADDRESS */}
            <div className="form-field">
              <label>EXACT RETURN ADDRESS</label>

              <input
                type="text"
                name="returnAddress"
                placeholder="House, street, building..."
                value={form.returnAddress}
                onChange={handleChange}
                required
              />
            </div>

            {/* PICKUP DATE */}
            <div className="form-field">
              <label>PICKUP DATE</label>

              <input
                type="date"
                name="pickupDate"
                value={form.pickupDate}
                onChange={handleChange}
                onClick={(e) => e.currentTarget.showPicker()}
                required
              />
            </div>

            {/* RETURN DATE */}
            <div className="form-field">
              <label>RETURN DATE</label>

              <input
                type="date"
                name="returnDate"
                value={form.returnDate}
                onChange={handleChange}
                min={form.pickupDate || undefined}
                onClick={(e) => e.currentTarget.showPicker()}
                required
              />
            </div>

            <button
              type="submit"
              className="confirm-button"
            >
              CONFIRM BOOKING
              <span>↗</span>
            </button>

          </form>
        </div>

        {/* SUMMARY */}
        <aside className="booking-summary">

          <div className="summary-label">
            04 / YOUR VEHICLE
          </div>

          <div className="summary-image">
            <div className="summary-glow"></div>

            <img
              src={car.image}
              alt={car.name}
            />
          </div>

          <div className="summary-type">
            {car.type}
          </div>

          <h2>{car.name}</h2>

          <div className="summary-price">
            <strong>${car.price}</strong>
            <span>/ DAY</span>
          </div>

          <div className="summary-line"></div>

          <div className="summary-row">
            <span>RENTAL PERIOD</span>

            <strong>
              {rentalDays}{" "}
              {rentalDays === 1 ? "DAY" : "DAYS"}
            </strong>
          </div>

          <div className="summary-row">
            <span>DAILY RATE</span>

            <strong>${car.price}</strong>
          </div>

          <div className="summary-total">
            <span>ESTIMATED TOTAL</span>

            <strong>${totalPrice}</strong>
          </div>

          <p className="summary-note">
            Final pricing may vary depending on
            your selected dates and rental terms.
          </p>

        </aside>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;1,500&display=swap');

        * {
          box-sizing: border-box;
        }

        .booking-page {
          min-height: 100vh;
          background: #FAFAFC;
          color: #171722;
          font-family: "DM Sans", sans-serif;
          overflow: hidden;
        }

        .booking-page a {
          color: inherit;
          text-decoration: none;
        }

        /* =========================
           NAVBAR
        ========================= */

        .booking-nav {
          position: relative;
          z-index: 50;

          height: 76px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          padding: 0 5vw;

          border-bottom: 1px solid rgba(23,23,34,.08);

          background: rgba(255,255,255,.78);
          backdrop-filter: blur(18px);
        }

        .booking-brand {
          font-size: 21px;
          font-weight: 700;
          letter-spacing: -1px;
        }

        .booking-brand span {
          color: #8F7BE8;
        }

        .booking-back {
          border: 1px solid rgba(23,23,34,.14);

          padding: 11px 17px;

          font-size: 9px;
          font-weight: 600;
          letter-spacing: 1.5px;

          transition: .3s ease;
        }

        .booking-back:hover {
          background: #8F7BE8;
          border-color: #8F7BE8;
          color: white;
        }

        /* =========================
           HEADER
        ========================= */

        .booking-header {
          position: relative;

          min-height: 440px;

          padding: 180px 8vw 100px;

          display: flex;
          flex-direction: column;
          justify-content: center;

          overflow: hidden;

          border-bottom: 1px solid rgba(23,23,34,.08);

          background:
            radial-gradient(
              circle at 78% 50%,
              rgba(143,123,232,.14),
              transparent 35%
            ),
            #FAFAFC;
        }

        .booking-header-number {
          position: absolute;

          top: 60px;
          right: 8vw;

          color: #8F7BE8;

          font-size: 9px;
          font-weight: 600;
          letter-spacing: 2px;
        }

        .booking-header > span {
          color: #8F7BE8;

          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
        }

        .booking-header h1 {
          margin: 22px 0 25px;

          font-size: clamp(52px, 6vw, 88px);
          line-height: .82;
          letter-spacing: -5px;
        }

        .booking-header h1 i {
          color: #7D6BCF;

          font-family: "Playfair Display", serif;
          font-weight: 500;
        }

        .booking-header p {
          max-width: 420px;
          margin: 0;

          color: rgba(23,23,34,.62);

          font-size: 15px;
          line-height: 1.7;
        }

        /* =========================
           BOOKING SECTION
        ========================= */

        .booking-section {
          padding: 90px 8vw 110px;

          display: grid;
          grid-template-columns: 1.25fr .75fr;
          gap: 8vw;

          background: #F1EFF7;
        }

        .form-heading > span,
        .location-heading > span {
          color: #8F7BE8;

          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .form-heading h2 {
          margin: 18px 0 45px;

          font-size: clamp(48px, 5vw, 72px);
          line-height: .82;
          letter-spacing: -4px;
        }

        .form-heading h2 i {
          color: #7D6BCF;

          font-family: "Playfair Display", serif;
          font-weight: 500;
        }

        /* =========================
           LOCATION HEADINGS
        ========================= */

        .location-heading {
          grid-column: 1 / -1;

          padding: 24px 18px 14px;

          background: #F1EFF7;

          border-top: 1px solid rgba(23,23,34,.08);
        }

        .location-heading:first-of-type {
          border-top: 0;
        }

        .location-heading p {
          margin: 7px 0 0;

          color: rgba(23,23,34,.58);

          font-size: 13px;
          line-height: 1.5;
        }

        /* =========================
           FORM
        ========================= */

        .booking-form {
          display: grid;
          grid-template-columns: 1fr 1fr;

          gap: 1px;

          background: rgba(23,23,34,.1);

          border: 1px solid rgba(23,23,34,.1);
        }

        .form-field {
          position: relative;

          min-height: 100px;

          padding: 18px;

          background: #FFFFFF;
        }

        .form-field.full {
          grid-column: 1 / -1;
        }

        .form-field label {
          display: block;

          margin-bottom: 12px;

          color: #666674;

          font-size: 10px;
          font-weight: 600;
          letter-spacing: 1.2px;
        }

        .form-field input,
        .form-field select {
          width: 100%;

          border: 0;
          outline: 0;

          background: transparent;

          color: #171722;

          font-family: inherit;

          font-size: 15px;
          font-weight: 500;
        }

        .form-field input::placeholder {
          color: rgba(23,23,34,.38);
        }

        .form-field select {
  width: 100%;
  height: 24px;
  padding: 0;

  border: 0;
  outline: none;

  background: transparent;
  color: #171722;

  font-family: "DM Sans", sans-serif;
  font-size: 15px;
  font-weight: 500;

  cursor: pointer;

  appearance: auto;
  -webkit-appearance: auto;
  -moz-appearance: auto;
}

.form-field select option {
  background: #FFFFFF;
  color: #171722;
}

        .form-field input[type="date"] {
          color-scheme: light;
        }

        /* =========================
           BUTTON
        ========================= */

        .confirm-button {
          grid-column: 1 / -1;

          min-height: 62px;

          border: 0;

          background: #8F7BE8;
          color: white;

          font-family: inherit;

          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.3px;

          cursor: pointer;

          transition: .3s ease;
        }

        .confirm-button span {
          margin-left: 18px;

          font-size: 17px;
        }

        .confirm-button:hover {
          background: #171722;
        }

        /* =========================
           SUMMARY
        ========================= */

        .booking-summary {
          position: relative;

          align-self: start;

          padding: 25px;

          border: 1px solid rgba(23,23,34,.1);

          background: #FFFFFF;

          box-shadow:
            0 20px 50px rgba(23,23,34,.06);
        }

        .summary-label {
          color: #8F7BE8;

          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.8px;
        }

        .summary-image {
          position: relative;

          height: 220px;

          margin: 15px -10px 0;

          display: flex;
          align-items: center;
          justify-content: center;

          overflow: hidden;
        }

        .summary-image img {
          position: relative;

          z-index: 3;

          width: 120%;

          filter:
            drop-shadow(0 25px 25px rgba(23,23,34,.16));
        }

        .summary-glow {
          position: absolute;

          width: 70%;
          height: 45%;
          bottom: 10%;

          border-radius: 50%;

          background: rgba(143,123,232,.16);

          filter: blur(45px);
        }

        .summary-type {
          color: #8F7BE8;

          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.8px;
        }

        .booking-summary h2 {
          margin: 8px 0 18px;

          font-size: 30px;
          line-height: .9;
          letter-spacing: -1.5px;
        }

        .summary-price {
          display: flex;
          align-items: baseline;
          gap: 6px;
        }

        .summary-price strong {
          font-size: 28px;
        }

        .summary-price span {
          color: #777784;

          font-size: 10px;
          letter-spacing: 1px;
        }

        .summary-line {
          height: 1px;

          margin: 22px 0 5px;

          background: rgba(23,23,34,.1);
        }

        .summary-row,
        .summary-total {
          display: flex;
          align-items: center;
          justify-content: space-between;

          padding: 13px 0;

          border-bottom: 1px solid rgba(23,23,34,.07);
        }

        .summary-row span,
        .summary-total span {
          color: #777784;

          font-size: 9px;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .summary-row strong {
          font-size: 12px;
          font-weight: 600;
        }

        .summary-total {
          border-bottom: 0;
          padding-top: 20px;
        }

        .summary-total strong {
          color: #7D6BCF;

          font-size: 25px;
          font-weight: 700;
        }

        .summary-note {
          margin: 12px 0 0;

          color: #858492;

          font-size: 10px;
          line-height: 1.7;
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 950px) {
          .booking-section {
            grid-template-columns: 1fr;
            gap: 70px;
          }

          .booking-summary {
            max-width: 600px;
          }
        }

        @media (max-width: 650px) {
          .booking-nav {
            height: 65px;
            padding: 0 20px;
          }

          .booking-back {
            padding: 9px 11px;
            font-size: 8px;
          }

          .booking-header {
            min-height: 390px;

            padding: 100px 22px 60px;
          }

          .booking-header-number {
            top: 30px;
            right: 22px;
          }

          .booking-header h1 {
            font-size: 55px;
            letter-spacing: -4px;
          }

          .booking-section {
            padding: 65px 18px 80px;
            gap: 55px;
          }

          .form-heading h2 {
            font-size: 52px;
            letter-spacing: -4px;
          }

          .booking-form {
            grid-template-columns: 1fr;
          }

          .form-field,
          .form-field.full,
          .confirm-button,
          .location-heading {
            grid-column: 1;
          }

          .location-heading {
            padding: 22px 18px 12px;
          }

          .booking-summary {
            padding: 20px;
          }

          .summary-image {
            height: 190px;
          }
        }
      `}</style>
    </main>
  );
}