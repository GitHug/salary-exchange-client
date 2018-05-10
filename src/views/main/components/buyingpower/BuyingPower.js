import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../../../components/Card';

const BuyingPower = ({
  data: { buyingPower, loading }, salary, currencyFrom, currencyTo,
}) => (
  <Card
    className="BuyingPowerPercentage"
    title="Buying power"
    loading={loading}
  >
    <div>
      {!loading && buyingPower && (
      <div>
        <p>
          {salary} {currencyFrom} in {currencyTo}
        </p>
        <strong>
          {(buyingPower.difference || {}).currentBuyingPower}
        </strong>
        <span>
          Original buying power {(buyingPower.difference || {}).originalBuyingPower}
          Since {(buyingPower.difference || {}).sinceDate}
        </span>
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

