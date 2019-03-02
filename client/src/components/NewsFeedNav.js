import React from "react";
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';



const NewsFeedNav = (props) => (
    <Navbar bg="dark" fixed="top" variant="dark" className="navbar-muzer">
        <Navbar.Collapse>
            <Navbar.Brand href="/">
                <img
                    src="image/MuzerLogoWhite.png"
                    height="60"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
        </Navbar.Collapse>
        
        <Form inline>
            <FormControl type="text" placeholder="Search" />                 
        </Form>
        { props.profile ? (
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Brand>
                        <img alt="Profile" className="small-profile" src={`/uploads/${props.profile ? props.profile.profilePic : "placeholder.png" }`}/>
                </Navbar.Brand>
                <Nav>                            
                    <Nav.Link href="/profile">{props.profile.firstName}</Nav.Link>
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