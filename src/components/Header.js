import React from 'react';
import Logo from './Logo';
import '../styles/Header.css';

export default () => (
  <header className="Header">
    <a href="/" className="title">
      <Logo />
      <h1>Salary Exchange</h1>
    </a>
    <nav>
      <a href="/">About</a>
    </nav>
  </header>
);
