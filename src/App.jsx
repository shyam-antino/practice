import React from "react";
import Child from "./components/child";
import ContextHook from "./components/context/createContextHok";
import Child2 from "./components/child2";
import ChildThree from "./components/child3";
import Child4 from "./components/child4";

const App = () => {
  return (
    <ContextHook>
      <div>
        <Child />
        <Child2/>
        <ChildThree/>
        <Child4 />
      </div>
    </ContextHook>
  );
};

export default App;
