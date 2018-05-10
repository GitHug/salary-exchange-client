import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../../../components/Card';

const LatestRate = ({ data: { latestExchangeRate, loading } }) => (
  <Card
    className="LatestRate"
    title="Latest rate"
    loading={loading}
  >
    <span>
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

