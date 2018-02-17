import React from 'react';
import ExchangeRatesQuery from './ExchangeRatesQuery';

const App = () => (
  <div>
    <ExchangeRatesQuery
      sinceDate="2018-02-01"
      currency="SEK"
      referenceCurrency="USD"
      amount="4000"
    >
      {
        ({ exchangeRates }) => (
          <ol>
            { exchangeRates &&
              exchangeRates.map(rate => <li>{rate.date}</li>)
            }
          </ol>
        )
      }
    </ExchangeRatesQuery>

  </div>
);


export default App;
