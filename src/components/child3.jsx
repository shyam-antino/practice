import React from 'react'
import { usingContext } from './context/createContextHok';

const ChildThree = () => {
    const {setData}=usingContext();
  return (
    <div>
        <h1>to modify the data from child3</h1>
         <input type='text' onChange={(e)=>setData(e.target.value)}/>
    </div>
  )
}

export default ChildThree