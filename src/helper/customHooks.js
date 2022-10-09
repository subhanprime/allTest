import { useState, useEffect } from 'react';
function useCustomHooks() {
    const [wSize, setWSize] = useState()
    const custumSizeChecker = () => {
        setWSize(window.innerWidth)
        console.log('custumSizeChecker resize');
    }
    useEffect(() => {
        custumSizeChecker();
        window.addEventListener('resize', custumSizeChecker);
        console.log(window.innerWidth);
        return () => window.removeEventListener('resize', custumSizeChecker);
    }, [])

    return wSize;
}
export default useCustomHooks