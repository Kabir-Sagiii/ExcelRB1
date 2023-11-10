import { useState } from "react";
import B from "./B";

import mycontext from "./myContext";

function A() {
  let [state, setState] = useState("");
  let [data, setData] = useState("");
  return (
    <div
      style={{
        width: "500px",
        padding: "20px",
        textAlign: "center",
        boxShadow: "0 0 10px black",
        margin: "20px auto",
      }}
    >
      <h2>A Component</h2>
      <input
        type="text"
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      &nbsp;&nbsp;
      <button
        onClick={() => {
          setData(state);
        }}
      >
        Submit
      </button>
      <mycontext.Provider value={data}>
        <B />
      </mycontext.Provider>
    </div>
  );
}

export default A;
