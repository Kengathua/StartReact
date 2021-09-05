 import React, { Component } from 'react';
 
 class Counter extends React.Component {
     state = {
         count:0,
         imageUrl: 'https://picsum.photos/200'
     };

     styles ={
         fontSize: 30,
         fontWeight:'bold'
     };

     render() { 
         return (
            <div>
                <span style = {this.styles} className="">{this.formatCount()}</span>
                <button className="" >Increment</button>
            </div>
        );
     }
     formatCount(){
         const {count} = this.state;
         return count === 0 ? <a>Zero</a> : count;
     }
 }
  
 export default Counter;