import React, {Component} from 'react'
import axios from 'axios'
import {Container, Form, FormGroup, FormLabel, FormText} from 'react-bootstrap';
import { Input } from 'reactstrap';

export default class AddGem extends Component{
    constructor(props){
        super(props);
        this.state = {name: "", course: -1};
    }

    addGem = async (e) =>{
        e.preventDefault();
        await axios.post('endgemAPI/materials/', this.state)
        .then(res => console.log(this.state))
        .catch(err => console.log(err))
        this.props.hideAddGemForm()
    }

    render(){
        const {courses, selectedCourse, changeSelectedCourse, hideAddGemForm} = this.props;
        return (
            <Container className="p-3">
               <Form className="col-4" method="post" onSubmit={(e) => this.addGem(e)}>
                <FormText className="h3">Upload Material</FormText>
                   <FormGroup className="form-group">
                       <FormLabel htmlFor="fileName">File name</FormLabel>
                       <Input type="text" className="form-control" id="filename" placeholder="Enter file name" onChange={(e) => this.setState({name: e.target.value})}/>
                   </FormGroup>
                   <FormGroup className="form-group">
                        <FormLabel htmlFor="course">Course</FormLabel>
                        <select value={selectedCourse} className="form-control" onChange={(e)=> {this.setState({course: e.target.value}); changeSelectedCourse(e.target.value)}}>
                            <option value={-1} key={-1}>Choose... </option>
                            { courses.map(course => {return <option value={course.pk} key={course.pk}>{course.name} </option>})}
                        </select>
                    </FormGroup>
                   <FormGroup className="form-group">
                       <FormLabel htmlFor="file">Upload file</FormLabel>
                       <Input type="file" className="form-control-file" id="file"></Input>
                   </FormGroup>
                   <Input className="btn btn-primary" type="submit" value="Done" /><br/><br/>
                   <Input className="btn btn-outline-secondary" type="button" value="Cancel" onClick={hideAddGemForm} />
               </Form>
            </Container>
        )
    }
}