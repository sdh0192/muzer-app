import React from "react";
import { Form } from 'react-bootstrap';
import API from "../utils/API";

class PicControl extends React.Component {
    state =
    {
        selectedPicture: null,
        defaultPicture: 'placeholder.png'
    }

    constructor(props)
    {
        super(props);
        this.state.selectedPicture = props.picture;
    }

    handleChange(e)
    {
        e.preventDefault();
        var formData = new FormData();
        formData.append("test", e.target.files[0]);
        API.postFile(this.props.location, formData).then(result => {
            if(result.data.error)
                this.setState(result.data);
            else 
            {
                this.setState({ selectedPicture: result.data.filename });
                if(this.props.onChange) this.props.onChange(result.data.filename);
            }
        });
    }

    triggerClick(e)
    {
        e.preventDefault();
        let fileInput = e.target.parentElement.children[0];
        fileInput.click();
    }

    render() 
    {
        return (
            <div>
                <img id="profilePic" src={this.state.selectedPicture ? `${this.props.location}/uploads/${this.state.selectedPicture}` : `${this.props.location}/uploads/${this.state.defaultPicture}`} alt='Profile' width={250} height={250} />
                <div id="profilePicButton">
                    <Form.Control style={{ visibility: "hidden" }} onChange={this.handleChange.bind(this)} name="test" type="file" placeholder="Name" required />
                    <button className="btn btn-primary" type="button" onClick={this.triggerClick}>+</button>
                </div>
            </div>
        );
    }
}

export default PicControl;