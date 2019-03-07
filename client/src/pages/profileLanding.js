import React from "react";
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import LandingLogo from '../components/LandingLogo';
import Footer from "../components/Footer";

let choose = function(e)
{
    e.preventDefault();
    window.location.replace(`/new/${e.target.profileType.value}`);
}

const profileLanding = (Props) => (

    <React.Fragment>
        <div className="stickyFooter">
            <Container>
                <LandingLogo logo="image/MuzerLogo.png" />
                <Form onSubmit={choose}>
                    <Row className="justify-content-md-center">
                        <Col xs lg="6" className="text-center">
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label className="text-primary">What Are You?</Form.Label>
                                <Form.Control as="select" name="profileType">
                                    <option value="musician">Musician</option>
                                    <option value="band">Band</option>
                                    <option value="venue">Venue</option>                    
                                </Form.Control>
                            </Form.Group>
                        </Col>    
                    </Row>
                    <Row className="spacing">
                        <Col className="text-center">
                            <Button variant="outline-primary" type="submit" >Continue</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
        <Footer className="fixed-bottom"/>
    </React.Fragment>
);
        
export default profileLanding;