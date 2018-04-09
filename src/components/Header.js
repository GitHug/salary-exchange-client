import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import '../styles/Header.css';

export default () => (
  <header className="Header">
    <Link to="/" className="title">
      <Logo />
      <h1>Salary Exchange</h1>
    </Link>
    <nav>
      <Link to="/about">About</Link>
    </nav>
  </header>
);
