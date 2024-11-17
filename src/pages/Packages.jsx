import React from 'react';
import { Link } from 'react-router-dom';
import { FaGreaterThan } from "react-icons/fa";
import SubscriptionBanner from '../components/SubscriptionBanner';
import PackagesComponent from '../components/packages';
import FlightBookingBanner from '../components/FlightBooking';
import TipsArticles from '../components/TipsAndArticle';

function Packages() {
  return (
    <div className='mb-5'>
      <div className='packages-container' style={{ border: "2px solid", padding: "20px" }}>
      <h1>Travel Packages</h1>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Link className="text-white" to="/">
          Home
        </Link>
        <FaGreaterThan style={{ fontWeight: 10, fontSize: "12px", color: "white" }} />
        <Link className="text-white" to="/packages">
          Packages
        </Link>
      </div>
    </div>

    
    <PackagesComponent />
    <FlightBookingBanner />
    <TipsArticles />
    <SubscriptionBanner />
    

      
    </div>
  );
}

export default Packages;
