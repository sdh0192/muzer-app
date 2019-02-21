import React from "react";
import { Navbar } from 'react-bootstrap';

const ProfileLogo = (props) => (
    <Navbar bg="light" variant="light" style={{ marginBottom: 100 }}>
        <Navbar.Brand href="#home">
            <img
                src="../image/MuzerLogo.png"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
        </Navbar.Brand>

        <Navbar.Collapse className="justify-content-end">
            <Navbar.Text variant="outline-primary">
                User | <a href="/">Logout</a>
            </Navbar.Text>
        </Navbar.Collapse>
    </Navbar>

);

export default ProfileLogo;