import React from "react"
import NewsFeedNav from "../components/NewsFeedNav"
import Footer from "../components/Footer"
import API from "../utils/API"


class SearchResults extends React.Component {

    state = {
        currentUser: null,
}

componentDidMount(){
    API.getSearchResults(props.match.params.query);
}

render(){
    return( 
    <div>
        <NewsFeedNav profile={this.state.currentUser && this.state.currentUser.profile ? this.state.currentUser.profile : null} />
        <h1>Search Results</h1>

        <Footer />
    </div>
    
    
    )
}


}

export default SearchResults;