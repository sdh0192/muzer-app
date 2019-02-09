import React from "react";

class Landing extends React.Component {
    render () {
        return (
   <div>
        <div>
            <img src="image/MuzerLogo.jpeg"  width="150" alt="App Logo says Muzer"/>
        </div>
        
        <div>
            <p>
        <button type="button">Sign Up</button> or <span id="not_signed_in33q5qr8bb9m9">Sign in with Google</span>
            </p>
        </div>
  
        <div>
            <p>Already have an account?</p>
            <button type="button">Sign In</button>
            <a href="">or sign in as guest</a>
  
        </div>
    </div>
        );
          
    }
  }

  export default Landing;
