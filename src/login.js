import React from 'react'
import { useLocation } from 'react-router-dom';
function Login() {
    const location = useLocation();
    
    return (
        <h1>Login Value</h1>
    )

}

export default Login