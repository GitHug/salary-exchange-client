import React from 'react';
import PropTypes from 'prop-types';
import Chart from './containers/ChartContainer';
import SalaryForm from './containers/ControlsContainer';
import ExchangeRateDifference from './components/buyingpower/ExchangeRateDifferenceContainer';
import './styles/Main.css';
import LatestRate from './components/buyingpower/LatestRateContainer';
import BuyingPower from './components/buyingpower/BuyingPowerContainer';
import About from '../../components/About';

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
