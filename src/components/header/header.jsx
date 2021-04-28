import React from 'react';
import './header.css';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const { isAuthenticated, user } = useAuth0();
  return (
    isAuthenticated
      && (
      <header className="header-container">
        <nav>
          <img src={`${process.env.PUBLIC_URL}/img/atriviate-logo.png`} alt="atriviate-logo" />
          <Link to="/profile" className="button-profile"><img src={`${user.picture}`} alt="user-icon" className="imgCircle" /></Link>

        </nav>
      </header>
      )

  );
}
