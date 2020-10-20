import React, {Component} from 'react'
import axios from 'axios';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap'
import ListTopics from '../ListTopics'

export default class App extends Component {

    constructor(props){
        super(props)
        this.state = {pk: 0, top_name: ''};
    }

    onFormSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state)
        axios.post('first_app/topics/', this.state)
    }

    setValue = (e) =>{
        this.setState({top_name: e.target.value})
    }

    render(){
        const {top_name} = this.state;
        return (
        <div>
            <ListTopics />
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