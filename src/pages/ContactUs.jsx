import React from 'react';
import { Link } from 'react-router-dom';
import { FaGreaterThan } from "react-icons/fa";
import SubscriptionBanner from '../components/SubscriptionBanner';
import ContactForm from '../components/ContactForm';

function ContactUs() {
  return (
    <div className='mb-5'>
      <div className='contact-us-container' style={{ border: "2px solid", padding: "20px" }}>
      <h1>Contact Us</h1>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Link className="text-white" to="/">
          Home
        </Link>
        <FaGreaterThan style={{ fontWeight: 10, fontSize: "12px", color: "white" }} />
        <Link className="text-white" to="/ContactUs">
          Contact Us
        </Link>
      </div>
    </div>

    
    
    <ContactForm />
    <SubscriptionBanner />

      
    </div>
  );
}

export default ContactUs;
