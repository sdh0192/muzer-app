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

    componentDidMount = async function() {
        
        let user = await API.autenticate();
        this.state.currentUser = user;

        API.getTopPosts().then(Response => {
            if (!Response.data.error) this.setState({ recent: Response.data });
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
            
            e.target.newPost.value = null;

            API.postPost(newPost).then(response => {
                console.log(response.data);
                this.state.recent.unshift(response.data);
                this.setState({ recent: this.state.recent });
            })
        }
        else
        {
            this.setState({ error: true, message: "Please fill the the post content." });
        }
    }

    render() {
        console.log(this.state.currentUser)
        return(
            <React.Fragment>
                <NewsFeedNav profile={this.state.currentUser && this.state.currentUser.profile ? this.state.currentUser.profile : null} />
                <div className="stickyFooter">
                    <div style={{ paddingTop: 120 }}></div>
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
                                {this.state.recent.map(item => <Post key={item.id} item={item} />)}
                            </Col>
                        </Row>      

                    </Container>
                </div>
                <Footer className="fixed-bottom"/>
            </React.Fragment>
        )
    }
}

export default newsFeed;