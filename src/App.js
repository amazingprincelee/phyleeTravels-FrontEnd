import React from "react";
import { Routes, Route } from "react-router-dom";
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
import StudyAbroadCarousel from "./components/carousel/StudyAbroad.jsx";
import FindUs from "./pages/FindUs.js";
import Events from "./pages/Events.js";
import RegisterEvent from "./pages/RegisterEvent.js";
import ExpertTravelPage from "./pages/expert.js";
import StudentLoan from "./pages/StudentLoan.js";
import GroupTravelPage from "./pages/GroupTravelPage.js";
import ScrollToTop from "./components/scrollToTop.jsx";
import AdminArea from "./pages/AdminArea.jsx";
import ScrollToTopIcon from "./components/ScrollTOTopIcon.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Packages from "./pages/Packages.jsx";
import Blog from "./pages/Blog.jsx";
import AppointmentBooking from "./components/AppointmentBooking.jsx";
import RequireAuth from "./RequireAuth.js";

function App() {
  return (
    <div>
      <NavBar />
      <ScrollToTop />
      <ScrollToTopIcon />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MyCarousel />
              <ExploreCarouselComponent />
              <StudyAbroadCarousel />
              <FlightBookingBanner />
              <TourPartners />
              <Testimonials />
              <SubscriptionBanner />
            </>
          }
        />
        <Route
         path="/dashboard/*"  // This should handle all routes inside the dashboard
         element={
           <RequireAuth>
             <Dashboard />
           </RequireAuth>
         }
        />
        <Route path="/admin-area" element={<AdminArea />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/verification" element={<VerificationForm />} />
        <Route
          path="/verification-success"
          element={<EmailVerificationSuccess />}
        />
        <Route path="/appointment" element={<AppointmentBooking />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/study-abroad" element={<StudyAbroad />} />
        <Route path="/find-course" element={<FindACourse />} />
        <Route path="/find-us" element={<FindUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/registerEvent" element={<RegisterEvent />} />
        <Route path="/expert" element={<ExpertTravelPage />} />
        <Route path="/student-loan" element={<StudentLoan />} />
        <Route path="/group-travel" element={<GroupTravelPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
