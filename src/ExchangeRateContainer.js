import { connect } from 'react-redux';
import ExchangeRateComponent from './ExchangeRateComponent';


const mapStateToProps = ({
  exchange: {
    fetchData: {
      currency,
      referenceCurrency,
      salary,
      period,
    },
  },
}) => ({
  currency,
  referenceCurrency,
  salary,
  period,
});

export default connect(mapStateToProps)(ExchangeRateComponent);
