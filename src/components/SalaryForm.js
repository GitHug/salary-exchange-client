import React from 'react';
import PropTypes from 'prop-types';
import CurrencySelect from './CurrencySelect';
import RadioButtonPanel from '../containers/RadioButtonPanelContainer';

import '../styles/SalaryForm.css';

const SalaryForm = ({
  salary,
  currency,
  referenceCurrency,
  addSalary,
  changeCurrency,
  changeReferenceCurrency,
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
    <div className="SalaryForm">
      <div className="currencies">
        <CurrencySelect
          id="currency"
          onChange={changeCurrency}
          value={currency}
          disableValue={referenceCurrency}
        />

        <i className="material-icons">compare_arrows</i>

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

SalaryForm.propTypes = {
  salary: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  currency: PropTypes.string,
  referenceCurrency: PropTypes.string,
  addSalary: PropTypes.func.isRequired,
  changeCurrency: PropTypes.func.isRequired,
  changeReferenceCurrency: PropTypes.func.isRequired,
};

SalaryForm.defaultProps = {
  salary: 0,
  currency: '',
  referenceCurrency: '',
};

export default SalaryForm;
