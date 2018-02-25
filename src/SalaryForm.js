import React from 'react';
import PropTypes from 'prop-types';

import CurrencySelect from './CurrencySelect';

import './SalaryForm.css';

const SalaryForm = ({
  salary,
  currency,
  referenceCurrency,
  addSalary,
  changeCurrency,
  changeReferenceCurrency,
  fetchExchangeRates,
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

  const handleSubmit = (event) => {
    fetchExchangeRates();
    event.preventDefault();
  };

  const isDisabled = () => !(salary && currency && referenceCurrency);

  return (
    <form className="SalaryForm" onSubmit={handleSubmit}>
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
      <input type="submit" value="Submit" disabled={isDisabled()} />
    </form>
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
  fetchExchangeRates: PropTypes.func.isRequired,
};

SalaryForm.defaultProps = {
  salary: 0,
  currency: '',
  referenceCurrency: '',
};

export default SalaryForm;
