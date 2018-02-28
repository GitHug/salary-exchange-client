import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  changeCurrency,
  changeReferenceCurrency,
  addSalary,
} from './actions/exchangeActions';

import SalaryForm from './SalaryForm';

const mapStateToProps = ({ exchange: { currency, referenceCurrency, salary } }) => ({
  currency,
  referenceCurrency,
  salary,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  changeCurrency: currency => changeCurrency(currency),
  changeReferenceCurrency: currency => changeReferenceCurrency(currency),
  addSalary: salary => addSalary(salary),
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SalaryForm);
