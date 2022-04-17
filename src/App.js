import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Now from './pages/Now';
import Footer from './components/Footer';
import './App.scss';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/now" component={Now} />
    </Switch>
    <Footer />
  </Router>
);

export default App;
