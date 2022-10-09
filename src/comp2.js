import React, { useState } from 'react';
import Hoc from './hoc';
const url = 'https://jsonplaceholder.typicode.com/albums';
function TodoList(props) {
    return (
        <div className='comp2'>
            <h1>components two</h1>
            <h1>{props.count}</h1>
            <h2>{props.name}</h2>
            <p>{props.intent}</p>
            <button onMouseOver={props.incremet}>increment on hover</button>
            {props.userList}
        </div>
    )
}

export default Hoc(TodoList,'albums');