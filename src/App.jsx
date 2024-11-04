import React from 'react'
import { schemaObject } from './components/yupSchema'
import { useFormik } from 'formik'
import Child from './components/child'
const App = () => {

  const formik=useFormik({
    validationSchema:schemaObject,
    initialValues:{
      name:'',
      email:'',
      password:'',
      confirm_password:'',
    },
    onSubmit:(values)=>{
      console.log(values)
    }
  })
  return (
    <div>
      
      {/* <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
         <input id="name"
         
         type='text' value={formik.values.name} onChange={formik.handleChange} /> <br />

         <label htmlFor="email">email</label>
         <input id="email"
         name="email"
         type='text' value={formik.values.email} onChange={formik.handleChange}/><br />
         
         <label htmlFor="password">password</label>
         <input  id="name" type='text' value={formik.values.password} onChange={formik.handleChange}/> <br />

         <label htmlFor="confirm_password">confirm_password</label>
         <input id="name" type='text' value={formik.values.confirm_password} onChange={formik.handleChange}/> <br />
         <button type='submit'>submit</button>
      </form> */}
      <Child/>
    </div>
  )
}

export default App