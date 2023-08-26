import React from 'react'
import slide1 from "./images/slide1.jpg"
import slide2 from "./images/slide2.jpg"
import slide3 from "./images/slide3.jpg"
import slide4 from "./images/slide4.jpg"
import slide5 from "./images/slide5.jpg"
import slide6 from "./images/slide6.jpg"

import './css/style.css'

function Caurosel() {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={slide3} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Welcome to eminetMayor Company</h5>
        <p>Best place to gain insight about Software development.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={slide2} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block" >
        <h5>We will Give the best here</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={slide4} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block" >
        <h5>We Pass Knowledge </h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Caurosel
