import React, { Component } from 'react';
import SalaryForm from './SalaryForm';
import ExchangeRateComponent from './ExchangeRateComponent';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { };
  }


  render() {
    return (
      <div className="App">
        <div className="grid">
          <header>Salary Exchange</header>
          <aside>
            <SalaryForm onSubmit={values => this.setState(values)} />
          </aside>
          <section>
            <ExchangeRateComponent {...this.state} />
          </section>
          <footer>footer</footer>
        </div>
      </div>
    );
  }
}


export default App;
