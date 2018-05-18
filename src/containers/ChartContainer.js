import { connect } from 'react-redux';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Chart from '../components/Chart';

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

const mapStateToProps = ({
  exchange: {
    currencyFrom,
    currencyTo,
    salary,
    period,
  },
}) => ({
  currencyFrom,
  currencyTo,
  salary,
  period,
});

export default connect(mapStateToProps)(graphql(QUERY, {
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
})(Chart));
