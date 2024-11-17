import React from "react";
import { Switch, Route } from 'react-router-dom';
import "./App.css";
import NavBar from "./components/NavBar";
import MyCarousel from "./components/carousel/MyCarousel.jsx";
import ExploreCarouselComponent from "./components/carousel/ExploreCarousel.jsx";
import FlightBookingBanner from "./components/FlightBooking.jsx";
import TourPartners from "./components/TourPartner.jsx";
import Testimonials from "./components/Testimonials.jsx";
import SubscriptionBanner from "./components/SubscriptionBanner.jsx";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs.jsx";
import Dashboard from "./pages/Dashboard";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import VerificationForm from "./components/VerificationForm";
import EmailVerificationSuccess from "./components/EmailVerificationSuccess";
import Destination from "./pages/Destination";
import StudyAbroad from "./pages/StudyAbroad";
import FindACourse from "./pages/FindACourse";
import StudyAbroadCarousel from "./components/carousel/StudyAbroad.jsx"
import FindUs from "./pages/FindUs.js";
import Events from "./pages/Events.js";
import RegisterEvent from "./pages/RegisterEvent.js";
import ExpertTravelPage from "./pages/expert.js";
import StudentLoan from "./pages/StudentLoan.js";
import GroupTravelPage from "./pages/GroupTravelPage.js";
import ScrollToTop from "./components/scrollToTop.jsx";
import AdminPage from "./pages/AdminPage.js";
import ScrollToTopIcon from "./components/ScrollTOTopIcon.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Packages from "./pages/Packages.jsx";
import Blog from "./pages/Blog.jsx";






function App() {
 

  return (
    <div>
      <NavBar />
      <ScrollToTop />
      <ScrollToTopIcon />
      <Switch>
        <Route exact path="/">
          <div>
           <MyCarousel />
           <ExploreCarouselComponent />
           <StudyAbroadCarousel />
           <FlightBookingBanner />
           <TourPartners />
           <Testimonials />
           <SubscriptionBanner />
          
          </div>
        </Route>
        <Route path="/Dashboard">
          <Dashboard />
        </Route>
        <Route path="/AdminPage">
          <AdminPage />
        </Route>
        <Route path="/AboutUs">
          <AboutUs />
        </Route>
        <Route path="/ContactUs">
          <ContactUs />
        </Route>
        <Route path="/packages">
          <Packages />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/Registration">
          <RegistrationForm />
        </Route>
        <Route path="/Login">
          <LoginForm />
        </Route>
        <Route path="/Verification">
          <VerificationForm />
        </Route>
        <Route path="/verificationSuccess">
          <EmailVerificationSuccess />
        </Route>
        
        
        
        <Route path="/destination">
          <Destination />
        </Route>
        <Route path="/studyAbroad">
          <StudyAbroad />
        </Route>
        <Route path="/findACourse">
          <FindACourse />
        </Route>
        <Route path="/FindUs">
          <FindUs />
        </Route>
        <Route path="/Events">
          <Events />
        </Route>
        <Route path="/RegisterEvent">
          <RegisterEvent />
        </Route>
        <Route path="/Expert">
          <ExpertTravelPage />
        </Route>
        <Route path="/student-loan">
          <StudentLoan />
        </Route>
        <Route path="/group-travel">
          <GroupTravelPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;