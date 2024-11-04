import React, { useCallback, useState } from "react";


import Child2 from "./child2";
import { usingContext } from "./context/createContextHok";

const Child = () => {
 const {data}=usingContext();
  return (
    <div>
        from child 1 
        <p>{data}</p>
    </div>
  );
};

export default Child;
