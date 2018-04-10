import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  changeCurrency,
  changeReferenceCurrency,
  addSalary,
  swapCurrency,
} from '../../../actions/exchangeActions';

import SalaryForm from '../components/controls/Controls';

const mapStateToProps = ({ exchange: { currency, referenceCurrency, salary } }) => ({
  currency,
  referenceCurrency,
  salary,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  changeCurrency: currency => changeCurrency(currency),
  changeReferenceCurrency: currency => changeReferenceCurrency(currency),
  addSalary: salary => addSalary(salary),
  swap: () => swapCurrency(),
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SalaryForm);
