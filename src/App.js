import React from 'react';
import ExchangeRateComponent from './containers/ExchangeRateContainer';
import SalaryForm from './containers/SalaryFormContainer';
import './styles/App.css';

const App = () => (
  <div className="App">
    <header>Salary Exchange</header>
    <aside>
      <SalaryForm />
    </aside>
    <main>
      <ExchangeRateComponent />
    </main>
    <footer>footer</footer>
  </div>
);


export default App;
