import React from 'react';

const StudyFormComponent = () => {
  return (
    <div className="container mt-5">
      <div className="d-flex flex-wrap">
        <div className="left-div flex-fill p-4 text-white d-flex flex-column justify-content-center">
          <h2>Welcome to Phylee Journey</h2>
          <p>Start your journey with us today!</p>
        </div>
        <div className="right-div flex-fill p-4" style={{background: '#960606'}}>
          <form>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label text-white">First Name</label>
              <input type="text" className="form-control" id="firstName" placeholder="Enter your first name" />
            </div>

            <div className="mb-3">
              <label htmlFor="lastName" className="form-label text-white">Last Name</label>
              <input type="text" className="form-control" id="lastName" placeholder="Enter your last name" />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label text-white">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label text-white">Phone Number</label>
              <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" />
            </div>

            <div className="mb-3">
              <label htmlFor="studyDestination" className="form-label text-white">Your Preferred Study Destination</label>
              <select className="form-select" id="studyDestination">
                <option>USA</option>
                <option>UK</option>
                <option>Canada</option>
                <option>Australia</option>
                <option>Germany</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="studyPlan" className="form-label text-white">When do you plan to study?</label>
              <select className="form-select" id="studyPlan">
                <option>January 2024</option>
                <option>May 2024</option>
                <option>September 2024</option>
                <option>January 2025</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="nearestOffice" className="form-label text-white">Nearest Phylee Journey Office</label>
              <select className="form-select" id="nearestOffice">
                <option>Lagos Office</option>
                <option>Abuja Office</option>
                <option>Port Harcourt Office</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="studyLevel" className="form-label text-white">Preferred Study Level</label>
              <select className="form-select" id="studyLevel">
                <option>Undergraduate</option>
                <option>Master's</option>
                <option>PhD</option>
              </select>
            </div>

            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="terms" />
              <label className="form-check-label text-white" htmlFor="terms">
                I agree to Phylee's terms and conditions
              </label>
            </div>

            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="updates" />
              <label className="form-check-label text-white" htmlFor="updates">
                I would like to receive updates from Phylee
              </label>
            </div>

            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="contact" />
              <label className="form-check-label text-white" htmlFor="contact">
                Please contact me by phone, email, and SMS
              </label>
            </div>

            <button type="submit" className="custom-btn2">Contact now</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default StudyFormComponent;
