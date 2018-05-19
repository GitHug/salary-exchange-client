import React from 'react';
import PropTypes from 'prop-types';
import { getPolarityClass, isReady } from '../utils/ExchangeRateUtils';
import Card from './Card';

const getRatePercentage = buyingPower => ((buyingPower || {}).difference || {}).ratePercentage;
const getSinceDate = buyingPower => ((buyingPower || {}).difference || {}).sinceDate;
const getLatestDate = buyingPower => ((buyingPower || {}).difference || {}).latestDate;
const getPositiveOrNegativeClass = buyingPower =>
  getPolarityClass(getRatePercentage(buyingPower), 0);
const getPolarityWord = (buyingPower) => {
  const polarityClass = getPositiveOrNegativeClass(buyingPower);

  return {
    hasPolarity: polarityClass !== '',
    polarity: polarityClass === 'positive' ? 'increased' : 'decreased',
  };
};

const ExchangeRateDifference = ({ data: { error, buyingPower, loading } }) => (
  <Card
    title="Difference"
    loading={loading}
    error={error}
  >
    {isReady(loading, buyingPower) ? (
      <div className="content center">
        <span className="top">
          {getPolarityWord(buyingPower).hasPolarity && (
            `Exchange rate has ${getPolarityWord(buyingPower).polarity}`
          )}
        </span>

        <span className={`main ${getPositiveOrNegativeClass(buyingPower)}`}>
          {getRatePercentage(buyingPower)}%
        </span>

        <span className="sub">
            Since {getSinceDate(buyingPower)}
        </span>
        <p className="updated">
          Updated: {getLatestDate(buyingPower)}
        </p>
      </div>
  ) : <div />
  }
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

