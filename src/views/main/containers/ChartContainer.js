import { connect } from 'react-redux';
import Chart from '../components/chart/Chart';


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

export default connect(mapStateToProps)(Chart);
