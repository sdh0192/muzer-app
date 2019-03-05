import React from "react";
import { Col, Row } from 'react-bootstrap';

const MusicianProfile = (props) => {


    return (
      <div>
         <H1>{props.profile.firstName.lastName}</H1>
         <Row>
            <Col lg="3">
               <img alt="Profile" width={250} height={250} src={`/uploads/${props.profile ? props.item.profile.profilePic : "placeholder.png" }`}/>
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
               
                
               
            </Col>
         </Row>
      </div>
    );
} 

export default MusicianProfile;



