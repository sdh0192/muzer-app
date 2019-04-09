import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

let search = function(e)
{
    e.preventDefault();
    console.log(e.target);
    let query = e.target.query.value.trim();
    if(query)
    {
        window.location.replace('/searchresults?query=' + query);
    }
}

const NewsFeedNav = (props) => (
    <Navbar bg="dark" fixed="top" variant="dark" className="navbar-muzer">
        <Navbar.Collapse>
            <Navbar.Brand href="/">
                <img
                    src="/image/navbarLogoWhite.png"
                    height="60"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
        </Navbar.Collapse>
        
        <Form inline onSubmit={search}>
            <FormControl name="query" id="query" type="text" placeholder="Search" />
            <Button variant="primary">Search</Button>             
        </Form>
        { props.profile ? (
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Brand>
                        <a href="/profile"><img alt="Profile" className="small-profile" src={`/uploads/${props.profile ? props.profile.profilePic : "placeholder.png" }`}/></a>
                </Navbar.Brand>
                <Nav>                            
                    <Nav.Link href="/profile">{props.profile.name}</Nav.Link>
                    <Nav.Link href="/auth/logout">Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        ) : (
            <Navbar.Collapse className="justify-content-end">
                <Nav>   
                    <Nav.Link href="/signin">Signin</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        )}
    </Navbar>
);


export default NewsFeedNav;