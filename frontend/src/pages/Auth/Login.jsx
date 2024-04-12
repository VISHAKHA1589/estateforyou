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

    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address');
      return;
    }

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
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navigation />
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-md w-full p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-3xl font-semibold mb-4 text-center text-gray-800">Welcome back!</h1>
          <form onSubmit={submitHandler}>
            <div className="mb-6">
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
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
            <div className="mb-6">
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
              {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
            </div>
            <button
              disabled={isLoading}
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full cursor-pointer"
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-600">Don't have an account? <Link to={redirect ? `/register?redirect=${redirect}` : `/register`} className="text-blue-500 hover:underline">Sign up here</Link></p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
