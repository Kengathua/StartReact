import { getElementError } from '@testing-library/dom'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const books=[
    {
        id:1,
        author : 'Admiral William H. McRaven',
        title  : 'The Hero Code: Lessons Learned from Lives…',
        img    : 'https://images-na.ssl-images-amazon.com/images/I/8123TQCpIXL._AC_UL200_SR200,200_.jpg',
    },
    {
        id:2,
        author : 'Robert Greene',
        title  : 'The 48 Laws of Power',
        img    : 'https://images-na.ssl-images-amazon.com/images/I/71951W96oWL._AC_UL200_SR200,200_.jpg',
    },
    {
        id:3,
        author : 'Colleen Hoover',
        title  : 'It Ends with Us',
        img    : 'https://images-na.ssl-images-amazon.com/images/I/71tqt4VL%2BdS._AC_UL200_SR200,200_.jpg',
    },
];

function BookList(){
    return (
    <section className='booklist'>
        {books.map((book,index)=>{
            return <Book key={book.id} {...book}></Book>;
            }
        )}
        </section>
    );
}

const Book =(props)=>{
    const { img, title, author } = props;

    //===================events
    //attributes and eventHandler
    //onClick, onMouseOver
    const clickHandler=()=>{
        alert('Hello world');
    }

    const complexExample =(author) =>{
        console.log(author)
    }
    return(
        <article className="book">
            <img src={img} alt='' />
            <h1 onClick={()=>alert(title)}>{title}</h1>
            <h4 style ={{color:'blue', fontSize:'0.75rem',marginTop:'0.25rem'}}>{author}</h4>
            <button type="button" onClick={clickHandler}>Click Here</button>
            <button type ="button" onClick={()=>complexExample(author)}>More Complex</button>
        </article>
    );
};

ReactDOM.render(<BookList />,document.getElementById('root'));