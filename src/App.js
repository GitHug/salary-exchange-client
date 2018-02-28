import React from 'react';
import ExchangeRateComponent from './containers/ExchangeRateContainer';
import SideBar from './components/SideBar';
import './styles/App.css';

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
