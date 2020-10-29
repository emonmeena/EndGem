import React, { Component } from 'react'
import {Container } from 'reactstrap';

export default function FileSection ({files, selectedCourse}){

    const showMessage = () =>{
        if(selectedCourse === -1)
            return <p className="text-secondary display-5 text-center">Select a course to view its Gems <i className="fas fa-gem text-primary"/> !!</p>
        if(files.length === 0)
            return <p className="text-secondary text-center display-5">This Course does not have any gem yet, click on AddGem to upload a Gem!! </p>
    }

    return(
            <Container className="mt-3">
                <div className="overflow-auto">
                {showMessage()}
                { files.map(file =>{
                    return (
                        <div className="border m-2 p-2 rounded bg-light shadow" key={file.pk}>
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
                </div>
            </Container>
        )
}
 