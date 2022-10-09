import React from "react";
import { NavLink, Outlet, } from 'react-router-dom'
const numb = ({ isActive }) => { return { backgroundColor: isActive ? 'red' : 'white' } };
const Headers = () => {
    return <>
        <h1>headerrs</h1>
        <NavLink to="/home" style={numb}>home</NavLink>
        <NavLink to="/coin" style={numb}>Coin</NavLink>
        <NavLink to="/post" style={numb}>Post</NavLink>
        <Outlet />
    </>
}

export default Headers