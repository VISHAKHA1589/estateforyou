import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../../redux/features/auth/authSlice';
import { useLoginMutation } from '../../redux/api/UsersApiSlice';
import { toast } from 'react-toastify';
import Navigation from './Navigation';
import Footer from '../User/Footer';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();
  const { userInfo } = useSelector(state => state.auth);
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get('redirect') || '/';

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    // Basic email validation
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address');
      return;
    }

    // Basic password validation
    if (!password || password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      return;
    }

    try {
      const response = await login({ email, password }).unwrap();
      dispatch(setCredentials(response));
      navigate('/');
      toast.success('Logged in successfully');
    } catch (error) {
      console.error(error);
      if (error.data && error.data.message === 'Invalid password') {
        setPasswordError('Incorrect password. Please try again.');
      } else if (error.data && error.data.message === 'Password mismatch') {
        setPasswordError('The password entered is incorrect.');
      } else {
        setError(error.data.message || 'An error occurred');
      }
    }
  };

  return (
    <div>
      <Navigation />
      <div className="bg-gray-100 min-h-screen flex justify-center items-center">
        <div className="max-w-md w-full lg:p-8 md:p-6 sm:p-4 bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl font-semibold mb-4 text-center">Login</h1>
          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
          {passwordError && <p className="text-red-500 mb-4 text-center">{passwordError}</p>}
          <form onSubmit={submitHandler}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autoComplete="on"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autoComplete="current-password" // Change to "current-password" for password managers
              />
            </div>
            <button
              disabled={isLoading}
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full cursor-pointer text-center"
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>
          <div className="mt-6 text-blue-500 text-center">
            <Link to={redirect ? `/register?redirect=${redirect}` : `/register`} className="hover:underline">Don't have an account? Sign up Here</Link>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Login;
