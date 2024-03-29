import { hot } from 'react-hot-loader/root';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './Landing/landing';
import Sidebar from './sidebar/sidebar';
import Login from './Login/Login';
import CourseDetail from './CourseDetail/CourseDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path ="/" component={Landing} />
        <Route exact path ="/main" component={Sidebar} />
        <Route exact path ="/login" component={Login} />
        <Route exact path ="/coursedetail" component={CourseDetail} />
      </Switch>
    </Router>
  );
}

export default hot(App);
