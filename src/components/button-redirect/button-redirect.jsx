import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import './button-redirect.css';

export default function ButtonRedirect({ url, fileName, altDescription }) {
  if (!url || !fileName || !altDescription) {
    return (
      <>
      </>
    );
  }
  return (
    <Link to={url} className="button-redirect">
      <img src={`${process.env.PUBLIC_URL}/img/${fileName}`} alt={altDescription} />
    </Link>
  );
}

ButtonRedirect.propTypes = {
  url: propTypes.string.isRequired,
  fileName: propTypes.string.isRequired,
  altDescription: propTypes.string.isRequired
};
