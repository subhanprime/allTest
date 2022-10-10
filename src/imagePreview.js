import React, { useState, useEffect } from 'react'

function ImagePreview(file) {
    const [preview, setPreview] = useState();
    const fileHandler = (f) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.file);
        reader.onload = () => {
            console.log('fileHandler', reader.result);
            setPreview(reader.result)
        }
    }
    // fileHandler(file);
    useEffect(() => {
        fileHandler(file);
    }, [file])

    return (
        <div>
            <h3>Image preview</h3>
            {preview ? <img className='imagePreview' src={preview} alt="preview img" /> : "loading..."}
        </div>
    )
}

export default ImagePreview;