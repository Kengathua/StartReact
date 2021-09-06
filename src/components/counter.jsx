 import React, { Component } from 'react';
 
 class Counter extends React.Component {
     state = {
         count:0,
         imageUrl: 'https://picsum.photos/200'
     };

     styles ={
         fontSize: 20,
         fontWeight:'bold'
     };

     render() { 
         let classes = "result-before";
         classes+= (this.state.count === 0)? "result-after" : "result-before";
         return (
            <div>
                <span className= {classes}>{this.formatCount()}</span>
                <button className="increment" >Increment</button>
            </div>
        );
     }
     formatCount(){
         const {count} = this.state;
         return count === 0 ? <a>Zero</a> : count;
     }
 }
  
 export default Counter;