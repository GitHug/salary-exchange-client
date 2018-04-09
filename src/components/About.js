import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';

export default () => (
  <div className="About">
    <h1>What is this all about?</h1>

    <p>As someone who is currently living abroad, but still get my salary paid
      in the currency of my home country, I often wonder how much my buying power
      actually is. The exchange rate is quite important As I will be spending my
      salary in the country I currently live in.
    </p>

    <p>The exchange rate comes from the European Central Bank. The rate is updated
      once every bank day at around 16:00 GMT.
    </p>

    <p> I created this tool partly for me to keep track of my buying power, but I hope
      that you will find it useful as well.
    </p>

    <p>The code is open source and available on&#160;
      <a
        href="https://github.com/GitHug/salary-exchange-client"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub<img src="GitHub-Mark-64px.png" alt="Github repo" />
      </a>
        .
    </p>

    <Link to="/" className="back">Back to home</Link>

  </div>
);
