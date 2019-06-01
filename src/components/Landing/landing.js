import React from 'react';
// import { Link } from 'react-router-dom';
import Header from '../Header/header';
import './landing.css';
import { Col } from 'reactstrap';

function Landing(){
    return(
        <Col md={11} className="Main">
            <Header/>
        </Col>
    );
}

export default Landing;