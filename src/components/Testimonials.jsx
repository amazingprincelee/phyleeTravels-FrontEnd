import React from 'react';
import userIcon from "../images/user-icon.jpg"

const testimonialsData = [
  {
    name: 'Amazing Lee',
    title: 'IT, Business',
    image: userIcon,
    quote: 'Phylee Journeys efficiently facilitated my admission and assisted me in securing a student loan in the UK! Their knowledgeable staff provided personalized guidance throughout the entire process, ensuring I felt confident and supported every step of the way.'
  },
  {
    name: 'Jane Smith',
    title: 'CTO, Tech Innovators',
    image: userIcon,
    quote: 'Phylee Journeys made planning my trip effortless and enjoyable. Their attention to detail and personalized service ensured that every aspect of my journey was seamless.'
  },
  {
    name: 'Sam Wilson',
    title: 'Designer, Creative Agency',
    image: userIcon,
    quote: 'Phylee Journeys exceeded my expectations with their impeccable service and attention to detail. From booking flights to arranging accommodations, they made my travel experience stress-free and memorable.'
  }
];

const Testimonials = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">What Our Clients Say</h2>
      <div className="row">
        {testimonialsData.map((testimonial, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-4">
              <img src={testimonial.image} className="card-img-top" alt={testimonial.name} />
              <div className="card-body">
                <h5 className="card-title">{testimonial.name}</h5>
                <p className="card-text"><em>{testimonial.title}</em></p>
                <p className="card-text">"{testimonial.quote}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
