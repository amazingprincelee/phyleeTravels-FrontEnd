import React from 'react';
import aboutImage from '../images/about-us.jpg';

function AboutUs() {
  return (
    <div className='mb-5'>
      <header style={{border: "2px solid"}}>
        <h1 className='page-title'>About Us</h1>
      </header>

      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <h2>Welcome to  Phylee Travel and Tours Limited</h2>
            <p>Welcome to  Phylee Travel and Tours Limited, your trusted partner in educational journeys around the world. We are passionate about facilitating learning experiences abroad, enabling students to explore new academic horizons, immerse themselves in diverse cultures, and create lifelong memories.</p>
            <p>At  Phylee Travel and Tours Limited, we believe that education goes beyond the classroom. It's about fostering global citizenship, cultural understanding, and personal growth through travel and academic experiences.</p>

            <p>Our mission is to inspire and empower students to pursue their educational aspirations globally. Whether you're looking to prepare for an English proficiency exam, study abroad for a semester, or enroll in an international degree program, we are here to guide you every step of the way.</p>

            <p>With years of experience in international education, our team is dedicated to providing exceptional service and crafting customized educational programs that cater to your academic goals and cultural interests.</p>

            <p>Join us on an enlightening journey and let  Phylee Travel and Tours Limited be your partner in achieving your educational dreams!</p>

            <img src={aboutImage} alt='about' className='img-fluid mt-3' />
          </div>

          <div className='col-lg-6'>
            <h1>Testimonials</h1>
            <p>" Phylee Travel and Tours Limited helped me prepare for the IELTS exam with personalized tutoring sessions. Thanks to their guidance, I achieved my desired score and got accepted into my dream university."</p>
            <p>"Studying abroad with  Phylee Travel and Tours Limited was an unforgettable experience. The support from their team made the transition seamless, and I learned so much both academically and culturally."</p>
            <p>"The educational tour organized by  Phylee Travel and Tours Limited broadened my perspective and deepened my understanding of global issues. I highly recommend their programs to anyone looking to expand their horizons."</p>
            <p className='font-weight-bold'>Alice O. <br />
              "I have participated in multiple programs with  Phylee Travel and Tours Limited, and each one has been transformative. Their commitment to educational excellence is unparalleled."</p>
            <p>" Phylee Travel and Tours Limited is my go-to educational travel agency. They provide top-notch service and truly care about their students' academic success and personal growth."</p>
            <p className='font-weight-bold'>Karen E. <br />
              Teacher, International School <br />
              "Our school has partnered with  Phylee Travel and Tours Limited for years, and their programs have enriched our students' educational experiences. The team's dedication and expertise are outstanding."</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
