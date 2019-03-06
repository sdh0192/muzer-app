import React from "react";
import { Col, Row } from 'react-bootstrap';

const MusicianProfile = (props) => {


    return (
      <div>
         <h1>{props.profile.firstName.lastName}</h1>
         <Row>
            <Col lg="3">
               <img alt="Profile" width={250} height={250} src={`/uploads/${props.profile ? props.item.profile.profilePic : "placeholder.png" }`}/>
                <h2>Contact Info</h2>
                <p>{props.profile.phoneNumber}</p>
                <p>{props.profile.city}</p>
                <a href={props.profile.socialLinks}></a>
            </Col>
            <Col lg="5">
              <h2><strong>Bio</strong></h2>
              <p>{props.profile.bio}</p>
              <h2><strong>Instruments</strong></h2>
              <ul>{props.profile.instruments.map(item => <p key={item}>{item}</p>)}</ul>
              <h2><strong>Genres</strong></h2>
              <ul>{props.profile.genres.map(item => <p key={item}>{item}</p>)}</ul>
            </Col>
            <Col lg="4">
               <h2>Availability</h2>
               <Row readonly>{props.profile.availability}</Row>
                
               
            </Col>
         </Row>
      </div>
    );
} 

export default MusicianProfile;



