import { connect } from 'react-redux';
import ExchangeRateComponent from '../components/ExchangeRateComponent';


const mapStateToProps = ({
  exchange: {
    currency,
    referenceCurrency,
    salary,
    period,
  },
}) => ({
  currency,
  referenceCurrency,
  salary,
  period,
});

export default connect(mapStateToProps)(ExchangeRateComponent);
