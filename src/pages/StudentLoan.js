import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const StudentLoan = () => {
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://via.placeholder.com/600x400"
            className="img-fluid rounded"
            alt="Student Travel"
          />
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <div>
            <h1 className="mb-4">Travel the World Without Financial Worry</h1>
            <p className="lead">
              Dreaming of exploring the world but worried about your budget? At Phylee Journeys, we believe that travel should be accessible to everyone, including students. With our assistance in applying for student loans, you can embark on the journey of a lifetime without financial stress.
            </p>
            <h2 className="mt-5">Why Choose Phylee Journeys?</h2>
            <ul className="list-unstyled">
              <li>
                <strong>Student Loan Assistance:</strong> We help you secure the funding you need for your travel plans.
              </li>
              <li>
                <strong>Affordable Packages:</strong> Special discounts and deals tailored specifically for students.
              </li>
              <li>
                <strong>Seamless Planning:</strong> From loan applications to itinerary details, we handle everything for you.
              </li>
            </ul>
            <p className="mt-4">
              Don't let finances hold you back. Discover new cultures, make lifelong memories, and enrich your education with Phylee Journeys. Contact us today to start planning your adventure!
            </p>
            <button className="btn btn-primary mt-3">Contact Us</button>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col text-center">
          <p className="lead">
            Unlock new knowledge and perspectives with travel experiences that go beyond the classroom. Connect with us today and start your journey towards a world of learning!
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentLoan;
