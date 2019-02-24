import React from "react";
import { Navbar, Form, Button, FormControl, InputGroup } from 'react-bootstrap';

const NewsFeedNav = (prop) => (
    <Navbar bg="light" variant="light" style={{ marginBottom: 100 }}>
        <Navbar.Collapse>
            <Navbar.Brand href="#home">
                <img
                    src="image/MuzerLogo.png"
                    height="45"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
        </Navbar.Collapse>
        
        <Form inline>
            <InputGroup>
                <FormControl type="text" placeholder="Search" style={{ width: 250 }} />
                <Button variant="outline-primary">Search</Button>
            </InputGroup>                    
        </Form>

            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text variant="outline-primary">
               User | <a href="/">Logout</a>
            </Navbar.Text>
        </Navbar.Collapse>
    </Navbar>
);

export default NewsFeedNav;