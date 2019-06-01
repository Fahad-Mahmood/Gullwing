import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/header';
import './landing.css';
import { Container, Col, Row } from 'reactstrap';

function Landing(){
    return(
        <Container fluid="true">
            <Col md={11}>
                <Header/>
            </Col>
        </Container>
    );
}

export default Landing;