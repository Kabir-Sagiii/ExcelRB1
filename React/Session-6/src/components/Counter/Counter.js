import { useState } from "react";

function Counter() {
  let [state, setState] = useState(0);

  let updateCount = () => {
    setState(state + 5);
  };

  let DecCount = () => {
    setState(state - 1);
  };

  //   var countValue = 0;

  //   let updateCount = () => {
  //     countValue = countValue + 1;
  //     console.log(countValue);
  //   };

  return (
    <div
      style={{
        width: "400px",
        boxShadow: "0 0 10px black",
        textAlign: "center",
        padding: "50px",
        margin: "50px auto",
      }}
    >
      <h2>Count Value is {state} </h2>
      <button style={{ marginTop: "20px" }} onClick={updateCount}>
        Increase Count
      </button>
      &nbsp;&nbsp;
      <button style={{ marginTop: "20px" }} onClick={DecCount}>
        Decrease Count
      </button>
    </div>
  );
}

export default Counter;
