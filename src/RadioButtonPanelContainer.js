import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changePeriod } from './actions/exchangeActions';

import RadioButtonPanel from './RadioButtonPanel';

const mapStateToProps = ({ exchange: { period } }) => ({
  period,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  changePeriod: period => changePeriod(period),
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RadioButtonPanel);
