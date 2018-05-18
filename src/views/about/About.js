import React from 'react';
import './styles/About.css';
import Card from '../../components/Card';

export default () => (
  <Card className="About">
    <section className="text">
      <h1>Exchange rates and buying power</h1>

      <p>As someone who is currently living abroad, but still get the salary paid
      in the currency of my home country, it can be difficult to track the exchange rate
      and how the buying power fluctuates. This tool is provided for people in a similar
      situation who might find this tool useful.
      </p>

      <p>Historical exchange rates is retrieved from the European Central Bank, who publish
        exchange rates every bank day at around. The exchange rate is updated every bank day
        at 16:00 GMT.
      </p>

      <p>
        The latest exchange rates is updated hourly and uses the source Open Exchange Rates.
      </p>
    </section>
  </Card>
);
