import React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import LandingLogo from '../components/LandingLogo';

class SignUp extends React.Component
{
    render() 
    {
        return (

            <Container>
                <LandingLogo />
                <Row className="justify-content-md-center">
                    <Col xs lg="6">
                        <Form action="/auth/login" method='POST'>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="confirmPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Confirm Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicChecbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default SignUp;