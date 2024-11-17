import React from 'react';
import { Link } from 'react-router-dom';
import { FaGreaterThan } from "react-icons/fa";
import VissionMission from '../components/about-us/VisionMission';
import FounderSection from '../components/about-us/FounderSection';
import StatsSection from '../components/about-us/StatsSection';
import Gallery from '../components/about-us/Gallery';
import SubscriptionBanner from '../components/SubscriptionBanner';

function AboutUs() {
  return (
    <div className='mb-5'>
      <header style={{ border: "2px solid", padding: "20px" }}>
      <h1>About Us</h1>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Link className="text-white" to="/">
          Home
        </Link>
        <FaGreaterThan style={{ fontWeight: 10, fontSize: "12px", color: "white" }} />
        <Link className="text-white" to="/AboutUs">
          About Us
        </Link>
      </div>
    </header>

    <VissionMission />
    <FounderSection />
    <StatsSection />
    <Gallery />
    <SubscriptionBanner />

      
    </div>
  );
}

export default AboutUs;
