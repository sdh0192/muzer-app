import React from "react";
import { Navbar, Form, FormControl } from 'react-bootstrap';

const NewsFeedNav = (props) => (
    <Navbar bg="dark" fixed="top" variant="dark" className="navbar-muzer">
        <Navbar.Collapse>
            <Navbar.Brand href="/">
                <img
                    src="image/MuzerLogoWhite.png"
                    height="45"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
        </Navbar.Collapse>
        
        <Form inline>
            <FormControl type="text" placeholder="Search" />                 
        </Form>

            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text variant="outline-primary">
               {props.userName} | <a href="/auth/logout">Logout</a>
            </Navbar.Text>
        </Navbar.Collapse>
    </Navbar>
);

export default NewsFeedNav;