import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header/header';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path ="/" component={Header} />
      </Switch>
    </Router>
  );
}

export default App;
