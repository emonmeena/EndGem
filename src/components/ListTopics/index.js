import React from 'react'
import axios from 'axios'
import {Button} from 'reactstrap'

export default class ListTopics extends React.Component{
    constructor(props){
        super(props);
        this.state = {data: [], error: ''};
        this.updatedData = {top_name: ''};
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

    updateTopic = (pk) =>{
        
    }

    render(){
        return (
            <div>
                <ul>
                    {this.state.data.map((dataObj) => {
                    return (
                    <div key={dataObj.pk}>
                        <div>
                            {dataObj.top_name }
                        </div>
                        <Button type="submit" className="mr-3" onClick={() => this.deleteTopic(dataObj.pk)}>DELETE</Button>
                        <Button type="submit" onClick={() => this.updateTopic(dataObj.pk)}>UPDATE</Button>
                    </div>
                    );
                })}
                </ul>
            </div>
        );
    }
}