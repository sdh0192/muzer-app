import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import profileLanding from "./pages/profileLanding";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/Signup";
import musicianProfile from './pages/musicianProfile';


class App extends React.Component {
    render()
    {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/signin" component={SignIn} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/new" component={profileLanding} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/new/musician" component={musicianProfile}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
