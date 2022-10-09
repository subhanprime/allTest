// import React from "react";
import { useDispatch, useSelector } from 'react-redux';

const Coin = () => {
    const count = useSelector(state =>state.counter.value)
    
    return (
        <>
            <h1>hi im Coin {count} </h1>
        </>
    )
}

export default Coin;