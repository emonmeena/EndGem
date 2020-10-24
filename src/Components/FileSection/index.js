import React, {Component} from 'react'
import { Container } from 'reactstrap';

export default class FileSection extends Component{

    render(){
        return(
            <Container>
                {
                    this.props.files.map(filesdata =>{
                        return <li key={filesdata.pk}>{filesdata.name} </li>
                    })
                }
            </Container>
        )
    }
}