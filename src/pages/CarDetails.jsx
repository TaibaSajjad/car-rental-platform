import React from "react";
import { Link, useParams } from "react-router-dom";

const cars = [
  {
    id: 1,
    name: "Mercedes S-Class",
    brand: "Mercedes",
    type: "Executive",
    price: 220,
    fuel: "Petrol",
    seats: 5,
    transmission: "Automatic",
    availability: "Available",
    image:
      "https://pngimg.com/uploads/mercedes/mercedes_PNG80140.png",
    description:
      "A refined executive sedan built for effortless comfort, smooth performance and first-class journeys.",
    engine: "3.0L Turbo",
    power: "429 HP",
    drive: "AWD",
    acceleration: "4.9 sec",
    features: [
      "Premium Leather Interior",
      "Panoramic Sunroof",
      "360° Camera",
      "Adaptive Cruise Control",
      "Apple CarPlay",
      "Premium Sound System",
    ],
  },
  {
    id: 2,
    name: "Mercedes AMG GT",
    brand: "Mercedes",
    type: "Performance",
    price: 280,
    fuel: "Petrol",
    seats: 2,
    transmission: "Automatic",
    availability: "Available",
    image:
      "https://pngimg.com/uploads/mercedes/mercedes_PNG80133.png",
    description:
      "A dramatic performance machine designed for drivers who want power, precision and an unforgettable road experience.",
    engine: "4.0L V8",
    power: "577 HP",
    drive: "RWD",
    acceleration: "3.7 sec",
    features: [
      "AMG Performance Exhaust",
      "Sport Bucket Seats",
      "Performance Braking",
      "Digital Cockpit",
      "Apple CarPlay",
      "AMG Drive Modes",
    ],
  },
  {
    id: 3,
    name: "Mercedes Coupe",
    brand: "Mercedes",
    type: "Luxury",
    price: 190,
    fuel: "Petrol",
    seats: 4,
    transmission: "Automatic",
    availability: "Available",
    image:
      "https://pngimg.com/uploads/mercedes/mercedes_PNG80172.png",
    description:
      "A sophisticated coupe combining elegant design, everyday comfort and confident performance.",
    engine: "2.0L Turbo",
    power: "255 HP",
    drive: "RWD",
    acceleration: "5.8 sec",
    features: [
      "Leather Interior",
      "LED Ambient Lighting",
      "Parking Sensors",
      "Navigation System",
      "Apple CarPlay",
      "Wireless Charging",
    ],
  },
  {
    id: 4,
    name: "BMW 7 Series",
    brand: "BMW",
    type: "Executive",
    price: 240,
    fuel: "Petrol",
    seats: 5,
    transmission: "Automatic",
    availability: "Available",
    image:
      "https://pngimg.com/uploads/bmw/bmw_PNG99546.png",
    description:
      "A premium executive experience with intelligent technology, spacious comfort and effortless power.",
    engine: "3.0L Turbo",
    power: "375 HP",
    drive: "AWD",
    acceleration: "4.9 sec",
    features: [
      "Executive Lounge",
      "Panoramic Display",
      "Harman Kardon Audio",
      "360° Camera",
      "Heated Seats",
      "Adaptive Cruise Control",
    ],
  },
  {
    id: 5,
    name: "BMW M4",
    brand: "BMW",
    type: "Performance",
    price: 260,
    fuel: "Petrol",
    seats: 4,
    transmission: "Automatic",
    availability: "Available",
    image:
      "https://pngimg.com/uploads/bmw/bmw_PNG99564.png",
    description:
      "A sharp and aggressive performance coupe made for spirited drives and modern luxury.",
    engine: "3.0L Twin Turbo",
    power: "503 HP",
    drive: "RWD",
    acceleration: "3.8 sec",
    features: [
      "M Sport Seats",
      "M Performance Brakes",
      "Carbon Fibre Trim",
      "Driving Modes",
      "Digital Instrument Cluster",
      "Premium Audio",
    ],
  },
  {
    id: 6,
    name: "Audi A8",
    brand: "Audi",
    type: "Luxury",
    price: 210,
    fuel: "Hybrid",
    seats: 5,
    transmission: "Automatic",
    availability: "Available",
    image:
      "https://pngimg.com/uploads/audi/audi_PNG1758.png",
    description:
      "A quiet and sophisticated luxury sedan focused on comfort, technology and smooth long-distance travel.",
    engine: "3.0L TFSI",
    power: "335 HP",
    drive: "AWD",
    acceleration: "5.6 sec",
    features: [
      "Valcona Leather",
      "Matrix LED Lights",
      "Bang & Olufsen Audio",
      "Virtual Cockpit",
      "Heated Front Seats",
      "Parking Assistance",
    ],
  },
  {
    id: 7,
    name: "Porsche 911",
    brand: "Porsche",
    type: "Sports",
    price: 320,
    fuel: "Petrol",
    seats: 2,
    transmission: "Automatic",
    availability: "Available",
    image:
      "https://pngimg.com/uploads/porsche/porsche_PNG10627.png",
    description:
      "An iconic sports car delivering sharp handling, instant response and a pure driving experience.",
    engine: "3.0L Twin Turbo",
    power: "443 HP",
    drive: "RWD",
    acceleration: "3.5 sec",
    features: [
      "Sport Chrono Package",
      "Sports Exhaust",
      "Leather Sports Seats",
      "Porsche Communication",
      "Performance Braking",
      "Launch Control",
    ],
  },
  {
    id: 8,
    name: "Range Rover",
    brand: "Range Rover",
    type: "SUV",
    price: 290,
    fuel: "Diesel",
    seats: 5,
    transmission: "Automatic",
    availability: "Limited",
    image:
      "https://pngimg.com/uploads/range_rover/range_rover_PNG55.png",
    description:
      "A commanding luxury SUV combining refined comfort, spaciousness and confident capability.",
    engine: "3.0L Diesel",
    power: "296 HP",
    drive: "AWD",
    acceleration: "6.5 sec",
    features: [
      "Luxury Leather Cabin",
      "Panoramic Roof",
      "Terrain Response",
      "360° Camera",
      "Meridian Sound System",
      "Adaptive Suspension",
    ],
  },
];

export default function CarDetails() {
  const { id } = useParams();

  const car = cars.find((item) => item.id === Number(id));

  if (!car) {
    return (
      <main className="car-details-page">
        <div className="car-not-found">
          <span>DriveRent / 404</span>

          <h1>
            CAR NOT
            <br />
            <i>FOUND.</i>
          </h1>

          <Link to="/cars">BACK TO FLEET ↗</Link>
        </div>

        <style>{`

          @import url(
            'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;1,500&display=swap'
          );

          .car-details-page {
            min-height: 100vh;
            background: #FAFAFC;
            color: #171722;
            font-family: "DM Sans", sans-serif;
          }

          .car-not-found {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
          }

          .car-not-found span {
            color: #8F7BE8;
            font-size: 10px;
            letter-spacing: 3px;
          }

          .car-not-found h1 {
            margin: 25px 0 35px;
            font-size: 80px;
            line-height: .8;
            letter-spacing: -5px;
          }

          .car-not-found i {
            color: #7D6BCF;
            font-family: "Playfair Display", serif;
            font-weight: 500;
          }

          .car-not-found a {
            color: white;
            background: #8F7BE8;
            padding: 15px 22px;
            font-size: 9px;
            font-weight: 700;
            letter-spacing: 1.5px;
            text-decoration: none;
            transition: .3s ease;
          }

          .car-not-found a:hover {
            background: #171722;
          }

        `}</style>
      </main>
    );
  }

  return (
    <main className="car-details-page">

      {/* NAVBAR */}


      {/* MAIN HERO */}
      <section className="details-hero">

        <div className="details-background-circle"></div>

        <div className="details-left">

          <div className="details-breadcrumb">
            <Link to="/cars">FLEET</Link>
            <span>/</span>
            <span>{car.type.toUpperCase()}</span>
          </div>

          <div className="details-number">
            {String(car.id).padStart(2, "0")}
          </div>

          <div className="details-heading">

            <span>{car.brand.toUpperCase()}</span>

            <h1>
              {car.name.split(" ").slice(0, -1).join(" ")}
              <br />

              <i>
                {car.name.split(" ").slice(-1)}
              </i>
            </h1>

            <p>{car.description}</p>

          </div>

          <div className="details-price">
            <strong>${car.price}</strong>
            <span>/ DAY</span>
          </div>

          <div className="details-status">
            <b></b>
            {car.availability}
          </div>

        </div>

        {/* CAR */}
        <div className="details-car">

          <div className="car-glow"></div>

          <img
            src={car.image}
            alt={car.name}
          />

          <div className="car-watermark">
            {car.brand.toUpperCase()}
          </div>

        </div>

      </section>


      {/* SPECS */}
      <section className="specs-section">

        <div className="section-heading">

          <span>01 / SPECIFICATIONS</span>

          <h2>
            BUILT FOR
            <br />
            <i>THE ROAD.</i>
          </h2>

        </div>

        <div className="specs-grid">

          <div className="spec-item">
            <span>ENGINE</span>
            <strong>{car.engine}</strong>
          </div>

          <div className="spec-item">
            <span>POWER</span>
            <strong>{car.power}</strong>
          </div>

          <div className="spec-item">
            <span>FUEL TYPE</span>
            <strong>{car.fuel}</strong>
          </div>

          <div className="spec-item">
            <span>TRANSMISSION</span>
            <strong>{car.transmission}</strong>
          </div>

          <div className="spec-item">
            <span>SEATING</span>
            <strong>{car.seats} PEOPLE</strong>
          </div>

          <div className="spec-item">
            <span>DRIVE</span>
            <strong>{car.drive}</strong>
          </div>

          <div className="spec-item">
            <span>0 — 60 MPH</span>
            <strong>{car.acceleration}</strong>
          </div>

          <div className="spec-item">
            <span>TYPE</span>
            <strong>{car.type}</strong>
          </div>

        </div>

      </section>


      {/* FEATURES */}
      <section className="features-section">

        <div className="features-title">

          <span>02 / FEATURES</span>

          <h2>
            MADE FOR
            <br />
            <i>YOUR DRIVE.</i>
          </h2>

          <p>
            Thoughtful details and modern comforts designed
            to make every journey feel effortless.
          </p>

        </div>


        <div className="features-list">

          {car.features.map((feature, index) => (
            <div className="feature-card" key={feature}>

              <div className="feature-card-top">

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                

              </div>

              <strong>{feature}</strong>

            </div>
          ))}

        </div>

      </section>


      {/* BOOK CTA */}
      <section className="details-book">

        <div className="book-circle"></div>

        <div className="book-content">

          <span>READY TO DRIVE?</span>

          <h2>
            MAKE IT
            <br />
            <i>YOURS.</i>
          </h2>

          <p>
            Reserve the {car.name} and start
            planning your next journey.
          </p>

          <Link
            to={`/booking/${car.id}`}
            className="book-button"
          >
            BOOK THIS CAR
            <span>↗</span>
          </Link>

        </div>

        <div className="book-car">

          <img
            src={car.image}
            alt={car.name}
          />

        </div>

      </section>


      <style>{`

        @import url(
          'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;1,500&display=swap'
        );

        * {
          box-sizing: border-box;
        }

        .car-details-page {
          min-height: 100vh;
          background: #FAFAFC;
          color: #171722;
          font-family: "DM Sans", sans-serif;
          overflow: hidden;
        }

        .car-details-page a {
          color: inherit;
          text-decoration: none;
        }


        /* =========================
           NAVBAR
        ========================= */

        .details-nav {
          position: relative;
          z-index: 100;
          height: 76px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 5vw;

          border-bottom: 1px solid rgba(23,23,34,.08);

          background: rgba(255,255,255,.78);
          backdrop-filter: blur(18px);
        }

        .details-brand {
          font-size: 21px;
          font-weight: 700;
          letter-spacing: -1px;
        }

        .details-brand span {
          color: #8F7BE8;
        }

        .details-nav-links {
          display: flex;
          gap: 38px;
        }

        .details-nav-links a {
          color: rgba(23,23,34,.48);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1.6px;
          transition: .3s;
        }

        .details-nav-links a:hover,
        .details-nav-links .active {
          color: #171722;
        }

        .details-nav-links .active {
          position: relative;
        }

        .details-nav-links .active::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -9px;
          height: 1px;
          background: #8F7BE8;
        }

        .details-nav-button {
          border: 1px solid rgba(23,23,34,.14);
          padding: 11px 17px;
          font-size: 9px;
          letter-spacing: 1.5px;
          transition: .3s ease;
        }

        .details-nav-button:hover {
          background: #8F7BE8;
          color: white;
          border-color: #8F7BE8;
        }


        /* =========================
           HERO
        ========================= */

        .details-hero {
          position: relative;
          min-height: 680px;
          overflow: hidden;
          display: flex;
          align-items: center;

          border-bottom: 1px solid rgba(23,23,34,.08);

          background:
            radial-gradient(
              circle at 70% 50%,
              rgba(143,123,232,.16),
              transparent 36%
            ),
            #FAFAFC;
        }

        .details-background-circle {
          position: absolute;
          width: 750px;
          height: 750px;
          right: -150px;
          top: 50%;
          transform: translateY(-50%);

          border: 1px solid rgba(143,123,232,.14);
          border-radius: 50%;
        }

        .details-background-circle::before,
        .details-background-circle::after {
          content: "";
          position: absolute;
          border: 1px solid rgba(143,123,232,.08);
          border-radius: 50%;
        }

        .details-background-circle::before {
          inset: 80px;
        }

        .details-background-circle::after {
          inset: 180px;
        }

        .details-left {
          position: relative;
          z-index: 20;
          width: 50%;
          padding-left: 8vw;
        }

        .details-breadcrumb {
          display: flex;
          gap: 10px;
          margin-bottom: 55px;
          color: #777784;
          font-size: 9px;
          letter-spacing: 1.5px;
        }

        .details-breadcrumb a {
          color: #8F7BE8;
        }

        .details-number {
          position: absolute;
          left: 4vw;
          top: 0;
          color: rgba(23,23,34,.18);
          font-size: 10px;
          letter-spacing: 2px;
        }

        .details-heading > span {
          color: #8F7BE8;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
        }

        .details-heading h1 {
          margin: 20px 0 25px;
          font-size: clamp(55px, 6vw, 88px);
          line-height: .82;
          letter-spacing: -5px;
        }

        .details-heading h1 i {
          color: #7D6BCF;
          font-family: "Playfair Display", serif;
          font-weight: 500;
        }

        .details-heading p {
          max-width: 370px;
          color: rgba(23,23,34,.55);
          font-size: 14px;
          line-height: 1.8;
        }

        .details-price {
          display: flex;
          align-items: baseline;
          gap: 7px;
          margin-top: 30px;
        }

        .details-price strong {
          font-size: 28px;
          letter-spacing: -1px;
        }

        .details-price span {
          color: #777784;
          font-size: 9px;
          letter-spacing: 1.5px;
        }

        .details-status {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-top: 15px;
          color: rgba(23,23,34,.52);
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }

        .details-status b {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #8F7BE8;
          box-shadow: 0 0 15px rgba(143,123,232,.45);
        }


        /* =========================
           HERO CAR
        ========================= */

        .details-car {
          position: absolute;
          z-index: 15;
          width: min(65vw, 900px);
          right: -5vw;
          bottom: 8%;
        }

        .details-car img {
          position: relative;
          z-index: 3;
          width: 100%;
          display: block;

          filter:
            drop-shadow(0 35px 35px rgba(23,23,34,.16));

          animation: carFloat 5s ease-in-out infinite;
        }

        .car-glow {
          position: absolute;
          z-index: 1;
          width: 70%;
          height: 40%;
          left: 15%;
          bottom: 5%;

          background: rgba(143,123,232,.16);
          filter: blur(70px);
          border-radius: 50%;
        }

        .car-watermark {
          position: absolute;
          z-index: 0;
          right: 5%;
          bottom: 5%;
          color: rgba(23,23,34,.025);
          font-size: 100px;
          font-weight: 700;
          letter-spacing: -7px;
        }

        @keyframes carFloat {

          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-10px);
          }

        }


        /* =========================
           SPECS
        ========================= */

        .specs-section {
          padding: 100px 8vw;
          background: #F1EFF7;
        }

        .section-heading > span,
        .features-title > span {
          color: #8F7BE8;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .section-heading h2 {
          margin: 18px 0 55px;
          font-size: clamp(52px, 6vw, 88px);
          line-height: .82;
          letter-spacing: -5px;
        }

        .section-heading h2 i,
        .features-title h2 i {
          color: #7D6BCF;
          font-family: "Playfair Display", serif;
          font-weight: 500;
        }

        .specs-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);

          border-top: 1px solid rgba(23,23,34,.1);
          border-left: 1px solid rgba(23,23,34,.1);
        }

        .spec-item {
          min-height: 145px;
          padding: 25px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          border-right: 1px solid rgba(23,23,34,.1);
          border-bottom: 1px solid rgba(23,23,34,.1);
        }

        .spec-item span {
          color: #777784;
          font-size: 9px;
          letter-spacing: 1.5px;
        }

        .spec-item strong {
          font-size: 18px;
          font-weight: 500;
        }


        /* =========================
           FEATURES
        ========================= */

        .features-section {
          padding: 110px 8vw;
          display: grid;
          grid-template-columns: .75fr 1.25fr;
          gap: 9vw;

          background: #FAFAFC;
        }

        .features-title {
          position: relative;
        }

        .features-title > span {
          color: #8F7BE8;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .features-title h2 {
          margin: 18px 0 25px;
          font-size: clamp(52px, 6vw, 88px);
          line-height: .82;
          letter-spacing: -5px;
        }

        .features-title p {
          max-width: 270px;
          margin: 0;
          color: rgba(23,23,34,.52);
          font-size: 13px;
          line-height: 1.8;
        }


        /* FEATURE GRID */

        .features-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          align-content: start;
        }


        /* FEATURE CARD */

        .feature-card {
          position: relative;
          min-height: 145px;
          padding: 20px 22px;

          display: flex;
          flex-direction: column;
          justify-content: space-between;

          background: #F3F1F8;
          border: 1px solid rgba(143,123,232,.12);

          transition:
            transform .35s ease,
            background .35s ease,
            border-color .35s ease,
            box-shadow .35s ease;
        }

        .feature-card:hover {
          transform: translateY(-5px);

          background: #ECE9F6;
          border-color: rgba(143,123,232,.3);

          box-shadow:
            0 18px 40px rgba(55,45,85,.08);
        }


        /* FEATURE NUMBER + ARROW */

        .feature-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .feature-card-top > span:first-child {
          color: #8F7BE8;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 1.5px;
        }


        .feature-card:hover {
          transform: translate(3px, -3px);
          color: #7D6BCF;
        }


        /* FEATURE NAME */

        .feature-card strong {
          max-width: 190px;

          color: #171722;
          font-size: 15px;
          line-height: 1.25;
          font-weight: 600;
        }


        /* =========================
           BOOK CTA
        ========================= */

        .details-book {
          position: relative;
          min-height: 620px;
          display: flex;
          align-items: center;
          overflow: hidden;

          background:
            radial-gradient(
              circle at 50% 50%,
              rgba(143,123,232,.20),
              transparent 45%
            ),
            linear-gradient(
              135deg,
              #F1EFF7,
              #FAFAFC 55%,
              #ECEAF3
            );
        }

        .book-circle {
          position: absolute;
          width: 650px;
          height: 650px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);

          border: 1px solid rgba(143,123,232,.16);
          border-radius: 50%;
        }

        .book-circle::before,
        .book-circle::after {
          content: "";
          position: absolute;
          border: 1px solid rgba(143,123,232,.09);
          border-radius: 50%;
        }

        .book-circle::before {
          inset: 80px;
        }

        .book-circle::after {
          inset: 170px;
        }

        .book-content {
          position: relative;
          z-index: 30;
          width: 100%;
          text-align: center;
        }

        .book-content > span {
          color: #8F7BE8;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 3px;
        }

        .book-content h2 {
          margin: 22px 0;
          font-size: clamp(58px, 8vw, 115px);
          line-height: .78;
          letter-spacing: -6px;
        }

        .book-content h2 i {
          color: #7D6BCF;
          font-family: "Playfair Display", serif;
          font-weight: 500;
        }

        .book-content p {
          max-width: 300px;
          margin: 0 auto 28px;
          color: rgba(23,23,34,.52);
          font-size: 13px;
          line-height: 1.8;
        }

        .book-button {
          display: inline-flex;
          align-items: center;
          gap: 22px;
          padding: 16px 23px;

          background: #8F7BE8;
          color: white !important;

          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;

          transition:
            transform .3s ease,
            background .3s ease;
        }

        .book-button:hover {
          transform: translateY(-4px);
          background: #171722;
        }

        .book-button span {
          font-size: 17px;
        }

        .book-car {
          position: absolute;
          z-index: 20;
          width: min(55vw, 750px);
          right: -18vw;
          bottom: -2%;
          opacity: .18;
        }

        .book-car img {
          width: 100%;
          display: block;

          filter:
            drop-shadow(0 25px 35px rgba(23,23,34,.16));
        }


        /* =========================
           FOOTER
        ========================= */

        .details-footer {
          padding: 65px 7vw 25px;
          background: #F0EFF5;
        }

        .details-footer-main {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 30px;
          max-width: 1400px;
          margin: auto;
        }

        .details-footer-main p {
          margin: 0;
          max-width: 180px;
          color: #777784;
          font-size: 11px;
          line-height: 1.8;
        }

        .details-footer-links {
          display: flex;
          justify-content: flex-end;
          gap: 25px;
        }

        .details-footer-links a {
          color: #777784;
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          transition: .3s;
        }

        .details-footer-links a:hover {
          color: #8F7BE8;
        }

        .details-footer-bottom {
          max-width: 1400px;
          margin: 70px auto 0;
          padding-top: 18px;

          border-top: 1px solid rgba(23,23,34,.08);

          display: flex;
          justify-content: space-between;

          color: #9998A5;
          font-size: 8px;
          letter-spacing: 1.5px;
        }


        /* =========================
           TABLET
        ========================= */

        @media (max-width: 950px) {

          .details-left {
            width: 55%;
          }

          .details-car {
            width: 60vw;
            right: -12vw;
          }

          .specs-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .features-section {
            grid-template-columns: 1fr;
            gap: 55px;
          }

          .features-title p {
            max-width: 400px;
          }

        }


        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 650px) {

          .details-nav {
            height: 65px;
            padding: 0 20px;
          }

          .details-nav-links {
            display: none;
          }

          .details-nav-button {
            padding: 9px 11px;
            font-size: 8px;
          }

          .details-hero {
            min-height: 700px;
            display: block;
          }

          .details-left {
            width: 100%;
            padding: 65px 22px 0;
          }

          .details-breadcrumb {
            margin-bottom: 35px;
            font-size: 9px;
          }

          .details-number {
            display: none;
          }

          .details-heading > span {
            font-size: 10px;
          }

          .details-heading h1 {
            font-size: 55px;
            letter-spacing: -4px;
          }

          .details-heading p {
            max-width: 280px;
            font-size: 13px;
            line-height: 1.75;
          }

          .details-price strong {
            font-size: 26px;
          }

          .details-price span {
            font-size: 9px;
          }

          .details-status {
            font-size: 9px;
          }

          .details-car {
            width: 115vw;
            right: -35vw;
            bottom: 5%;
          }

          .details-background-circle {
            width: 500px;
            height: 500px;
            right: -270px;
          }

          .car-watermark {
            font-size: 55px;
          }


          /* SPECS */

          .specs-section {
            padding: 70px 22px;
          }

          .section-heading > span,
          .features-title > span {
            font-size: 9px;
          }

          .section-heading h2 {
            font-size: 55px;
            letter-spacing: -4px;
            margin-bottom: 35px;
          }

          .specs-grid {
            grid-template-columns: 1fr 1fr;
          }

          .spec-item {
            min-height: 115px;
            padding: 17px;
          }

          .spec-item span {
            font-size: 8px;
          }

          .spec-item strong {
            font-size: 13px;
          }


          /* FEATURES */

          .features-section {
            padding: 75px 22px;
            gap: 40px;
          }

          .features-title h2 {
            font-size: 55px;
            letter-spacing: -4px;
            margin-bottom: 22px;
          }

          .features-title p {
            max-width: 290px;
            font-size: 12px;
          }

          .features-list {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .feature-card {
            min-height: 115px;
            padding: 18px 20px;
          }

          .feature-card strong {
            font-size: 14px;
          }


          /* BOOK */

          .details-book {
            min-height: 600px;
          }

          .book-content {
            padding: 0 22px;
          }

          .book-content > span {
            font-size: 9px;
          }

          .book-content h2 {
            font-size: 58px;
            letter-spacing: -4px;
          }

          .book-content p {
            font-size: 12px;
          }

          .book-button {
            font-size: 9px;
          }

          .book-car {
            width: 110vw;
            right: -35vw;
            bottom: 2%;
            opacity: .13;
          }


          /* FOOTER */

          .details-footer {
            padding: 50px 22px 22px;
          }

          .details-footer-main {
            grid-template-columns: 1fr;
          }

          .details-footer-main p {
            font-size: 11px;
          }

          .details-footer-links {
            justify-content: flex-start;
            flex-wrap: wrap;
          }

          .details-footer-links a {
            font-size: 9px;
          }

          .details-footer-bottom {
            flex-direction: column;
            gap: 10px;
            margin-top: 45px;
            font-size: 8px;
          }

        }

      `}</style>

    </main>
  );
}