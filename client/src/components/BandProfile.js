import React from "react";
import { Col, Row } from 'react-bootstrap';
import CalendarControl from "../components/CalendarControl";


const BandProfile = (props) => {
console.log(props.profile);

    return (
      <div>
         <h1>{props.profile.name}</h1>
         <Row>
            <Col lg="3">
                <img alt={props.profile.name} src={`uploads/${props.profile.profilePic}`} />
                <p>Local Town: {props.profile.city}</p>
                <h2>Contact Info</h2>
                <p>{props.profile.phoneNumber}</p>
                <tbody>
                        {props.profile.contacts.map((item, i) => (
                            <tr key={i}>
                                <td key={item.name}>{item.name}</td>
                                <td key={item.name}>{item.email}</td>
                                <td key={item.name}>{item.phoneNumber}</td>
                            </tr>
                        ))}
                </tbody>
                <ul>{props.profile.socialLinks.map(item => <li key={item.site}><a key={item.site} target="_blank" href={item.link}>{item.site}</a></li>)}</ul>
            </Col>
            <Col lg="5">
              <h2><strong>Bio</strong></h2>
              <p>{props.profile.bio}</p>
              <h2><strong>Genres</strong></h2>
              <ul>{props.profile.genres.map(item => <p key={item}>{item}</p>)}</ul>
              <h2><strong>Members</strong></h2>
              <ul>{props.profile.members.map(item => <li key={item.site}><a key={item.site} target="_blank" href={item.link}>{item.site}</a></li>)}</ul>
            </Col>
            <Col lg="4">
               <h2><strong>Availability</strong></h2>
               <CalendarControl days={props.profile.availability.map(i => new Date(i))} readOnly />
                
               
            </Col>
         </Row>
      </div>
    );
} 

export default BandProfile;



