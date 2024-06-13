import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginForm = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const onRegisterClick = () => {
    history.push('/Registration');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('https://phylee-75a6aa507dc5.herokuapp.com/api/auth/login', loginData);
      if (response.status === 201) {
        history.push('/dashboard');
      } else {
        setError('Login failed');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Error during login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row shadow w-100" style={{ maxWidth: '800px' }}>
        <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center p-4 bg-light">
          <h3 className="text-center">Welcome to Phylee Journey</h3>
          <p className="text-center">Explore our amazing services and take your journey to the next level with Phylee Journey.</p>
          <ul>
            <li>Service 1: Detailed descriptions of service 1.</li>
            <li>Service 2: Detailed descriptions of service 2.</li>
            <li>Service 3: Detailed descriptions of service 3.</li>
          </ul>
        </div>
        <div className="col-lg-6 col-md-12 p-4" style={{ background: "#960606" }}>
          <h2 className="text-center mb-4 text-white">Sign in</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-white">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={loginData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label text-white">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={loginData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            {error && <p className="text-danger">{error}</p>}
            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
              {loading ? (
                <div className='d-flex justify-content-center align-items-center'>
                <ThreeDots color="#ffffff"  height={20} width={20}  />
                </div>
              ) : (
                'Login'
              )}
            </button>
          </form>
          <p className="text-center mt-3 text-white">
            Don't have an account?{' '}
            <button className="btn btn-link p-0" onClick={onRegisterClick}>
              Register
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
