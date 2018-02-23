import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CurrencySelect from './CurrencySelect';
import './SalaryForm.css';

class SalaryForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      salary: '',
      currency: '',
      referenceCurrency: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeCurrency = this.handleChangeCurrency.bind(this);
  }

  handleChange(event) {
    const value = event.target.validity.valid ?
      event.target.value :
      this.state.salary;

    this.setState({ salary: value });
  }

  handleChangeCurrency(id, value) {
    this.setState({ [id]: value });
  }

  handleSubmit(event) {
    this.props.onSubmit(this.state);
    event.preventDefault();
  }

  render() {
    const isDisabled = () => {
      const { salary, currency, referenceCurrency } = this.state;
      return !(salary && currency && referenceCurrency);
    };

    return (
      <form className="SalaryForm" onSubmit={this.handleSubmit}>
        <div className="currencies">
          <CurrencySelect
            id="currency"
            onChange={this.handleChangeCurrency}
            value={this.state.currency}
            disableValue={this.state.referenceCurrency}
          />

          <i className="material-icons">compare_arrows</i>

          <CurrencySelect
            id="referenceCurrency"
            onChange={this.handleChangeCurrency}
            value={this.state.referenceCurrency}
            disableValue={this.state.currency}
          />
        </div>
        <input
          type="text"
          id="salary"
          onChange={this.handleChange}
          pattern="[0-9]*"
          className="salary"
          value={this.state.salary}
        />
        <input type="submit" value="Submit" disabled={isDisabled()} />
      </form>
    );
  }
}

SalaryForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SalaryForm;
