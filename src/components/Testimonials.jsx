import React from 'react';

const testimonialsData = [
  {
    name: 'John Doe',
    title: 'CEO, Example Corp',
    image: 'https://via.placeholder.com/150',
    quote: 'This product has completely transformed our business!'
  },
  {
    name: 'Jane Smith',
    title: 'CTO, Tech Innovators',
    image: 'https://via.placeholder.com/150',
    quote: 'I can’t imagine working without this tool anymore.'
  },
  {
    name: 'Sam Wilson',
    title: 'Designer, Creative Agency',
    image: 'https://via.placeholder.com/150',
    quote: 'It’s intuitive and easy to use, highly recommend it!'
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
