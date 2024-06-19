import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';

function Undergraduate() {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchEmail = async () => {
            try {
                const response = await axios.get(`https://phylee-75a6aa507dc5.herokuapp.com/api/user/profile/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.status === 200 && response.data.userProfile && response.data.userProfile.email) {
                    setEmail(response.data.userProfile.email);
                } else {
                    console.error('Email not found in response.');
                }
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };

        if (userId) {
            fetchEmail();
        } else {
            console.error('User ID is not available.');
        }
    }, [userId, token]);

    const handleFileChange = (event) => {
        setSelectedFiles(event.target.files);
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (!email) {
          console.error('User email is not available.');
          return;
      }
  
      setLoading(true);
  
      const formData = new FormData();
      for (let i = 0; i < selectedFiles.length; i++) {
          formData.append('files', selectedFiles[i]);
      }
  
      try {
          const url = `https://phylee-75a6aa507dc5.herokuapp.com/api/services/undergraduate/upload-files/${encodeURIComponent(email)}`;
          console.log(`Submitting to URL: ${url}`);
          const response = await axios.post(url, formData, {
              headers: {
                  'Content-Type': 'multipart/form-data',
              },
          });
          
          setMessage(response.data.message);
      } catch (error) {
          console.error('Error uploading files:', error);
          setMessage('Error uploading files');
      } finally {
          setLoading(false);
      }
  };
  
  

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Undergraduate Studies</h1>
            {message && <p className={`mt-3 text-center ${message === 'Error uploading files' ? 'text-danger' : 'text-success'}`}>{message}</p>}
            <p>Please upload the following documents:</p>

            <form onSubmit={handleSubmit}>
                <div className="mb-3 row">
                    <label htmlFor="proofofpayment" className="col-sm-4 col-form-label text-danger">Proof Of Payment:</label>
                    <div className="col-sm-8">
                        <input type="file" className="form-control bg-info" required id="proofofpayment" name="proofofpayment" onChange={handleFileChange} multiple />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="waecNeco" className="col-sm-4 col-form-label">WAEC/NECO:</label>
                    <div className="col-sm-8">
                        <input type="file" className="form-control" id="waecNeco" name="waecNeco" onChange={handleFileChange} multiple />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="curriculumVitae" className="col-sm-4 col-form-label">Curriculum Vitae:</label>
                    <div className="col-sm-8">
                        <input type="file" className="form-control" id="curriculumVitae" name="curriculumVitae" onChange={handleFileChange} multiple />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="birthDocument" className="col-sm-4 col-form-label">Birth Certificate/Affidavit:</label>
                    <div className="col-sm-8">
                        <input type="file" className="form-control" id="birthDocument" name="birthDocument" onChange={handleFileChange} multiple />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="passportDataPage" className="col-sm-4 col-form-label">International Passport:</label>
                    <div className="col-sm-8">
                        <input type="file" className="form-control" id="passportDataPage" name="passportDataPage" onChange={handleFileChange} multiple />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="recommendationLetters" className="col-sm-4 col-form-label">Recommendation Letters:</label>
                    <div className="col-sm-8">
                        <input type="file" className="form-control" id="recommendationLetters" name="recommendationLetters" onChange={handleFileChange} multiple />
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-8">
                        <button type="submit" className="custom-btn w-100 text-light" disabled={loading}>
                            {loading ? (
                                <div className="d-flex justify-content-center align-items-center">
                                    <ThreeDots color="#ffffff" height={20} width={20} />
                                </div>
                            ) : (
                                'Upload'
                            )}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Undergraduate;
