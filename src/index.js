import { getElementError } from '@testing-library/dom'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const author = 'Admiral William H. McRaven';
const title  = 'The Hero Code: Lessons Learned from Lives…';
const img    = 'https://images-na.ssl-images-amazon.com/images/I/8123TQCpIXL._AC_UL200_SR200,200_.jpg'

function BookList(){
    return (
        <section className="bookList"> 
            <Book job='developer' />
            <Book title = 'random title' number={22} />
        </section>
        );
}


const Book =(props)=>{
    return(
        <article className="book">
            <img src={img} alt='' />
            <h1>{title}</h1>
            <h4 style ={{color:'blue', fontSize:'0.75rem',marginTop:'0.25rem'}}>{author}</h4>
            <p>{props.job}</p>
            <p>{props.number}</p>
        </article>
    );
};


ReactDOM.render(<BookList />,document.getElementById('root'));