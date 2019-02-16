import React from "react";
import { Container, Row, Col, Form, Button, Dropdown } from 'react-bootstrap';
import Footer from "../components/Footer";
import ProfileLogo from "../components/ProfileLogo";
import ListControl from "../components/ListControl";
import Multiselection from "../components/Multiselection"
import api from "../utils/API";

class musicianProfile extends React.Component {
    state={
      
    };

    SaveButtton(){
        api.postmusicianProfile().then(response => {
            if (response.data) {
                this.setState(response.data);
            }
            else { window.location.replace("/profile") }
        });

    }

    render() {
        return (
            <div>
                <ProfileLogo />
                <Form method="post" onSubmit={this.SaveButtton.bind(this)} className="MusicianProfile">
                <Container>
                    <Row>
                        <Col xs="12" className="text-center">
                            <h1><u>Create Your Profile</u></h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="4">
                            
                            
                        </Col>
                        <Col lg="4">
                            
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="City" />
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Phone#</Form.Label>
                                    <Form.Control type="number" placeholder="Contact Number" />
                                </Form.Group>

                                <Multiselection />

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>BIO:</Form.Label>
                                    <Form.Control as="textarea" rows="3" placeholder="Tell us about you" />
                                </Form.Group>
                            
                        </Col>
                        <Col lg="4">
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" className="text-center">
                            <Button variant="primary" type="submit">
                                SAVE
                           </Button>
                        </Col>
                    </Row>
                </Container>
                </Form>
                <Footer />
            </div>
        );
    }

}

export default musicianProfile;