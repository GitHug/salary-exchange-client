import React from 'react';
import { Route, Redirect } from 'react-router';
import { Switch } from 'react-router-dom';

import Header from './components/Header';
import Main from './views/main/Main';
import About from './views/about/About';
import NotFound from './views/notfound/NotFound';

import './styles/App.css';

const App = () => (
  <div className="App">
    <Header />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/about" component={About} />
      <Route path="/404" component={NotFound} />
      <Redirect from="*" to="/404" />
    </Switch>
    <footer>
      <a
        href="https://github.com/GitHug/salary-exchange-client"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <img src="GitHub-Mark-64px.png" alt="Github repo" />
        </div>
      </a>
    </footer>
  </div>
);


export default App;
