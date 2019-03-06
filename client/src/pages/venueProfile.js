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
        phoneNumber: "+1",
        contacts: [],
        picture: null
    }

    SaveButtton(e) {
        e.preventDefault();
        console.log(e.target);
        console.log(this.state);

        let newProfile = {
            profileType: "venue",
            name: e.target.name.value,
            address: {
                address1: e.target.address1.value,
                address2: e.target.address2.value,
                city: e.target.city.value,
                state: e.target.state.value,
                zipcode: e.target.zipCode.value,
            },
            contacts: this.state.contacts,
            profilePic: this.state.picture,
            phoneNumber: this.state.phoneNumber,
            bio: e.target.bio.value,
            socialLinks: this.state.socialLinks,
            availability: this.state.availability
        }

        API.postProfile(newProfile).then(response => {
            if (response.data.error) {
                this.setState(response.data);
            }
            else { window.location.replace("/feeds") }
        });
    }

    handlePictureChange = (filename) => this.setState({ picture: filename });

    handlePhoneChange = (value) =>  this.setState({ phoneNumber: value });

    render() {
        return(
            <div>
                <ProfileLogo title="Create Your Profile" />
                <div style={{ marginTop: 120 }}></div>
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
                                    <PhoneNumber 
                                        inputClass="form-control" 
                                        containerClass="null"
                                        defaultCountry={'us'} 
                                        onChange={this.handlePhoneChange.bind(this)} 
                                        inputExtraProps={{ name: 'phoneNumber', required: true, value: this.state.phoneNumber }}  
                                        countryCodeEditable={false} 
                                        disableDropdown={true} />
                                </Form.Group>                                
                                <Form.Group controlId="contacts">
                                    <Form.Label>Contacts:</Form.Label>
                                    <ListControl fields={["name", "email", "phoneNumber"]} values={this.state.contacts} />
                                </Form.Group>
                                <Form.Group controlId="bio">
                                    <Form.Label>Bio:</Form.Label>
                                    <Form.Control name="bio" as="textarea" rows="3" placeholder="Tell us about you" required />
                                </Form.Group>
                            </Col>
                            <Col lg="4">
                                <Form.Group controlId="social-links">
                                    <Form.Label>Social Links:</Form.Label>
                                    <ListControl fields={["site", "link"]} values={this.state.socialLinks} />
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