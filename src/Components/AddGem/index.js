import React, {Component} from 'react'
import axios from 'axios'
import {Container, Form, FormGroup, FormLabel, FormText} from 'react-bootstrap';
import { Input } from 'reactstrap';

export default class AddGem extends Component{
    constructor(props){
        super(props);
        this.state = {name: "", course: 3};
    }

    addGem = async (e) =>{
        e.preventDefault();
        console.log(this.state);
        await axios.post('endgemAPI/materials/', this.state)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    render(){
        const {courses} = this.props;
        return (
            <Container className="p-3">
               <Form className="col-4" method="post" onSubmit={this.addGem}>
                <FormText className="h3">Upload Material</FormText>
                   <FormGroup className="form-group">
                       <FormLabel htmlFor="fileName">File name</FormLabel>
                       <Input type="text" className="form-control" id="filename" placeholder="Enter file name" onChange={(e) => this.setState({name: e.target.value})}/>
                   </FormGroup>
                   <FormGroup className="form-group">
                        <FormLabel htmlFor="course">Course</FormLabel>
                        <select id="course" className="form-control" onChange={(e)=> console.log(e.target.value)}>
                            {
                                courses.map(course => {
                                    return <option key={course.pk}>{course.name} </option>
                                })
                            }
                        </select>
                    </FormGroup>
                   <FormGroup className="form-group">
                       <FormLabel htmlFor="file">Upload file</FormLabel>
                       <Input type="file" className="form-control-file" id="file"></Input>
                   </FormGroup>
                   <Input className="btn btn-primary" type="submit" value="Done" />
               </Form>
            </Container>
        )
    }
}