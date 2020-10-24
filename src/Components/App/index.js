import React, {Component} from 'react'
import { Container } from 'reactstrap';
import axios from 'axios'
import FilesSection from '../FileSection'

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {courses: [], files: [], selectedCourse: 1}
    }

    componentDidMount = () =>{
        this.fetchData();
        this.getCourseMaterial(1);
    }

    fetchData = async () => {
        await axios.get('endgemAPI/courses/')
        .then(response => {
            this.setState({courses: response.data})
        })
    }

    getCourseMaterial = async (pk) =>{
        this.setState({selectedCourse: pk})
            await axios.get('endgemAPI/materials/' + pk)
            .then(response => {
                this.setState({files: response.data})
            })
    }

    render(){
        const {courses, files} = this.state;
        return (
            <Container>
                    {
                        courses.map((course) =>{
                            return <button key={course.pk} onClick={() => this.getCourseMaterial(course.pk)} >{course.name}</button>
                        })
                    }
                <FilesSection files={files} />
            </Container>
        );
    }
}