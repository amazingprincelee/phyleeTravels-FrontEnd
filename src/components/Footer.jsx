import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaTwitter, FaTelegram, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();

    // Use your EmailJS service, template, and user IDs
    const serviceId = 'your_emailjs_service_id';
    const templateId = 'your_newsletter_template_id';
    const userId = 'your_emailjs_user_id';

    try {
      await emailjs.send(serviceId, templateId, { email }, userId);

      alert('Newsletter subscription successful!');
      setEmail('');
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      alert('Failed to subscribe to the newsletter. Please try again.');
    }
  };

  return (
    <footer className="container-fluid py-5">
      <div className="container p-5 text-center">
      <div className="mx-auto" style={{ maxWidth: "700px" }}>
        <h4>Sign Up For Our Newsletter</h4>
        <p>Subscribe to our newsletter for exclusive updates delivered straight to your inbox</p>

        <form className="mb-5" onSubmit={handleNewsletterSubmit}>
            <div className="input-group">
              <input
                type="text"
                className="form-control newsletter"
                placeholder="Enter email to receive updates"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="btn btn-primary" type="submit">Send</button>
            </div>
          </form>
      </div>
    </div>



      <div className="row">
        <div className="col-12 col-md">
          
          <small className="d-block mb-3  text-white"><b>Help</b><br/>info@phyleejourneys.com <br/>
            <br/>
            
            </small>

            <div className="bottom-icon-container">
                    <a href="/#" target='_blank' rel="noreferrer"><FaTwitter className="bottom-icon " /></a>
                    <a href="/#" target='_blank' rel="noreferrer"><FaTelegram className="bottom-icon " /></a>
                    <a href="/#" target='_blank' rel="noreferrer"><FaFacebook className="bottom-icon " /></a>
                    <a href="/#" target='_blank' rel="noreferrer"><FaInstagram className="bottom-icon " /></a>
                    <a href="/#" target='_blank' rel="noreferrer"><FaYoutube className="bottom-icon " /></a>





                </div>
            
        </div>
        <div className="col-6 col-md">
          <h5>Study Abroad</h5>
          <ul className="list-unstyled text-small">
            <li>Student Services</li>
            <li>Student Destination</li>
            <li>Events</li>
            <li>Student Loans</li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Top Courses</h5>
          <ul className="list-unstyled text-small">
            <li>Engineering</li>
            <li>Computer and IT</li>
            <li>Health and Medicine</li>
            <li>Business and management</li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Connect with us</h5>
          <ul className="list-unstyled text-small">
            <li>Request an appointment</li>
            <li>Contact us</li>
            <li>About us</li>
          </ul>
        </div>
        <p className=" text-white">copyright© {year} :Phylee Journeys</p>
      </div>
    </footer>
  );
}

export default Footer;
