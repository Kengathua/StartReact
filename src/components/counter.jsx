 import React, { Component } from 'react';
 
 class Counter extends React.Component {
     state = {
         count:10,
     }
     render() { 
         return (
            <div>
                <span>{this.state.count}</span>
                <span>{this.formatCount()}</span>
                <button>Increment</button>
            </div>
        );
     }
     formatCount(){
         const {count} = this.state;
         return count === 10 ? <h1>Ten</h1> : count;
     }
 }
  
 export default Counter;