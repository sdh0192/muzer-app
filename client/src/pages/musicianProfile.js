import React from "react";
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import Footer from "../components/Footer";
import ProfileLogo from "../components/ProfileLogo";
import ListControl from "../components/ListControl";
import CalendarControl from "../components/CalendarControl";
import PicControl from "../components/PicControl";
import GenresSelect from "../components/GenresSelect";
import InstrumentsSelect from "../components/InstrumentsSelect";
import PhoneNumber from "react-phone-input-2";
import API from "../utils/API";

class musicianProfile extends React.Component {
    state = {
        socialLinks: [],
        availability: [],
        phoneNumber: "+1",
        genres: [],
        instruments: [],
        picture: null
    };

    SaveButtton(e) {
        e.preventDefault();
        console.log(e.target);
        console.log(this.state);

        let newProfile = {
            profileType: "musician",
            firstName: e.target.firstName.value,
            lastname: e.target.lastName.value,
            city: e.target.city.value,
            genres: this.state.genres,
            instruments: this.state.instruments,
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

    handleInstrumentsChange = (e, data) => this.setState({ instruments: data.value });

    handlePictureChange = (filename) => this.setState({ picture: filename });

    handlePhoneChange = (value) => this.setState({ phoneNumber: value });

    render() {
        return (
            <div>
                <ProfileLogo title="Create Your Profile" />
                <div style={{ marginTop: 120 }}></div>
                {this.state.error ? (<Alert variant="danger">{this.state.message}</Alert>) : null}
                <Form method="post" onSubmit={this.SaveButtton.bind(this)} className="MusicianProfile">
                    <Container>
                        <Row>
                            <Col lg="3">
                                <PicControl onChange={this.handlePictureChange.bind(this)} picture={this.state.picture} location="../../" />
                            </Col>
                            <Col lg="5">
                                <Form.Group controlId="firstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control name="firstName" type="text" placeholder="First Name" required />
                                </Form.Group>
                                <Form.Group controlId="lastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control name="lastName" type="text" placeholder="Last Name" required />
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
                                <Form.Group controlId="instruments">
                                    <Form.Label>Instruments</Form.Label>
                                    <InstrumentsSelect onChange={this.handleInstrumentsChange.bind(this)} />
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
                <Footer className="fixed-bottom"/>
            </div>
        );
    }

}

export default musicianProfile;