import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { FaTwitter, FaTelegram, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

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
    <footer className="text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="mx-auto" style={{ maxWidth: '700px' }}>
              <h4 className="mb-4">Sign Up For Our Newsletter</h4>
              <p className="mb-4">Subscribe to our newsletter for exclusive updates delivered straight to your inbox</p>

              <form onSubmit={handleNewsletterSubmit}>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email to receive updates"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button className="btn btn-danger" type="submit">Subscribe</button>
                </div>
              </form>
            </div>
          </div>

          <div className="col-md-3">
            <h5>Connect with us</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white">Request an appointment</Link></li>
              <li><a href="mailto:info@phyleejourneys.com" className="text-white">info@phyleejourneys.com</a></li>
              <li><Link to="/about-us" className="text-white">About us</Link></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5>Follow Us</h5>
            <div className="d-flex">
              <a href="#" className="text-white me-3"><FaTwitter size={24} /></a>
              <a href="#" className="text-white me-3"><FaTelegram size={24} /></a>
              <a href="https://www.facebook.com/phyleetravels" target='_blank' className="text-white me-3"><FaFacebook size={24} /></a>
              <a href="https://www.instagram.com/studyabroadmaestro" target='_blank' className="text-white me-3"><FaInstagram size={24} /></a>
              <a href="#" className="text-white"><FaYoutube size={24} /></a>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        <div className="row">
          <div className="col-md-3">
            <h5>Study Abroad</h5>
            <ul className="list-unstyled">
              <li><Link to="/login" className="text-white">Student Service</Link></li>
              <li><Link to="/destination" className="text-white">Student Destination</Link></li>
              <li><Link to="/events" className="text-white">Events</Link></li>
              <li><Link to="/student-loan" className="text-white">Student Loan</Link></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5>Top Courses</h5>
            <ul className="list-unstyled">
              <li><Link to="/find-a-course" className="text-white">Engineering</Link></li>
              <li><Link to="/find-a-course" className="text-white">Computer & IT</Link></li>
              <li><Link to="/find-a-course" className="text-white">Health and Medicine</Link></li>
              <li><Link to="/find-a-course" className="text-white">Business & Management</Link></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5>Help</h5>
            <ul className="list-unstyled">
              <li><a href="mailto:info@phyleejourneys.com" className="text-white">info@phyleejourneys.com</a></li>
            </ul>
          </div>

          <div className="col-md-3">
            <p className="text-white mb-0">Copyright © {year} Phylee Journeys</p>
            <p className="text-white">Designed and managed by <a href="https://www.princelee.pro/" className="text-white" target="_blank" rel="noopener noreferrer">Prince Lee</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
