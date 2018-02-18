import React from 'react';
import PropTypes from 'prop-types';

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

const CurrencySelect = ({ placeholder, onChange, id }) => (
  <select id={id} onChange={onChange} defaultValue={0} >
    <option value="0" disabled hidden>{ placeholder }</option>
    { currencies.map(currency =>
      <option value={currency.code}>{ currency.flag } { currency.code }</option>)
    }
  </select>
);

CurrencySelect.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

CurrencySelect.defaultProps = {
  placeholder: 'Select currency',
};

export default CurrencySelect;
