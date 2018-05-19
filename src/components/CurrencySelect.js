import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import '../styles/CurrencySelect.css';
import currencies from '../resources/currencies.json';

const CurrencySelect = ({
  id, onChange, value, placeholder, disableValue,
}) => (
  <Select
    id={id}
    name={id}
    value={value}
    onChange={val => onChange(val && val.value)}
    className="CurrencySelect"
    placeholder={placeholder}
    clearable={false}
    searchable={false}
    options={currencies
      .filter(currency => currency.code !== disableValue)
      .map(currency =>
        ({ value: currency.code, label: currency.flag + currency.code }))}
  />
);


CurrencySelect.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  disableValue: PropTypes.string,
};

CurrencySelect.defaultProps = {
  placeholder: 'Select currency',
  value: undefined,
  disableValue: undefined,
};

export default CurrencySelect;
