import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Employee extends React.Component{
    counter = 0;
    state={counter:0}
    addEmployee =()=>{
        this.counter = this.counter+1;
        //alert ("Add Emploee Button is CLicked "+this.counter+" times");
        this.setState({counter:this.state.counter+1});
    }
    render(){
        return <div>
            <h2> Addingitems to a cart Component...</h2>
            <p>
                <button onClick = {this.addEmployee}>Add Items to cart</button>
            </p>
            <p>
                <label>You have : <b>{this.state.counter}</b> items in your cart</label>
            </p>
        </div>
    }
}

const element = <Employee></Employee>

ReactDOM.render(element, document.getElementById("root"));





