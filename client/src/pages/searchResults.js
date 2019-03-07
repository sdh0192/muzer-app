import React from "react";
import NewsFeedNav from "../components/NewsFeedNav";
import { Container, Row, Col, Form, Button, InputGroup, Alert } from 'react-bootstrap';
import Footer from "../components/Footer";
import API from "../utils/API";
import SearchResultBox from "../components/searchResultBox";


class SearchResults extends React.Component {

    state = {
        currentUser: null,
        currentResults: []
    }

    componentDidMount() {

        let params = new URLSearchParams(this.props.location.search);
        console.log(params.get("query"));
        API.getSearchResults(params.get("query"))
            .then(results => {
                if (!results.data.error) this.setState({ currentResults: results.data })
                console.log(results.data);
            })
    };

    render() {
    
        return (
            <React.Fragment>
                <NewsFeedNav profile={this.state.currentUser && this.state.currentUser.profile ? this.state.currentUser.profile : null} />
                <div className="stickyFooter">
                    <div style={{ paddingTop: 120 }}></div>
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col lg="9">
                            <h1>Search Results</h1>
                                {this.state.currentResults.map( profiles => { 
                                    console.log(profiles)
                            return <SearchResultBox key={profiles.firstName} profile={profiles} />})
                            }
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Footer className="fixed-bottom"/>
            </React.Fragment>
        )
    }


}

export default SearchResults;