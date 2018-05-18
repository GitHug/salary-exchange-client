import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const getRatePercentage = buyingPower => ((buyingPower || {}).difference || {}).ratePercentage;
const isPositive = buyingPower => getRatePercentage(buyingPower) >= 0;

const ExchangeRateDifference = ({ data: { error, buyingPower, loading } }) => (
  <Card
    title="Difference"
    loading={loading}
    error={error}
  >
    <p className={`main ${isPositive(buyingPower) ? 'positive' : 'negative'}`}>
      {getRatePercentage(buyingPower)}%
    </p>
  </Card>
);

export default ExchangeRateDifference;

ExchangeRateDifference.propTypes = {
  data: PropTypes.shape({
    ratePercentage: PropTypes.string,
  }),
};

ExchangeRateDifference.defaultProps = {
  data: PropTypes.shape({
    ratePercentage: 'abooo',
  }),
};

