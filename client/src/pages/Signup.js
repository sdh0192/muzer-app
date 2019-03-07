import React from "react";
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import LandingLogo from '../components/LandingLogo';
import Footer from "../components/Footer";
import api from "../utils/API";

class SignUp extends React.Component {
    state = {
        error: false,
        message: null
    }

    clearError() {
        return this.setState({ error: false, message: null });
    }

    validateSignup(e) {
        e.preventDefault();

        this.clearError();

        var credentials = {
            email: e.target.email.value,
            password: e.target.password.value,
            confirm: e.target.confirmPassword.value
        }

        if (credentials.password.length < 6) return this.setState({
            error: true,
            message: "Password does not meet the lenght requirement."
        });

        if (credentials.password !== credentials.confirm) return this.setState({
            error: true,
            message: "Password does not match."
        });

        api.postSignup(credentials).then(response => {
            if (response.data.error) {
                this.setState(response.data);
            }
            else { window.location.replace("/new") }
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="stickyFooter">
                    <Container>
                        <LandingLogo />
                        <Row className="justify-content-md-center">
                            <Col xs lg="6">
                                {this.state.error ? (<Alert variant="danger">{this.state.message}</Alert>) : null}
                                <Form action="/auth/signup" method='POST' onSubmit={this.validateSignup.bind(this)}>
                                    <Form.Group controlId="email">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control name="email" type="email" placeholder="Email" />
                                    </Form.Group>
                                    <Form.Group controlId="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control name="password" type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group controlId="confirmPassword">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control name="confirmPassword" type="password" placeholder="Confirm Password" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">Start Muzing!</Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Footer className="fixed-bottom"/>
            </React.Fragment>
        );
    }
}

export default SignUp;