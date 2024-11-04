import React, { useCallback, useState } from 'react'
import Child2 from './child2'

const Child = () => {
    console.log("child is rendered")

    const [count,setCount]=useState(0);
    const [data,setData]=useState(10);
    const Childer=useCallback(()=>{
        return Child2
    },[data])
    const handler=(e)=>{
      e.preventDefault();
      console.log("yes it is")
    }


    
  return (
    <div>
        <Childer/>
         <form onSubmit={(e)=>handler(e)}>
          <input type='text'/>
          <button type='submit'>button</button>
        </form>
         <button onClick={()=>{setCount(count+1)}}>count button</button>
         <button onClick={()=>{setData(data+1)}}>data button</button>
    </div>
  )
}

export default Child