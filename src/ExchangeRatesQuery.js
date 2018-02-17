import { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

const QUERY = gql`
  query exchangeRatesQuery(
    $sinceDate: String
    $currency: String!
    $referenceCurrency: String!
    $amount: Float) {
      exchangeRates(
        sinceDate: $sinceDate,
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

class ExchangeRatesQuery extends Component {
  render() {
    return this.props.children(this.props.data);
  }
}

export default graphql(QUERY, {
  options: ({
    sinceDate, currency, referenceCurrency, amount,
  }) =>
    ({
      variables: {
        sinceDate, currency, referenceCurrency, amount,
      },
    }),
})(ExchangeRatesQuery);

ExchangeRatesQuery.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.shape(),
};

ExchangeRatesQuery.defaultProps = {
  data: {},
};
