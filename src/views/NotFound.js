import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';

export default () => (
  <div className="NotFound">
    <section className="text">
      <h1>Where are you going aka 404?</h1>
      <p>
        I have no idea where you are heading, but there is nothing here.
      </p>

      <Link to="/" className="back">Take me back to safety</Link>
    </section>
  </div>
);
