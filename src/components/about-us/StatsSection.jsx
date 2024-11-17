import React from "react";
import { FaUsers, FaUserPlus, FaUserGraduate, FaAward } from "react-icons/fa";

function StatsSectionBootstrap() {
  const stats = [
    {
      icon: <FaUsers size={40} />,
      value: "126+",
      label: "Satisfied Client",
    },
    {
      icon: <FaUserPlus size={40} />,
      value: "230+",
      label: "New Traveller",
    },
    {
      icon: <FaUserGraduate size={40} />,
      value: "230+",
      label: "Student Admission",
    },
    {
      icon: <FaAward size={40} />,
      value: "230+",
      label: "Award",
    },
  ];

  return (
    <div
      className="py-5 text-white stats-section"
    >
      <div className="container">
        <div className="text-center row">
          {stats.map((stat, index) => (
            <div className="mb-4 col-6 col-md-3" key={index}>
              <div className="mb-2">{stat.icon}</div>
              <h3 className="fw-bold">{stat.value}</h3>
              <p className="mb-0">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StatsSectionBootstrap;
