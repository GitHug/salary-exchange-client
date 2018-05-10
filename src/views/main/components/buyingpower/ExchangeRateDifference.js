import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../../../components/Card';

const getRatePercentage = buyingPower => ((buyingPower || {}).difference || {}).ratePercentage;
const isPositive = buyingPower => getRatePercentage(buyingPower) >= 0;

const ExchangeRateDifference = ({ data: { buyingPower, loading } }) => (
  <Card
    className="BuyingPowerPercentage"
    title="Difference"
    loading={loading}
  >
    <span className={isPositive(buyingPower) ? 'positive' : 'negative'}>
      {getRatePercentage(buyingPower)}%
    </span>
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

