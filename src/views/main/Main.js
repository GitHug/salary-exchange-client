import React from 'react';
import Chart from './containers/ChartContainer';
import SalaryForm from './containers/ControlsContainer';
import './styles/Main.css';

export default () => (
  <section className="Main">
    <aside>
      <SalaryForm />
    </aside>
    <main>
      <Chart />
    </main>
  </section>
);
