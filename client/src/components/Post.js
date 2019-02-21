import React from "react";
import { Card } from 'react-bootstrap';

const Footer = (props) => (

    <Card bg="light" style={{ marginTop: 15 }}>
        <Card.Header>{props.title}</Card.Header>
        <Card.Body>
            <Card.Text>{props.value}</Card.Text>
        </Card.Body>
    </Card>
);

export default Footer;



