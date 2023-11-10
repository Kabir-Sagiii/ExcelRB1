import React from "react";
import D from "./D";
import mycontext from "./myContext";
import { useContext } from "react";

function C() {
  let info = useContext(mycontext);
  return (
    <div
      style={{
        width: "350px",
        padding: "20px",
        textAlign: "center",
        boxShadow: "0 0 10px blue",
        margin: "30px auto",
      }}
    >
      <h2>
        C Component : <span style={{ color: "red" }}>{info}</span>
      </h2>
      <D />
    </div>
  );
}

export default C;
