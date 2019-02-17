import React from "react";
import { Table, Form, Button, InputGroup } from 'react-bootstrap';

class PicControl extends React.Component {
    state =
        {
            
        }

    postPicture(e)
    {}

    handleChange(e)
    {
        e.preventDefault();
        console.log(e.target);
    }

    triggerClick(e)
    {
        e.preventDefault();
        let fileInput = e.target.parentElement.test
        fileInput.click();
    }

    render() 
    {
        return (
            <div>
                <img src="none" alt='Profile' width={100} height={100} />
                <Form method="POST" action="api/upload" enctype="multipart/form-data" onSubmit={this.postPicture}>
                    <Form.Control style={{ visibility: "hidden" }} onChange={this.handleChange} name="test" type="file" placeholder="Name" required />
                    <Button type="button" onClick={this.triggerClick}>add</Button>
                </Form>
            </div>
        );
    }
}

export default PicControl;