import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';
import LandingLogo from '../components/LandingLogo';

const Landing = (props) => (

    <Container>
        <LandingLogo />
        <Row className="justify-content-md-center">
            <Col xs lg="6" className="text-center">
                <Button href="/signup" size="lg">Sign Up</Button>
                <span> or </span>
                <Button href="/auth/google" variant="dark" size="lg">Sign in with Google</Button>
            </Col>
        </Row>
        <Row>
            <Col xs="12" className="text-center">
                <p>Already have an account?</p>
            </Col>
            <Col xs="12" className="text-center">
                <Button href="/signin">Sign In</Button>
                <span> or </span>
                <Link to="/home">continue as guest</Link> 
            </Col>
        </Row>
    </Container>
);

export default Landing;
