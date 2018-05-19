import React from 'react';
import PropTypes from 'prop-types';
import { getPolarityClass } from '../utils/ExchangeRateUtils';
import Card from './Card';

const isReady = (loading, data) => !loading && data;
const getDate = buyingPower => (buyingPower.difference || {}).sinceDate;
const getLatestDate = buyingPower => (buyingPower.difference || {}).latestDate;
const getCurrentBuyingPower = buyingPower => (buyingPower.difference || {}).currentBuyingPower;
const getOriginalBuyingPower = buyingPower => (buyingPower.difference || {}).originalBuyingPower;
const getPositiveOrNegativeClass = (buyingPower) => {
  const currentBuyingPower = getCurrentBuyingPower(buyingPower);
  const originalBuyingPower = getOriginalBuyingPower(buyingPower);

  return getPolarityClass(currentBuyingPower, originalBuyingPower);
};

const BuyingPower = ({
  data: { error, buyingPower, loading }, salary, currencyFrom, currencyTo,
}) => (
  <Card
    title="Buying Power"
    loading={loading}
    error={error}
  >
    {isReady(loading, buyingPower) ? (
      <div className="content center">
        <span className="top">
          {salary} {currencyFrom} in {currencyTo}:
        </span>

        <span className={`main ${getPositiveOrNegativeClass(buyingPower)}`}>
          {getCurrentBuyingPower(buyingPower)}
        </span>

        <span className="sub">
          {`Buying power on ${getDate(buyingPower)}: ${getOriginalBuyingPower(buyingPower)} ${currencyTo}`}
        </span>
        <p className="updated">
          Updated: {getLatestDate(buyingPower)}
        </p>
      </div>) : <div />}
  </Card>
);

export default BuyingPower;

BuyingPower.propTypes = {
  data: PropTypes.shape({
    buyingPower: PropTypes.shape({
      difference: PropTypes.shape({
        currentBuyingPower: PropTypes.number,
        sinceDate: PropTypes.string,
      }),
    }),
    loading: PropTypes.bool,
  }),
  salary: PropTypes.number.isRequired,
  currencyFrom: PropTypes.string.isRequired,
  currencyTo: PropTypes.string.isRequired,
};

BuyingPower.defaultProps = {
  data: {
    buyingPower: {},
  },
};

