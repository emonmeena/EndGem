import React, {Component} from 'react'
import axios from 'axios';

export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {data: [], error: ''};
    }
    componentDidMount(){
        // this.setState({data: "Loading..."})

        // axios.get('/first_app/topics')
        // .then(res => 
        //     this.setState({data: res.data })
        //     )

        this.fetchTopicList();
    };

    fetchTopicList = async () =>{
        await axios.get('/first_app/topics')
              .then((res) => {
                  console.log(res);
                  this.setState({data: res})
              })
              .catch((res) => console.log(res))
    }

    onFormSubmit = () =>{
        axios.post('/first_app/topics')
    }

    renderList = () =>{
        return this.state.data.map((name) => {
            return <li>{name}</li>
        });

    }

    render(){
    return (
            <div>
                <div>
                    <p>Topics</p>
                    <ul>
                        {this.renderList()}
                    </ul>
                </div>
                <form method="POST" onSubmit={this.onFormSubmit}>
                    <input placeholder="type topic name"/>
                    <input type = "submit" value="Submit" />
                </form>
            </div>
        );
    }
}