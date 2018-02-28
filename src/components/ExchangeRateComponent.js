import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import ExchangeRateChart from './ExchangeRateChart';

const ExchangeRateComponent = ({
  ...rest,
  data: { exchangeRates, loading },
}) => (
  <div>
    {loading ?
      <span>Loading...</span>
      : <ExchangeRateChart exchangeRates={exchangeRates} {...rest} />}
  </div>
);

const QUERY = gql`
  query exchangeRatesQuery(
    $period: Period!
    $currency: String!
    $referenceCurrency: String!
    $amount: Float) {
      exchangeRates(
        period: $period,
        currency: $currency,
        referenceCurrency: $referenceCurrency,
        amount: $amount
      ) {
        date
        currency
        referenceCurrency
        exchangeRate
        totalAmountExchangeRate
      }
    }
`;

ExchangeRateComponent.propTypes = {
  data: PropTypes.shape({
    exchangeRates: PropTypes.arrayOf(PropTypes.shape({
      date: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      referenceCurrency: PropTypes.string.isRequired,
      exchangeRate: PropTypes.number.isRequired,
      totalAmountExchangeRate: PropTypes.number.isRequired,
    })),
  }).isRequired,
};

export default graphql(QUERY, {
  options: ({
    currency,
    referenceCurrency,
    salary,
    period,
  }) =>
    ({
      variables: {
        currency,
        referenceCurrency,
        period,
        amount: salary || 1,
      },
    }),
})(ExchangeRateComponent);

