import Axios from 'axios'
import React, {Component} from 'react'
import axios from 'axios';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap'
import ListTopics from '../ListTopics'

export default class App extends Component {

    constructor(props){
        super(props)
        this.state = {top_name: ''};
        this.data = [];
    }

    onFormSubmit = (e) =>{
        e.preventDefault();
        axios.post('')
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
                <Button type="submit">Post</Button>
            </Form>
        </div>
        );
    }
}