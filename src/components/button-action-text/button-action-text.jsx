import React from 'react';
import propTypes from 'prop-types';
import './button-action-text.css';

export default function ButtonActionText({ action, value }) {
  if (!action || !value) {
    return (
      <>
      </>
    );
  }
  return (
    <button type="button" className="button-action-text" onClick={action}>
      {value}
    </button>
  );
}

ButtonActionText.propTypes = {
  action: propTypes.func.isRequired,
  value: propTypes.string.isRequired
};
