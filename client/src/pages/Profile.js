import React from "react";
import API from "../utils/API";

class Profile extends React.Component {
    
    constructor(props)
    {
        super(props);
        API.autenticate();
    }
    
    render() 
    {
        return(
        <div>
            <div>
            <img src="image/MuzerLogo.png" alt="App Logo says Muzer"/>
            </div>



        </div>
            
        );
    }
}
export default Profile;