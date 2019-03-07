import React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Footer from "../components/Footer";
import ProfileLogo from "../components/ProfileLogo";
import PhoneNumber from "react-phone-input-2";
import GenresSelect from "../components/GenresSelect";
import ListControl from "../components/ListControl";
import PicControl from "../components/PicControl";
import CalendarControl from "../components/CalendarControl";
import API from "../utils/API";

class bandProfile extends React.Component {
    state = {
        socialLinks: [],
        availability: [],
        phoneNumber: "+1",
        genres: [],
        contacts: [],
        members: [],
        picture: null
    }

    SaveButtton(e) {
        e.preventDefault();
        console.log(e.target);
        console.log(this.state);

        let label = {
            unsigned: true,
            labelName: null
        }

        if(e.target.label.value.trim())
        {
            label.unsigned = false;
            label.labelName = e.target.label.value.trim();
        }

        let newProfile = {
            profileType: "band",
            name: e.target.name.value,
            city: e.target.city.value,
            genres: this.state.genres,
            members: this.state.members,
            contacts: this.state.contacts,
            label: label,
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

    handleGenresChange = (e, data) => this.setState({ genres: data.value });

    handlePictureChange = (filename) => this.setState({ picture: filename });

    handlePhoneChange = (value) =>  this.setState({ phoneNumber: value });

    render() {
        return(
            <React.Fragment>
                <ProfileLogo title="Create Your Profile" />                
                <div className="stickyFooter">
                    <div style={{ paddingTop: 120 }}></div>
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
                                    <Form.Group controlId="city">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control name="city" type="text" placeholder="City" required />
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
                                    <Form.Group controlId="genres">
                                        <Form.Label>Genres</Form.Label>
                                        <GenresSelect onChange={this.handleGenresChange.bind(this)} />
                                    </Form.Group>
                                    <Form.Group controlId="members">
                                        <Form.Label>Members:</Form.Label>
                                        <ListControl fields={["name", "instrument"]} values={this.state.members} />
                                    </Form.Group>                                
                                    <Form.Group controlId="contacts">
                                        <Form.Label>Contacts:</Form.Label>
                                        <ListControl fields={["name", "email", "phoneNumber"]} values={this.state.contacts} />
                                    </Form.Group>
                                    <Form.Group controlId="label">
                                        <Form.Label>Label</Form.Label>
                                        <Form.Control name="label" type="text" placeholder="Label" />
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
                </div> 
                <Footer />
            </React.Fragment>
        )
    }
}

export default bandProfile;