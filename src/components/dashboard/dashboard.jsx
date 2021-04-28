import React from 'react';
import './dashboard.css';
import { useAuth0 } from '@auth0/auth0-react';

export default function Dashboard() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <div className="dashboard">

      <div className="logo-container">
        <img src={`${process.env.PUBLIC_URL}/img/atriviate-brand.png`} alt="atriviate-brand" />
      </div>

      <p>
        Train your brain and have fun with our history, geography, art, music,
        science and nature and sports questions. Customize your boards to get to the top!

      </p>
      <div className="detail-buttons">
        {!isAuthenticated && (
          <button type="button" className="button-action" onClick={() => loginWithRedirect()}>Login</button>
        )}
      </div>

      <div className="mesenterio-studio">
        <span className="brand-name">Mesenterio Studio</span>
      </div>
      <div className="background-dashboard">
        <img src={`${process.env.PUBLIC_URL}/img/atriviate-background.jpg`} alt="background" />
      </div>

    </div>
  );
}
