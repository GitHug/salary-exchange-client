import React from 'react';
import Chart from './containers/ChartContainer';
import SalaryForm from './containers/ControlsContainer';
import ExchangeRateDifference from './components/buyingpower/ExchangeRateDifferenceContainer';
import './styles/Main.css';
import LatestRate from './components/buyingpower/LatestRateContainer';
import BuyingPower from './components/buyingpower/BuyingPowerContainer';

export default () => (
  <section className="Main">
    <aside>
      <SalaryForm />
    </aside>
    <main className="main-grid">
      <ExchangeRateDifference />
      <BuyingPower />
      <LatestRate />
      <Chart />
    </main>
  </section>
);
