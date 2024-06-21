import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import { AuthContext } from './AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginForm = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { login, user } = useContext(AuthContext);
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
      const redirectPath = await login(loginData);

      // Redirect based on the returned path from login
      history.push(redirectPath);

    } catch (error) {
      setError(error.message);
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
        </div>
        <div className="col-lg-6 col-md-12 p-4" style={{ background: "#960606" }}>
          {error && <p className="text-danger bg-white">{error}</p>}
          <p className="text-center mt-3 text-white">
            Don't have an account?{' '}
            <button className="btn btn-light" onClick={onRegisterClick}>
              Register
            </button>
          </p>
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
            <button type="submit" className="custom-btn2 w-100" disabled={loading}>
              {loading ? (
                <div className='d-flex justify-content-center align-items-center'>
                  <ThreeDots color="#ffffff" height={20} width={20} />
                </div>
              ) : (
                'Login'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
