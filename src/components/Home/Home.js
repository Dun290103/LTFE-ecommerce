import React from "react";
import { NavLink } from "react-router-dom";
import { Carousel } from 'react-bootstrap';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { IoHome } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";
import { GiRotaryPhone } from "react-icons/gi";

const Home = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/theme.png"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter fw-bold">
                NEW ARRIVALS
              </h5>
              <p className="card-text fs-5 d-none d-sm-block ">
                Winter is co'ming. Get ready with our new collection.
              </p>
              <div>
                <NavLink className="nav-link" to="/product">
                  <button type="button" class="btn btn-outline-light fw-bold">SHOP NOW</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Carousel activeIndex={index} onSelect={handleSelect} fade data-bs-theme="dark" slide>
        <Carousel.Item>
          <img
            className="d-flex mx-auto carousel-image w-2 h-2"
            src="./assets/vongtay.webp"
            alt="Bracelet"
          />
          <Carousel.Caption>
            <h3>Bracelet</h3>
            <p>Discover our unique bracelets.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-flex mx-auto carousel-image   w-2 h-2"
            src="./assets/ring.png"
            alt="Ring"
          />
          <Carousel.Caption>
            <h3>Ring</h3>
            <p>Elegant and timeless rings.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-flex mx-auto carousel-image w-2 h-2"
            src="./assets/neckles1.png"
            alt="Necklace"
          />
          <Carousel.Caption>
            <h3>Necklace</h3>
            <p>Stunning necklaces for every occasion.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-flex mx-auto carousel-image  w-2 h-2"
            src="./assets/earing2.png"
            alt="Earrings"
          />
          <Carousel.Caption>
            <h3>Earrings</h3>
            <p>Beautiful earrings to complement your look.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <footer className="text-center text-lg-start bg-body-tertiary text-muted">
        <section class=" justify-content-center justify-content-lg-between p-4 border-bottom "  >
        </section>
        <section class="justify-content-center justify-content-lg-between p-4 border-bottom" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          <div class="container text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-2 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-3 text-md-start fst-italic">
                  <i class="fas fa-gem me-3"></i>Gullveig
                </h6>
                <p>
                  Choose us for the best quality products.
                </p>
              </div>
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  OUR COMPANY
                </h6>
                <p>
                  <a href="#!" class="text-reset">CARRERS</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">CREADIT</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">CORPORATE SOCIAL RESPONSIBILITY</a>
                </p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  LEGAL AREA
                </h6>
                <p>
                  <a href="#!" class="text-reset">TERMS OF USE</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">PRIVACY POLICY</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">ACCESSIBILITY STATEMENT</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">HUMAN RIGHTS STATEMENT </a>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  CONTACT US
                </h6>
                <p><IoHome /><i class="">Bien Hoa, Dong Nai</i></p>
                <p><SiMinutemailer /><i class="">gullveig@fashion.mail</i></p>
                <p><GiRotaryPhone /><i class=""></i> + 852 162 351</p>
              </div>
            </div>

          </div>
        </section>
        <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2024 Copyright:
          <a class="text-reset fw-bold" href="#!"> GULLVEIG.com</a>
        </div>

      </footer>
    </div>

  );
}


export default Home;
