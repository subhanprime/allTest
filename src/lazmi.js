import React from 'react'
import { useFormik } from 'formik'
const initialValues = {
    name:'',
    email:'',
    passwords:'',
}
function Lazmi() {

    const Formik = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {

        }
    });
    return (
        <div>
            <h1>Lazmi js</h1>
            <form>
                <label>name</label>
                <input type="text" name="name" />
                <br />
                <label>email</label>
                <input type="email" name="email" />
                <br />
                <label>passwords</label>
                <input type="passwords" name="passwrod" />
                <br/>
                <button className='m-3' type="submit">Push me</button>
            </form>
        </div>
    )
}

export default Lazmi