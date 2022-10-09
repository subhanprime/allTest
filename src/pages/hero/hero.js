import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incValue } from "./heroSlice";
const HeroPage = () => {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch()
    return (
        <>
            <h1>subhan ali {count}</h1>
            <button onClick={() => dispatch(increment())}>Increase</button>
            <button onClick={() => dispatch(decrement())}>decrease</button>
            <button onClick={() => dispatch(incValue(10))}>increase 10</button>
        </>
    )
}

export default HeroPage;