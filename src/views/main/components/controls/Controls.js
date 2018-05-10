import React from 'react';
import PropTypes from 'prop-types';
import CurrencySelect from './components/CurrencySelect';
import RadioButtonPanel from './containers/RadioButtonPanelContainer';

import './styles/Controls.css';
import Card from '../../../../components/Card';

const Controls = ({
  salary,
  currencyFrom,
  currencyTo,
  addSalary,
  changeCurrencyFrom,
  changeCurrencyTo,
  swap,
}) => {
  const handleChangeSalary = (event) => {
    const { target } = event;

    if (target.value.length > 0) {
      if (event.target.validity.valid) {
        addSalary(target.value);
      }
    } else {
      addSalary(target.value);
    }
  };

  return (
    <Card className="Controls">
      <div>
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
          onChange={handleChangeSalary}
          pattern="[0-9]*"
          className="salary"
          value={salary}
        />

        <RadioButtonPanel />
      </div>
    </Card>
  );
};

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
};

Controls.defaultProps = {
  salary: 0,
  currencyFrom: '',
  currencyTo: '',
};

export default Controls;
