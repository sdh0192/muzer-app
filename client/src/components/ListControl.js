import React from "react";
import { Table, Form, Button, InputGroup } from 'react-bootstrap';

class ListControl extends React.Component {
    state =
        {
            values: []
        }

    constructor(props) {
        super(props);
        this.state.values = props.values;
    }

    add(e) {
        e.preventDefault();
        console.log(e.target);
        let newEntry = {};
        for (let i = 0; i < this.props.fields.length; i++) {
            console.log(e.target[i].value);
            newEntry[this.props.fields[i]] = e.target[i].value;
            e.target[i].value = null;
        }

        this.state.values.push(newEntry);
        this.setState({ values: this.state.values });
    }

    delete(e) {
        console.log(e.target.attributes["data-index"].value);
        let index = e.target.attributes["data-index"].value;
        this.state.values.splice(index, 1);
        this.setState({ values: this.state.values });
    }

    render() {
        return (
            <div>
                <Table responsive size="sm">
                    <thead>
                        <tr>
                            {this.props.fields.map(item => (<th>{item}</th>))}
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.values.map((item, i) => (
                            <tr key={i}>
                                {this.props.fields.map(field => (
                                    <td>{item[field]}</td>
                                ))}
                                <td><Button size="sm" variant="outline-danger" data-index={i} onClick={this.delete.bind(this)}>-</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Form method='POST' onSubmit={this.add.bind(this)}>
                    <InputGroup>
                        {this.props.fields.map(item => (<Form.Control name={item} type="text" placeholder={item} />))}
                        <Button variant="primary" type="submit">Add</Button>
                    </InputGroup>
                </Form>
            </div>
        );
    }
}

export default ListControl;


// to use this Control import item

// <ListControl fields={["field1","field2","filed3"]} values={this.state.yourValues} />

// the values propertie should one of the properties in the state 
// to be able to track the changes in the control in the parent's state 