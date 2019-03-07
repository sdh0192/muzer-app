import React from "react";
import { Col, Row } from 'react-bootstrap';

const searchBox = (props) => {
    console.log(props.item);
    let name = props.profile._type==="Musician" ? props.profile.firstName + " " + props.profile.lastName: props.profile.name;

    return (
        

        <Row className="postSpacing">
            <Col lg="1" className="justify-content-md-center">
            <a href={"/profile/" + props.profile.id}><img alt="Profile"  width="50px" src={`/uploads/${props.profile ? props.profile.profilePic : "placeholder.png" }`}/></a>
            </Col>
            <Col lg="11">
               <Row>{name}</Row>
            </Col>
        </Row>
    );
} 

export default searchBox;