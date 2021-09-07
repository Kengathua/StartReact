import { getElementError } from '@testing-library/dom'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const books=[
    {
        author : 'Admiral William H. McRaven',
        title  : 'The Hero Code: Lessons Learned from Lives…',
        img    : 'https://images-na.ssl-images-amazon.com/images/I/8123TQCpIXL._AC_UL200_SR200,200_.jpg',
    },
    {
        author : 'Robert Greene',
        title  : 'The 48 Laws of Power',
        img    : 'https://images-na.ssl-images-amazon.com/images/I/71951W96oWL._AC_UL200_SR200,200_.jpg',
    },
    {
        author : 'Colleen Hoover',
        title  : 'It Ends with Us',
        img    : 'https://images-na.ssl-images-amazon.com/images/I/71tqt4VL%2BdS._AC_UL200_SR200,200_.jpg',
    },
];

const names = ['join','peter','susan'];
const newNames = names.map((name)=>{
    console.log(name)
    return <h1>{name}</h1>
});
console.log(newNames);

function BookList(){
    return <section className='booklist'>{newNames}</section>
}


const Book =({img, title, author})=>{
    //const {img, title, author} = props
    return(
        <article className="book">
            <img src={img} alt='' />
            <h1>{title}</h1>
            <h4 style ={{color:'blue', fontSize:'0.75rem',marginTop:'0.25rem'}}>{author}</h4>
        </article>
    );
};


ReactDOM.render(<BookList />,document.getElementById('root'));