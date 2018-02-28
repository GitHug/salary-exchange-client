import React from 'react';
import ReactHighCharts from 'react-highcharts';
import PropTypes from 'prop-types';

const createConfig = (exchangeRates, salary, currency, referenceCurrency) => {
  const categories = exchangeRates.map(rate => rate.date);
  const data = exchangeRates.map(rate => rate.totalAmountExchangeRate);

  return {
    title: {
      text: `${salary} ${currency} in ${referenceCurrency}`,
    },
    yAxis: {
      title: {
        text: 'Salary',
      },
    },
    xAxis: {
      categories,
    },
    series: [{
      name: 'Salary',
      data,
    }],
    tooltip: {
      formatter() {
        return `Salary at <b>${this.x}</b> is <b>${this.y.toFixed(2)} ${referenceCurrency}</b>.`;
      },
    },
  };
};

const ExchangeRateChart = ({
  exchangeRates, salary, currency, referenceCurrency,
}) => {
  const config = createConfig(exchangeRates, salary, currency, referenceCurrency);

  return <ReactHighCharts config={config} />;
};

ExchangeRateChart.propTypes = {
  exchangeRates: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string,
    totalAmountExchangeRate: PropTypes.number,
  })),
  salary: PropTypes.number,
  currency: PropTypes.string,
  referenceCurrency: PropTypes.string,
};

ExchangeRateChart.defaultProps = {
  exchangeRates: [],
  salary: 0,
  currency: '',
  referenceCurrency: '',
};

export default ExchangeRateChart;
