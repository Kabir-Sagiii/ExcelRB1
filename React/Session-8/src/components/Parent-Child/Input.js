import { useState } from "react";
import Text from "./Text";

function Input() {
  let [state, setState] = useState("");
  let [data, setData] = useState("");
  return (
    <div style={{ marginTop: "100px" }}>
      <h3>Input Component</h3>
      <input
        type="text"
        placeholder="Enter Some Text"
        onChange={(event) => {
          setState(event.target.value);
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
      <br />
      <hr />
      <br />
      <Text data={data} />
    </div>
  );
}

export default Input;
