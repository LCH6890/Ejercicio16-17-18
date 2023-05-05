import React from 'react';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {

  const navigate = useNavigate();

  return (
    <div>
        <h1>Home Page</h1>
        <div>
            <button onClick={() => navigate('/profile')}>Go To Profile</button>
        </div>
    </div>
  )
}
