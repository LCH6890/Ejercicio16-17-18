import React from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFoundPage = () => {

  const navigate = useNavigate();

  return (
    <div>
        <h1>404 Page not found</h1>
        <div>
          <button onClick={() => navigate('/')}>Go Home</button>
        </div>
    </div>
  )
}
