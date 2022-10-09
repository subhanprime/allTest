import { useState, useEffect } from "react";
import axios from "axios";
function useFetchFile() {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    async function apicall() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(el => {
            setData(el.data);
        }).catch(el => setError(true))
            .finally(_ => setLoading(false))
    }
    useEffect(() => {
        setTimeout(el => {
            apicall();
        },1000);
    }, [])

    return [data,loading,error];

}

export default useFetchFile;