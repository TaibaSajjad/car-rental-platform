import React, {
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { gsap } from "gsap";
import { Link, useNavigate } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


/* =====================================================
   CAR IMAGES
===================================================== */
const CAR_1 =
  "https://pngimg.com/uploads/mercedes/mercedes_PNG80140.png";

const CAR_2 =
  "https://pngimg.com/uploads/mercedes/mercedes_PNG80133.png";

const CAR_3 =
  "https://pngimg.com/uploads/mercedes/mercedes_PNG80172.png";

const CAR_4 =
  "https://www.pngmart.com/files/22/BMW-7-Series-PNG-Transparent.png";

const CAR_5 =
  "https://pngimg.com/uploads/bmw/bmw_PNG99564.png";

const CAR_6 =
  "https://pngimg.com/uploads/audi/audi_PNG1758.png";

const CAR_7 =
  "https://pngimg.com/uploads/porsche/porsche_PNG10627.png";
/* =====================================================
   FEATURED COLLECTION
===================================================== */

const FEATURED_CARS = [
  {
    id: 1,
    category: "EXECUTIVE",
    name: "Mercedes S-Class",
    model: "S 500",
    price: "$220",
    image: CAR_1,
    fuel: "Petrol",
    seats: "5",
    transmission: "Automatic",
  },
  {
    id: 2,
    category: "PERFORMANCE",
    name: "Mercedes AMG GT",
    model: "AMG GT",
    price: "$280",
    image: CAR_2,
    fuel: "Petrol",
    seats: "2",
    transmission: "Automatic",
  },
  {
    id: 3,
    category: "LUXURY",
    name: "Mercedes Coupe",
    model: "C 300",
    price: "$190",
    image: CAR_3,
    fuel: "Petrol",
    seats: "4",
    transmission: "Automatic",
  },
  {
    id: 4,
    category: "EXECUTIVE",
    name: "BMW 7 Series",
    model: "740i",
    price: "$240",
    image: CAR_4,
    fuel: "Petrol",
    seats: "5",
    transmission: "Automatic",
  },
  {
    id: 5,
    category: "PERFORMANCE",
    name: "BMW M4",
    model: "M4 Competition",
    price: "$260",
    image: CAR_5,
    fuel: "Petrol",
    seats: "4",
    transmission: "Automatic",
  },
  {
    id: 6,
    category: "LUXURY",
    name: "Audi A8",
    model: "A8 L",
    price: "$210",
    image: CAR_6,
    fuel: "Hybrid",
    seats: "5",
    transmission: "Automatic",
  },
  {
    id: 7,
    category: "SPORTS",
    name: "Porsche 911",
    model: "Carrera",
    price: "$320",
    image: CAR_7,
    fuel: "Petrol",
    seats: "2",
    transmission: "Automatic",
  },
];


export default function Home() {

  const root = useRef(null);

  const navigate = useNavigate();


  /* =====================================================
     BOOKING STATES
  ===================================================== */

  const [pickupLocation, setPickupLocation] =
    useState("Lahore, Pakistan");

  const [pickupDate, setPickupDate] =
    useState("");

  const [returnDate, setReturnDate] =
    useState("");


  /* =====================================================
     COLLECTION STATE
  ===================================================== */

  const [activeCar, setActiveCar] = useState(0);

const touchStartX = useRef(null);

const handleTouchStart = (e) => {
  touchStartX.current = e.touches[0].clientX;
};

const handleTouchEnd = (e) => {
  if (touchStartX.current === null) return;

  const touchEndX = e.changedTouches[0].clientX;
  const diff = touchStartX.current - touchEndX;

  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      setActiveCar((prev) => (prev + 1) % FEATURED_CARS.length);
    } else {
      setActiveCar(
        (prev) =>
          (prev - 1 + FEATURED_CARS.length) % FEATURED_CARS.length
      );
    }
  }

  touchStartX.current = null;
};
  /* =====================================================
     SEARCH
  ===================================================== */

  const handleSearch = () => {

    const params = new URLSearchParams();

    if (pickupLocation) {
      params.set(
        "location",
        pickupLocation
      );
    }

    if (pickupDate) {
      params.set(
        "pickup",
        pickupDate
      );
    }

    if (returnDate) {
      params.set(
        "return",
        returnDate
      );
    }

    navigate(
      `/cars?${params.toString()}`
    );
  };


  /* =====================================================
     COLLECTION NAVIGATION
  ===================================================== */

  const goNext = () => {

    setActiveCar(
      (current) =>
        (current + 1) %
        FEATURED_CARS.length
    );
  };


  const goPrevious = () => {

    setActiveCar(
      (current) =>
        (
          current -
          1 +
          FEATURED_CARS.length
        ) %
        FEATURED_CARS.length
    );
  };


  const goToCar = (index) => {

    setActiveCar(index);

  };


  /* =====================================================
     GET CAR POSITION
     
     center
     left
     right
     far-left
     far-right
     hidden
  ===================================================== */

  const getCardPosition = (index) => {

    const total =
      FEATURED_CARS.length;

    let difference =
      index - activeCar;

    if (difference > total / 2) {
      difference -= total;
    }

    if (difference < -total / 2) {
      difference += total;
    }

    if (difference === 0) {
      return "is-center";
    }

    if (difference === -1) {
      return "is-left";
    }

    if (difference === 1) {
      return "is-right";
    }

    if (difference === -2) {
      return "is-far-left";
    }

    if (difference === 2) {
      return "is-far-right";
    }

    return "is-hidden";
  };


  /* =====================================================
     GSAP MASTER SCROLL
  ===================================================== */

  useLayoutEffect(() => {
  if (!root.current) return;

  const mm = gsap.matchMedia();

  mm.add("(min-width: 701px)", () => {
    const ctx = gsap.context(() => {

      const scenes =
        gsap.utils.toArray(
          ".scene"
        );


      /* =================================================
         INITIAL SCENE STATE
      ================================================= */

      gsap.set(scenes, {
        autoAlpha: 0,
        yPercent: 100,
        zIndex: 1,
        pointerEvents: "none",
      });


      gsap.set(".hero-scene", {
        autoAlpha: 1,
        yPercent: 0,
        zIndex: 10,
        pointerEvents: "auto",
      });


      /* =================================================
         MASTER TIMELINE
      ================================================= */

      const master =
        gsap.timeline({

          defaults: {
            ease: "none",
          },

          scrollTrigger: {

            trigger:
              ".home-scroll",

            start:
              "top top",

            end:
              "bottom bottom",

            scrub: 1,

            invalidateOnRefresh:
              true,
          },

        });


      /* =================================================
         HERO
      ================================================= */

      master

        .to(
          ".hero-title",
          {
            y: -120,
            opacity: 0,
            duration: 1,
          }
        )

        .to(
          ".hero-copy",
          {
            y: -80,
            opacity: 0,
            duration: 0.7,
          },
          "<"
        )

        .to(
          ".hero-car",
          {
            x: 450,
            y: -80,
            scale: 0.75,
            opacity: 0,
            duration: 1,
          },
          "<"
        )


        /* =================================================
           HERO → SEARCH
        ================================================= */

        .set(
          ".search-scene",
          {
            autoAlpha: 1,
            yPercent: 100,
            zIndex: 20,
            pointerEvents: "auto",
          }
        )

        .to(
          ".hero-scene",
          {
            autoAlpha: 0,
            yPercent: -100,
            pointerEvents: "none",
            duration: 0.7,
          }
        )

        .to(
          ".search-scene",
          {
            yPercent: 0,
            duration: 0.7,
          },
          "<"
        )

        .fromTo(
          ".search-title",
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
          }
        )

        .fromTo(
          ".search-panel",
          {
            y: 120,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
          },
          "<0.1"
        )

        .fromTo(
          ".search-car",
          {
            x: 400,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
          },
          "<"
        )

        .to(
          {},
          {
            duration: 1,
          }
        )


        /* =================================================
           SEARCH → COLLECTION
        ================================================= */

        .to(
          ".search-title",
          {
            y: -100,
            opacity: 0,
            duration: 0.5,
          }
        )

        .to(
          ".search-panel",
          {
            y: -100,
            opacity: 0,
            duration: 0.5,
          },
          "<"
        )

        .to(
          ".search-car",
          {
            x: -400,
            opacity: 0,
            duration: 0.6,
          },
          "<"
        )


        /* COLLECTION ENTERS */

        .set(
          ".featured-scene",
          {
            autoAlpha: 1,
            yPercent: 100,
            zIndex: 30,
            pointerEvents: "auto",
          },
          "<0.35"
        )

        .to(
          ".featured-scene",
          {
            yPercent: 0,
            duration: 0.8,
          },
          "<"
        )

        .to(
          ".search-scene",
          {
            autoAlpha: 0,
            yPercent: -100,
            pointerEvents: "none",
            duration: 0.8,
          },
          "<"
        )


        /* COLLECTION CONTENT */

        .fromTo(
          ".collection-heading",
          {
            y: 90,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
          }
        )

        .fromTo(
          ".collection-stage",
          {
            y: 130,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
          },
          "<0.1"
        )

        .fromTo(
          ".collection-footer",
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
          },
          "<0.2"
        )


        /* HOLD COLLECTION */

        .to(
          {},
          {
            duration: 1,
          }
        )


        /* =================================================
           COLLECTION → EXPERIENCE
        ================================================= */

        .to(
          ".collection-heading",
          {
            y: -100,
            opacity: 0,
            duration: 0.5,
          }
        )

        .to(
          ".collection-stage",
          {
            y: -110,
            opacity: 0,
            duration: 0.5,
          },
          "<"
        )

        .to(
          ".collection-footer",
          {
            y: -70,
            opacity: 0,
            duration: 0.4,
          },
          "<"
        )


        .set(
          ".how-section",
          {
            autoAlpha: 1,
            yPercent: 100,
            zIndex: 40,
            pointerEvents: "auto",
          },
          "<0.3"
        )

        .to(
          ".how-section",
          {
            yPercent: 0,
            duration: 0.8,
          },
          "<"
        )

        .to(
          ".featured-scene",
          {
            autoAlpha: 0,
            yPercent: -100,
            pointerEvents: "none",
            duration: 0.8,
          },
          "<"
        )


        /* =================================================
           EXPERIENCE
        ================================================= */

        .fromTo(
  ".how-intro",
  {
    y: 80,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.7,
  }
)

.fromTo(
  ".how-step-card",
  {
    y: 70,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.55,
    stagger: 0.12,
  },
  "<0.1"
)

.fromTo(
  ".how-visual",
  {
    y: 100,
    opacity: 0,
    scale: 0.92,
  },
  {
    y: 0,
    opacity: 1,
    scale: 1,
    duration: 0.8,
  },
  "<0.1"
)

.to({}, { duration: 1 })

.to(".how-intro", {
  y: -80,
  opacity: 0,
  duration: 0.5,
})

.to(
  ".how-step-card",
  {
    y: -80,
    opacity: 0,
    duration: 0.5,
    stagger: 0.08,
  },
  "<"
)

.to(
  ".how-visual",
  {
    y: -100,
    opacity: 0,
    duration: 0.5,
  },
  "<"
)



        .set(
          ".stats-scene",
          {
            autoAlpha: 1,
            yPercent: 100,
            zIndex: 50,
            pointerEvents: "auto",
          },
          "<0.3"
        )

        .to(
          ".stats-scene",
          {
            yPercent: 0,
            duration: 0.8,
          },
          "<"
        )

        .to(
          ".how-section",
          {
            autoAlpha: 0,
            yPercent: -100,
            pointerEvents: "none",
            duration: 0.8,
          },
          "<"
        )


        /* =================================================
           STATS
        ================================================= */
/* =================================================
   WHY VELORA
================================================= */

.fromTo(
  ".why-top",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 0.5,
  }
)

.fromTo(
  ".why-content",
  {
    y: 100,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.7,
  },
  "<0.1"
)

.fromTo(
  ".why-description",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 0.6,
  },
  "<0.1"
)

.fromTo(
  ".stats-car",
  {
    x: 500,
    opacity: 0,
    scale: 0.88,
  },
  {
    x: 0,
    opacity: 1,
    scale: 1,
    duration: 0.8,
  },
  "<"
)

.fromTo(
  ".why-benefit",
  {
    y: 80,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    stagger: 0.12,
    duration: 0.5,
  },
  "<0.1"
)

.to(
  {},
  {
    duration: 1,
  }
)


/* =================================================
   WHY DRIVERENT EXIT
================================================= */

.to(
  ".why-top",
  {
    opacity: 0,
    duration: 0.5,
  }
)

.to(
  ".why-content",
  {
    y: -100,
    opacity: 0,
    duration: 0.5,
  },
  "<"
)

.to(
  ".why-description",
  {
    opacity: 0,
    duration: 0.5,
  },
  "<"
)

.to(
  ".stats-car",
  {
    x: -450,
    opacity: 0,
    scale: 0.9,
    duration: 0.6,
  },
  "<"
)

.to(
  ".why-benefit",
  {
    y: -70,
    opacity: 0,
    stagger: 0.08,
    duration: 0.4,
  },
  "<"
)


        /* =================================================
           CTA
        ================================================= */

        .set(
          ".cta-scene",
          {
            autoAlpha: 1,
            yPercent: 100,
            zIndex: 60,
            pointerEvents: "auto",
          }
        )

        .to(
          ".cta-scene",
          {
            yPercent: 0,
            duration: 0.8,
          }
        )

        .fromTo(
          ".cta-title",
          {
            y: 120,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
          }
        )

        .fromTo(
          ".cta-button",
          {
            y: 80,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
          },
          "<0.1"
        )

        .fromTo(
          ".cta-car",
          {
            x: 500,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
          },
          "<"
        );


      /* =================================================
         FLOATING DOTS
      ================================================= */

      gsap.to(
        ".floating-dot",
        {
          y: -30,
          duration: 2,
          repeat: -1,
          yoyo: true,
          stagger: 0.3,
          ease: "sine.inOut",
        }
      );


      /* =================================================
         REFRESH
      ================================================= */

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

    }, root);


        return () => {
      ctx.revert();
    };
  });

  return () => {
    mm.revert();
  };

}, []);


  return (

    <main
      ref={root}
      className="home"
    >

      {/* =================================================
          HUGE SCROLL WORLD
      ================================================= */}

      <div className="home-scroll">

        <div className="world">

          <div className="world-sky"></div>

          <div className="world-grid hero-grid"></div>

          <div className="hero-glow"></div>


          {/* =================================================
              HERO
          ================================================= */}

          <section className="scene hero-scene">

            <div className="hero-content">

              <div className="hero-copy">

                <div className="hero-eyebrow">
                  CAR RENTAL · SIMPLE BOOKING
                </div>

                <h1 className="hero-title">

                  RENT A CAR.
                  <br />

                  <i>DRIVE YOUR WAY.</i>

                </h1>

                <p>
                  Premium cars, flexible rentals and
                  an easy booking experience for your
                  next journey.
                </p>

                <Link
  to="/cars"
  className="hero-button"
>
  BOOK A CAR
  <span>↗</span>
</Link>

              </div>

            </div>


            <div className="car-layer hero-car">

              <img
                src={CAR_1}
                alt="Luxury rental car"
              />

            </div>

          </section>


          {/* =================================================
              SEARCH
          ================================================= */}

          <section className="scene search-scene">

            <div className="scene-orbit orbit-one"></div>

            <div className="scene-orbit orbit-two"></div>


            <div className="search-title">

              <span>
                BOOK YOUR CAR
              </span>

              <h2>
                SET YOUR
                <br />
                <i>TRIP.</i>
              </h2>

            </div>


            <div className="search-car car-layer">

              <img
                src={CAR_2}
                alt="Rental car"
              />

            </div>


            <div className="search-panel">

              <div className="panel-head">

                <span>
                  01
                </span>

                SEARCH AVAILABILITY

              </div>


              <div className="search-fields">

                <div className="field">

                  <label>
                    PICKUP LOCATION
                  </label>

                  <select
                    value={pickupLocation}
                    onChange={(event) =>
                      setPickupLocation(
                        event.target.value
                      )
                    }
                  >

                    <option>
                      Lahore, Pakistan
                    </option>

                    <option>
                      Islamabad, Pakistan
                    </option>

                    <option>
                      Karachi, Pakistan
                    </option>

                    <option>
                      Rawalpindi, Pakistan
                    </option>

                  </select>

                </div>


                <div className="field">

                  <label>
                    PICKUP DATE
                  </label>

                  <input
                    type="date"
                    value={pickupDate}
                    onChange={(event) =>
                      setPickupDate(
                        event.target.value
                      )
                    }
                    aria-label="Pickup date"
                  />

                </div>


                <div className="field">

                  <label>
                    RETURN DATE
                  </label>

                  <input
                    type="date"
                    value={returnDate}
                    onChange={(event) =>
                      setReturnDate(
                        event.target.value
                      )
                    }
                    aria-label="Return date"
                  />

                </div>


                <button
                  type="button"
                  className="search-submit"
                  onClick={handleSearch}
                >

                  SEARCH

                  <span>
                    →
                  </span>

                </button>

              </div>

            </div>

          </section>


          {/* =================================================
              COLLECTION
          ================================================= */}

          <section className="scene featured-scene">

            {/* =================================================
                COLLECTION HEADING
            ================================================= */}

            <div className="collection-heading">

              <div className="collection-heading-left">


                <h2>
                  CHOOSE YOUR
                  <br />
                  <i>NEXT RIDE.</i>
                </h2>

              </div>


              <Link
  to="/cars"
  className="all-cars"
>
  VIEW ALL CARS
  <span>↗</span>
</Link>

            </div>


            {/* =================================================
                COLLECTION STAGE
            ================================================= */}

            <div
  className="collection-stage"
  onTouchStart={handleTouchStart}
  onTouchEnd={handleTouchEnd}
>

              {/* LEFT ARROW */}

              <button
                type="button"
                className="collection-arrow collection-arrow-left"
                onClick={goPrevious}
                aria-label="Previous car"
              >
                ←
              </button>


              {/* CARDS */}

              <div className="collection-cards">

                {FEATURED_CARS.map(
                  (car, index) => {

                    const position =
                      getCardPosition(index);

                    return (

                      <article
                        key={car.id}
                        className={`collection-card ${position}`}
                      >

                        {/* CARD HEADER */}

                        <div className="collection-card-header">

                          <span className="collection-index">
                            0{car.id}
                          </span>

                          <span className="collection-category">
                            {car.category}
                          </span>

                        </div>


                        {/* IMAGE */}

                        <div className="collection-image">

                          <div className="collection-image-glow"></div>

                          <img
                            src={car.image}
                            alt={car.name}
                          />

                        </div>


                        {/* CARD INFO */}

                        <div className="collection-card-info">

                          <div>

                            <span className="collection-model">
                              {car.model}
                            </span>

                            <h3>
                              {car.name}
                            </h3>

                          </div>


                          <div className="collection-price">

                            <strong>
                              {car.price}
                            </strong>

                            <span>
                              / DAY
                            </span>

                          </div>

                        </div>


                        {/* SPECS */}

                        <div className="collection-specs">

                          <div>
                            <span>FUEL</span>
                            <strong>
                              {car.fuel}
                            </strong>
                          </div>

                          <div>
                            <span>SEATS</span>
                            <strong>
                              {car.seats}
                            </strong>
                          </div>

                          <div>
                            <span>GEAR</span>
                            <strong>
                              {car.transmission}
                            </strong>
                          </div>

                        </div>


                        {/* BOOK */}

                        <button
  type="button"
  className="collection-book"
  onClick={() => navigate(`/cars/${car.id}`)}
>
  BOOK THIS CAR
  <span>↗</span>
</button>

                      </article>

                    );

                  }
                )}

              </div>


              {/* RIGHT ARROW */}

              <button
                type="button"
                className="collection-arrow collection-arrow-right"
                onClick={goNext}
                aria-label="Next car"
              >
                →
              </button>

            </div>


            {/* =================================================
                COLLECTION FOOTER
            ================================================= */}

            <div className="collection-footer">

              <div className="collection-pagination">

                <span className="pagination-current">
                  0{activeCar + 1}
                </span>

                <div className="pagination-line">

                  <div
                    className="pagination-fill"
                    style={{
                      width:
                        `${(
                          (activeCar + 1) /
                          FEATURED_CARS.length
                        ) * 100}%`,
                    }}
                  />

                </div>

                <span>
                  0{FEATURED_CARS.length}
                </span>

              </div>


              <div className="collection-instruction">

                <span>
                  ←
                </span>

                SELECT A CAR

                <span>
                  →
                </span>

              </div>


              {/* DOTS */}

              <div className="collection-dots">

                {FEATURED_CARS.map(
                  (car, index) => (

                    <button
                      type="button"
                      key={car.id}
                      className={
                        activeCar === index
                          ? "active"
                          : ""
                      }
                      onClick={() =>
                        goToCar(index)
                      }
                      aria-label={`Show ${car.name}`}
                    />

                  )
                )}

              </div>

            </div>

          </section>


          {/* =================================================
              EXPERIENCE
          ================================================= */}

        <section className="scene how-section">

  <div className="how-top">
    <span>HOW IT WORKS</span>
    <span>03 SIMPLE STEPS</span>
  </div>

  <div className="how-intro">
    <div className="how-small-label">
      A BETTER WAY TO RENT
    </div>

    <h2>
      HOW YOUR
      <i>JOURNEY STARTS.</i>
    </h2>

    <p>
      From choosing your dates to finding the right car,
      we keep every step simple and effortless.
    </p>
  </div>

  <div className="how-steps">

    {/* STEP 01 */}
    <div className="how-step-card">
      <div className="how-step-number">
        01
      </div>

      <div className="how-step-info">
        <span className="how-step-label">
          FIRST STEP
        </span>

        <h3>SET YOUR DATES</h3>

        <p>
          Choose your pickup and return dates,
          then select where you want to collect your car.
        </p>
      </div>

    </div>

    {/* STEP 02 */}
    <div className="how-step-card">
      <div className="how-step-number">
        02
      </div>

      <div className="how-step-info">
        <span className="how-step-label">
          SECOND STEP
        </span>

        <h3>FIND YOUR CAR</h3>

        <p>
          Explore the cars available for your selected
          dates and location, then choose your favorite.
        </p>
      </div>
    </div>

    {/* STEP 03 */}
    <div className="how-step-card">
      <div className="how-step-number">
        03
      </div>

      <div className="how-step-info">
        <span className="how-step-label">
          FINAL STEP
        </span>

        <h3>BOOK YOUR RIDE</h3>

        <p>
          Select your car, enter your details and
          confirm your booking in just a few steps.
        </p>
      </div>

    </div>

  </div>

  <div className="how-visual">
    <div className="how-circle"></div>


    <img
      src={CAR_2}
      alt="Luxury rental car"
    />
  </div>

</section>


         {/* =================================================
    WHY VELORA
================================================= */}

<section className="scene stats-scene">

  {/* TOP LABELS */}
  <div className="why-top">

    <span>
      WHY VELORA
    </span>

    <span>
      BUILT AROUND YOUR JOURNEY
    </span>

  </div>


  {/* LEFT HEADING */}
  <div className="why-content">


    <h2>
      MORE THAN A CAR.
      <br />
      <i>A SMOOTHER WAY TO MOVE.</i>
    </h2>

  </div>


  {/* RIGHT COLUMN */}
  <div className="why-right">

    {/* DESCRIPTION */}
    <p className="why-description">
      DriveRent makes car rental easier from start to finish.
      Pick your dates, choose your car and enjoy a simple
      booking experience built around your journey.
    </p>


    {/* BENEFITS */}
    <div className="why-benefits">

      {/* 01 */}
      <div className="why-benefit stat-one">

        <div className="why-number">
          25+
        </div>

        <div className="why-benefit-text">

          <span>
            PREMIUM CARS
          </span>

          <p>
            A wide selection of premium cars
            for everyday drives and special journeys.
          </p>

        </div>

      </div>


      {/* 02 */}
      <div className="why-benefit stat-two">

        <div className="why-number">
          12
        </div>

        <div className="why-benefit-text">

          <span>
            PICKUP LOCATIONS
          </span>

          <p>
            Multiple pickup locations make
            collecting your car simple and convenient.
          </p>

        </div>

      </div>


      {/* 03 */}
      <div className="why-benefit stat-three">

        <div className="why-number">
          24/7
        </div>

        <div className="why-benefit-text">

          <span>
            CUSTOMER SUPPORT
          </span>

          <p>
            Get assistance whenever you need it,
            before, during or after your rental.
          </p>

        </div>

      </div>

    </div>

  </div>


  {/* CAR */}
  <div className="stats-car car-layer">

    <div className="why-car-glow"></div>

    <div className="why-car-circle"></div>

    <img
      src={CAR_1}
      alt="Premium Velora rental car"
    />

  </div>


  {/* BACKGROUND BRAND MARK */}
  <div className="why-mark">
    V
  </div>

</section>


{/* =================================================
    CTA
================================================= */}

<section className="scene cta-scene">

  <div className="cta-lines"></div>


  <div className="cta-content">

    <span>
      READY TO BOOK?
    </span>

    <h2 className="cta-title">

      PICK YOUR CAR.
      <br />

      <i>
        PICK YOUR DATES.
      </i>

      <br />

      START YOUR JOURNEY.

    </h2>


    <a
      href="/cars"
      className="cta-button"
    >

      BOOK YOUR CAR

      <span>
        ↗
      </span>

    </a>

  </div>


  <div className="cta-car car-layer">

    <img
      src={CAR_2}
      alt="Luxury rental car"
    />

  </div>

</section>

</div>

</div>


{/* =====================================================
    CSS
===================================================== */}

<style>{`

/* =====================================================
   FONTS
===================================================== */

@import url(
  'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;1,500&display=swap'
);


/* =====================================================
   GLOBAL
===================================================== */

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: auto;
}

body {
  margin: 0;
  background: #fafafd;
  color: #171722;
  font-family: "DM Sans", sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
select {
  font-family: "DM Sans", sans-serif;
}


/* =====================================================
   MASTER HOME
===================================================== */

.home {
  width: 100%;
  overflow: visible;
  background: #fafafd;
}

.home-scroll {
  position: relative;
  height: 600vh;
  z-index: 0;
  margin-bottom: 100vh;
}

.world {
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
}

.world-sky {
  display: none;
}

.world-grid {
  position: absolute;

  width: 160%;
  height: 100%;

  left: -30%;
  top: 5%;

  opacity: .11;

  background-image:
    linear-gradient(
      rgba(143,123,232,.32) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(143,123,232,.32) 1px,
      transparent 1px
    );

  background-size: 80px 80px;

  transform:
    perspective(600px)
    rotateX(65deg);

  transform-origin: center bottom;

  will-change: transform;
}

.hero-glow {
  display: none;
}


/* =====================================================
   SCENES
===================================================== */

.scene {
  position: absolute;

  inset: 0;

  width: 100%;
  height: 100vh;

  opacity: 0;

  visibility: hidden;

  pointer-events: none;

  overflow: hidden;

  will-change:
    transform,
    opacity;
}

.hero-scene {
  opacity: 1;
  visibility: visible;
}


/* =====================================================
   HERO
===================================================== */

.hero-content {
  position: absolute;

  z-index: 20;

  left: 8vw;
  top: 22%;
}

.hero-copy {
  width: 470px;

  will-change:
    transform,
    opacity;
}

.hero-eyebrow {
  display: inline-flex;

  align-items: center;

  gap: 12px;

  color: #8f7be8;

  font-size: 9px;

  font-weight: 700;

  letter-spacing: 2.8px;

  text-transform: uppercase;

  margin-bottom: 22px;
}

.hero-eyebrow::before {
  content: "";

  width: 28px;
  height: 1px;

  background: #8f7be8;
}

.hero-title {
  margin: 0;

  font-size:
    clamp(52px, 6vw, 88px);

  line-height: .82;

  letter-spacing: -5px;

  color: #171722;
}

.hero-title i {
  font-family:
    "Playfair Display",
    serif;

  font-weight: 500;

  color: #8f7be8;
}

.hero-copy p {
  width: 310px;

  margin:
    35px 0 25px;

  color: #777784;

  font-size: 15px;

  line-height: 1.8;
}

.hero-button {
  display: inline-flex;

  align-items: center;

  gap: 25px;

  padding:
    15px 21px;

  background: #171722;

  color: white;

  font-size: 9px;

  font-weight: 700;

  letter-spacing: 1.5px;

  transition: .3s;
}

.hero-button:hover {
  background: #8f7be8;
}

.hero-button span {
  font-size: 17px;
}


/* =====================================================
   CAR LAYER
===================================================== */

.car-layer {
  position: absolute;

  z-index: 15;

  pointer-events: none;

  will-change: transform;
}

.car-layer img {
  width: 100%;

  display: block;

  filter:
    drop-shadow(
      0 30px 28px rgba(20,20,35,.18)
    );

  will-change: transform;
}


/* =====================================================
   HERO CAR
===================================================== */

.hero-car {
  width:
    min(68vw, 980px);

  right: -5vw;

  bottom: -3%;
}


/* =====================================================
   SEARCH
===================================================== */

.search-scene {
  background:
    radial-gradient(
      circle at 75% 50%,
      rgba(143,123,232,.13),
      transparent 35%
    );

  background-color: #fafafd;
}

.scene-orbit {
  position: absolute;

  border:
    1px solid rgba(143,123,232,.16);

  border-radius: 50%;

  pointer-events: none;
}

.orbit-one {
  width: 650px;
  height: 650px;

  right: -100px;
  top: 10%;
}

.orbit-two {
  width: 900px;
  height: 900px;

  right: -220px;
  top: -5%;
}

.search-title {
  position: absolute;

  z-index: 20;

  left: 9vw;
  top: 22%;

  opacity: 0;

  will-change:
    transform,
    opacity;
}

.search-title > span {
  color: #8f7be8;

  font-size: 9px;

  font-weight: 700;

  letter-spacing: 3px;
}

.search-title h2 {
  margin: 20px 0;

  font-size:
    clamp(52px, 6vw, 88px);

  line-height: .8;

  letter-spacing: -7px;

  color: #171722;
}

.search-title h2 i {
  color: #8f7be8;

  font-family:
    "Playfair Display",
    serif;

  font-weight: 500;
}

.search-car {
  width:
    min(62vw, 900px);

  right: -3vw;

  bottom: 12%;

  opacity: 0;
}

.search-panel {
  position: absolute;

  z-index: 30;

  bottom: 8%;

  left: 8vw;

  width:
    min(650px, 82vw);

  padding: 22px;

  background:
    rgba(255,255,255,.92);

  border:
    1px solid rgba(23,23,34,.09);

  box-shadow:
    0 25px 60px rgba(30,28,55,.08);

  backdrop-filter:
    blur(18px);

  opacity: 0;

  will-change:
    transform,
    opacity;
}

.panel-head {
  margin-bottom: 15px;

  color: #777784;

  font-size: 8px;

  letter-spacing: 2px;

  font-weight: 700;
}

.panel-head span {
  color: #8f7be8;

  margin-right: 12px;
}

.search-fields {
  display: grid;

  grid-template-columns:
    1fr 1fr 1fr 120px;

  gap: 1px;

  background:
    rgba(23,23,34,.08);
}

.field {
  position: relative;

  padding: 14px;

  background: white;
}

.field label {
  display: block;

  margin-bottom: 7px;

  color: #777784;

  font-size: 9px;

  letter-spacing: 1.2px;
}

.field select,
.field input {
  width: 100%;

  height: 28px;

  padding: 0;

  border: 0;

  outline: none;

  background: transparent;

  color: #171722;

  font-size: 14px;

  font-weight: 500;

  cursor: pointer;
}

.search-submit {
  border: 0;

  background: #171722;

  color: white;

  font-size: 8px;

  font-weight: 700;

  letter-spacing: 1px;

  cursor: pointer;

  transition: .3s;
}

.search-submit:hover {
  background: #8f7be8;
}

.search-submit span {
  margin-left: 12px;

  font-size: 15px;
}

/* =====================================================

   COLLECTION

===================================================== */

.featured-scene {

  background:

    radial-gradient(

      circle at 50% 48%,

      rgba(143,123,232,.12),

      transparent 38%

    ),

    linear-gradient(

      135deg,

      #ffffff,

      #f5f2fb 55%,

      #eeeaf7

    );

  color: #171722;

}


/* =====================================================

   COLLECTION HEADING

===================================================== */

.collection-heading {

  position: absolute;

  z-index: 60;

  top: 20%;

  left: 7vw;

  right: 7vw;

  display: flex;

  align-items: flex-start;

  justify-content: space-between;

  will-change:

    transform,

    opacity;

}

.collection-heading-left {

  width: 500px;

}

.collection-heading h2 {

  margin: 0;

  font-size:

    clamp(45px, 5vw, 72px);

  line-height: .82;

  letter-spacing: -5px;

  color: #171722;

}

.collection-heading h2 i {

  color: #8f7be8;

  font-family:

    "Playfair Display",

    serif;

  font-weight: 500;

}


/* =====================================================

   VIEW ALL

===================================================== */

.all-cars {

  display: inline-flex;

  align-items: center;

  gap: 14px;

  margin-top: 15px;

  padding-bottom: 8px;

  border-bottom:

    1px solid rgba(143,123,232,.6);

  color: #8f7be8;

  font-size: 8px;

  letter-spacing: 1.8px;

  font-weight: 700;

  transition: .3s;

}

.all-cars span {

  font-size: 17px;

  transition: .3s;

}

.all-cars:hover {

  color: #171722;

  border-color: #171722;

}

.all-cars:hover span {

  transform:

    translate(3px,-3px);

}


/* =====================================================

   COLLECTION STAGE

===================================================== */

.collection-stage {

  position: absolute;

  z-index: 30;

  left: 0;

  right: 0;

  bottom: 7%;

  height: 54%;

  display: flex;

  align-items: center;

  justify-content: center;

  will-change:

    transform,

    opacity;

}


/* =====================================================

   CARDS WRAPPER

===================================================== */

.collection-cards {

  position: relative;

  width: 100%;

  height: 100%;

}


/* =====================================================

   CARD

===================================================== */

.collection-card {

  position: absolute;

  left: 50%;

  top: 50%;

  width: 370px;

  height: 365px;

  padding:

    19px 21px;

  background:

    rgba(255,255,255,.88);

  border:

    1px solid rgba(23,23,34,.09);

  box-shadow:

    0 25px 60px rgba(35,31,60,.09);

  backdrop-filter:

    blur(14px);

  overflow: hidden;

  transition:

    transform .65s cubic-bezier(.22,.61,.36,1),

    opacity .5s ease,

    filter .5s ease,

    box-shadow .5s ease;

  will-change:

    transform,

    opacity;

  transform-origin:

    center center;

}


/* =====================================================

   CENTER CARD

===================================================== */

.collection-card.is-center {

  transform:

    translate(-50%, -50%)

    scale(1);

  opacity: 1;

  z-index: 50;

  filter:

    blur(0);

  box-shadow:

    0 35px 90px rgba(35,31,60,.17);

  border-color:

    rgba(143,123,232,.3);

}


/* =====================================================

   LEFT CARD

===================================================== */

.collection-card.is-left {

  transform:

    translate(

      calc(-50% - 330px),

      -50%

    )

    scale(.79);

  opacity: .72;

  z-index: 40;

  filter:

    blur(.2px);

}


/* =====================================================

   RIGHT CARD

===================================================== */

.collection-card.is-right {

  transform:

    translate(

      calc(-50% + 330px),

      -50%

    )

    scale(.79);

  opacity: .72;

  z-index: 40;

  filter:

    blur(.2px);

}


/* =====================================================

   FAR LEFT

===================================================== */

.collection-card.is-far-left {

  transform:

    translate(

      calc(-50% - 580px),

      -50%

    )

    scale(.62);

  opacity: .38;

  z-index: 25;

  filter:

    blur(1px);

}


/* =====================================================

   FAR RIGHT

===================================================== */

.collection-card.is-far-right {

  transform:

    translate(

      calc(-50% + 580px),

      -50%

    )

    scale(.62);

  opacity: .38;

  z-index: 25;

  filter:

    blur(1px);

}


/* =====================================================

   HIDDEN

===================================================== */

.collection-card.is-hidden {

  transform:

    translate(-50%, -50%)

    scale(.45);

  opacity: 0;

  z-index: 1;

  pointer-events: none;

}


/* =====================================================

   CARD HEADER

===================================================== */

.collection-card-header {

  position: relative;

  z-index: 20;

  display: flex;

  justify-content: space-between;

  align-items: center;

}

.collection-index {

  color: #8f7be8;

  font-size: 8px;

  font-weight: 700;

  letter-spacing: 2px;

}

.collection-category {

  padding:

    6px 9px;

  background:

    rgba(143,123,232,.08);

  color: #8f7be8;

  font-size: 7px;

  font-weight: 700;

  letter-spacing: 1.4px;

}


/* =====================================================

   IMAGE

===================================================== */

.collection-image {

  position: absolute;

  left: 4%;

  right: 4%;

  top: 15%;

  height: 48%;

  display: flex;

  align-items: center;

  justify-content: center;

}

.collection-image-glow {

  position: absolute;

  width: 220px;

  height: 125px;

  border-radius: 50%;

  background:

    rgba(143,123,232,.16);

  filter:

    blur(38px);

}

.collection-image img {

  position: relative;

  z-index: 2;

  width: 110%;

  max-height: 230px;

  object-fit: contain;

  filter:

    drop-shadow(

      0 25px 20px rgba(25,25,40,.18)

    );

  transition:

    transform .65s ease;

}

.collection-card.is-center

.collection-image img {

  transform:

    scale(1.05)

    translateY(-3px);

}


/* =====================================================

   CARD INFO

===================================================== */

.collection-card-info {

  position: absolute;

  left: 21px;

  right: 21px;

  bottom: 91px;

  display: flex;

  justify-content: space-between;

  align-items: flex-end;

  z-index: 20;

}

.collection-model {

  display: block;

  margin-bottom: 5px;

  color: #777784;

  font-size: 12px;

  font-weight: 700;

  letter-spacing: 1.7px;

}

.collection-card-info h3 {

  margin: 0;

  color: #171722;

  font-size: 22px;

  line-height: 1;

  letter-spacing: -.8px;

}

.collection-price {

  text-align: right;

}

.collection-price strong {

  color: #171722;

  font-size: 20px;

  letter-spacing: -1px;

}

.collection-price span {

  margin-left: 4px;

  color: #777784;

  font-size: 9px;

  letter-spacing: 1px;

}


/* =====================================================

   SPECS

===================================================== */

.collection-specs {

  position: absolute;

  left: 21px;

  right: 21px;

  bottom: 55px;

  display: grid;

  grid-template-columns:

    repeat(3, 1fr);

  gap: 7px;

  padding-top: 10px;

  border-top:

    1px solid rgba(23,23,34,.08);

  z-index: 20;

}

.collection-specs div {

  display: flex;

  flex-direction: column;

  gap: 3px;

}

.collection-specs span {

  color: #9999a5;

  font-size: 8px;

  letter-spacing: 1px;

}

.collection-specs strong {

  color: #555563;

  font-size: 11px;

  font-weight: 500;

}


/* =====================================================

   BOOK BUTTON

===================================================== */

.collection-book {

  position: absolute;

  right: 21px;

  bottom: 17px;

  border: 0;

  padding: 0;

  background: transparent;

  color: #8f7be8;

  font-size: 9px;

  font-weight: 700;

  letter-spacing: 1.5px;

  cursor: pointer;

  z-index: 30;

  transition: .3s;

}

.collection-book span {

  display: inline-block;

  margin-left: 7px;

  font-size: 14px;

  transition: .3s;

}

.collection-book:hover {

  color: #171722;

}

.collection-book:hover span {

  transform:

    translate(3px,-3px);

}


/* =====================================================

   ARROWS

===================================================== */

.collection-arrow {

  position: absolute;

  top: 50%;

  z-index: 100;

  width: 50px;

  height: 50px;

  border:

    1px solid rgba(23,23,34,.12);

  border-radius: 50%;

  background:

    rgba(255,255,255,.9);

  color: #171722;

  display: flex;

  align-items: center;

  justify-content: center;

  font-size: 18px;

  cursor: pointer;

  backdrop-filter:

    blur(12px);

  box-shadow:

    0 10px 30px rgba(30,28,55,.08);

  transition: .3s;

}

.collection-arrow:hover {

  background: #171722;

  color: white;

  border-color:

    #171722;

  transform:

    translateY(-50%)

    scale(1.08);

}

.collection-arrow-left {

  left: 5vw;

  transform:

    translateY(-50%);

}

.collection-arrow-right {

  right: 5vw;

  transform:

    translateY(-50%);

}


/* =====================================================

   FOOTER / PAGINATION

===================================================== */

.collection-footer {

  position: absolute;

  z-index: 60;

  left: 7vw;

  right: 7vw;

  bottom: 2.8%;

  display: flex;

  align-items: center;

  justify-content: space-between;

  will-change:

    transform,

    opacity;

}

.collection-pagination {

  display: flex;

  align-items: center;

  gap: 12px;

  color: #9999a5;

  font-size: 7px;

  font-weight: 700;

  letter-spacing: 1px;

}

.collection-pagination

.pagination-current {

  color: #8f7be8;

}

.pagination-line {

  width: 100px;

  height: 1px;

  overflow: hidden;

  background:

    rgba(23,23,34,.12);

}

.pagination-fill {

  height: 100%;

  background: #8f7be8;

  transition:

    width .5s ease;

}


/* =====================================================

   INSTRUCTION

===================================================== */

.collection-instruction {

  display: flex;

  align-items: center;

  gap: 9px;

  color: #9999a5;

  font-size: 7px;

  font-weight: 600;

  letter-spacing: 1.5px;

}

.collection-instruction span {

  color: #8f7be8;

  font-size: 13px;

}


/* =====================================================

   DOTS

===================================================== */

.collection-dots {

  display: flex;

  align-items: center;

  gap: 6px;

}

.collection-dots button {

  width: 5px;

  height: 5px;

  padding: 0;

  border: 0;

  border-radius: 50%;

  background:

    rgba(23,23,34,.18);

  cursor: pointer;

  transition: .35s;

}

.collection-dots button.active {

  width: 22px;

  border-radius: 10px;

  background: #8f7be8;

}

/* =====================================================
   HOW IT WORKS
===================================================== */

.how-section {
  position: relative;
  background: #f4f2fa;
  color: #171722;
  overflow: hidden;
  visibility: visible;
}


/* =====================================================
   TOP LABELS
===================================================== */

.how-top {
  position: absolute;
  z-index: 60;
  top: 12%;
  left: 8vw;
  right: 8vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #8f7be8;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
}


/* =====================================================
   LEFT INTRO
===================================================== */

.how-intro {
  position: absolute;
  z-index: 50;
  left: 8vw;
  top: 28%;
  width: 430px;
}

.how-small-label {
  margin-bottom: 22px;
  color: #8f7be8;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
}

.how-intro h2 {
  margin: 0;
  font-size:
    clamp(58px, 6vw, 86px);
  line-height: .82;
  letter-spacing: -6px;
}

.how-intro h2 i {
  display: block;
  color: #8f7be8;
  font-family:
    "Playfair Display",
    serif;
  font-weight: 500;
}

.how-intro p {
  width: 310px;
  margin-top: 30px;
  color: #777784;
  font-size: 13px;
  line-height: 1.8;
}


/* =====================================================
   VERTICAL STEP CARDS
===================================================== */

.how-steps {
  position: absolute;
  z-index: 55;
  top: 18%;
  right: 7vw;
  width:
    min(460px, 38vw);
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.how-step-card {
  position: relative;
  min-height: 125px;
  padding: 20px 22px;
  display: grid;
  grid-template-columns:
    50px 1fr 38px;
  align-items: center;
  background:
    rgba(255,255,255,.9);
  border:
    1px solid rgba(23,23,34,.09);
  box-shadow:
    0 15px 40px rgba(40,30,70,.06);
  transition:
    transform .35s ease,
    background .35s ease,
    border-color .35s ease,
    box-shadow .35s ease;
  will-change: transform;
}

.how-step-card:hover {
  transform:
    translateX(-8px);
  background: #ffffff;
  border-color:
    rgba(143,123,232,.4);
  box-shadow:
    0 18px 45px rgba(40,30,70,.10);
}


/* =====================================================
   NUMBER
===================================================== */

.how-step-number {
  align-self: flex-start;
  color: #8f7be8;
  font-family:
    "Playfair Display",
    serif;
  font-size: 34px;
  line-height: 1;
}


/* =====================================================
   CARD CONTENT
===================================================== */

.how-step-info {
  padding-left: 5px;
}

.how-step-label {
  display: block;
  margin-bottom: 8px;
  color: #777784;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.8px;
}

.how-step-info h3 {
  margin: 0;
  color: #171722;
  font-size: 20px;
  line-height: 1;
  letter-spacing: -.3px;
}

.how-step-info p {
  width: 270px;
  margin: 10px 0 0;
  color: #777784;
  font-size: 13px;
  line-height: 1.55;
}


/* =====================================================
   CENTER CAR
===================================================== */

.how-visual {
  position: absolute;
  z-index: 20;
  width: 560px;
  height: 430px;
  left: 50%;
  top: 56%;
  transform:
    translate(-50%, -50%);
  pointer-events: none;
}

.how-visual img {
  position: absolute;
  width: 640px;
  height: auto;
  left: 50%;
  top: 50%;
  transform:
    translate(-50%, -50%);
  display: block;
  opacity: 1;
  filter:
    drop-shadow(
      0 30px 25px rgba(25,25,40,.18)
    );
}


/* =====================================================
   CENTER CIRCLE
===================================================== */

.how-circle {
  position: absolute;
  width: 360px;
  height: 360px;
  left: 50%;
  top: 50%;
  transform:
    translate(-50%, -50%);
  border-radius: 50%;
  border:
    1px solid rgba(143,123,232,.18);
  box-shadow:
    0 0 100px rgba(143,123,232,.08);
}

.how-circle::before {
  content: "";
  position: absolute;
  inset: 55px;
  border-radius: 50%;
  border:
    1px solid rgba(143,123,232,.12);
}

/* =====================================================
   WHY VELORA
===================================================== */

.stats-scene {
  background:
    radial-gradient(
      circle at 75% 45%,
      rgba(143,123,232,.14),
      transparent 32%
    ),
    linear-gradient(
      135deg,
      #ffffff,
      #f5f2fb 55%,
      #eeeaf7
    );

  color: #171722;
  overflow: hidden;
}


/* =====================================================
   TOP LABELS
===================================================== */

.why-top {
  position: absolute;
  z-index: 80;
  top: 14%;
  left: 7vw;
  right: 7vw;
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: #8f7be8;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2.4px;
}

.why-top span:last-child {
  color: #777784;
  letter-spacing: 1.6px;
}


/* =====================================================
   LEFT HEADING
===================================================== */

.why-content {
  position: absolute;
  z-index: 60;
  left: 7vw;
  top: 22%;
  width: 48vw;
  max-width: 620px;
  will-change:
    transform,
    opacity;
}

.why-content h2 {
  margin: 0;
  color: #171722;
  font-size:
    clamp(48px, 5.2vw, 76px);
  line-height: .84;
  letter-spacing: -5px;
}

.why-content h2 i {
  display: block;
  color: #8f7be8;
  font-family:
    "Playfair Display",
    serif;
  font-weight: 500;
  font-style: italic;
  letter-spacing: -3px;
}


/* =====================================================
   RIGHT COLUMN
===================================================== */

.why-right {
  position: absolute;
  z-index: 70;
  top: 20%;
  right: 7vw;
  width: 35vw;
  max-width: 470px;
  will-change:
    transform,
    opacity;
}


/* =====================================================
   DESCRIPTION
===================================================== */

.why-description {
  width: 310px;
  margin:
    0 0 42px 0;

  color: #777784;
  font-size: 14px;
  line-height: 1.8;
}


/* =====================================================
   BENEFITS
===================================================== */

.why-benefits {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
}


/* =====================================================
   BENEFIT
===================================================== */

.why-benefit {
  display: grid;
  grid-template-columns:
    105px 1fr;
  align-items: center;
  min-height: 82px;
  padding:
    12px 0;

  border-top:
    1px solid rgba(23,23,34,.09);

  opacity: 0;

  will-change:
    transform,
    opacity;
}

.why-benefit:last-child {
  border-bottom:
    1px solid rgba(23,23,34,.09);
}


/* =====================================================
   NUMBER
===================================================== */

.why-number {
  color: #8f7be8;
  font-family:
    "Playfair Display",
    serif;

  font-size: 42px;
  line-height: 1;
  letter-spacing: -2px;
}


/* =====================================================
   BENEFIT TEXT
===================================================== */

.why-benefit-text {
  padding-left: 10px;
}

.why-benefit-text span {
  display: block;
  margin-bottom: 6px;

  color: #171722;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.8px;
}

.why-benefit-text p {
  width: 310px;
  margin: 0;

  color: #777784;
  font-size: 13px;
  line-height: 1.55;
}


/* =====================================================
   WHY DRIVERENT CAR
===================================================== */

.stats-car {
  position: absolute;
  z-index: 25;

  width:
    min(470px, 32vw);

  left: 7vw;
  right: auto;
  bottom: -7%;

  opacity: 0;

  will-change:
    transform,
    opacity;
}


/* =====================================================
   CAR GLOW
===================================================== */

.why-car-glow {
  position: absolute;
  width: 360px;
  height: 150px;
  left: 5%;
  top: 45%;
  border-radius: 50%;

  background:
    rgba(143,123,232,.17);

  filter:
    blur(55px);

  pointer-events: none;
}


/* =====================================================
   CAR IMAGE
===================================================== */

.stats-car img {
  position: relative;
  z-index: 5;
  width: 100%;
  display: block;

  filter:
    drop-shadow(
      0 35px 35px rgba(25,25,40,.20)
    );
}


/* =====================================================
   BACKGROUND V
===================================================== */

.why-mark {
  position: absolute;
  z-index: 10;
  right: 6vw;
  top: 10%;

  color:
    rgba(143,123,232,.055);

  font-family:
    "Playfair Display",
    serif;

  font-size: 170px;
  line-height: 1;

  pointer-events: none;
}
/* =====================================================
   CTA
===================================================== */

.cta-scene {

  background:
    radial-gradient(
      circle at 50% 50%,
      #eee9fb,
      #f7f6fb 50%,
      #ffffff
    );

  color: #171722;
}

.cta-lines {

  position: absolute;

  inset: 0;

  opacity: .09;

  background-image:
    linear-gradient(
      90deg,
      transparent 49.9%,
      #8f7be8 50%,
      transparent 50.1%
    ),
    linear-gradient(
      transparent 49.9%,
      #8f7be8 50%,
      transparent 50.1%
    );

  background-size:
    120px 120px;

  transform:
    perspective(600px)
    rotateX(55deg)
    scale(1.5);
}

.cta-content {

  position: absolute;

  z-index: 40;

  top: 16%;
  left: 50%;

  transform:
    translateX(-50%);

  text-align: center;

  width: 90%;
}

.cta-content > span {

  color: #8f7be8;

  font-size: 8px;

  letter-spacing: 3px;

  font-weight: 700;
}

.cta-title {

  margin:
    25px 0 35px;

  font-size:
    clamp(52px, 6vw, 88px);

  line-height: .76;

  letter-spacing: -7px;

  opacity: 0;

  will-change:
    transform,
    opacity;

  color: #171722;
}

.cta-title i {

  color: #8f7be8;

  font-family:
    "Playfair Display",
    serif;

  font-weight: 500;
}

.cta-button {

  display: inline-flex;

  align-items: center;

  gap: 20px;

  padding:
    16px 24px;

  background: #171722;

  color: white;

  font-size: 8px;

  font-weight: 700;

  letter-spacing: 1.5px;

  opacity: 0;

  will-change:
    transform,
    opacity;

  transition: .3s;
}

.cta-button:hover {

  background: #8f7be8;
}

.cta-button span {

  font-size: 18px;
}

.cta-car {

  width:
    min(70vw, 950px);

  right: -8vw;

  bottom: -2%;

  opacity: 0;

  z-index: 25;
}


/* =====================================================
   TABLET
===================================================== */

@media (max-width: 1100px) {

  .collection-card {

    width: 330px;

    height: 350px;
  }

  .collection-card.is-left {

    transform:
      translate(
        calc(-50% - 275px),
        -50%
      )
      scale(.75);
  }

  .collection-card.is-right {

    transform:
      translate(
        calc(-50% + 275px),
        -50%
      )
      scale(.75);
  }

  .collection-card.is-far-left {

    transform:
      translate(
        calc(-50% - 480px),
        -50%
      )
      scale(.58);
  }

  .collection-card.is-far-right {

    transform:
      translate(
        calc(-50% + 480px),
        -50%
      )
      scale(.58);
  }

  .collection-arrow-left {
    left: 2vw;
  }

  .collection-arrow-right {
    right: 2vw;
  }

}


/* =====================================================
   MOBILE
===================================================== */
/* =========================================================
   MOBILE — NORMAL SCROLL ONLY
   NO PARALLAX / NO SECTION FADE / NO SECTION SLIDE
   ========================================================= */
/* =====================================================
   MOBILE
===================================================== */
/* =========================================================
   MOBILE — NORMAL SCROLL ONLY
   NO PARALLAX / NO SECTION FADE / NO SECTION SLIDE
   ========================================================= */

@media (max-width: 700px) {

  html,
  body {
    overflow-x: hidden;
    overflow-y: auto;
  }

  .home {
    width: 100%;
    overflow: visible !important;
  }

  .home-scroll {
    position: relative !important;
    height: auto !important;
    min-height: 0 !important;
  }

  .world {
    position: relative !important;
    inset: auto !important;
    width: 100% !important;
    height: auto !important;
    min-height: 0 !important;
    overflow: visible !important;
    pointer-events: auto !important;
  }

  /* Desktop decorative effects off */
  .world-grid,
  .hero-grid,
  .hero-glow,
  .world-sky {
    display: none !important;
  }

  /* =====================================================
     EVERY SCENE = NORMAL DOCUMENT SECTION
     ===================================================== */

  .scene {
    position: relative !important;
    inset: auto !important;

    width: 100% !important;
    height: auto !important;
    min-height: 0 !important;

    opacity: 1 !important;
    visibility: visible !important;

    transform: none !important;

    pointer-events: auto !important;

    overflow: hidden !important;
    will-change: auto !important;

    animation: none !important;
    transition: none !important;
  }

  .scene *,
  .scene *::before,
  .scene *::after {
    animation: none !important;
    transition: none !important;
  }


  /* =====================================================
     HERO
     ===================================================== */

  .hero-scene {
    min-height: 720px !important;
    padding: 110px 22px 40px !important;
  }

  .hero-content {
    position: relative !important;

    top: auto !important;
    left: auto !important;
    right: auto !important;
    bottom: auto !important;

    width: 100% !important;

    transform: none !important;
    opacity: 1 !important;
    visibility: visible !important;

    animation: none !important;
  }

  .hero-copy {
    width: 100% !important;
  }

  .hero-eyebrow {
    font-size: 8px !important;
    letter-spacing: 2px !important;
    margin-bottom: 20px !important;
  }

  .hero-title {
    width: 100% !important;

    font-size: clamp(43px, 12vw, 58px) !important;
    line-height: .9 !important;
    letter-spacing: -3px !important;

    transform: none !important;
    opacity: 1 !important;
  }

  .hero-copy p {
    width: min(290px, 100%) !important;

    margin-top: 20px !important;

    font-size: 12px !important;
    line-height: 1.6 !important;
  }

  .hero-button {
    margin-top: 25px !important;
  }

  /* HERO CAR — CENTERED */
  .hero-car {
    position: relative !important;

    left: auto !important;
    right: auto !important;
    top: auto !important;
    bottom: auto !important;

    width: 112% !important;

    margin: 35px auto 0 !important;

    transform: none !important;
    opacity: 1 !important;
    visibility: visible !important;

    animation: none !important;
  }


  /* =====================================================
     SEARCH
     ===================================================== */

  .search-scene {
    padding: 85px 20px 55px !important;
  }

  .search-title {
    position: relative !important;

    top: auto !important;
    left: auto !important;
    right: auto !important;
    bottom: auto !important;

    width: 100% !important;

    transform: none !important;
    opacity: 1 !important;
    visibility: visible !important;
  }

  .search-title h2 {
    font-size: clamp(45px, 12vw, 58px) !important;
    line-height: .9 !important;
    letter-spacing: -3px !important;

    transform: none !important;
  }

  .search-car {
    position: relative !important;

    left: auto !important;
    right: auto !important;
    top: auto !important;
    bottom: auto !important;

    width: 108% !important;

    margin: 15px -8% 20px auto !important;

    transform: none !important;
    opacity: 1 !important;
    visibility: visible !important;

    animation: none !important;
  }

  .search-panel {
    position: relative !important;

    left: auto !important;
    right: auto !important;
    top: auto !important;
    bottom: auto !important;

    width: 100% !important;

    transform: none !important;
    opacity: 1 !important;
    visibility: visible !important;

    animation: none !important;
  }

  .search-fields {
    grid-template-columns: 1fr !important;
  }

  .search-submit {
    grid-column: auto !important;
    width: 100% !important;
    min-height: 50px !important;
  }


  /* =====================================================
     FEATURED CARS
     ===================================================== */

  .featured-scene {
    padding: 80px 20px 45px !important;
  }

  .collection-heading {
    position: relative !important;

    top: auto !important;
    left: auto !important;
    right: auto !important;
    bottom: auto !important;

    display: block !important;

    width: 100% !important;

    transform: none !important;
    opacity: 1 !important;
    visibility: visible !important;
  }

  .collection-heading-left {
    width: 100% !important;
  }

  .collection-heading h2 {
    font-size: clamp(40px, 11vw, 50px) !important;
    line-height: .9 !important;
    letter-spacing: -3px !important;
  }

  /* VIEW ALL CARS — SEPARATE FROM HEADING */
  .all-cars {
    position: relative !important;

    top: auto !important;
    right: auto !important;
    bottom: auto !important;
    left: auto !important;

    display: inline-flex !important;
    align-items: center !important;
    gap: 8px !important;

    margin-top: 28px !important;

    transform: none !important;
    opacity: 1 !important;
    visibility: visible !important;
  }

  .collection-stage {
    position: relative !important;

    left: auto !important;
    right: auto !important;
    top: auto !important;
    bottom: auto !important;

    width: 100% !important;
    height: 390px !important;

    margin-top: 25px !important;

    transform: none !important;
  }

  .collection-card {
    width: min(340px, 92vw) !important;
    height: 380px !important;
    opacity: 0 !important;
    visibility: hidden !important;

    pointer-events: none !important;

    animation: none !important;
    transition: none !important;
  }

  /* Active card only */
  .collection-card.is-center {
    opacity: 1 !important;
    visibility: visible !important;

    pointer-events: auto !important;

    transform: translate(-50%, -50%) scale(1) !important;

    animation: none !important;
    transition: none !important;
  }

  .collection-card.is-left,
  .collection-card.is-right,
  .collection-card.is-far-left,
  .collection-card.is-far-right,
  .collection-card.is-hidden {
    opacity: 0 !important;
    visibility: hidden !important;

    animation: none !important;
    transition: none !important;
  }

  .collection-arrow {
    z-index: 20 !important;

    animation: none !important;
    transition: none !important;
  }

  /* REMOVE PAGINATION / PURPLE BAR / DOTS */
  .collection-footer,
  .collection-pagination,
  .pagination-line,
  .pagination-fill,
  .collection-instruction,
  .collection-dots {
    display: none !important;
  }


  /* =====================================================
     HOW IT WORKS
     ===================================================== */

  .how-section {
    padding: 80px 22px 65px !important;
  }

  .how-top {
    position: relative !important;

    top: auto !important;
    left: auto !important;
    right: auto !important;
    bottom: auto !important;

    width: 100% !important;
  }

  .how-intro {
    position: relative !important;

    top: auto !important;
    left: auto !important;
    right: auto !important;
    bottom: auto !important;

    width: 100% !important;

    margin-top: 50px !important;

    transform: none !important;
    opacity: 1 !important;
    visibility: visible !important;
  }

  .how-intro h2 {
    font-size: clamp(39px, 11vw, 48px) !important;
    line-height: .9 !important;
    letter-spacing: -3px !important;
  }

  .how-intro p {
    width: 100% !important;

    margin-top: 20px !important;

    font-size: 12px !important;
    line-height: 1.65 !important;
  }

  .how-steps {
    position: relative !important;

    top: auto !important;
    left: auto !important;
    right: auto !important;
    bottom: auto !important;

    width: 100% !important;

    margin-top: 35px !important;
  }

  .how-step-card {
    grid-template-columns: 45px 1fr !important;

    transform: none !important;
    opacity: 1 !important;
    visibility: visible !important;

    animation: none !important;
  }

  .how-step-info p {
    width: 100% !important;

    font-size: 12px !important;
    line-height: 1.6 !important;
  }

  .how-visual {
    position: relative !important;

    left: auto !important;
    right: auto !important;
    top: auto !important;
    bottom: auto !important;

    width: 100% !important;
    height: 260px !important;

    margin-top: 35px !important;

    transform: none !important;
    opacity: 1 !important;
    visibility: visible !important;
  }


  /* =====================================================
     WHY DRIVERENT
     ===================================================== */

  .stats-scene {
    padding: 80px 22px 65px !important;
  }

  .why-top {
    position: relative !important;

    top: auto !important;
    left: auto !important;
    right: auto !important;
    bottom: auto !important;

    width: 100% !important;
  }

  .why-content {
    position: relative !important;

    top: auto !important;
    left: auto !important;
    right: auto !important;
    bottom: auto !important;

    width: 100% !important;

    margin-top: 50px !important;

    transform: none !important;
    opacity: 1 !important;
    visibility: visible !important;
  }

  .why-content h2 {
    font-size: clamp(37px, 10.5vw, 45px) !important;
    line-height: .9 !important;
    letter-spacing: -2.5px !important;
  }

  .why-right {
    position: relative !important;

    top: auto !important;
    left: auto !important;
    right: auto !important;
    bottom: auto !important;

    width: 100% !important;

    margin-top: 30px !important;

    transform: none !important;
    opacity: 1 !important;
    visibility: visible !important;
  }

  .why-description {
    width: 100% !important;

    margin: 0 0 25px !important;

    font-size: 12px !important;
    line-height: 1.7 !important;
  }

  .why-benefit {
    grid-template-columns: 65px 1fr !important;

    min-height: 0 !important;

    padding: 15px 0 !important;

    transform: none !important;
    opacity: 1 !important;
    visibility: visible !important;

    animation: none !important;
  }

  .why-benefit-text p {
    width: auto !important;

    font-size: 11px !important;
    line-height: 1.5 !important;
  }

  .stats-car {
    position: relative !important;

    left: auto !important;
    right: auto !important;
    top: auto !important;
    bottom: auto !important;

    width: 90% !important;

    margin: 35px auto 0 !important;

    transform: none !important;
    opacity: 1 !important;
    visibility: visible !important;

    animation: none !important;
  }

  .why-car-circle {
    left: 50% !important;
    top: 50% !important;

    transform: translate(-50%, -50%) !important;
  }


  /* =====================================================
     CTA
     ===================================================== */

  .cta-scene {
    min-height: 650px !important;

    padding: 80px 20px 35px !important;
  }

  .cta-content {
  position: relative !important;

  top: auto !important;
  left: auto !important;
  right: auto !important;
  bottom: auto !important;

  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  text-align: center !important;

  width: 100% !important;

  margin: 0 auto !important;
  padding: 0 !important;
  gap: 0 !important;

  transform: none !important;
  opacity: 1 !important;
  visibility: visible !important;
}

  /* READY TO BOOK */
  .cta-content > span {
  display: block !important;
  width: 100% !important;
  margin: 0 0 18px !important;
  padding: 0 !important;
  line-height: 1.2 !important;
}

  .cta-title {
    margin: 0 !important;
    padding: 0 !important;

    font-size: clamp(42px, 11vw, 53px) !important;

    line-height: .88 !important;
    letter-spacing: -3px !important;

    transform: none !important;
    opacity: 1 !important;
    visibility: visible !important;
  }

  .cta-button {
    display: inline-flex !important;
    align-items: center !important;

    margin-top: 28px !important;

    transform: none !important;
    opacity: 1 !important;
    visibility: visible !important;
  }

  /* CTA CAR — CENTERED */
  .cta-car {
    position: relative !important;

    left: auto !important;
    right: auto !important;
    top: auto !important;
    bottom: auto !important;

    width: 108% !important;

    margin: 45px auto 0 !important;

    transform: none !important;
    opacity: 1 !important;
    visibility: visible !important;

    animation: none !important;
  }

  .cta-lines {
    display: none !important;
  }
}


/* =========================================================
   SMALL PHONES
   ========================================================= */

@media (max-width: 390px) {

  .hero-scene {
    min-height: 690px !important;
  }

  .hero-title {
    font-size: 43px !important;
  }

  .hero-car {
    width: 112% !important;
    margin: 35px auto 0 !important;
  }

  .collection-card {
    width: 250px !important;
    height: 380px !important;
  }

  .collection-stage {
    height: 365px !important;
  }

  .why-content h2 {
    font-size: 37px !important;
  }

  .why-benefit {
    grid-template-columns: 58px 1fr !important;
  }

  .stats-car {
    width: 96% !important;
  }

  .cta-title {
    font-size: 43px !important;
  }
}

`}</style>

    </main>
  );
}