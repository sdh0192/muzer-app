import React from "react";
import { Container } from 'react-bootstrap';
import API from "../utils/API";
import NewsFeedNav from "../components/NewsFeedNav";
import Footer from "../components/Footer";
import Venue from "../components/venueProfile";
import Musician from "../components/MusicianProfile";
import Band from "../components/BandProfile"

class Profile extends React.Component {
    state = {
        currentUser: null,
        currentProfile: null
    }

    componentDidMount = async function () {
        var id = this.props.match.params.id;
        let newState = {}

        if (id) {
            newState.currentUser = await API.autenticate("../");
            newState.currentProfile = await API.getProfile(id);
        }
        else {
            newState.currentUser = await API.autenticate("../");
            newState.currentProfile = newState.currentUser.profile;
        }

        this.setState(newState);
    }

    render() {
        let print = null;
        if (this.state.currentProfile) switch (this.state.currentProfile._type) {
                case "Musician":
                    print = <Musician profile={this.state.currentProfile} />
                    break;
                case "Band":
                    print = <Band profile={this.state.currentProfile} />
                    break;
                case "Venue":
                    print = <Venue profile={this.state.currentProfile} />
                    break;
                default:
                    print = undefined;
                    break;
            }
        return (
            <React.Fragment>
                <NewsFeedNav profile={this.state.currentUser && this.state.currentUser.profile ? this.state.currentUser.profile : null} />
                <div className="stickyFooter">
                    <div style={{ paddingTop: 120 }}></div>
                    <Container>{print}</Container>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}
export default Profile;