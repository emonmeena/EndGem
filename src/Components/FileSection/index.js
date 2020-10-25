import React, {Component} from 'react'
import {Container } from 'reactstrap';

export default class FileSection extends Component{

    render(){
        return(
            <Container>
                {
                    this.props.files.map(file =>{
                        return (
                            <div className="border p-2 rounded bg-light shadow" key={file.pk}>
                                <div className="d-inline-flex">
                                    <i className="fas fa-file-pdf fa-3x text-secondary"/>
                                    <p className="mb-0 pl-3">{file.name}<br/>
                                        {file.dateAdded}
                                    </p>
                                </div>
                                <div className="float-right my-auto">
                                        <button type="button" className="btn btn-primary">
                                            Download <span className="badge badge-light">{file.downloads} </span>
                                        </button>
                                </div>
                               
                            </div>
                        )
                    })
                }
            </Container>
        )
    }
}