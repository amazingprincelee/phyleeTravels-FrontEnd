import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const courses = [
  { title: 'IELTS Preparation', provider: 'IDP', duration: '3 months', imgSrc: 'https://via.placeholder.com/150', description: 'Prepare for the IELTS exam with IDP.' },
  { title: 'TOEFL Preparation', provider: 'IDP', duration: '2 months', imgSrc: 'https://via.placeholder.com/150', description: 'Prepare for the TOEFL exam with IDP.' },
  { title: 'PTE Academic Preparation', provider: 'IDP', duration: '2 months', imgSrc: 'https://via.placeholder.com/150', description: 'Prepare for the PTE Academic exam with IDP.' },
  { title: 'English for Academic Purposes', provider: 'IDP', duration: '6 weeks', imgSrc: 'https://via.placeholder.com/150', description: 'Improve your English skills for academic purposes.' },
  { title: 'Study Skills', provider: 'IDP', duration: '4 weeks', imgSrc: 'https://via.placeholder.com/150', description: 'Develop essential study skills for success.' }
];

function FindACourse() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <header className="text-center mb-5">
        <h1>Find a Course</h1>
        <p>Explore our wide range of courses tailored to help you achieve your study goals.</p>
      </header>

      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search for a course"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>

      <div className="row">
        {filteredCourses.map((course, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <img src={course.imgSrc} className="card-img-top" alt={course.title} />
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description}</p>
                <p className="card-text"><strong>Provider:</strong> {course.provider}</p>
                <p className="card-text"><strong>Duration:</strong> {course.duration}</p>
                <a href="/#" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FindACourse;
