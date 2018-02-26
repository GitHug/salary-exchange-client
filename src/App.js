import React, { Component } from 'react';
import ExchangeRateComponent from './ExchangeRateContainer';
import SideBar from './SideBar';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { };
  }


  render() {
    return (
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
  }
}


export default App;
