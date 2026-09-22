import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  const services = [
    {
      number: "01",
      title: "PREMIUM FLEET",
      text: "A carefully selected collection of luxury, executive, sports and SUV vehicles.",
    },
    {
      number: "02",
      title: "FLEXIBLE RENTALS",
      text: "Simple rental options designed around your schedule and journey.",
    },
    {
      number: "03",
      title: "PERSONAL SERVICE",
      text: "From vehicle selection to pickup, every detail is handled with care.",
    },
    {
      number: "04",
      title: "RELIABLE EXPERIENCE",
      text: "Well-maintained vehicles and a seamless booking experience from start to finish.",
    },
  ];

  return (
    <main className="about-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="about-hero">

        <div className="about-hero-number">
          05 / ABOUT DriveRent
        </div>

        <div className="about-hero-content">

          <span>THE DriveRent EXPERIENCE</span>

          <h1>
            MORE THAN
            <br />
            <i>A CAR.</i>
          </h1>

          <p>
            We create journeys around exceptional cars,
            thoughtful service and the freedom to go
            wherever the road takes you.
          </p>

        </div>


        {/* =====================================================
            CARS + ORBIT
        ===================================================== */}

        <div className="about-orbit">

          {/* Decorative background circle */}
          <div className="orbit-ring"></div>


          {/* Three-car composition */}
          <div className="orbit-cars">

            {/* Left — smaller */}
            <img
              className="hero-car hero-car-left"
              src="https://pngimg.com/d/mercedes_PNG80131.png"
              alt="Mercedes S-Class"
            />


            {/* Center — biggest */}
            <img
              className="hero-car hero-car-center"
              src="https://pngimg.com/d/bmw_PNG99558.png"
              alt="BMW 7 Series"
            />


            {/* Right — smaller */}
            <img
              className="hero-car hero-car-right"
              src="https://pngimg.com/d/audi_PNG1769.png"
              alt="Audi A8"
            />

          </div>


          {/* Small decorative text */}
          <div className="orbit-copy">
            <span>DRIVE</span>
            <span>EXPERIENCE</span>
            <span>DISCOVER</span>
          </div>

        </div>

      </section>


      {/* =====================================================
          STORY
      ===================================================== */}

      <section className="about-story">

        <div className="story-label">
          01 / OUR STORY
        </div>


        <div className="story-content">

          <h2>
            THE ROAD
            <br />
            <i>IS YOURS.</i>
          </h2>


          <div className="story-text">

            <p>
              DriveRent was created around a simple idea:
              renting a car should feel like the beginning
              of an experience, not a complicated process.
            </p>

            <p>
              From elegant city drives to long-distance
              escapes, our fleet is designed to give every
              journey its own character.
            </p>


            <Link
              to="/cars"
              className="story-button"
            >
              DISCOVER OUR CARS
              <span>↗</span>
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="services-section">

        <div className="services-heading">

          <div>

            <span>02 / WHAT WE OFFER</span>

            <h2>
              BUILT FOR
              <br />
              <i>THE JOURNEY.</i>
            </h2>

          </div>


          <p>
            Everything you need for a smooth,
            comfortable and memorable rental
            experience.
          </p>

        </div>


        <div className="services-grid">

          {services.map((service) => (

            <div
              className="service-card"
              key={service.number}
            >

              <span className="service-number">
                {service.number}
              </span>


              <div className="service-line"></div>


              <h3>
                {service.title}
              </h3>


              <p>
                {service.text}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          VALUES
      ===================================================== */}

      <section className="about-values">

        <div className="values-left">

          <span>03 / OUR APPROACH</span>

          <h2>
            EVERY
            <br />
            <i>DETAIL</i>
            <br />
            MATTERS.
          </h2>

        </div>


        <div className="values-right">

          <div className="value-item">

            <span>01</span>

            <div>

              <h3>QUALITY</h3>

              <p>
                Vehicles selected with comfort,
                design and performance in mind.
              </p>

            </div>

          </div>


          <div className="value-item">

            <span>02</span>

            <div>

              <h3>SIMPLICITY</h3>

              <p>
                Straightforward booking without
                unnecessary complexity.
              </p>

            </div>

          </div>


          <div className="value-item">

            <span>03</span>

            <div>

              <h3>FREEDOM</h3>

              <p>
                Your destination, your schedule,
                your way of travelling.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="about-cta">

        <div>

          <span>READY TO MOVE?</span>

          <h2>
            YOUR NEXT
            <br />
            <i>JOURNEY</i>
            <br />
            STARTS HERE.
          </h2>

        </div>


        <Link
          to="/cars"
          className="about-cta-button"
        >
          EXPLORE THE FLEET
          <span>↗</span>
        </Link>

      </section>


      {/* =====================================================
          STYLES
      ===================================================== */}

      <style>{`

        @import url(
          'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;1,500&display=swap'
        );


        * {
          box-sizing: border-box;
        }


        .about-page {
          min-height: 100vh;

          background: #FAFAFC;

          color: #171722;

          font-family: "DM Sans", sans-serif;

          overflow: hidden;
        }


        .about-page a {
          color: inherit;
          text-decoration: none;
        }


        /* =====================================================
           HERO
        ===================================================== */

        .about-hero {
          position: relative;

          min-height: 100vh;

          padding: 100px 8vw;

          display: flex;
          align-items: center;

          overflow: hidden;

          background:
            radial-gradient(
              circle at 75% 50%,
              rgba(143, 123, 232, .14),
              transparent 35%
            ),
            #FAFAFC;
        }


        .about-hero::after {
          content: "";

          position: absolute;

          width: 520px;
          height: 520px;

          right: -180px;
          bottom: -220px;

          border-radius: 50%;

          background:
            rgba(143, 123, 232, .06);

          filter: blur(10px);

          pointer-events: none;
        }


        .about-hero-number {
          position: absolute;

          top: 55px;
          right: 8vw;

          color: #8F7BE8;

          font-size: 10px;

          font-weight: 600;

          letter-spacing: 2px;
        }


        .about-hero-content {
          position: relative;

          z-index: 10;

          max-width: 650px;
        }


        .about-hero-content > span,
        .story-label,
        .services-heading span,
        .values-left > span,
        .about-cta > div > span {

          color: #8F7BE8;

          font-size: 11px;

          font-weight: 700;

          letter-spacing: 2.5px;
        }


        .about-hero h1 {

          margin: 25px 0 30px;

          font-size:
            clamp(
              65px,
              9vw,
              125px
            );

          line-height: .78;

          letter-spacing: -7px;
        }


        .about-hero h1 i,
        .story-content h2 i,
        .services-heading h2 i,
        .values-left h2 i,
        .about-cta h2 i {

          color: #7D6BCF;

          font-family:
            "Playfair Display",
            serif;

          font-weight: 500;
        }


        .about-hero-content p {

          max-width: 470px;

          margin: 0;

          color:
            rgba(23, 23, 34, .72);

          font-size: 16px;

          line-height: 1.85;
        }


        /* =====================================================
           HERO CARS
        ===================================================== */

        .about-orbit {

          position: absolute;

          right: 3vw;

          width: 570px;
          height: 430px;

          display: flex;

          align-items: center;
          justify-content: center;

          z-index: 4;
        }


        /* Decorative circle behind the cars */

        .orbit-ring {

          position: absolute;

          width: 390px;
          height: 390px;

          border:
            1px solid
            rgba(143, 123, 232, .20);

          border-radius: 50%;

          z-index: 1;
        }


        .orbit-ring::before {

          content: "";

          position: absolute;

          inset: 30px;

          border:
            1px solid
            rgba(143, 123, 232, .12);

          border-radius: 50%;
        }


        /* Cars stay together as one group */

        .orbit-cars {

          position: absolute;

          width: 550px;
          height: 270px;

          left: 5px;
          top: 65px;

          z-index: 5;
        }


        .hero-car {

          position: absolute;

          height: auto;

          object-fit: contain;

          filter:
            drop-shadow(
              0 20px 20px
              rgba(23, 23, 34, .18)
            );

          transition:
            transform .35s ease;
        }


        .hero-car-left {
  width: 250px;
  left: -45px;
  bottom: 30px;
  transform: rotate(-4deg);
  z-index: 3;
}

.hero-car-center {
  width: 410px;
  left: 120px;
  bottom: 0;
  z-index: 5;
}

.hero-car-right {
  width: 245px;
  right: -50px;
  bottom: 30px;
  transform: rotate(4deg);
  z-index: 3;
}


        /* Hover */

        .hero-car-left:hover {

          transform:
            translateY(-8px)
            rotate(-3deg);
        }


        .hero-car-center:hover {

          transform:
            translateY(-10px);
        }


        .hero-car-right:hover {

          transform:
            translateY(-8px)
            rotate(3deg);
        }


        /* Small text below cars */

        .orbit-copy {

          position: absolute;

          bottom: 28px;

          display: flex;

          gap: 24px;

          z-index: 6;

          color:
            rgba(23, 23, 34, .42);

          font-size: 8px;

          font-weight: 600;

          letter-spacing: 2.5px;
        }


        /* =====================================================
           STORY
        ===================================================== */

        .about-story {

          padding:
            130px 8vw;

          background:
            linear-gradient(
              135deg,
              #F3F1F8 0%,
              #ECEAF3 50%,
              #F7F6FA 100%
            );

          border-top:
            1px solid
            rgba(23, 23, 34, .07);
        }


        .story-content {

          margin-top: 65px;

          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 10vw;
        }


        .story-content h2 {

          margin: 0;

          font-size:
            clamp(
              60px,
              7vw,
              100px
            );

          line-height: .8;

          letter-spacing: -6px;
        }


        .story-text {

          max-width: 500px;

          padding-top: 10px;
        }


        .story-text p {

          margin:
            0 0 25px;

          color:
            rgba(23, 23, 34, .72);

          font-size: 15px;

          line-height: 1.9;
        }


        .story-button {

          display: inline-flex;

          align-items: center;

          gap: 20px;

          margin-top: 20px;

          padding:
            15px 21px;

          background: #8F7BE8;

          color: white !important;

          font-size: 10px;

          font-weight: 700;

          letter-spacing: 1.5px;

          transition: .3s;
        }


        .story-button:hover {

          background: #171722;

          transform:
            translateY(-3px);
        }


        .story-button span {

          font-size: 17px;
        }


        /* =====================================================
           SERVICES
        ===================================================== */

        .services-section {

          padding:
            130px 8vw;

          background: #FAFAFC;
        }


        .services-heading {

          display: flex;

          justify-content:
            space-between;

          align-items:
            flex-end;

          gap: 50px;

          margin-bottom: 65px;
        }


        .services-heading h2 {

          margin:
            20px 0 0;

          font-size:
            clamp(
              55px,
              6vw,
              90px
            );

          line-height: .8;

          letter-spacing: -5px;
        }


        .services-heading > p {

          max-width: 350px;

          margin: 0;

          color:
            rgba(23, 23, 34, .70);

          font-size: 15px;

          line-height: 1.8;
        }


        .services-grid {

          display: grid;

          grid-template-columns:
            repeat(4, 1fr);

          border-top:
            1px solid
            rgba(23, 23, 34, .1);

          border-bottom:
            1px solid
            rgba(23, 23, 34, .1);
        }


        .service-card {

          position: relative;

          min-height: 320px;

          padding: 28px;

          border-right:
            1px solid
            rgba(23, 23, 34, .1);

          transition: .35s;
        }


        .service-card:last-child {

          border-right: 0;
        }


        .service-card:hover {

          background: #F2F0F8;

          transform:
            translateY(-3px);
        }


        .service-number {

          color: #8F7BE8;

          font-size: 10px;

          font-weight: 700;
        }


        .service-line {

          width: 32px;

          height: 1px;

          margin:
            55px 0 28px;

          background: #8F7BE8;
        }


        .service-card h3 {

          margin:
            0 0 18px;

          font-size: 15px;

          letter-spacing: 1px;
        }


        .service-card p {

          max-width: 230px;

          margin: 0;

          color:
            rgba(23, 23, 34, .70);

          font-size: 14px;

          line-height: 1.8;
        }


        /* =====================================================
           VALUES
        ===================================================== */

        .about-values {

          padding:
            130px 8vw;

          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 10vw;

          background:
            linear-gradient(
              135deg,
              #F1EFF7,
              #E9E6F1
            );

          border-top:
            1px solid
            rgba(23, 23, 34, .06);
        }


        .values-left h2 {

          margin:
            25px 0 0;

          font-size:
            clamp(
              55px,
              6vw,
              90px
            );

          line-height: .8;

          letter-spacing: -5px;
        }


        .values-right {

          border-top:
            1px solid
            rgba(23, 23, 34, .1);
        }


        .value-item {

          display: grid;

          grid-template-columns:
            50px 1fr;

          gap: 20px;

          padding:
            30px 0;

          border-bottom:
            1px solid
            rgba(23, 23, 34, .1);
        }


        .value-item > span {

          color: #8F7BE8;

          font-size: 10px;

          font-weight: 700;
        }


        .value-item h3 {

          margin:
            0 0 10px;

          font-size: 13px;

          letter-spacing: 1.5px;
        }


        .value-item p {

          max-width: 360px;

          margin: 0;

          color:
            rgba(23, 23, 34, .70);

          font-size: 14px;

          line-height: 1.75;
        }


        /* =====================================================
           CTA
        ===================================================== */

        .about-cta {

          min-height: 600px;

          padding:
            100px 8vw;

          display: flex;

          align-items: center;

          justify-content:
            space-between;

          gap: 50px;

          background:
            radial-gradient(
              circle at 50% 50%,
              rgba(143, 123, 232, .13),
              transparent 45%
            ),
            #FAFAFC;

          border-top:
            1px solid
            rgba(23, 23, 34, .06);
        }


        .about-cta h2 {

          margin:
            25px 0 0;

          font-size:
            clamp(
              55px,
              7vw,
              100px
            );

          line-height: .78;

          letter-spacing: -6px;
        }


        .about-cta-button {

          min-width: 190px;

          width: 190px;

          height: 190px;

          border:
            1px solid
            rgba(143, 123, 232, .4);

          border-radius: 50%;

          display: flex !important;

          flex-direction: column;

          align-items: center;

          justify-content: center;

          gap: 8px;

          color: #171722 !important;

          font-size: 10px;

          font-weight: 700;

          letter-spacing: 1.5px;

          transition: .4s;

          background:
            rgba(255, 255, 255, .45);
        }


        .about-cta-button span {

          color: #8F7BE8;

          font-size: 22px;
        }


        .about-cta-button:hover {

          background: #8F7BE8;

          color: white !important;

          border-color: #8F7BE8;

          transform:
            rotate(8deg);
        }


        .about-cta-button:hover span {

          color: white;
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1100px) {

          .about-orbit {

            right: -70px;

            transform:
              scale(.85);
          }

          .about-hero-content {

            max-width: 560px;
          }

        }


        @media (max-width: 900px) {

          .about-hero {

            padding:
              100px 6vw;
          }


          .about-orbit {

            right: -100px;

            transform:
              scale(.72);

            opacity: .85;
          }


          .services-grid {

            grid-template-columns:
              1fr 1fr;
          }


          .service-card:nth-child(2) {

            border-right: 0;
          }


          .service-card:nth-child(-n+2) {

            border-bottom:
              1px solid
              rgba(23, 23, 34, .1);
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 650px) {

          .about-hero {

            min-height:
              calc(100vh - 65px);

            padding:
              85px 22px;

            align-items:
              flex-start;
          }


          .about-hero-number {

            top: 30px;

            right: 22px;

            font-size: 9px;
          }


          .about-hero h1 {

            font-size: 62px;

            letter-spacing: -5px;

            margin:
              22px 0 26px;
          }


          .about-hero-content p {

            max-width: 300px;

            font-size: 14px;

            line-height: 1.8;
          }


          /* Mobile car group */

          .about-orbit {

            width: 390px;

            height: 300px;

            right: -125px;

            top: 52%;

            transform:
              translateY(-20%)
              scale(.62);

            opacity: .78;
          }


          .orbit-ring {

            width: 390px;
            height: 390px;
          }


          .orbit-cars {

            width: 550px;

            height: 250px;

            left: 5px;

            top: 55px;
          }


          .hero-car-left {

            width: 170px;

            left: 0;

            bottom: 25px;
          }


          .hero-car-center {

            width: 270px;

            left: 115px;

            bottom: 0;
          }


          .hero-car-right {

            width: 165px;

            right: 0;

            bottom: 25px;
          }


          .orbit-copy {

            bottom: 18px;

            gap: 20px;

            font-size: 7px;
          }


          .about-story,
          .services-section,
          .about-values {

            padding:
              85px 22px;
          }


          .story-content {

            grid-template-columns:
              1fr;

            gap: 50px;
          }


          .story-content h2 {

            font-size: 60px;
          }


          .story-text p {

            font-size: 14px;
          }


          .services-heading {

            display: block;
          }


          .services-heading h2 {

            font-size: 55px;
          }


          .services-heading > p {

            margin-top: 35px;

            font-size: 14px;
          }


          .services-grid {

            grid-template-columns:
              1fr;
          }


          .service-card {

            min-height: 260px;

            border-right: 0;

            border-bottom:
              1px solid
              rgba(23, 23, 34, .1);
          }


          .service-card:last-child {

            border-bottom: 0;
          }


          .service-card p {

            font-size: 14px;
          }


          .about-values {

            grid-template-columns:
              1fr;

            gap: 60px;
          }


          .values-left h2 {

            font-size: 55px;
          }


          .value-item p {

            font-size: 14px;
          }


          .about-cta {

            min-height: 650px;

            padding:
              80px 22px;

            display: block;
          }


          .about-cta h2 {

            font-size: 55px;
          }


          .about-cta-button {

            margin-top: 60px;

            min-width: 155px;

            width: 155px;

            height: 155px;
          }

        }

      `}</style>

    </main>
  );
}