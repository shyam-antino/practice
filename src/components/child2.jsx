import React from "react";
import { usingContext } from "./context/createContextHok";
const Child2 = () => {
  const { data, setData } = usingContext();
  const type = typeof setData;
  return (
    <div>
      <div>from child 2</div>
      <p>{data}</p>
      <p>type: {type}</p>
    </div>
  );
};

export default Child2;
