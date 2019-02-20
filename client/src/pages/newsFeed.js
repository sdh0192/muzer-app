import React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Footer from "../components/Footer";
import NewsFeedNav from "../components/NewsFeedNav";

class newsFeed extends React.Component {
    render(){
        return(
            <div>
                <NewsFeedNav />
                <Container>
                    <Row className="justify-content-md-center">
                        <Col lg="9" className="postfeed">
                            <h1 className="text-center"><strong>CREATE A POST</strong></h1>

                            <Form.Group controlId="bio">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control name="bio" as="textarea" rows="3" placeholder="Post something" required />
                                    <Button variant="primary" type="submit">Post</Button>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col lg="9" className="postfeed">
                           <h1 className="text-center"><strong>RECENT POST</strong></h1>
                        </Col>
                    </Row>  
                    <Row  className="justify-content-md-center">
                        <Col lg="9">
                            
                        </Col>
                    </Row>      

                </Container>
                <Footer className="fixed-bottom"/>    
            </div>
        )
    }
}

export default newsFeed;