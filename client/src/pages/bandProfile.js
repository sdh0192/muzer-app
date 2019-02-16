import React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Footer from "../components/Footer";
import ProfileLogo from "../components/ProfileLogo";
import api from "../utils/API";

class bandProfile extends React.Component {
    render() {
        return(
            <div>
                <ProfileLogo />
                <Form>
                <Container>
                    <Row>
                        <Col lg="6">
                        </Col>
                        <Col lg="6">
                        </Col>
                    </Row>      
                </Container>
                </Form>  
                <Footer />    
            </div>
        )
    }
}

export default bandProfile;