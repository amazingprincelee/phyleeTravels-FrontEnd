import React from "react";
import { Switch, Route } from 'react-router-dom';
import "./App.css";
import NavBar from "./components/NavBar";
import MyCarousel from "./components/MyCarousel";
import CoreValue from "./components/CoreValue";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs.js";
import Dashboard from "./pages/Dashboard";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import VerificationForm from "./components/VerificationForm";
import EmailVerificationSuccess from "./components/EmailVerificationSuccess";
import Destination from "./pages/Destination";
import StudyAbroad from "./pages/StudyAbroad";
import FindACourse from "./pages/FindACourse";
import StudyForm from "./components/StudyForm.jsx";
import Testimonials from "./components/Testimonials.jsx";
import LeadingUniversities from "./components/LeadingUniversities.jsx";






function App() {
 

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <div>
           <MyCarousel />
           <CoreValue />
           <Cards />
           <StudyForm />
           <Testimonials />
           <LeadingUniversities />
          
          </div>
        </Route>
        <Route path="/Dashboard">
          <Dashboard />
        </Route>
        <Route path="/AboutUs">
          <AboutUs />
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
      </Switch>
      <Footer />
    </div>
  );
}

export default App;