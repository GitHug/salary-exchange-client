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
  }

  handleChange(event) {
    const value = event.target.validity.valid ?
      event.target.value :
      this.state[event.target.id];

    this.setState({ [event.target.id]: value });
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
            onChange={this.handleChange}
            value={this.state.currency}
          />

          <i className="material-icons">compare_arrows</i>

          <CurrencySelect
            id="referenceCurrency"
            onChange={this.handleChange}
            value={this.state.referenceCurrency}
          />
        </div>
        <input
          type="text"
          id="salary"
          onChange={this.handleChange}
          pattern="[0-9]*"
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
