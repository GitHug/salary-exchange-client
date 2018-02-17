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

const ExchangeRatesQuery = ({ children, data }) => children(data);

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
  data: PropTypes.shape().isRequired,
  sinceDate: PropTypes.string,
  currency: PropTypes.string.isRequired,
  referenceCurrency: PropTypes.string.isRequired,
  amount: PropTypes.string,
};
