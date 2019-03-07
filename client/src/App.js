import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import profileLanding from "./pages/profileLanding";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/Signup";
import MusicianProfile from './pages/musicianProfile';
import BandProfile from './pages/bandProfile';
import VenueProfile from './pages/venueProfile';
import NotFound from './pages/notFound';
import newsFeed from './pages/newsFeed';
import SearchResults from './pages/searchResults';



class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/signin" component={SignIn} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/new" component={profileLanding} />
                    <Route exact path="/new/musician" component={MusicianProfile} />
                    <Route exact path="/new/band" component={BandProfile} />
                    <Route exact path="/new/venue" component={VenueProfile} />
                    <Route exact path="/profile/:id?" component={Profile} />
                    <Route exact path="/feeds" component={newsFeed} />
                    <Route exact path="/searchresults" component={SearchResults} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </Router>
        );
    }
}

export default App;
