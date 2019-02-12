import React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import LandingLogo from '../components/LandingLogo';
import Footer from "../components/Footer";

class SignUp extends React.Component
{
    render() 
    {
        return (
            <div>
                <Container>
                    <LandingLogo />
                    <Row className="justify-content-md-center">
                        <Col xs lg="6">
                            <Form action="/auth/signup" method='POST'>
                                <Form.Group controlId="email">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control name="email" type="email" placeholder="Email" />
                                    <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                                </Form.Group>
                                <Form.Group controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name="password" type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group controlId="confirmPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name="confirmPassword" type="password" placeholder="Confirm Password" />
                                </Form.Group>
                                <Button variant="primary" type="submit">Submit</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default SignUp;