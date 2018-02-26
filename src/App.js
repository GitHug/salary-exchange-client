import React from 'react';
import ExchangeRateComponent from './ExchangeRateContainer';
import SideBar from './SideBar';
import './App.css';

const App = () => (

  <div className="App">
    <div className="grid">
      <header>
            Salary Exchange
      </header>

      <SideBar />

      <main>
        <ExchangeRateComponent />
      </main>

      <footer>
            footer
      </footer>
    </div>
  </div>
);


export default App;
