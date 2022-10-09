import React, { useState, useEffect } from 'react'
import useCustomHooks from './helper/customHooks';
import Hoc from './hoc';
const url = 'https://jsonplaceholder.typicode.com/users';
function UserList(props) {
    const { count, name, incremet, intent, userList } = props;
    const [term, setterms] = useState([]);
    const customHoks = useCustomHooks();

    return (
        <div className='comp1'>
            <h1>components one {customHoks}</h1>
            <h1>{count}</h1>
            <h2>{name}</h2>
            <p>{intent}</p>
            <button onClick={props.incremet}>increment</button>
            <br />
            <input type="text" onChange={e => setterms(e.target.value)} />
            {userList}
        </div>
    );
}
export default Hoc(UserList, 'users');