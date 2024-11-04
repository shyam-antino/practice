import * as yup from 'yup'

export const schemaObject= yup.object({
    name:yup.string().required(),
    email:yup.string().email().required("enter valid email"),
    password:yup.string().min(2).max(10).required("please enter password"),
    confirm_password:yup.string().oneOf([yup.ref("password"),null],"passwords are not matching")
})