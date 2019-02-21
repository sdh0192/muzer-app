import React from "react";
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import Footer from "../components/Footer";
import NewsFeedNav from "../components/NewsFeedNav";
import API from "../utils/API";

class newsFeed extends React.Component {

    state = {
        recent: [],
        currentUser: null
    }

    constructor(props)
    {
        super(props);
        this.currentUser = API.autenticate();
        
        API.getTopPosts().then(Response => {
                
                if(!Response.data.error) this.state.recent = Response.data;
                console.log(this.state);
            });
    }

    render() {
        //console.log(this.state)
        return(
            <div>
                <NewsFeedNav />
                <Container>
                    <Row className="justify-content-md-center">
                        <Col lg="9">
                            <Form>
                                <InputGroup controlId="bio">
                                    <Form.Control name="bio" as="textarea" rows="2" placeholder="Create a post" required />
                                    <Button variant="primary" type="submit">Post</Button>
                                </InputGroup>
                            </Form>                            
                        </Col>
                    </Row>
                    <Row  className="justify-content-md-center">
                        <Col lg="9">
                           <h1 className="mt-4">Recent</h1>
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