import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterFormik } from '../components/RegisterFormik';

export const Register = () => {
  const [credentials, setCredentials] = useState(null);
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
    <div>
      <RegisterFormik onSubmit={(e) => setCredentials(e)} />

    </div>
  );
};
