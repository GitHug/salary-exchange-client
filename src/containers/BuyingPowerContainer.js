import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import BuyingPower from '../components/BuyingPower';

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
          currentBuyingPower,
          originalBuyingPower,
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
})(BuyingPower));
