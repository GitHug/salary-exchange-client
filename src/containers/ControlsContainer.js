import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  changeCurrencyFrom,
  changeCurrencyTo,
  addSalary,
  swapCurrency,
} from '../actions/exchangeActions';

import SalaryForm from '../components/Controls';

const mapStateToProps = ({
  exchange: {
    currencyFrom, currencyTo, salary, period,
  },
}) => ({
  currencyFrom,
  currencyTo,
  salary,
  period,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  changeCurrencyFrom: currency => changeCurrencyFrom(currency),
  changeCurrencyTo: currency => changeCurrencyTo(currency),
  addSalary: salary => addSalary(salary),
  swap: () => swapCurrency(),
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SalaryForm);
