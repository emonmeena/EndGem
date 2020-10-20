import React from 'react'
import axios from 'axios'
import {Button, FormGroup} from 'reactstrap'

export default class ListTopics extends React.Component{
    constructor(props){
        super(props);
        this.state = {data: [], error: ''};
    }

    componentDidMount = () =>{
        this.fetchList();
    }

    fetchList = async () =>{
        await axios.get('first_app/topics/')
        .then(response => {
            this.setState({data: response.data})
        })
     
    }

    deleteTopic = (pk) =>{
        axios.delete('first_app/topics/' + pk)
        .catch(error => console.log(error))
    }

    render(){
        return (
            <div>
                <ul>
                    {this.state.data.map((dataObj) => {
                    return <FormGroup key={dataObj.pk}>
                        {dataObj.top_name }
                        <Button type="submit" onClick={() => this.deleteTopic(dataObj.pk)}>DELETE</Button>
                        <Button type="submit" onClick={() => this.updateTopic(dataObj.pk)}>UPDATE</Button>
                    </FormGroup>
                })}
                </ul>
            </div>
        );
    }
}