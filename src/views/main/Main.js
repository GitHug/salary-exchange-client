import React from 'react';
import PropTypes from 'prop-types';
import Chart from './containers/ChartContainer';
import SalaryForm from './containers/ControlsContainer';
import ExchangeRateDifference from '../../containers/ExchangeRateDifferenceContainer';
import LatestRate from '../../containers/LatestRateContainer';
import BuyingPower from '../../containers/BuyingPowerContainer';
import About from '../../components/About';
import './styles/Main.css';

const Main = ({ location }) => (
  <section className="Main">
    <aside>
      <SalaryForm location={location} />
      <About />
    </aside>
    <main className="main-grid">
      <ExchangeRateDifference />
      <BuyingPower />
      <LatestRate />
      <Chart />
    </main>
  </section>
);

export default Main;

Main.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
  }).isRequired,
};
