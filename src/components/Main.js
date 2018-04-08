import React from 'react';
import ExchangeRateComponent from '../containers/ExchangeRateContainer';
import SalaryForm from '../containers/SalaryFormContainer';
import '../styles/Main.css';

export default () => (
  <section className="Main">
    <aside>
      <SalaryForm />
    </aside>
    <main>
      <ExchangeRateComponent />
    </main>
  </section>
);
