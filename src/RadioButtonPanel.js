import React from 'react';
import PropTypes from 'prop-types';
import RadioButton from './RadioButton';
import './RadioButtonPanel.css';


const name = 'period';
const RadioButtonPanel = ({ period, changePeriod }) => (
  <div className="RadioButtonPanel">
    <RadioButton name={name} id="1month" checkedValue={period} onChange={changePeriod} >
        1m
    </RadioButton>
    <RadioButton name={name} id="3months" checkedValue={period} onChange={changePeriod}>
        3m
    </RadioButton>
    <RadioButton name={name} id="6months" checkedValue={period} onChange={changePeriod}>
        6m
    </RadioButton>
    <RadioButton name={name} id="1year" checkedValue={period} onChange={changePeriod}>
        1y
    </RadioButton>
    <RadioButton name={name} id="3years" checkedValue={period} onChange={changePeriod}>
        3y
    </RadioButton>
    <RadioButton name={name} id="all" checkedValue={period} onChange={changePeriod}>
        All
    </RadioButton>
  </div>
);

RadioButtonPanel.propTypes = {
  period: PropTypes.string.isRequired,
  changePeriod: PropTypes.func.isRequired,
};

export default RadioButtonPanel;
