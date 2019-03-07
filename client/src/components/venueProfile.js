import React from "react";
import { Table, Row, Col } from 'react-bootstrap';
import CalendarControl from "../components/CalendarControl";

const VenueProfile = (props) => (

    <div>
        <h1>{props.profile.name}</h1>
        <Row>
            <Col lg="3">
                <img alt={props.profile.name} src={`/uploads/${props.profile.profilePic}`} />
                <h2>Phone Number</h2>
                <p>{props.profile.phoneNumber}</p>
                <h2>links</h2>
                <ul>{props.profile.socialLinks.map(item => <li key={item.site}><a key={item.site} target="_blank" href={item.link}>{item.site}</a></li>)}</ul>
            </Col>
            <Col lg="5">
                <h2>Bio</h2>
                <p>{props.profile.bio}</p>
                <h2>Address</h2>
                <p>{props.profile.address.address1}</p>
                <p>{props.profile.address.address2}</p>
                <p>{`${props.profile.address.city}, ${props.profile.address.state} ${props.profile.address.zipcode}`}</p>
                <h2>Contacts:</h2>
                <Table responsive size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.profile.contacts.map((item, i) => (
                            <tr key={i}>
                                <td key={item.name}>{item.name}</td>
                                <td key={item.name}>{item.email}</td>
                                <td key={item.name}>{item.phoneNumber}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Col>
            <Col lg="4">
                <CalendarControl days={props.profile.availability.map(item => new Date(item))} readOnly />
            </Col>
        </Row>
    </div>
);

export default VenueProfile;
