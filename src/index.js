import { getElementError } from '@testing-library/dom'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const firstBook={
    author : 'Admiral William H. McRaven',
    title  : 'The Hero Code: Lessons Learned from Lives…',
    img    : 'https://images-na.ssl-images-amazon.com/images/I/8123TQCpIXL._AC_UL200_SR200,200_.jpg',
}

const secondBook={
    author : 'Robert Greene',
    title  : 'The 48 Laws of Power',
    img    : 'https://images-na.ssl-images-amazon.com/images/I/71951W96oWL._AC_UL200_SR200,200_.jpg',
}

function BookList(){
    return (
        <section className="bookList"> 
            <Book 
            img={firstBook.img}
            author={firstBook.author}
            title = {firstBook.title}
             />
            <Book 
            img={secondBook.img}
            author={secondBook.author}
            title = {secondBook.title}
             />
        </section>
        );
}


const Book =(props)=>{
    return(
        <article className="book">
            <img src={props.img} alt='' />
            <h1>{props.title}</h1>
            <h4 style ={{color:'blue', fontSize:'0.75rem',marginTop:'0.25rem'}}>{props.author}</h4>
        </article>
    );
};


ReactDOM.render(<BookList />,document.getElementById('root'));