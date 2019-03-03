import React from "react";
import API from "../utils/API";

class Profile extends React.Component {

    constructor(props) {
        super(props);
        API.autenticate("../");
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <span>{this.props.match.params.id}</span>
            </div>

        );
    }
}
export default Profile;