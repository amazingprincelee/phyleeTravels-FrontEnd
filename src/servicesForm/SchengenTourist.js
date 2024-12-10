import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

function SchengenTourist() {
  return (
    <div className="container mt-5">

      {/* Title Section */}
      <h2 className="mb-4 text-center text-primary">Schengen Tourist journey Requirements</h2>
      <p className="mb-4 text-center text-muted">
        Follow these simple steps to secure your Schengen Tourist journey.
      </p>

      {/* Requirements Information */}
      <div className="mb-4 shadow-sm card">
        <div className="card-body">
          <h5 className="card-title">Required Documents</h5>
          <ul className="list-unstyled">
            <li><strong>Academic Transcripts</strong> - Latest copy of your transcripts</li>
            <li><strong>Proof of Identity</strong> - A valid passport or national ID</li>
            <li><strong>Personal Statement</strong> - A brief statement of intent</li>
            <li><strong>Recommendation Letters</strong> - Letters from your teachers or mentors</li>
          </ul>
        </div>
      </div>

      {/* Payment Information */}
      <div className="mb-4 shadow-sm card">
        <div className="card-body">
          <h5 className="card-title">Processing Fee</h5>
          <p>
            To process your admission, a fee of <strong>N150,000</strong> is required.
            This fee covers the cost of processing your documents and securing your spot in the university.
          </p>
          <p>
            Admission will be confirmed within <strong>5 to 10 working days</strong> after submission of all your documents.
            You will be able to submit documents after payment is confirmed
          </p>
        </div>
      </div>

      {/* Action Button */}
      <div className="text-center">
        <button 
          className="mt-3 btn btn-primary btn-lg" 
          onClick={() => alert('Redirecting to payment page...')}
        >
          Secure Your Admission Now
        </button>
      </div>
      
      {/* Optional Loading Spinner */}
      <div className="mt-4 text-center">
        <ThreeDots 
          height="40" 
          width="40" 
          radius="9" 
          color="#007bff" 
          ariaLabel="three-dots-loading" 
          visible={false} 
        />
      </div>

    </div>
  );
}

export default SchengenTourist;



