import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";


class App extends React.Component {
    render()
    {
        return (
            <Router>
             
                <Switch>
                 
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/signin" component={SignIn} />
                    <Route exact path="/profile" component={Profile} /> 
                  
                </Switch>
            </Router>
        );
    }
}

export default App;
