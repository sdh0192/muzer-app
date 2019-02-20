import React from "react";
import { Row, Col, Navbar, Form, Button, FormControl } from 'react-bootstrap';

const NewsFeedNav = (prop) => (
    <Row>
        <Col xs lg="12">
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              
                <Form inline className="justify-content-md-center">
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form>

                 <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text variant="outline-primary">
                        Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </Col>
    </Row>
);

export default NewsFeedNav;