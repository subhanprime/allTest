import React from 'react'
import { Outlet } from 'react-router-dom'

function PostLayout() {
    return (<>
        <h1>PostLayout components !!!</h1>
        <Outlet/>
    </>)
}

export default PostLayout