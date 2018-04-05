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
    <footer>
      <a
        href="https://github.com/GitHug/salary-exchange-client"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="GitHub-Mark-64px.png" alt="Github repo" />
      </a>
    </footer>
  </div>
);


export default App;
