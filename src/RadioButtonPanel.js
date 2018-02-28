import React from 'react';
import PropTypes from 'prop-types';
import RadioButton from './RadioButton';
import './RadioButtonPanel.css';


const name = 'period';
const RadioButtonPanel = ({ period, changePeriod }) => (
  <div className="RadioButtonPanel">
    <RadioButton name={name} id="ONE_MONTH" checkedValue={period} onChange={changePeriod} >
        1m
    </RadioButton>
    <RadioButton name={name} id="THREE_MONTHS" checkedValue={period} onChange={changePeriod}>
        3m
    </RadioButton>
    <RadioButton name={name} id="SIX_MONTHS" checkedValue={period} onChange={changePeriod}>
        6m
    </RadioButton>
    <RadioButton name={name} id="ONE_YEAR" checkedValue={period} onChange={changePeriod}>
        1y
    </RadioButton>
    <RadioButton name={name} id="THREE_YEARS" checkedValue={period} onChange={changePeriod}>
        3y
    </RadioButton>
    <RadioButton name={name} id="ALL" checkedValue={period} onChange={changePeriod}>
        All
    </RadioButton>
  </div>
);

RadioButtonPanel.propTypes = {
  period: PropTypes.string.isRequired,
  changePeriod: PropTypes.func.isRequired,
};

export default RadioButtonPanel;
