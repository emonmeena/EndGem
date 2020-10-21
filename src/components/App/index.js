import React from 'react'
import ListTopic from '../ListTopics'

export default class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {showForm: false}
    }

    addTopic = () =>{

        
    }

    render(){
        return (
            <div>
                <ListTopic />
                {/* <AddTopic /> */}

                {this.addTopic()}

            </div>
        );
    }
}