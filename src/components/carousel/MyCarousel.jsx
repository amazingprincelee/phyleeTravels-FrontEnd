import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
import slide1 from "../../images/suitcase-travel-photo.png";
import slide2 from "../../images/suitcase-travel-photo.png";
import slide3 from "../../images/suitcase-travel-photo.png";
import slide4 from "../../images/suitcase-travel-photo.png";
import slide5 from "../../images/suitcase-travel-photo.png";

function MyCarousel() {
  return (
    <div id="myCarousel" className="mb-6 carousel slide" data-bs-ride="carousel" data-bs-interval="15000">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="4"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={slide1} alt="slide-1" width="100%" height={600}/>
          <div className="container">
            <div className="carousel-caption custom-caption">
              <h1>Make in <br/> your journey.</h1>
              <p className="opacity-75">We specialize in providing top-notch traveling opportunities and services, catering to a diverse range of needs.</p>
              <div className="bg-light d-flex justify-content-between align-items-center header-action" >
                <button className="btn btn-lg header-action-btn" style={{fontSize: "0.7rem"}} >Need Travel Advices?</button>
                <Link className="m-1 btn btn-sm btn-dark rounded-pill" to="/Booking">Schedule appointment</Link>
              </div>
              
              <p className="popular-places">Popular Place: UK, Canada, United States</p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={slide2} alt="slide-2" width="100%" height={860}/>
          <div className="container">
          <div className="carousel-caption custom-caption">
              <h1>Discover Amazing <br/> Destinations</h1>
              <p className="opacity-75">Explore breathtaking places and create <br/> unforgettable memories with us.</p>
              <div className="bg-light d-flex justify-content-between align-items-center header-action" >
                <button className="btn btn-lg header-action-btn" >Need Travel Advice?</button>
                <Link className="m-3 btn btn-md btn-dark rounded-pill" to="/Booking">Schedule appointment</Link>
              </div>
              <p className="popular-places">Popular Place: UK, Canada, United States</p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={slide3} alt="slide-3" width="100%" height={860}/>
          <div className="container">
          <div className="carousel-caption custom-caption">
              <h1>Your Next <br/> Adventure Awaits.</h1>
              <p className="opacity-75">Get ready for a thrilling journey to <br/> the world's most stunning destinations.</p>
              <div className="bg-light d-flex justify-content-between align-items-center header-action" >
                <button className="btn btn-lg header-action-btn" >Need Travel Advice?</button>
                <Link className="m-3 btn btn-md btn-dark rounded-pill" to="/Booking">Schedule appointment</Link>
              </div>
              <p className="popular-places">Popular Place: UK, Canada, United States</p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={slide4} alt="slide-4" width="100%" height={860}/>
          <div className="container">
          <div className="carousel-caption custom-caption">
              <h1>Plan the <br/> Perfect Getaway.</h1>
              <p className="opacity-75">Let us handle the details, so you <br/>can relax and enjoy the journey..</p>
              <div className="bg-light d-flex justify-content-between align-items-center header-action" >
                <button className="btn btn-lg header-action-btn" >Need Travel Advice?</button>
                <Link className="m-3 btn btn-md btn-dark rounded-pill" to="/Booking">Schedule appointment</Link>
              </div>
              <p className="popular-places">Popular Place: UK, Canada, United States</p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={slide5} alt="slide-5" width="100%" height={860}/>
          <div className="container">
          <div className="carousel-caption custom-caption">
              <h1>Explore <br/>Popular Places.</h1>
              <p className="opacity-75">Let us handle the details, so you <br/>can relax and enjoy the journey.</p>
              <div className="bg-light d-flex justify-content-between align-items-center header-action" >
                <button className="btn btn-lg header-action-btn" >Need Travel Advice?</button>
                <Link className="m-3 btn btn-md btn-dark rounded-pill" to="/Booking">Schedule appointment</Link>
              </div>
              <p className="popular-places">Popular Place: UK, Canada, United States</p>
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

      {/* Custom CSS for position and layout */}
      <style jsx>{`
        .custom-caption {
          position: absolute;
          top: 20%;
          left: 10%;
          color: #fff;
          text-align: left;
        }
        .custom-caption h1 {
          font-size: 4rem;
          font-weight: bold;
        }
        .custom-caption p {
          font-size: 1.2rem;
          max-width: 600px;
        }
        .btn-group {
          margin-top: 20px;
        }
        .popular-places {
          margin-top: 20px;
          font-size: 1rem;
          color: #fff;
          opacity: 0.85;
        }
      `}</style>
    </div>
  );
}

export default MyCarousel;


