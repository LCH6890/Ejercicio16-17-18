import React from 'react';
import { useNavigate } from 'react-router-dom';

export const AboutPage = () => {

    const navigate = useNavigate();

  return (
    <div>
        <h1>About | FaQs Page</h1>
        <div>
            <button onClick={() => navigate('-1')}>Go Back</button>
            <button onClick={() => navigate(1)}>Go Forward</button>
        </div>
    </div>
  )
}
