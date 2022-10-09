import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
console.log(useSearchParams);
function PostDetails() {

    const [searchPrams, setsearchPrams] = useSearchParams();
    console.log(searchPrams.get('max'));
    console.log(searchPrams.get('min'));
    const { category } = useParams();
    const heroFn = () => {
        // setsearchPrams('query=newLine')
    }
    return (
        <>
            <h1>Post Details {category} !!!</h1>
            <h2>serching query value patametters max value {searchPrams.get('max')} and min value {searchPrams.get('min')}</h2>
            {/* <button onClick={heroFn}>push me</button> */}
        </>
    )
}

export default PostDetails;