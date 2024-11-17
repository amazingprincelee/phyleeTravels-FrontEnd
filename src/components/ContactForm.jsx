import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function ContactForm() {
  return (
    <div className="container py-5">
      <div className="row g-5 align-items-start">
        {/* Form Section */}
        <div className="col-12 col-lg-6">
          <div className="p-4 rounded shadow">
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div className="mb-3">
                <select className="form-select" required>
                  <option value="" disabled selected>
                    Your Preferred Destination
                  </option>
                  <option>Destination 1</option>
                  <option>Destination 2</option>
                  <option>Destination 3</option>
                </select>
              </div>
              <div className="mb-3">
                <select className="form-select" required>
                  <option value="" disabled selected>
                    When do you plan your journey
                  </option>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                </select>
              </div>
              <div className="mb-3">
                <select className="form-select" required>
                  <option value="" disabled selected>
                    What kind of journey are you embarking on?
                  </option>
                  <option>Business</option>
                  <option>Leisure</option>
                  <option>Adventure</option>
                </select>
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  placeholder="Your Message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-danger">
                  Contact now
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="p-5 col-12 col-lg-6">
          <h2>Get In Touch</h2>
          <p className="mb-5 small">
          Feel free to reach out to us for any inquiries, travel plans, or support. Our dedicated team is here to assist you every step of the way to make your journey seamless and unforgettable.
          </p>
          <div className="row">
            {/* Port Harcourt Office */}
            <div className="mb-4 col-12 col-sm-6">
              <h5>Port Harcourt Office</h5>
              <p>
                <FaPhoneAlt className="me-2" /> +234 703 152 2572
              </p>
              <p>
                <FaEnvelope className="me-2" /> info@traveller.com
              </p>
              <p>
                <FaMapMarkerAlt className="me-2" /> 10 UST Main Gate Rivers State, PH
              </p>
            </div>
            {/* Lagos Office */}
            <div className="mb-4 col-12 col-sm-6">
              <h5>Lagos Office</h5>
              <p>
                <FaPhoneAlt className="me-2" /> +234 703 152 2572
              </p>
              <p>
                <FaEnvelope className="me-2" /> info@traveller.com
              </p>
              <p>
                <FaMapMarkerAlt className="me-2" /> 10 UST Main Gate Rivers State, PH
              </p>
            </div>
            {/* Abuja Office */}
            <div className="mb-4 col-12 col-sm-6">
              <h5>Abuja Office</h5>
              <p>
                <FaPhoneAlt className="me-2" /> +234 703 152 2572
              </p>
              <p>
                <FaEnvelope className="me-2" /> info@traveller.com
              </p>
              <p>
                <FaMapMarkerAlt className="me-2" /> 10 UST Main Gate Rivers State, PH
              </p>
            </div>
            {/* Calabar Office */}
            <div className="mb-4 col-12 col-sm-6">
              <h5>Calabar Office</h5>
              <p>
                <FaPhoneAlt className="me-2" /> +234 703 152 2572
              </p>
              <p>
                <FaEnvelope className="me-2" /> info@traveller.com
              </p>
              <p>
                <FaMapMarkerAlt className="me-2" /> 10 UST Main Gate Rivers State, PH
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
