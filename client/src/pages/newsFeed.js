import React from "react";
import { Container, Row, Col, Form, Button, Form } from 'react-bootstrap';
import Footer from "../components/Footer";
import NewsFeedNav from "../components/NewsFeedNav";

class newsFeed extends React.Component {
    render(){
        return(
            <div>
                <NewsFeedNav />
                <Container>
                    <Row className="justify-content-md-center">
                        <Col lg="9">
                            <h1><strong>CREATE A POST</strong></h1>

                            <Form.Group controlId="bio">
                                    <Form.Label>Name:</Form.Label>
                                    <Form.Control name="bio" as="textarea" rows="3" placeholder="Post something" required />
                                    <Button variant="primary" type="submit">Post</Button>
                            </Form.Group>
                        </Col>
                    </Row>

                </Container>
                <Footer />    
            </div>
        )
    }
}

export default newsFeed;