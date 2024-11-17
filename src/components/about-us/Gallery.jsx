import React from "react";
import baliImage from "../../images/gallery-bali.png";
import dubaiImage from "../../images/gallery-dubai.png";
import parisImage from "../../images/gallery-paris.png";
import italyImage from "../../images/gallery-italy.png";

const Gallery = () => {
  return (
    <div className="container py-5 mt-5 mb-5">
      <div className="mb-4 text-center">
        <h6 className="mt-3 text-uppercase text-muted">Gallery</h6>
        <h2 className="mb-5 fw-bold">Unforgettable Moment</h2>
      </div>
      <div className="row g-3">
        {/* Left side: Bali */}
        <div className="col-12 col-md-6">
          <div className="overflow-hidden rounded position-relative h-100">
            <img
              src={baliImage}
              alt="Bali"
              className="img-fluid w-100 h-100 object-fit-cover"
            />
            <div className="bottom-0 p-2 text-white position-absolute start-0">
              <h5 className="m-0">Bali</h5>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="col-12 col-md-6">
          <div className="row g-3 h-100">
            {/* Top: Dubai */}
            <div className="col-12">
              <div className="overflow-hidden rounded position-relative">
                <img
                  src={dubaiImage}
                  alt="Dubai"
                  className="img-fluid w-100 h-100 object-fit-cover"
                />
                <div className="bottom-0 p-2 text-white position-absolute start-0">
                  <h5 className="m-0">Dubai</h5>
                </div>
              </div>
            </div>

            {/* Bottom: Paris and Italy */}
            <div className="col-6">
              <div className="overflow-hidden rounded position-relative">
                <img
                  src={parisImage}
                  alt="Paris"
                  className="img-fluid w-100 h-100 object-fit-cover"
                />
                <div className="bottom-0 p-2 text-white position-absolute start-0">
                  <h5 className="m-0">Paris</h5>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="overflow-hidden rounded position-relative">
                <img
                  src={italyImage}
                  alt="Italy"
                  className="img-fluid w-100 h-100 object-fit-cover"
                />
                <div className="bottom-0 p-2 text-white position-absolute start-0">
                  <h5 className="m-0">Italy</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
