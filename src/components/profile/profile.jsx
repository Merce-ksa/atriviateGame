/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './profile.css';
import { Link } from 'react-router-dom';

export default function Profile() {
  const {
    user, isAuthenticated, isLoading, logout
  } = useAuth0();

  if (isLoading) {
    return <p>Loading ......</p>;
  }

  return (
    isAuthenticated && (
    <main className="profile">
      <div className="card">
        <img src={user.picture} alt={user.name} className="user-picture" />
        <h2>{user.name}</h2>
        <h4>{user.email}</h4>

        <button
          value="logout"
          type="button"
          className="button-logout"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          <img src={`${process.env.PUBLIC_URL}/img/back-icon.png`} alt="back-icon" />
        </button>

        <Link to="/boardlist" altDescription="back-boardlist" className="back-boardlist">
          Back to Boardlist
        </Link>

      </div>
    </main>
    )
  );
}
