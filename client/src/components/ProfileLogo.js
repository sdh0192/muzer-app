import React from "react";
import { Row, Col, Navbar } from 'react-bootstrap';

const ProfileLogo = () => (
    <Row>
        <Col xs lg="12">
            <Navbar>
                <Navbar.Brand href="#home">
                    <img src="image/MuzerLogo.jpeg" width="100" alt="App Logo says Muzer" />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text variant="outline-primary">
                        Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </Col>
    </Row>

);

export default ProfileLogo;