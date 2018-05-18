import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const LatestRate = ({ data: { error, latestExchangeRate, loading } }) => (
  <Card
    className="center"
    title="Latest rate"
    loading={loading}
    error={error}
  >
    <span className="main">
      {!loading && latestExchangeRate && (
        `1 ${latestExchangeRate.currencyFrom} = ${latestExchangeRate.exchangeRate.toFixed(2)} ${latestExchangeRate.currencyTo}`
      )}
    </span>
  </Card>
);

export default LatestRate;

LatestRate.propTypes = {
  data: PropTypes.shape({
    ratePercentage: PropTypes.string,
  }),
};

LatestRate.defaultProps = {
  data: PropTypes.shape({
    ratePercentage: 'abooo',
  }),
};

