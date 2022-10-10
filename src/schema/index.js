import * as Yup from 'yup';
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
export const signupSchema = Yup.object({
    name: Yup.string().max(30).min(3).required('Please enter Value'),
    email: Yup.string().email().required('Please Enter your Email'),
    passwords: Yup.string().min(3).required('please Enter your paawords'),
    confirm_password: Yup.string().required().oneOf([Yup.ref("passwords"), null], "password must be match"),
    file: Yup.mixed().required('this is laxmi').test("FILE_SIZE", "The file is too large",
        (value) => value && value.size <= 1024 * 1024)
        .test('FILE_FORMAT', "this type of format is not supperted", value => SUPPORTED_FORMATS.includes(value.type))
});