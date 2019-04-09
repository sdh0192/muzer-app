import React from "react";
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import LandingLogo from '../components/LandingLogo';
import Footer from "../components/Footer";

import api from "../utils/API";

class SignIn extends React.Component {
    state = {
        error: false,
        message: null
    }

    clearError() {
        return this.setState({ error: false, message: null });
    }

    validateLogin(e) {

        e.preventDefault();
        this.clearError();

        var credentials = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        if (credentials.password.length < 6) return this.setState({
            error: true,
            message: "Password does not meet the lenght requirement."
        });

        api.postSignin(credentials)
            .then(() => window.location.replace("/feeds"))
            .catch((error) => this.setState(error.response.data));
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
                                <Form action="/auth/login" method='POST' onSubmit={this.validateLogin.bind(this)}>
                                    <Form.Group controlId="email">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control name="email" type="email" placeholder="Enter email" required />
                                    </Form.Group>
                                    <Form.Group controlId="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control name="password" type="password" placeholder="Password" required />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">Sign in</Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Footer className="fixed-bottom" />
            </React.Fragment>
        );
    }
}

export default SignIn;