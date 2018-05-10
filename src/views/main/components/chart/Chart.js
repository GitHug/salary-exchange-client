import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import HighChartsWrapper from './components/HighChartsWrapper';
import './styles/Chart.css';
import Card from '../../../../components/Card';

const Chart = ({
  ...rest,
  data: { exchangeRates, loading },
}) => (
  <Card className="Chart" cardClass="chart-card" loading={loading}>
    <div>
      {!loading &&
      <HighChartsWrapper exchangeRates={exchangeRates} {...rest} />}
    </div>
  </Card>
);

const QUERY = gql`
  query exchangeRatesQuery(
    $period: Period!
    $currencyFrom: String!
    $currencyTo: String!
    $amount: Float) {
      exchangeRates(
        period: $period,
        currencyFrom: $currencyFrom,
        currencyTo: $currencyTo,
        amount: $amount
      ) {
        date
        currencyFrom
        currencyTo
        exchangeRate
        totalAmountExchangeRate
      }
    }
`;

Chart.propTypes = {
  data: PropTypes.shape({
    exchangeRates: PropTypes.arrayOf(PropTypes.shape({
      date: PropTypes.string.isRequired,
      currencyFrom: PropTypes.string.isRequired,
      currencyTo: PropTypes.string.isRequired,
      exchangeRate: PropTypes.number.isRequired,
      totalAmountExchangeRate: PropTypes.number.isRequired,
    })),
  }).isRequired,
};

export default graphql(QUERY, {
  options: ({
    currencyFrom,
    currencyTo,
    salary,
    period,
  }) =>
    ({
      variables: {
        currencyFrom,
        currencyTo,
        period,
        amount: salary || 1,
      },
    }),
})(Chart);

