import React from "react";
import { Navbar, Nav } from 'react-bootstrap';

const ProfileLogo = (props) => (
    <Navbar bg="dark" fixed="top" variant="dark" className="navbar-muzer">
        <Navbar.Collapse>
            <Navbar.Brand href="/">
                <img
                    src="../image/navbarLogoWhite.png"
                    height="60"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
        
        </Navbar.Collapse>
        <Nav className="text-center">
            <h1>{props.title}</h1>
        </Nav>

        <Navbar.Collapse className="justify-content-end">
            <Nav>   
                <Nav.Link href="/auth/logout">Logout</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>

);

export default ProfileLogo;