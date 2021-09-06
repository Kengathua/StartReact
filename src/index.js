import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class CounterCharacters extends React.Component{
    constructor(props){
        super(props);
        this.state={
            message:'', 
        };
    }

    onMessageChange(text){
        this.setState({
            message: 'Message has '+text.length+' number of Characters',
        })
    }

    render(){
    return <div>
        <h2>Welcome to Count Character Component....</h2>
        <p>
            <label> Enter Message : <input type ="text" 
                onChange={e=>this.onMessageChange(e.target.value)}></input></label>
        </p>
        <p>
            <label>{this.state.message}</label>
        </p>
    </div>
    }
}



const element = <CounterCharacters></CounterCharacters>

ReactDOM.render(element, document.getElementById("root"));





