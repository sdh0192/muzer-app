import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';
import LandingLogo from '../components/LandingLogo';
import Footer from "../components/Footer";

const Landing = (props) => (

    <div>
        <Container>
            <LandingLogo />
            <Row className="justify-content-md-center">
                <Col xs lg="6" className="text-center">
                    <Button  variant="primary" href="/signup" size="lg">Sign Up</Button>
                    <span> or </span>
                    <Button  variant="outline-dark" href="/auth/google" size="lg">Sign in with Google</Button>
                </Col>
            </Row>
            <Row>
                <Col xs="12" className="text-center">
                    <p>Already have an account?</p>
                </Col>
                <Col xs="12" className="text-center">
                    <Button variant="outline-primary" href="/signin">Sign In</Button>
                    <span> or </span>
                    <Link to="/home">continue as guest</Link> 
                </Col>
            </Row>
        </Container>
        <Footer />
    </div>
);

export default Landing;
