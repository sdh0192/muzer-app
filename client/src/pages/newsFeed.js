import React from "react";
import { Container, Row, Col, Form, Button, InputGroup, Alert } from 'react-bootstrap';
import Footer from "../components/Footer";
import NewsFeedNav from "../components/NewsFeedNav";
import Post from "../components/Post";
import API from "../utils/API";

class newsFeed extends React.Component {

    state = {
        recent: [],
        currentUser: null,
        error: false,
        message: null
    }

    constructor(props)
    {
        super(props);
        API.autenticate();
        
        API.getTopPosts().then(Response => {
                
                if(!Response.data.error) this.setState({ recent: Response.data });
                console.log(this.state);
            });
    }

    post = (e) => {
        e.preventDefault();
        console.log(e.target.newPost.value);
        let post = e.target.newPost.value.trim();

        if(post)
        {
            let newPost = {
                content: post
            }

            API.postPost(newPost).then(response => {
                console.log(response.data);
                this.state.recent.push(response.data);
            })
        }
        else
        {
            this.setState({ error: true, message: "Please fill the the post content." });
        }
    }

    render() {
        //console.log(this.state)
        return(
            <div>
                <NewsFeedNav />
                <Container>
                    <Row className="justify-content-md-center">
                        <Col lg="9">
                            <h1 className="text-center">Create A Post</h1>
                            {this.state.error ? (<Alert variant="danger">{this.state.message}</Alert>) : null}
                            <Form onSubmit={this.post.bind(this)}>
                                <InputGroup controlid="bio">
                                    <Form.Control name="newPost" as="textarea" rows="2" placeholder="Create a post" />
                                    <Button variant="primary" type="submit">Post</Button>
                                </InputGroup>
                            </Form>                            
                        </Col>
                    </Row>
                    <Row  className="justify-content-md-center">
                        <Col lg="9" className="postfeed">
                           <h1 className="mt-4">Recent Posts</h1>
                        </Col>
                    </Row>  
                    <Row  className="justify-content-md-center">
                        <Col lg="9">
                            {this.state.recent.map(item => <Post key={item.id} title={item.name} value={item.postContent} />)}
                        </Col>
                    </Row>      

                </Container>
                <Footer className="fixed-bottom"/>    
            </div>
        )
    }
}

export default newsFeed;