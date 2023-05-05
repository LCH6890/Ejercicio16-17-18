import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginFormik } from '../components/LoginFormik';

export const Login = () => {
  const [credentials, setCreadentials] = useState(null);
  const navigate = useNavigate();
  const user = localStorage.getItem('user') || null;

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  });
  useEffect(() => {
    if (credentials) {
      const c = JSON.stringify(credentials);
      localStorage.setItem('user', c);
      navigate('/dashboard');
    }
  });

  return (
    <>
      <LoginFormik onSubmit={(e) => setCreadentials(e)} />
      <button onClick={() => navigate('/register')}>Register</button>
    </>
  );
};
