import React, {Component} from 'react'
import axios from 'axios';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap'

export default class AddTopic extends Component {

    constructor(props){
        super(props)
        this.state = {top_name: ''};
    }

    onFormSubmit = (e) =>{
        e.preventDefault();
        axios.post('first_app/topics/', this.state)
        .then(this.setState({top_name: ''}));
    }

    setValue = (e) =>{
        this.setState({top_name: e.target.value})
    }

    render(){
        const {top_name} = this.state;
        return (
        <div>
            <Form onSubmit = {this.onFormSubmit}>
                <FormGroup>
                    <Label>Topic Name</Label>
                    <Input onChange={this.setValue} value={top_name} />
                </FormGroup>
                <Button type="submit">Add Topic</Button>
            </Form>
        </div>
        );
    }
}