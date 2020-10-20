import React from 'react'
import AddTopic from '../AddTopic'
import ListTopic from '../ListTopics'

export default class App extends React.Component{
    render(){
        return (
            <div>
                <ListTopic />
                <AddTopic />
            </div>
        );
    }
}