import React from "react";
import C from "./C";

function B() {
  return (
    <div
      style={{
        width: "400px",
        padding: "20px",
        textAlign: "center",
        boxShadow: "0 0 10px green",
        margin: "30px auto",
      }}
    >
      <h2>B Component</h2>
      <C />
    </div>
  );
}

export default B;
