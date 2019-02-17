import React from "react";
import { Table, Form, Button, InputGroup } from 'react-bootstrap';

class ListControl extends React.Component {
    state =
        {
            error: false,
            message: null,
            values: []
        }

    constructor(props) {
        super(props);
        this.state.values = props.values;
    }

    add(e) {
        e.preventDefault();
        let nodes = e.target.parentElement.childNodes;
        this.clearError();

        let validate = false;
        let newEntry = {};

        for (let i = 0; i < this.props.fields.length; i++) {
            let currentValue = nodes[i].value.trim();
            validate = currentValue ? true : validate;
            newEntry[this.props.fields[i]] = currentValue;
            nodes[i].value = null;
        }

        if (validate) {
            this.state.values.push(newEntry);
            this.setState({ values: this.state.values });
        }
        else this.setState({ error: true, message: "All fileds empty, please fill at least one." });
    }

    clearError() {
        return this.setState({ error: false, message: null });
    }

    delete(e) {
        this.clearError();
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
                            {this.props.fields.map(item => (<th  key={item}>{item}</th>))}
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
                <div>
                    <InputGroup>
                        {this.props.fields.map(item => (<Form.Control key={item} name={item} type="text" placeholder={item} />))}
                        <Button onClick={this.add.bind(this)} variant="primary" type="submit">Add</Button>
                    </InputGroup>
                </div>
                {this.state.error ? (<p className="text-danger">{this.state.message}</p>) : null}
            </div>
        );
    }
}

export default ListControl;


// to use this Control import item

// <ListControl fields={["field1","field2","filed3"]} values={this.state.yourValues} />

// the values propertie should one of the properties in the state 
// to be able to track the changes in the control in the parent's state 