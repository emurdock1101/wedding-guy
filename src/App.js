import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} exact />
      <Route path="/projects" component={About} exact />
      <Route component={Error} />
    </Switch>
  );
}

export default App;
