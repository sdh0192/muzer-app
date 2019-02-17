import React from "react";
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import LandingLogo from '../components/LandingLogo';
import Footer from "../components/Footer";

const profileLanding = (Props) => (

    <div>
        <Container>
            <LandingLogo logo="image/MuzerLogo.jpeg" />
            <Row className="justify-content-md-center">
                <Col xs lg="6" className="text-center">
                   <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                   <Form.Label className="text-primary">What Are You?</Form.Label>
                   <Form.Control as="select">
                       <option>Musician</option>
                       <option>Band</option>
                       <option>Venue</option>                    
                    </Form.Control>
                     </Form.Group>
                   </Form>
                </Col>    
            </Row>
                <Row className="spacing">
                    <Col className="text-center">
                       <Button variant="outline-primary" type="submit" >Continue</Button>
                    </Col>
                </Row>
        </Container>
            <Footer />
    </div>
        );
        
export default profileLanding;