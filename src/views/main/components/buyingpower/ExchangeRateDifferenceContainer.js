import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import ExchangeRateDifference from './ExchangeRateDifference';

const QUERY = gql`
  query buyingPowerQuery(
    $period: Period,
    $date: String,
    $currencyFrom: String!
    $currencyTo: String!
    $amount: Float) {
      buyingPower(
        period: $period,
        date: $date,
        currencyFrom: $currencyFrom,
        currencyTo: $currencyTo,
        amount: $amount
      ) {
        difference {
          ratePercentage,
          sinceDate
        }
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
        amount: salary,
      },
    }),
})(ExchangeRateDifference));
