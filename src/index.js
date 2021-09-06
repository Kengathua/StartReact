import { getElementError } from '@testing-library/dom'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'


function BookList(){
    return (
        <section className="bookList"> 
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
        );
}

const Book =()=>{
    return(
        <article className="book">
            <Image></Image>
            <Title></Title>
            <Author></Author>
        </article>
    );
};

const Image =()=>{
    return(
        <img src="https://images-na.ssl-images-amazon.com/images/I/8123TQCpIXL._AC_UL200_SR200,200_.jpg" alt='' />
    );
};

const Title=()=> <h1>The Hero Code: Lessons Learned from Lives…</h1>

const Author =()=> <h4 style ={{color:'blue', fontSize:'0.75rem',marginTop:'0.25rem'}}>Admiral William H. McRaven</h4>

ReactDOM.render(<BookList />,document.getElementById('root'));