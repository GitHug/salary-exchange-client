import React from 'react';
import PropTypes from 'prop-types';
import '../styles/RadioButtonPanel.css';
import periods from '../resources/periods.json';

const RadioButton = ({
  name, id, checkedValue, onChange, children,
}) => (
  <label htmlFor={id} className="RadioButton">
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
);

const name = 'period';
const RadioButtonPanel = ({ period, changePeriod }) => (
  <div className="RadioButtonPanel">
    {periods.map(p => (
      <RadioButton
        key={p.period}
        name={name}
        id={p.period}
        checkedValue={period}
        onChange={changePeriod}
      >
        {p.text}
      </RadioButton>
      ))}
  </div>
);

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  checkedValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

RadioButton.defaultProps = {
  children: '',
};

RadioButtonPanel.propTypes = {
  period: PropTypes.string.isRequired,
  changePeriod: PropTypes.func.isRequired,
};

export default RadioButtonPanel;
