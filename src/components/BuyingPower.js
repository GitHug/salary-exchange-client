import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const BuyingPower = ({
  data: { error, buyingPower, loading }, salary, currencyFrom, currencyTo,
}) => (
  <Card
    title="Buying power"
    loading={loading}
    error={error}
  >
    <div>
      {!loading && buyingPower && (
      <div>
        <div className="flex-center">
          <p>{salary} {currencyFrom} in {currencyTo} is</p>
          <p>{(buyingPower.difference || {}).currentBuyingPower}</p>
        </div>

        <div className="flex-center-bottom">
          <div className="flex-item-center">
            <p>Original buying power {(buyingPower.difference || {}).originalBuyingPower}</p>
            <p>Since {(buyingPower.difference || {}).sinceDate}</p>
          </div>
        </div>
      </div>
    )}
    </div>
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

