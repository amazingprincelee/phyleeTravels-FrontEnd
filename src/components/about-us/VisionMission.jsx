import React from "react";
import { FaUsers, FaRocket, FaChartLine } from "react-icons/fa";

function VissionMission() {
  return (
    <div className="container py-5">
      <div className="text-center row g-4">
        {/* Card 1 */}
        <div className="col-12 col-md-4">
          <div className="p-3">
            <FaUsers size={40} style={{ color: "black", marginBottom: "15px" }} />
            <h3>Great team work</h3>
            <p>
              Our team combines passion, expertise, and collaboration to ensure
              every client’s travel experience is smooth, enjoyable, and truly
              unforgettable.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-12 col-md-4">
          <div className="p-3">
            <FaRocket size={40} style={{ color: "black", marginBottom: "15px" }} />
            <h3>Our vision</h3>
            <p>
              To become the leading choice for travelers worldwide, known for our
              dedication to exceptional service, inspiring journeys, and trusted
              partnerships.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-12 col-md-4">
          <div className="p-3">
            <FaChartLine size={40} style={{ color: "black", marginBottom: "15px" }} />
            <h3>Our mission</h3>
            <p>
              To create memorable travel experiences by providing personalized,
              reliable, and seamless service that brings every journey to life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VissionMission;
