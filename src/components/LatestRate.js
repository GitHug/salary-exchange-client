import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const isReady = (loading, data) => !loading && data;
const formatTimeZone = timezone => timezone;

const LatestRate = ({ data: { error, latestExchangeRate, loading } }) => (
  <Card
    title="Latest rate"
    loading={loading}
    error={error}
  >
    {isReady(loading, latestExchangeRate) ? (
      <div className="content center">
        <span className="top" />

        <span className="main">
          {`1 ${latestExchangeRate.currencyFrom} = ${latestExchangeRate.exchangeRate.toFixed(2)} ${latestExchangeRate.currencyTo}`}
        </span>

        <span className="sub" />
        <p className="updated">
          {`Updated: ${latestExchangeRate.time} (GMT${formatTimeZone(latestExchangeRate.timezone)})`}
        </p>
      </div>
    ) : <div />}
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

