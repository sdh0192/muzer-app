import React from "react";
import { Col, Row } from 'react-bootstrap';

const Footer = (props) => {
    console.log(props.item);

    return (
    

        <Row className="postSpacing">
            <Col lg="1" className="justify-content-md-center">
            <a href="/profile"><img alt="Profile"  width="50px" src={`/uploads/${props.item.profile ? props.item.profile.profilePic : "placeholder.png" }`}/></a>
            </Col>
            <Col lg="11">
               <Row>{props.item.name}</Row>
               <Row>{props.item.postContent}</Row>
            </Col>
        </Row>
    );
} 

export default Footer;



