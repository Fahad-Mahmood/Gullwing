import React, { Component } from 'react';
import './Login.css';
import {Form, FormGroup, Input, Button } from 'reactstrap';
const logo = require('../../Resources/Logo/logo.gif');

class Logout extends Component {
  render(){
    return(
      <div className="login-contain">
        <Form className="login-form">
        <img src={logo} style={{width:"90%",margin:"auto"}} alt="logo" />
          <FormGroup>
            <Input placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Input type="password" placeholder="Password" />
          </FormGroup>
          <Button style={{margin:"8% 35%"}} color="primary">Login</Button>
        </Form>
      </div>
    );
    }
}
export default Logout;