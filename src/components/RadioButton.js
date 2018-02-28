import React from 'react';
import PropTypes from 'prop-types';
import '../styles/RadioButton.css';

const RadioButton = ({
  name, id, checkedValue, onChange, children,
}) => (
  <div className="RadioButton">
    <label htmlFor={id}>
      <input
        type="radio"
        id={id}
        name={name}
        value={id}
        checked={checkedValue === id}
        onChange={() => onChange(id)}
      />
      <span>{children}</span>
    </label>
  </div>
);

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  checkedValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RadioButton;
