import React from 'react';
import ReactHighCharts from 'react-highcharts';
import PropTypes from 'prop-types';
import Card from '../../../../../components/Card';
import '../styles/Chart.css';

const Chart = ({
  ...rest,
  data: { error, exchangeRates, loading },
}) => (
  <Card className="Chart" cardClass="chart-card" loading={loading} error={error}>
    <div className="full-width">
      {!loading &&
      <HighChartsWrapper exchangeRates={exchangeRates} {...rest} />}
    </div>
  </Card>
);

const createConfig = (exchangeRates, currencyFrom, currencyTo) => {
  const categories = exchangeRates.map(rate => rate.date);
  const data = exchangeRates.map(rate => rate.exchangeRate);

  return {
    title: {
      text: `Exchange rate for ${currencyFrom} in ${currencyTo}`,
      style: {
        color: '#FFFFFF',
      },
    },
    yAxis: {
      title: {
        text: 'Exchange rate',
        style: {
          color: '#666666',
        },
      },
    },
    xAxis: {
      categories,
    },
    series: [{
      name: 'Exchange rate',
      data,
      color: '#3A9FBF',
    }],
    tooltip: {
      formatter() {
        return `<b>${this.x}</b>: 1 ${currencyFrom} = <b>${this.y.toFixed(4)} ${currencyTo}</b>`;
      },
    },
    legend: {
      enabled: false,
    },
    chart: {
      backgroundColor: '#333333',
    },
  };
};

const HighChartsWrapper = ({
  exchangeRates, currencyFrom, currencyTo,
}) => {
  const config = createConfig(exchangeRates, currencyFrom, currencyTo);

  return <ReactHighCharts config={config} />;
};

HighChartsWrapper.propTypes = {
  exchangeRates: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string,
    totalAmountExchangeRate: PropTypes.number,
  })),
  currencyFrom: PropTypes.string,
  currencyTo: PropTypes.string,
};

HighChartsWrapper.defaultProps = {
  exchangeRates: [],
  currencyFrom: '',
  currencyTo: '',
};

Chart.propTypes = {
  data: PropTypes.shape({
    exchangeRates: PropTypes.arrayOf(PropTypes.shape({
      date: PropTypes.string.isRequired,
      currencyFrom: PropTypes.string.isRequired,
      currencyTo: PropTypes.string.isRequired,
      exchangeRate: PropTypes.number.isRequired,
      totalAmountExchangeRate: PropTypes.number.isRequired,
    })),
  }).isRequired,
};

export default Chart;
