import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Home.css";
import vongTay1 from "./assets/vongtay1.png"; 
import vongTay2 from "./assets/categories/vongtay2.png";
import ring from "./assets/categories/ring.png";
import ring2 from "./assets/categories/ring2.png";
import neckles from "./assets/categories/neckles.png";
import neckles2 from "./assets/categories/neckles2.png";
import earring from "./assets/categories/earring.png";
import earring2 from "./assets/categories/earring2.png";


const Home = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const sliderItems = [
    {
      bgImg: vongTay1,
      name: "BRACELETS",
    },
    {
      bgImg: ring,
      name: "RINGS",
    },
    {
      bgImg: neckles,
      name: "NECKLACES",
    },
    {
      bgImg: earring,
      name: "EARINGS",
    },
]
  return (
    <>
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

      {/* Categories begin*/}
      <div className="container container_categories_slider">
        <Carousel responsive={responsive} className="categories_slider">
          {
            sliderItems.map((item, key) => (
              <div
                className="categories_slider-item"
                style={{ backgroundImage: `url(${item.bgImg})` }}
                key={key}
              >
                <p>{item.name}</p>
              </div>
            ))
          }
        </Carousel>;  
      </div>
       {/* Categories begin*/}
    
    </>
  );
};

export default Home;
