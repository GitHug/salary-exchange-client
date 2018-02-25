import { connect } from 'react-redux';
import ExchangeRateComponent from './ExchangeRateComponent';


const mapStateToProps = ({ exchange: { currency, referenceCurrency, salary } }) => ({
  currency,
  referenceCurrency,
  salary,
});

export default connect(mapStateToProps)(ExchangeRateComponent);
