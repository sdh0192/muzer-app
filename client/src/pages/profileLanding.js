import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Dropdown } from 'react-bootstrap';
import LandingLogo from '../components/LandingLogo';
import Footer from "../components/Footer";

const profileLanding = (Props) => (

    <div>
        <Container>
            <LandingLogo />
            <Row className="justify-content-md-center">
                <Col xs lg="6" className="text-center">
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                            What Are You?
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="">Musician</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Band</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Venue</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>    
            </Row>
                <Row class="spacing">
                    <Col className="text-center">
                       <Button variant="outline-primary" type="submit">Continue</Button>
                    </Col>
                </Row>
        </Container>
            <Footer />
    </div>
        );
        
export default profileLanding;