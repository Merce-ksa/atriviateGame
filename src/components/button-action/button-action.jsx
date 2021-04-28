import React from 'react';
import propTypes from 'prop-types';
import './button-action.css';

export default function ButtonAction({ action, fileName, altDescription }) {
  if (!action || !fileName || !altDescription) {
    return (
      <>
      </>
    );
  }
  return (
    <button type="button" className="button-action" onClick={action}>
      <img src={`${process.env.PUBLIC_URL}/img/${fileName}`} alt={altDescription} />
    </button>
  );
}

ButtonAction.propTypes = {
  action: propTypes.func.isRequired,
  fileName: propTypes.string.isRequired,
  altDescription: propTypes.string.isRequired
};
