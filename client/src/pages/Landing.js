import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';
import LandingLogo from '../components/LandingLogo';
import Footer from "../components/Footer";
import GoogleButton from 'react-google-button';

const Landing = (props) => (

    <div>
        <Container>
            <LandingLogo />
            <Row className="justify-content-md-center" >
                <Col xs lg="6" className="text-center">
                    <Button variant="primary" href="/signup" size="lg">Sign Up</Button>
                    <span style={{ margin: "0px 10px"}}>or</span>
                    <a style={{display:"inline-block"}} href="/auth/google"><GoogleButton /></a>
                </Col>
            </Row>
            <div style={{ marginTop: 50 }}></div>
            <Row>
                <Col xs="12" className="text-center">
                    <p>Already have an account?</p>
                </Col>
            </Row>
            <div style={{ marginTop: 20 }}></div>
            <Row>
                <Col xs="12" className="text-center">
                    <Button variant="outline-primary" href="/signin">Sign In</Button>
                    <span style={{ margin: "0px 10px"}}>or</span>
                    <Link to="/feeds">continue as guest</Link>
                </Col>
            </Row>
        </Container>
        <Footer className="fixed-bottom"/>
    </div>
);

export default Landing;
