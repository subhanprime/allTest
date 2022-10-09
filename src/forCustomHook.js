import React from 'react'
import useCustomHooks from './helper/customHooks';
function ForCustomHook() {
    const customHoks = useCustomHooks();
    return (
        <div className='forCustomHook bgClr text-dark fs-1'>ForCustomHook {customHoks}</div>
    )
}

export default ForCustomHook