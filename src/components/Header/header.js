import React from 'react';
// import logo from '../../Resources/Logo/logo.gif';
import './header.css';
import { Col, Row, Container } from 'reactstrap';;

function Header() {
  return (
    <Container fluid="true" className="App-header" >
      <Row>
        <Col md={2} className="logo" >

        </Col>
        <Col md={{size: 1, offset:2}} className="Header-block">
          
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
      <Row>
        <Col md={1} className="Header-block-small" >

        </Col>
        <Col md={{size:5, offset:4}} className="Intro-Block text-left" >
          <br/>
          <h5>Give your career a boost!</h5>
          <br/>
          <p>Explore a wide variety of courses specifically designed<br/>
          to boost your career. Beat the competition with a superior<br/>
          skillset.
          <br/>
          Join the revolution!
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;