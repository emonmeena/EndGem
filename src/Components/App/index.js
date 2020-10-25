import React, {Component} from 'react'
import axios from 'axios'
import FilesSection from '../FileSection'
import './css/index.css'

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {courses: [], files: [], selectedCourse: 1}
    }

    componentDidMount = () =>{
        this.fetchData();
        this.getCourseMaterial(0);
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
            <div>
                <div className="border bg-light p-3 d-flex justify-content-between">
                    <div className="d-flex">
                        <img className="c-logo" src="https://www.iitr.ac.in/departments/CSE/uploads/Misc/IITR_logo/IITR_new_logo_color.jpg" alt="IITR LOGO"/>
                        <p className="mb-0 pt-2 pl-2 text-secondary h2">EndGem</p>
                    </div>
                    <div className="btn-md-group" role="group">
                        {courses.map((course) =>{
                            return (
                            <button type="button" className="btn btn-secondary" key={course.pk} onClick={() => this.getCourseMaterial(course.pk)} >
                                {course.name}
                            </button>
                            )
                        })}
                    </div>
                        <div>
                            <button className="btn btn-primary">
                                Add Gem{" "}
                                <i className="fas fa-plus" />
                            </button>
                            <button className="btn btn-secondary mx-2">
                                <i className="fas fa-bars" />
                            </button>
                        </div>
                </div>
                <FilesSection files={files} />
            </div>
        );
    }
}