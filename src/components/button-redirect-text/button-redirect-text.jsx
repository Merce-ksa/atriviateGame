import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import './button-redirect-text.css';

export default function ButtonRedirectText({ url, value }) {
  if (!url || !value) {
    return (
      <>
      </>
    );
  }
  return (
    <Link to={url} className="button-redirect-text">
      {value}
    </Link>
  );
}

ButtonRedirectText.propTypes = {
  url: propTypes.string.isRequired,
  value: propTypes.string.isRequired
};
