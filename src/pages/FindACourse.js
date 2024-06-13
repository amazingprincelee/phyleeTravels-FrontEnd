import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ieltsPhoto from '../images/ieltspreparation.jpg';
import toelPhoto from '../images/toelimage.jpg';
import ptePhoto from '../images/pteimage.png';
import englishPhoto from '../images/englishphoto.jpg';
import studyphoto from '../images/studyskills.jpg';
import dataSciencePhoto from '../images/datasciencephoto.jpeg';
import mbaPhoto from '../images/mba-photo.jpeg';
import computerPhoto from '../images/computerphoto.jpeg';
import healthPhoto from '../images/healthphoto.jpeg';

// Placeholder image URL with desired dimensions
const placeholderImage = 'https://via.placeholder.com/310x163';

const courses = [
  { title: 'IELTS Preparation', provider: 'Phylee Journeys', duration: '3 months', imgSrc: ieltsPhoto , description: 'Prepare for the IELTS exam with Phylee Journeys.' },
  { title: 'TOEFL Preparation', provider: 'Phylee Journeys', duration: '2 months', imgSrc: toelPhoto, description: 'Prepare for the TOEFL exam with Phylee Journeys.' },
  { title: 'PTE Academic Preparation', provider: 'Phylee Journeys', duration: '2 months', imgSrc: ptePhoto, description: 'Prepare for the PTE Academic exam with Phylee Journeys.' },
  { title: 'English for Academic Purposes', provider: 'Phylee Journeys', duration: '6 weeks', imgSrc: englishPhoto, description: 'Improve your English skills for academic purposes.' },
  { title: 'Study Skills', provider: 'Phylee Journeys', duration: '4 weeks', imgSrc: studyphoto, description: 'Develop essential study skills for success.' },
  { title: 'Data Science Master\'s Program', provider: 'Top University', duration: '2 years', imgSrc: dataSciencePhoto, description: 'Master the skills needed for a successful career in data science.' },
  { title: 'MBA in International Business', provider: 'Top University', duration: '2 years', imgSrc: mbaPhoto, description: 'Prepare for a global business career with an MBA in International Business.' },
  { title: 'Computer Science BSc', provider: 'Top University', duration: '4 years', imgSrc: computerPhoto, description: 'Get a strong foundation in computer science with a bachelor\'s degree.' },
  { title: 'Health & Medicine', provider: 'Top University', duration: '4 years', imgSrc: healthPhoto, description: 'Study health and medicine for a career in medical and health sectors.' }
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
    <div className="container-fluid p-0">
      <header className="hero-section">
        <div className="container py-5 text-center">
          <h1 className="display-4 text-white">Find a Course</h1>
          <p className="lead text-white">Explore our wide range of courses tailored to help you achieve your study goals.</p>
          <div className="mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search for a course"
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
          </div>
        </div>
      </header>

      <div className="container">
        <div className="row">
          {filteredCourses.map((course, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100">
                <img src={course.imgSrc} className="card-img-top course-image" alt={course.title} />
                <div className="card-body">
                  <h5 className="card-title">{course.title}</h5>
                  <p className="card-text">{course.description}</p>
                  <p className="card-text"><strong>Provider:</strong> {course.provider}</p>
                  <p className="card-text"><strong>Duration:</strong> {course.duration}</p>
                  <button className="custom-btn">Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FindACourse;
