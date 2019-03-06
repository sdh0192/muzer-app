import React from "react";
import { Container, Row, Col, Form, Button, InputGroup, Alert } from 'react-bootstrap';
import CalendarControl from "../components/CalendarControl";

const VenueProfile = (props) => (

    <div>
        <Row>
            <Col lg="3">
                <img alt={props.profile.name} src={`uploads/${props.profile.profilePic}`} />
                <h5>links</h5>
                <ul>{props.profile.socialLinks.map(item => <li key={item.site}><a key={item.site} target="_blank" href={item.link}>{item.site}</a></li>)}</ul>
            </Col>
            <Col lg="9">
                <section data-info="general">
                    <h5>Name</h5>
                    <p>{props.profile.name}</p>
                    <h5>Phone Number</h5>
                    <p>{props.profile.phoneNumber}</p>
                    <h5>Bio</h5>
                    <p>{props.profile.bio}</p>
                </section>
                <section data-info="address">
                    <h5>Address</h5>
                    <p>{props.profile.address.address1}</p>
                    <p>{props.profile.address.address2}</p>
                    <p>{`${props.profile.address.city}, ${props.profile.address.state} ${props.profile.address.zipcode}`}</p>
                </section>
                <section data-info="musical">
                    <ul>{props.profile.contacts.map(item => (
                        <li key={item.name}>
                            <span key={item.name}>{item.name}</span>
                            <span key={item.name}>{item.email}</span>
                            <span key={item.name}>{item.phoneNumber}</span>
                        </li>
                    ))}</ul>

                </section>
                <section data-info="availability">
                    <CalendarControl days={props.profile.availability} readOnly />
                </section>
            </Col>
        </Row>
    </div>
);

export default VenueProfile;
