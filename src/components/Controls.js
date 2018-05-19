import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CurrencySelect from './CurrencySelect';
import RadioButtonPanel from '../containers/RadioButtonPanelContainer';
import Card from './Card';
import { history } from '../store';
import currencies from '../resources/currencies.json';
import periods from '../resources/periods.json';
import '../styles/Controls.css';


const validateNumber = param => !!(param && Number.parseInt(param, 10) < 1000000000);
const validateCurrency = param => !!(param && currencies.find(curr => curr.code === param));
const validatePeriod = param => !!(param && periods.find(p => p.period === param));

const validateParams = (currencyFrom, currencyTo, salary, period) => !!(
  validateCurrency(currencyFrom) &&
  validateCurrency(currencyTo) &&
  validateNumber(salary) &&
  validatePeriod(period));

const pushDefaultParams = ({
  currencyFrom, currencyTo, salary, period,
}) => {
  history.push({
    search: `?currencyFrom=${currencyFrom}&currencyTo=${currencyTo}&salary=${salary}&period=${period}`,
  });
};
class Controls extends Component {
  constructor(props) {
    super(props);

    this.state = props;
  }

  componentDidMount() {
    const { search } = this.props.location;
    const params = new URLSearchParams(search);

    const currencyFrom = params.get('currencyFrom');
    const currencyTo = params.get('currencyTo');
    const salary = params.get('salary');
    const period = params.get('period');

    if (!validateParams(currencyFrom, currencyTo, salary, period)) {
      pushDefaultParams(this.props);
    }
  }

  render() {
    const {
      changeCurrencyFrom,
      currencyFrom,
      currencyTo,
      changeCurrencyTo,
      salary,
      swap,
      addSalary,
    } = this.props;

    return (
      <Card className="Controls">
        <form>
          <div className="currencies">
            <CurrencySelect
              id="currencyFrom"
              onChange={changeCurrencyFrom}
              value={currencyFrom}
              disableValue={currencyTo}
            />
            <button onClick={() => swap()}>
              <span
                className="icon"
                role="img"
                aria-label="icon"
              >💱
              </span>
            </button>

            <CurrencySelect
              id="currencyTo"
              onChange={changeCurrencyTo}
              value={currencyTo}
              disableValue={currencyFrom}
            />
          </div>
          <input
            type="text"
            id="salary"
            name="salary"
            onChange={addSalary}
            pattern="[0-9]*"
            className="salary"
            value={salary}
          />

          <RadioButtonPanel />

          <button>Search</button>
        </form>
      </Card>
    );
  }
}

Controls.propTypes = {
  salary: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  currencyFrom: PropTypes.string,
  currencyTo: PropTypes.string,
  addSalary: PropTypes.func.isRequired,
  changeCurrencyFrom: PropTypes.func.isRequired,
  changeCurrencyTo: PropTypes.func.isRequired,
  swap: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.shape(),
  }).isRequired,
};

Controls.defaultProps = {
  salary: 0,
  currencyFrom: '',
  currencyTo: '',
};

export default Controls;
