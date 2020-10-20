import React from 'react'
import axios from 'axios'

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
        .catch(error =>{
            this.setState({error: 'An error occured while GET request to the tpopics API'});
        })
    }

    render(){
        return (
            <div>
                <ul>
        {this.state.data.map((dataObj) => <li key={dataObj.pk}>{dataObj.top_name}</li>)}
                </ul>
            </div>
        );
    }
}