import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import LatestRate from '../components/LatestRate';

const QUERY = gql`
  query latestExchangeRateQuery(
    $currencyFrom: String!
    $currencyTo: String!) {
      latestExchangeRate(
        currencyFrom: $currencyFrom,
        currencyTo: $currencyTo,
      ) {
        date,
        time,
        timezone,
        currencyFrom,
        currencyTo,
        exchangeRate
        }
    }
`;

const mapStateToProps = ({
  exchange: {
    currencyFrom,
    currencyTo,
  },
}) => ({
  currencyFrom,
  currencyTo,
});

export default connect(mapStateToProps)(graphql(QUERY, {
  options: ({
    currencyFrom,
    currencyTo,
  }) =>
    ({
      variables: {
        currencyFrom,
        currencyTo,
      },
    }),
})(LatestRate));
