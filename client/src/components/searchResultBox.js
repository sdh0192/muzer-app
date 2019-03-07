import React from "react";
import { Col, Row } from 'react-bootstrap';

const searchBox = (props) => {
    console.log(props.item);
    let name = props.profile._type==="Musician" ? props.profile.firstName + " " + props.profile.lastName: props.profile.name;

    return (
        
        <div key={props.key} className="post-component">
            <a href={"/profile/" + props.profile._id}><img alt="Profile" className="post-profile-pic" style={{ width: 50 }} src={`/uploads/${props.profile ? props.profile.profilePic : "placeholder.png" }`}/></a>
            <span>{name}</span>
        </div>
    );
} 

export default searchBox;