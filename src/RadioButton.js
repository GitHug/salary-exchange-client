import React from 'react';
import PropTypes from 'prop-types';
import './RadioButton.css';

const RadioButton = ({
  name, id, value, children,
}) => (
  <div className="RadioButton">
    <label htmlFor={id}>
      <input type="radio" id={id} name={name} value={value} />
      <span>{children}</span>
    </label>
  </div>
);

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default RadioButton;
