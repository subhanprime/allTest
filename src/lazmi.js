import React, { useRef } from 'react';
import { useFormik } from 'formik';
import { signupSchema } from './schema';
import ImagePreview from './imagePreview.js'
const initialValues = {
    name: '',
    email: '',
    passwords: '',
    checked: [],
    file: '',
}
function Lazmi() {
    const { handleSubmit, handleChange, values, errors, touched, handleBlur, setFieldValue } = useFormik({
        initialValues,
        validationSchema: signupSchema,
        onSubmit: (values, action) => {
            action.resetForm();
        }
    });
    const fileRef = useRef(null);
    console.log(errors);
    return (
        <div>
            <h1>Lazmi js</h1>
            {values.file ? <ImagePreview file={values.file} /> : null}
            <form onSubmit={handleSubmit}>
                {/* <label>file Upload</label> */}
                <button  onClick={() => fileRef.current.click()}>file Upload</button>
                <input ref={fileRef} hidden type="file" name='file' onChange={(e) => { setFieldValue('file', e.target.files[0]) }} />
                {errors.file && touched.file ? (<div>{errors.file}</div>) : null}
                <br></br>
                <label>name</label>
                <input type="text" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
                {/* <br /> */}
                {errors.name && touched.name ? (<div>{errors.name}</div>) : null}
                <br />
                <label>email</label>
                <input type="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                {errors.email && touched.email ? (<div>{errors.email}</div>) : null}
                <br />
                <label>passwords</label>
                <input type="passwords" name="passwords" value={values.passwords} onChange={handleChange} onBlur={handleBlur} />
                {errors.passwords && touched.passwords ? (<div>{errors.passwords}</div>) : null}
                <br />
                <div role="group" aria-labelledby="checkbox-group">
                    <label>
                        <input type="checkbox" name="checked" value="One" />
                        One
                    </label>
                    <label>
                        <input type="checkbox" name="checked" value="Two" />
                        Two
                    </label>
                    <label>
                        <input type="checkbox" name="checked" value="Three" />
                        Three
                    </label>
                </div>
                <button className='m-3' type="submit">Push me</button>
            </form>
        </div>
    )
}

export default Lazmi