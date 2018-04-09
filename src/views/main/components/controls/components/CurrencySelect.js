import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import '../styles/CurrencySelect.css';

const currencies = [
  { flag: '🇪🇺', code: 'EUR' },
  { flag: '🇺🇸', code: 'USD' },
  { flag: '🇯🇵', code: 'JPY' },
  { flag: '🇧🇬', code: 'BGN' },
  { flag: '🇪🇨', code: 'CZK' },
  { flag: '🇩🇰', code: 'DKK' },
  { flag: '🇬🇧', code: 'GBP' },
  { flag: '🇭🇺', code: 'HUF' },
  { flag: '🇵🇱', code: 'PLN' },
  { flag: '🇷🇴', code: 'RON' },
  { flag: '🇸🇪', code: 'SEK' },
  { flag: '🇨🇭', code: 'CHF' },
  { flag: '🇮🇸', code: 'ISK' },
  { flag: '🇳🇴', code: 'NOK' },
  { flag: '🇭🇷', code: 'HRK' },
  { flag: '🇷🇺', code: 'RUB' },
  { flag: '🇹🇷', code: 'TRY' },
  { flag: '🇦🇺', code: 'AUD' },
  { flag: '🇧🇷', code: 'BRL' },
  { flag: '🇨🇦', code: 'CAD' },
  { flag: '🇨🇳', code: 'CNY' },
  { flag: '🇭🇰', code: 'HKD' },
  { flag: '🇮🇩', code: 'IDR' },
  { flag: '🇮🇱', code: 'ILS' },
  { flag: '🇮🇳', code: 'INR' },
  { flag: '🇰🇷', code: 'KRW' },
  { flag: '🇲🇽', code: 'MXN' },
  { flag: '🇲🇾', code: 'MYR' },
  { flag: '🇳🇿', code: 'NZD' },
  { flag: '🇵🇭', code: 'PHP' },
  { flag: '🇸🇬', code: 'SGD' },
  { flag: '🇹🇭', code: 'THB' },
  { flag: '🇿🇦', code: 'ZAR' },
];

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
