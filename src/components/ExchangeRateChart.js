import React from 'react';
import ReactHighCharts from 'react-highcharts';
import PropTypes from 'prop-types';

const createConfig = (exchangeRates) => {
  const categories = exchangeRates.map(rate => rate.date);
  const data = exchangeRates.map(rate => rate.totalAmountExchangeRate);

  return {
    xAxis: {
      categories,
    },
    series: [{
      data,
    }],
  };
};

const ExchangeRateChart = ({ exchangeRates }) => {
  const config = createConfig(exchangeRates);

  return <ReactHighCharts config={config} />;
};

ExchangeRateChart.propTypes = {
  exchangeRates: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string,
    totalAmountExchangeRate: PropTypes.number,
  })),
};

ExchangeRateChart.defaultProps = {
  exchangeRates: [],
};

export default ExchangeRateChart;
