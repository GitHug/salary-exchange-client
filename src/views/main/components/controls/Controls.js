import React from 'react';
import PropTypes from 'prop-types';
import CurrencySelect from './components/CurrencySelect';
import RadioButtonPanel from './containers/RadioButtonPanelContainer';

import './styles/Controls.css';

const Controls = ({
  salary,
  currency,
  referenceCurrency,
  addSalary,
  changeCurrency,
  changeReferenceCurrency,
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
    <div className="Controls">
      <div className="currencies">
        <CurrencySelect
          id="currency"
          onChange={changeCurrency}
          value={currency}
          disableValue={referenceCurrency}
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
          id="referenceCurrency"
          onChange={changeReferenceCurrency}
          value={referenceCurrency}
          disableValue={currency}
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
  );
};

Controls.propTypes = {
  salary: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  currency: PropTypes.string,
  referenceCurrency: PropTypes.string,
  addSalary: PropTypes.func.isRequired,
  changeCurrency: PropTypes.func.isRequired,
  changeReferenceCurrency: PropTypes.func.isRequired,
  swap: PropTypes.func.isRequired,
};

Controls.defaultProps = {
  salary: 0,
  currency: '',
  referenceCurrency: '',
};

export default Controls;
