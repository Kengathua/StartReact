 import React, { Component } from 'react';
 
 class Counter extends React.Component {
     state = {
         count:0,
         imageUrl: 'https://picsum.photos/200'
     };

     styles ={
         fontSize: 10,
         fontWeight:'bold'
     };

     render() { 
         return (
            <div>
                <span><img src = {this.state.imageUrl} alt =""/></span>
                <span className="">{this.formatCount()}</span>
                <button className="" >Increment</button>
            </div>
        );
     }
     formatCount(){
         const {count} = this.state;
         return count === 0 ? <h1>Zero</h1> : count;
     }
 }
  
 export default Counter;