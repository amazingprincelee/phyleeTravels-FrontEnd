import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaCalendarCheck, FaTags } from 'react-icons/fa';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminHomeDashboard = () => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await axios.get(`https://phylee-75a6aa507dc5.herokuapp.com/api/user/profile/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };

        fetchUserProfile();
    }, [token, userId]);

    return (
        <div className="container my-4">
            <h1>Welcome to Admin Area</h1>
            <div className="row">
                <div className="col-md-4">
                    <div className="card text-center">
                        <div className="card-body">
                            <FaUser className="icon mb-2 text-danger" />
                            <h2 className="card-title">Users</h2>
                            <p className="card-text">98</p>
                            <Link className="btn btn-danger" to="/dashboard/profile">
                                View Users
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card text-center">
                        <div className="card-body">
                            <FaCalendarCheck className="icon mb-2 text-danger" />
                            <h2 className="card-title">Application</h2>
                            <p className="card-text">100 Applied</p>
                            <Link to="/dashboard/saved-items" className="btn btn-danger">
                                View Application
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card text-center">
                        <div className="card-body">
                            <FaTags className="icon mb-2 text-danger" />
                            <h2 className="card-title">Offers</h2>
                            <p className="card-text">50 offers Given</p>
                            <Link to="/dashboard/offers" className="btn btn-danger">
                                View All Offers
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHomeDashboard;
