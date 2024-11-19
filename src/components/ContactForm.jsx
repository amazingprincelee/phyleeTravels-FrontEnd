import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    preferredStudyDestination: "",
    whenPlanYourJourney: "",
    kindOfJourney: "",
    preferredStudyLevel: "",
    agreeToTerms: false,
    message: "",
  });
  const [journeyType, setJourneyType] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    if (name === "kindOfJourney") {
      setJourneyType(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await axios.post(
        "https://phyleetravels-backend.onrender.com/api/contacts/submit",
        formData
      );
      if (response.status === 201) {
        setSuccess(true);
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          preferredStudyDestination: "",
          whenPlanYourJourney: "",
          kindOfJourney: "",
          preferredStudyLevel: "",
          agreeToTerms: false,
          message: "",
        });
      }
    } catch (err) {
      setError(err.response?.data?.error || "Failed to submit form");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="container py-5">
      <div className="row g-5 align-items-start">
         {/* Form Section */}
         <div className="col-12 col-lg-6">
          <div className="p-4 rounded shadow">
            {success && (
              <div className="alert alert-success">Form submitted successfully!</div>
            )}
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <select
                  className="form-select"
                  name="preferredStudyDestination"
                  value={formData.preferredStudyDestination}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Your Preferred Destination
                  </option>
                  <option>UK</option>
                  <option>Canada</option>
                  <option>Australia</option>
                  <option>Germany</option>
                  <option>France</option>
                  <option>Dubai</option>
                </select>
              </div>
              <div className="mb-3">
                <select
                  className="form-select"
                  name="whenPlanYourJourney"
                  value={formData.whenPlanYourJourney}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    When do you plan your journey
                  </option>
                  {[
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                  ].map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <select
                  className="form-select"
                  name="kindOfJourney"
                  value={formData.kindOfJourney}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    What kind of journey are you embarking on?
                  </option>
                  <option value="Study">Study</option>
                  <option value="Business">Business</option>
                  <option value="Leisure">Leisure</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Visit">Visit</option>
                </select>
              </div>
              {journeyType === "Study" && (
                <div className="mb-3">
                  <select
                    className="form-select"
                    name="preferredStudyLevel"
                    value={formData.preferredStudyLevel}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Preferred Study Level
                    </option>
                    <option>Undergraduate</option>
                    <option>Master</option>
                    <option>PhD</option>
                  </select>
                </div>
              )}
              <div className="mb-3">
                <textarea
                  className="form-control"
                  placeholder="Your Message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="border form-check-input border-danger"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label">
                  I agree to the <a href="/#">terms and conditions</a>
                </label>
              </div>
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-danger"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Contact Now"}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="p-5 col-12 col-lg-6">
          <h2>Get In Touch</h2>
          <p className="mb-5 small">
            Feel free to reach out to us for any inquiries, travel plans, or
            support. Our dedicated team is here to assist you every step of the
            way to make your journey seamless and unforgettable.
          </p>
          <div className="row">
            {/* Port Harcourt Office */}
            <div className="mb-4 col-12 col-sm-6">
              <h5>Port Harcourt Office</h5>
              <p>
                <FaPhoneAlt className="me-2" /> +234 911 689 8394
              </p>
              <p>
                <FaEnvelope className="me-2" /> info@traveller.com
              </p>
              <p>
                <FaMapMarkerAlt className="me-2" /> 10 UST Main Gate Rivers
                State, PH
              </p>
            </div>
            {/* Lagos Office */}
            <div className="mb-4 col-12 col-sm-6">
              <h5>Lagos Office</h5>
              <p>
                <FaPhoneAlt className="me-2" /> +234 911 689 8394
              </p>
              <p>
                <FaEnvelope className="me-2" /> info@traveller.com
              </p>
              <p>
                <FaMapMarkerAlt className="me-2" /> 10 UST Main Gate Rivers
                State, PH
              </p>
            </div>
            {/* Abuja Office */}
            <div className="mb-4 col-12 col-sm-6">
              <h5>Abuja Office</h5>
              <p>
                <FaPhoneAlt className="me-2" /> +234 911 689 8394
              </p>
              <p>
                <FaEnvelope className="me-2" /> info@traveller.com
              </p>
              <p>
                <FaMapMarkerAlt className="me-2" /> 10 UST Main Gate Rivers
                State, PH
              </p>
            </div>
            {/* Calabar Office */}
            <div className="mb-4 col-12 col-sm-6">
              <h5>Calabar Office</h5>
              <p>
                <FaPhoneAlt className="me-2" /> +234 911 689 8394
              </p>
              <p>
                <FaEnvelope className="me-2" /> info@traveller.com
              </p>
              <p>
                <FaMapMarkerAlt className="me-2" /> 10 UST Main Gate Rivers
                State, PH
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
