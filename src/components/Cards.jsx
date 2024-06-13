import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowDownCircle } from 'react-icons/bs'; // Import the circled arrow down icon

function Cards() {
  return (
    <div className="container px-4 py-5" id="custom-cards">
      <h2 className="fw-bold" style={{ color: '#00007e', display: 'flex', alignItems: 'center' }}>
        WHY CHOOSE US
        <BsArrowDownCircle style={{ marginLeft: '10px', fontSize: '1.5em' }} /> {/* Add the icon here */}
      </h2>
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div className="col">
          <Link to="/expert" className="text-decoration-none">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="mt-5 mb-4 display-6 lh-1 fw-bold">Expert</h3>
                <p>At Phylee Journeys, we specialize in creating bespoke travel experiences that blend education and adventure. Whether you're looking to attend international conferences, visit historical sites, or participate in cultural exchange programs, we tailor each journey to enrich your professional and personal growth.</p>
              </div>
            </div>
          </Link>
        </div>
        
        <div className="col">
          <Link to="/student-loan" className="text-decoration-none">
            <div className="card card-cover h-100 overflow-hidden text-bg-danger rounded-4 shadow-lg">
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="mt-5 mb-4 display-6 lh-1 fw-bold">Student Loan</h3>
                <p>Dreaming of exploring the world but worried about your budget? At Phylee Journeys, we believe that travel should be accessible to everyone, including students. With our assistance in applying for student loans, you can embark on the journey of a lifetime without financial stress.</p>
              </div>
            </div>
          </Link>
        </div>
        
        <div className="col">
          <Link to="/group-travel" className="text-decoration-none">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h3 className="mt-5 mb-4 display-6 lh-1 fw-bold">Group Travel</h3>
                <p>Planning a group trip can be daunting, but at Phylee Journeys, we make it easy and enjoyable. Whether you're organizing a family reunion, corporate retreat, or a trip with friends, our expert team is here to create seamless and memorable group travel experiences.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cards;
