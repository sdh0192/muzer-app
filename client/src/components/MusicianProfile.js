import React from "react";
import { Col, Row } from 'react-bootstrap';
import CalendarControl from "../components/CalendarControl";


const MusicianProfile = (props) => {


    return (
      <div>
         <h1>{props.profile.firstName} {props.profile.lastName}</h1>
         <Row>
            <Col lg="3">
                <img alt={props.profile.name} src={`/uploads/${props.profile.profilePic}`} />
                <p>Local Town: {props.profile.city}</p>
                <h2>Contact Info</h2>
                <p>{props.profile.phoneNumber}</p>
                <ul>{props.profile.socialLinks.map(item => <li key={item.site}><a key={item.site} target="_blank" href={item.link}>{item.site}</a></li>)}</ul>
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
               <h2><strong>Availability</strong></h2>
               <CalendarControl days={props.profile.availability.map(i => new Date(i))} readOnly />
                
               
            </Col>
         </Row>
      </div>
    );
} 

export default MusicianProfile;



