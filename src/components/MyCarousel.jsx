import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
// import { Carousel } from 'react-responsive-carousel';
import slide1 from "../images/slide1.jpg";
import slide2 from "../images/slide2.jpg";
import slide3 from "../images/slide3.jpg";
import slide4 from "../images/slide4.jpg";
import slide5 from "../images/slide5.jpg";

function MyCarousel() {
  return (
    <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" className="" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" className="" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" className="" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="4" className="active" aria-current="true"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item">
          <img src={slide3} alt='slide-1' width="100%" height={500}/>
          <div className="container">
            <div className="carousel-caption text-start">
              <h1>Study in Ireland</h1>
              <p className="opacity-75 slide-p-size">"Embark on a study adventure in Ireland, where tradition meets vibrant learning."</p>
                <p><Link className="btn btn-lg btn-danger" to="/Registration">Register Now!</Link></p>
            </div>
          </div>
        </div>
        <div className="carousel-item active carousel-item-start">
          <img src={slide2} alt='slide-2' width="100%" height={500}/>
          <div className="container">
            <div className="carousel-caption">
              <h1>Study in Sweden - Nurturing Dreams, Quality Education</h1>
              <p className="opacity-75 slide-p-size" >"Embark on a study adventure in Sweden, where innovation meets cultural enrichment."</p>
                <p><Link className="btn btn-lg btn-danger" to="/Registration">Register Now!</Link></p>
            </div>
          </div>
        </div>
        <div className="carousel-item carousel-item-next carousel-item-start">
          <img src={slide1} alt='slide-3' width="100%" height={500}/>
          <div className="container">
            <div className="carousel-caption text-end">
              <h1>Study in the UK.</h1>
              <p className="opacity-75 slide-p-size">"Embark on an educational journey in the UK, where each experience creates a harmonious symphony of personal and academic growth."</p>
                <p><Link className="btn btn-lg btn-danger" to="/Registration">Register Now!</Link></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={slide4} alt='slide-4' width="100%" height={500}/>
          <div className="container">
            <div className="carousel-caption">
              <h1>Study in Finland</h1>
              <p className="opacity-75 slide-p-size">"Embark on a study adventure in Finland, where education meets innovation."</p>
              <p><Link className="btn btn-lg btn-danger" to="/Registration">Register Now!</Link></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={slide5} alt='slide-5' width="100%" height={500}/>
          <div className="container">
            <div className="carousel-caption">
              <h1>Our Specialty</h1>
              <p className="opacity-75 slide-p-size">We specialize in providing top-notch traveling opportunity and services, catering to a diverse range of needs</p>
              <p><Link className="btn btn-lg btn-danger" to="/Registration">Register Now!</Link></p>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default MyCarousel;
