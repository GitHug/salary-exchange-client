import React from 'react';
import { Route, Redirect } from 'react-router';
import { Switch } from 'react-router-dom';

import Header from './components/Header';
import Main from './views/Main';
import NotFound from './views/NotFound';
import Footer from './components/Footer';

import './styles/App.css';

const App = () => (
  <div className="App">
    <Header />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/404" component={NotFound} />
      <Redirect from="*" to="/404" />
    </Switch>
    <Footer />
  </div>
);


export default App;
