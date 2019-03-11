import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import NewSecret from './components/NewSecret';
import SecretPage from './components/SecretPage';
import AboutPage from './components/AboutPage';


const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={ Home } />
      <Route exact path="/new_secret" component={ NewSecret } />
      <Route exact path="/about" component={ AboutPage } />
      <Route path="/secret_page/:id" component={ SecretPage } />
      <Route path="/home/:category" component={ Home } />
    </div>
  </Router>
);

export default Routes;
