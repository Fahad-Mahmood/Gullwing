import React from 'react';
import logo from '../../Resources/Logo/logo.gif';
import './header.css';
import { Col, Row } from 'reactstrap';;

function Header() {
  return (
    <Row className="App-header" >
      <Col md={2} className="logo" >

      </Col>
      <Col md={{size: 2, offset:1}} className="Header-block">
        
      </Col>
      <Col md={6} className="banner">
      </Col>
      <Col md={{size: 4, offset:1 }} className="Intro-text">
        <h1>
          All the resources<br/>
          you'll ever need.
        </h1>
        <p>scroll down & select course</p>
      </Col>
    </Row>
  );
}

export default Header;