import React from 'react';
import PropTypes from 'prop-types';
import ExchangeRatesQuery from './ExchangeRatesQuery';
import ExchangeRateChart from './ExchangeRateChart';

const ExchangeRateComponent = ({
  currency, referenceCurrency, salary, sinceDate,
}) => (
  <ExchangeRatesQuery
    sinceDate={sinceDate}
    currency={currency}
    referenceCurrency={referenceCurrency}
    amount={salary}
  >
    {({ exchangeRates }) => <ExchangeRateChart exchangeRates={exchangeRates} />}
  </ExchangeRatesQuery>
);

ExchangeRateComponent.propTypes = {
  currency: PropTypes.string,
  referenceCurrency: PropTypes.string,
  salary: PropTypes.string,
  sinceDate: PropTypes.string,
};

ExchangeRateComponent.defaultProps = {
  currency: 'USD',
  referenceCurrency: 'GBP',
  salary: '50000',
  sinceDate: '2018-01-01',
};

export default ExchangeRateComponent;
