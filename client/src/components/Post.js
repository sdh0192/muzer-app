import React from "react";

const Footer = (props) => (
    
    <div key={props.key} className="post-component">
        <div className="post-content">
            <p>{props.item.postContent}</p>
        </div>
        {props.item.profile ? (
            <div>
                <a href={`/profile/${props.item.profile._id}`}><img alt="Profile" className="post-profile-pic" src={`uploads/${props.item.profile.profilePic ? props.item.profile.profilePic : "placeholder.png" }`}/></a>
                <a href={`/profile/${props.item.profile._id}`}>{props.item.name}</a>
            </div>
        ) :
        (
            <div>
                <img alt="Profile" className="post-profile-pic" src={`uploads/placeholder.png`}/>
                <span>{props.item.name}</span>
            </div>
        )}
            
        
    </div>
    
);

export default Footer;



