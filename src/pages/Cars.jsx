import React, { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

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
    locations: [
      "Lahore, Pakistan",
      "Islamabad, Pakistan",
      "Karachi, Pakistan",
    ],
    unavailableDates: [],
    image:
      "https://pngimg.com/uploads/mercedes/mercedes_PNG80140.png",
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
    locations: [
      "Lahore, Pakistan",
      "Islamabad, Pakistan",
    ],
    unavailableDates: [],
    image:
      "https://pngimg.com/uploads/mercedes/mercedes_PNG80133.png",
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
    locations: [
      "Lahore, Pakistan",
      "Karachi, Pakistan",
      "Rawalpindi, Pakistan",
    ],
    unavailableDates: [],
    image:
      "https://pngimg.com/uploads/mercedes/mercedes_PNG80172.png",
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
    locations: [
      "Lahore, Pakistan",
      "Islamabad, Pakistan",
      "Rawalpindi, Pakistan",
    ],
    unavailableDates: [],
    image:
  "https://www.pngmart.com/files/22/BMW-7-Series-PNG-Transparent.png",
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
    locations: [
      "Lahore, Pakistan",
      "Karachi, Pakistan",
    ],
    unavailableDates: [],
    image:
      "https://pngimg.com/uploads/bmw/bmw_PNG99564.png",
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
    locations: [
      "Islamabad, Pakistan",
      "Karachi, Pakistan",
      "Lahore, Pakistan",
    ],
    unavailableDates: [],
    image:
      "https://pngimg.com/uploads/audi/audi_PNG1758.png",
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
    locations: [
      "Lahore, Pakistan",
      "Islamabad, Pakistan",
    ],
    unavailableDates: [],
    image:
      "https://pngimg.com/uploads/porsche/porsche_PNG10627.png",
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
    locations: [
      "Lahore, Pakistan",
      "Islamabad, Pakistan",
      "Rawalpindi, Pakistan",
    ],
    unavailableDates: [],
    image:
      "https://pngimg.com/uploads/land_rover/land_rover_PNG7.png",
  },
];


export default function Cars() {
  const [searchParams] = useSearchParams();

  const selectedLocation = searchParams.get("location") || "";
  const pickupDate = searchParams.get("pickup") || "";
  const returnDate = searchParams.get("return") || "";

  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("All");
  const [fuel, setFuel] = useState("All");
  const [transmission, setTransmission] = useState("All");
  const [price, setPrice] = useState("All");

const filteredCars = useMemo(() => {
  return cars.filter((car) => {

    /* =========================
       SEARCH
    ========================= */

    const searchText = search.trim().toLowerCase();

    const matchesSearch =
      !searchText ||
      car.name.toLowerCase().includes(searchText) ||
      car.brand.toLowerCase().includes(searchText) ||
      car.type.toLowerCase().includes(searchText);


    /* =========================
       BRAND
    ========================= */

    const matchesBrand =
      brand === "All" ||
      car.brand === brand;


    /* =========================
       FUEL
    ========================= */

    const matchesFuel =
      fuel === "All" ||
      car.fuel === fuel;


    /* =========================
       TRANSMISSION
    ========================= */

    const matchesTransmission =
      transmission === "All" ||
      car.transmission === transmission;


    /* =========================
       PRICE
    ========================= */

    const matchesPrice =
      price === "All" ||
      (price === "Under 200" && car.price < 200) ||
      (price === "200 - 250" &&
        car.price >= 200 &&
        car.price <= 250) ||
      (price === "250 - 300" &&
        car.price > 250 &&
        car.price <= 300) ||
      (price === "300+" &&
        car.price > 300);


    /* =========================
       LOCATION
    ========================= */

    const matchesLocation =
      !selectedLocation ||
      car.locations.includes(selectedLocation);


    /* =========================
       DATE AVAILABILITY
    ========================= */

    let matchesDates = true;

    if (pickupDate && returnDate) {
      const requestedPickup = new Date(pickupDate);
      const requestedReturn = new Date(returnDate);

      matchesDates = !car.unavailableDates.some((range) => {
        const unavailableFrom = new Date(range.from);
        const unavailableTo = new Date(range.to);

        return (
          requestedPickup <= unavailableTo &&
          requestedReturn >= unavailableFrom
        );
      });
    }


    /* =========================
       FINAL RESULT
    ========================= */

    return (
      matchesSearch &&
      matchesBrand &&
      matchesFuel &&
      matchesTransmission &&
      matchesPrice &&
      matchesLocation &&
      matchesDates
    );
  });
}, [
  search,
  brand,
  fuel,
  transmission,
  price,
  selectedLocation,
  pickupDate,
  returnDate,
]);

  const clearFilters = () => {
    setSearch("");
    setBrand("All");
    setFuel("All");
    setTransmission("All");
    setPrice("All");
  };

  return (
    <main className="cars-page">

      {/* NAVBAR */}
      

      {/* PAGE INTRO */}
      <section className="cars-intro">
        <div className="cars-intro-number">01 / FLEET</div>

        <div className="cars-intro-content">
          <span>THE DriveRent COLLECTION</span>

          <h1>
            FIND YOUR
            <br />
            <i>PERFECT DRIVE.</i>
          </h1>

          <p>
            Explore our collection of premium vehicles,
            carefully selected for every kind of journey.
          </p>
        </div>

        <div className="intro-decoration">
          <span>DriveRent</span>
        </div>
      </section>

      {/* FILTER AREA */}
      <section className="cars-filter-section">
        <div className="filter-top">
  <div>
    <span className="filter-label">
      FIND YOUR VEHICLE
    </span>

    <h2>
      OUR <i>FLEET.</i>
    </h2>

    {(selectedLocation || pickupDate || returnDate) && (
      <div className="journey-summary">
        {selectedLocation && (
          <span>
            <b>LOCATION</b>
            {selectedLocation}
          </span>
        )}

        {pickupDate && (
          <span>
            <b>PICKUP</b>
            {pickupDate}
          </span>
        )}

        {returnDate && (
          <span>
            <b>RETURN</b>
            {returnDate}
          </span>
        )}
      </div>
    )}
  </div>

  <span className="results-count">
    {filteredCars.length.toString().padStart(2, "0")} CARS
  </span>
</div>

        <div className="filter-panel">

          {/* SEARCH */}
          <div className="search-box">
            <label>SEARCH</label>

            <input
              type="text"
              placeholder="Search car name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <span>⌕</span>
          </div>

          {/* PRICE */}
<div className="filter-field">
  <label>PRICE / DAY</label>

  <select
    value={price}
    onChange={(e) => setPrice(e.target.value)}
  >
    <option>All</option>
    <option>Under 200</option>
    <option>200 - 250</option>
    <option>250 - 300</option>
    <option>300+</option>
  </select>
</div>

{/* FUEL */}
<div className="filter-field">
  <label>FUEL</label>

  <select
    value={fuel}
    onChange={(e) => setFuel(e.target.value)}
  >
    <option>All</option>
    <option>Petrol</option>
    <option>Diesel</option>
    <option>Hybrid</option>
  </select>
</div>

{/* TRANSMISSION */}
<div className="filter-field">
  <label>TRANSMISSION</label>

  <select
    value={transmission}
    onChange={(e) => setTransmission(e.target.value)}
  >
    <option>All</option>
    <option>Automatic</option>
    <option>Manual</option>
  </select>
</div>

          <button
            className="clear-filter"
            onClick={clearFilters}
          >
            CLEAR
          </button>
        </div>
      </section>

      {/* CAR GRID */}
      <section className="cars-grid-section">
        {filteredCars.length > 0 ? (
          <div className="cars-grid">

            {filteredCars.map((car, index) => (
  <Link
    to={`/cars/${car.id}`}
    className="car-card"
    key={car.id}
  >

                <div className="car-card-top">
                  <span className="car-number">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>

                  <span
                    className={`availability ${
                      car.availability === "Limited"
                        ? "limited"
                        : ""
                    }`}
                  >
                    <b></b>
                    {car.availability}
                  </span>
                </div>

                <div className="car-image">
                  <img
                    src={car.image}
                    alt={car.name}
                  />
                </div>

                <div className="car-info">

                  <div className="car-type">
                    {car.type}
                  </div>

                  <h3>{car.name}</h3>

                  <div className="car-specs">

                    <span>
                      <b>FUEL</b>
                      {car.fuel}
                    </span>

                    <span>
                      <b>SEATS</b>
                      {car.seats}
                    </span>

                    <span>
                      <b>GEAR</b>
                      {car.transmission}
                    </span>

                  </div>

                  <div className="car-card-bottom">

                    <div className="car-price">
                      <strong>${car.price}</strong>
                      <span>/ DAY</span>
                    </div>

                    <Link
                      to={`/cars/${car.id}`}
                      className="view-car"
                    >
                      VIEW
                      <span>↗</span>
                    </Link>

                  </div>

                </div>
              </Link>
            ))}

          </div>
        ) : (
          <div className="no-results">

            <span>NO VEHICLES FOUND</span>

            <h3>
              TRY ANOTHER
              <br />
              <i>SEARCH.</i>
            </h3>

            <button onClick={clearFilters}>
              RESET FILTERS
            </button>

          </div>
        )}
      </section>

      {/* FOOTER */}
     

      <style>{`

        * {
          box-sizing: border-box;
        }

        .cars-page {
          min-height: 100vh;
          background: #FAFAFC;
          color: #171722;
          font-family: "DM Sans", sans-serif;
          overflow: hidden;
        }

        .cars-page a {
          color: inherit;
          text-decoration: none;
        }

        /* =========================
           NAVBAR
        ========================= */

        .cars-nav {
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

        .cars-brand {
          font-size: 21px;
          font-weight: 700;
          letter-spacing: -1px;
        }

        .cars-brand span {
          color: #8F7BE8;
        }

        .cars-nav-links {
          display: flex;
          gap: 38px;
        }

        .cars-nav-links a {
          color: rgba(23,23,34,.55);
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 1.6px;
          transition: .3s;
        }

        .cars-nav-links a:hover,
        .cars-nav-links .active {
          color: #171722;
        }

        .cars-nav-links .active {
          position: relative;
        }

        .cars-nav-links .active::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -9px;
          height: 1px;
          background: #8F7BE8;
        }

        .cars-nav-button {
          padding: 11px 17px;
          border: 1px solid rgba(23,23,34,.18);
          font-size: 9px;
          letter-spacing: 1.5px;
          transition: .3s;
        }

        .cars-nav-button:hover {
          background: #8F7BE8;
          border-color: #8F7BE8;
          color: white;
        }

        /* =========================
           INTRO
        ========================= */

        .cars-intro {
          position: relative;
          min-height: 470px;
          padding: 90px 8vw 80px;
          display: flex;
          align-items: center;
          overflow: hidden;
          border-bottom: 1px solid rgba(23,23,34,.07);

          background:
            radial-gradient(
              circle at 75% 50%,
              rgba(143,123,232,.13),
              transparent 35%
            ),
            #FAFAFC;
        }

        .cars-intro-number {
          position: absolute;
          top: 55px;
          right: 8vw;
          color: #8F7BE8;
          font-size: 8px;
          letter-spacing: 2px;
        }

        .cars-intro-content {
          position: relative;
          z-index: 5;
        }

        .cars-intro-content > span {
  color: #8F7BE8;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 3px;
}

.cars-intro p {
  max-width: 370px;
  margin: 0;
  color: rgba(23,23,34,.55);
  font-size: 14px;
  line-height: 1.8;
}

        .cars-intro h1 {
          margin: 22px 0 25px;
          font-size: clamp(52px, 6vw, 88px);
          line-height: .82;
          letter-spacing: -5px;
        }

        .cars-intro h1 i {
          color: #7D6BCF;
          font-family: "Playfair Display", serif;
          font-weight: 500;
        }

        
        .intro-decoration {
          position: absolute;
          right: -40px;
          bottom: -100px;
          width: 520px;
          height: 520px;
          border: 1px solid rgba(143,123,232,.17);
          border-radius: 50%;
        }

        .intro-decoration::before,
        .intro-decoration::after {
          content: "";
          position: absolute;
          border: 1px solid rgba(143,123,232,.09);
          border-radius: 50%;
        }

        .intro-decoration::before {
          inset: 70px;
        }

        .intro-decoration::after {
          inset: 145px;
        }

        .intro-decoration span {
          position: absolute;
          right: 110px;
          top: 105px;
          color: rgba(23,23,34,.055);
          font-size: 65px;
          font-weight: 700;
          letter-spacing: -5px;
          transform: rotate(-90deg);
        }

        /* =========================
           FILTER
        ========================= */

        .cars-filter-section {
          padding: 65px 7vw 35px;
          background: #F1EFF7;
          border-bottom: 1px solid rgba(23,23,34,.07);
        }

        .filter-top {
          display: flex;
          align-items: end;
          justify-content: space-between;
          margin-bottom: 28px;
        }

        .filter-label {
          color: #8F7BE8;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .filter-top h2 {
          margin: 12px 0 0;
          font-size: 45px;
          line-height: .9;
          letter-spacing: -3px;
        }

        .filter-top h2 i {
          color: #7D6BCF;
          font-family: "Playfair Display", serif;
          font-weight: 500;
        }

        .results-count {
          color: rgba(23,23,34,.38);
          font-size: 8px;
          letter-spacing: 2px;
        }

        .filter-panel {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1fr 1fr auto;
          gap: 1px;
          background: rgba(23,23,34,.10);
          border: 1px solid rgba(23,23,34,.10);
        }

        .search-box,
        .filter-field {
          position: relative;
          min-height: 76px;
          padding: 15px;
          background: rgba(255,255,255,.9);
        }

        .search-box label,
        .filter-field label {
          display: block;
          margin-bottom: 10px;
          color: #858592;
          font-size: 9px;
          letter-spacing: 1.3px;
        }

        .search-box input,
        .filter-field select {
          width: 100%;
          border: 0;
          outline: 0;
          background: transparent;
          color: #171722;
          font-family: inherit;
          font-size: 13px;
        }
          

        .search-box input::placeholder {
          color: rgba(23,23,34,.35);
        }

        .search-box > span {
          position: absolute;
          right: 15px;
          bottom: 25px;
          color: #000000;
          font-size: 18px;
        }

        .filter-field select {
  width: 100%;
  height: 24px;
  padding: 0;
  border: 0;
  outline: none;
  background: transparent;
  color: #171722;
  font-family: "DM Sans", sans-serif;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;

  /* SAME AS HOME */
  appearance: auto;
  -webkit-appearance: auto;
  -moz-appearance: auto;
}


        .filter-field option {
          background: white;
          color: #171722;
        }

        .clear-filter {
          border: 0;
          padding: 0 20px;
          background: #8F7BE8;
          color: white;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 1.5px;
          cursor: pointer;
          transition: .3s;
        }

        .clear-filter:hover {
          background: #171722;
        }

        /* =========================
           CAR GRID
        ========================= */

        .cars-grid-section {
          padding: 55px 7vw 100px;
          background: #F7F6FA;
        }

        .cars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          max-width: 1500px;
          margin: auto;
        }

        .car-card {
          position: relative;
          min-height: 480px;
          overflow: hidden;

          border: 1px solid rgba(23,23,34,.09);

          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,.98),
              rgba(248,247,251,.92)
            );

          box-shadow:
            0 18px 50px rgba(55,45,85,.06);

          transition:
            transform .45s ease,
            border-color .45s ease,
            background .45s ease,
            box-shadow .45s ease;
        }

        .car-card:hover {
          transform: translateY(-8px);
          border-color: rgba(143,123,232,.4);

          background:
            linear-gradient(
              145deg,
              #FFFFFF,
              #F3F0FC
            );

          box-shadow:
            0 25px 65px rgba(55,45,85,.11);
        }

        .car-card-top {
          position: absolute;
          z-index: 10;
          top: 18px;
          left: 20px;
          right: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .car-number {
          color: #8F7BE8;
          font-size: 10px;
          letter-spacing: 2px;
        }

        .availability {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #777784;
          font-size: 9px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .availability b {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #8F7BE8;
        }

        .availability.limited b {
          background: #B39FEF;
        }

        .car-image {
          height: 255px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 35px 20px 0;
          overflow: hidden;
        }

        .car-image img {
          width: 115%;
          max-width: 500px;
          display: block;

          filter:
            drop-shadow(
              0 25px 25px rgba(23,23,34,.16)
            );

          transition: transform .55s ease;
        }

        .car-card:hover .car-image img {
          transform: scale(1.07) translateX(5px);
        }

        .car-info {
          padding: 10px 20px 20px;
        }

        .car-type {
          color: #8F7BE8;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .car-info h3 {
          margin: 8px 0 20px;
          font-size: 27px;
          line-height: .95;
          letter-spacing: -1px;
        }

        .car-specs {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid rgba(23,23,34,.09);
          border-bottom: 1px solid rgba(23,23,34,.09);
        }

        .car-specs span {
          padding: 12px 7px;
          color: #777784;
          font-size: 11px;
          text-align: center;
          border-right: 1px solid rgba(23,23,34,.08);
        }

        .car-specs span:last-child {
          border-right: 0;
        }

        .car-specs b {
          display: block;
          margin-bottom: 5px;
          color: #9997A3;
          font-size: 8px;
          letter-spacing: 1px;
        }

        .car-card-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 17px;
        }

        .car-price {
          display: flex;
          align-items: baseline;
          gap: 5px;
        }

        .car-price strong {
          font-size: 22px;
          letter-spacing: -1px;
        }

        .car-price span {
          color: #777784;
          font-size: 9px;
          letter-spacing: 1px;
        }

        .view-car {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #7D6BCF !important;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.5px;
        }

        .view-car span {
          font-size: 17px;
          transition: transform .3s ease;
        }

        .view-car:hover span {
          transform: translate(3px, -3px);
        }

        /* =========================
           NO RESULTS
        ========================= */

        .no-results {
          min-height: 400px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .no-results > span {
          color: #8F7BE8;
          font-size: 8px;
          letter-spacing: 2px;
        }

        .no-results h3 {
          margin: 20px 0 30px;
          font-size: 55px;
          line-height: .85;
          letter-spacing: -4px;
        }

        .no-results h3 i {
          color: #7D6BCF;
          font-family: "Playfair Display", serif;
          font-weight: 500;
        }

        .no-results button {
          border: 1px solid rgba(23,23,34,.18);
          padding: 13px 20px;
          background: transparent;
          color: #171722;
          font-size: 8px;
          letter-spacing: 1.5px;
          cursor: pointer;
          transition: .3s;
        }

        .no-results button:hover {
          background: #8F7BE8;
          border-color: #8F7BE8;
          color: white;
        }

        /* =========================
           FOOTER
        ========================= */

        .cars-footer {
          padding: 65px 7vw 25px;
          background: #F0EFF5;
          border-top: 1px solid rgba(23,23,34,.08);
        }

        .footer-main {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 30px;
          max-width: 1400px;
          margin: auto;
        }

        .footer-main p {
          margin: 0;
          max-width: 180px;
          color: #777784;
          font-size: 10px;
          line-height: 1.8;
        }

        .footer-links {
          display: flex;
          justify-content: flex-end;
          gap: 25px;
        }

        .footer-links a {
          color: #777784;
          font-size: 8px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          transition: .3s;
        }

        .footer-links a:hover {
          color: #171722;
        }

        .footer-bottom {
          max-width: 1400px;
          margin: 70px auto 0;
          padding-top: 18px;
          border-top: 1px solid rgba(23,23,34,.09);
          display: flex;
          justify-content: space-between;
          color: #8A8894;
          font-size: 7px;
          letter-spacing: 1.5px;
        }

        /* =========================
           TABLET
        ========================= */

        @media (max-width: 1100px) {

          .filter-panel {
            grid-template-columns: 1fr 1fr 1fr;
          }

          .clear-filter {
            min-height: 55px;
          }

          .cars-grid {
            grid-template-columns: repeat(2, 1fr);
          }

        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 650px) {

          .cars-nav {
            height: 65px;
            padding: 0 20px;
          }

          .cars-nav-links {
            display: none;
          }

          .cars-nav-button {
            padding: 9px 11px;
            font-size: 7px;
          }

          .cars-intro {
            min-height: 430px;
            padding: 80px 22px 60px;
          }

          .cars-intro-number {
            top: 30px;
            right: 22px;
          }

          .cars-intro h1 {
            font-size: 54px;
            letter-spacing: -4px;
          }

          .cars-intro p {
            max-width: 270px;
          }

          .intro-decoration {
            width: 380px;
            height: 380px;
            right: -220px;
            bottom: -60px;
          }

          .cars-filter-section {
            padding: 45px 18px 25px;
          }

          .filter-top h2 {
            font-size: 38px;
          }

          .filter-panel {
            grid-template-columns: 1fr 1fr;
          }

          .search-box {
            grid-column: 1 / -1;
          }

          .clear-filter {
            grid-column: 1 / -1;
            min-height: 48px;
          }

          .cars-grid-section {
            padding: 35px 18px 70px;
          }

          .cars-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .car-card {
            min-height: 450px;
          }

          .car-image {
            height: 240px;
          }

          .car-info h3 {
            font-size: 25px;
          }

          .footer-main {
            grid-template-columns: 1fr;
          }

          .footer-links {
            justify-content: flex-start;
            flex-wrap: wrap;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 10px;
            margin-top: 45px;
          }

        }
          .journey-summary {
  display: flex;
  align-items: center;
  gap: 25px;
  margin-top: 22px;
  flex-wrap: wrap;
}

.journey-summary span {
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: #777784;
  font-size: 11px;
}

.journey-summary b {
  color: #8F7BE8;
  font-size: 6px;
  letter-spacing: 1.5px;
}

@media (max-width: 650px) {
  .journey-summary {
    gap: 15px;
  }
}

      `}</style>
    </main>
  );
}