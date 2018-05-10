import { connect } from 'react-redux';
import Chart from '../components/chart/Chart';


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

export default connect(mapStateToProps)(Chart);
