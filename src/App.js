import React from 'react';
import { Route, Redirect } from 'react-router';
import { Switch } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import NotFoundPage404 from './components/NotFoundPage404';

const App = () => (
  <div className="App">
    <Header />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/about" component={About} />
      <Route path="/404" component={NotFoundPage404} />
      <Redirect from="*" to="/404" />
    </Switch>
    <footer>
      <a
        href="https://github.com/GitHug/salary-exchange-client"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="GitHub-Mark-64px.png" alt="Github repo" />
      </a>
    </footer>
  </div>
);


export default App;
