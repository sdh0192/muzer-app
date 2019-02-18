import React from "react";
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import Footer from "../components/Footer";
import ProfileLogo from "../components/ProfileLogo";
import PhoneNumber from "react-phone-input-2";
import ListControl from "../components/ListControl";
import PicControl from "../components/PicControl";
import CalendarControl from "../components/CalendarControl";
import API from "../utils/API";

class venueProfile extends React.Component {
    state = {
        socialLinks: [],
        availability: [],
        contacts: [],
        picture: null
    }

    SaveButtton(e) {
        e.preventDefault();
        console.log(e.target);
        console.log(this.state);

        // let newProfile = {
        //     firstName: e.target.firstName.value,
        //     lastname: e.target.lastName.value,
        //     city: e.target.city.value,
        //     genres: this.state.genres,
        //     instruments: this.state.instruments,
        //     profilePic: null,
        //     phoneNumber: e.target.phoneNumber.value,
        //     bio: e.target.bio.value,
        //     socialLinks: this.state.socialLinks,
        //     availability: this.state.availability
        // }

        // API.postProfile(newProfile).then(response => {
        //     if (response.data.error) {
        //         this.setState(response.data);
        //     }
        //     else { window.location.replace("/home") }
        // })
    }

    handlePictureChange = (filename) => this.setState({ picture: filename });

    render() {
        return(
            <div>
                <ProfileLogo logo="../image/MuzerLogo.jpeg" />
                <Form method="post" onSubmit={this.SaveButtton.bind(this)}>
                    <Container>
                        <Row>
                            <Col lg="3">
                                <PicControl onChange={this.handlePictureChange.bind(this)} location="../" />
                            </Col>
                            <Col lg="5">
                                <Form.Group controlId="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control name="name" type="text" placeholder="Name" required />
                                </Form.Group>
                                <Form.Group controlId="address">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control name="address1" type="text" placeholder="Address 1" required />
                                </Form.Group>
                                <Form.Group controlId="address">
                                    <Form.Control name="address2" type="text" placeholder="Address 2" />
                                </Form.Group>
                                <Form.Group controlId="address">
                                    <InputGroup>
                                        <Form.Control name="city" type="text" placeholder="City" required />                                        
                                        <Form.Control name="state" type="text" placeholder="State" required />                                                                                
                                        <Form.Control name="zipCode" type="text" placeholder="Zip Code" required />
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group controlId="phoneNumber">
                                    <Form.Label>Phone Number</Form.Label>
                                    <PhoneNumber containerClass="null" inputClass="form-control" defaultCountry={'us'} inputExtraProps={{ name: 'phoneNumber', required: true }} disableAreaCodes disableCountryCodes disableDropdown />
                                </Form.Group>                                
                                <Form.Group controlId="contacts">
                                    <Form.Label>Contacts:</Form.Label>
                                    <ListControl fields={["Name", "Email", "Phone"]} values={this.state.contacts} />
                                </Form.Group>
                                <Form.Group controlId="bio">
                                    <Form.Label>Bio:</Form.Label>
                                    <Form.Control name="bio" as="textarea" rows="3" placeholder="Tell us about you" required />
                                </Form.Group>
                            </Col>
                            <Col lg="4">
                                <Form.Group controlId="social-links">
                                    <Form.Label>Social Links:</Form.Label>
                                    <ListControl fields={["Site", "Link"]} values={this.state.socialLinks} />
                                </Form.Group>
                                <Form.Group controlId="availability" className="clearfix">
                                    <Form.Label>Availability:</Form.Label>
                                    <CalendarControl days={this.state.availability} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12" className="text-center">
                                <Button variant="primary" type="submit">Continue</Button>
                            </Col>
                        </Row>
                    </Container>
                </Form>  
                <Footer />
            </div>
        )
    }
}

export default venueProfile;