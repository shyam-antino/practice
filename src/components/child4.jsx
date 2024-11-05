import React from 'react'
import { usingContext } from './context/createContextHok'

const Child4 = () => {
   const {setup}= usingContext();
  return (
    <div>
        {setup}
    </div>
  )
}

export default Child4