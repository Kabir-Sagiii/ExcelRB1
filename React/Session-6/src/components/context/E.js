import { useContext } from "react";
import mycontext from "./myContext";

function E() {
  let contextdata = useContext(mycontext);
  return (
    <div
      style={{
        width: "250px",
        padding: "20px",
        textAlign: "center",
        boxShadow: "0 0 10px black",
        margin: "30px auto",
      }}
    >
      <h2>E Component</h2>
      <p
        style={{
          fontStyle: "italic",
          color: "green",
          fontWeight: "bold",
          fontSize: "24px",
        }}
      >
        {contextdata}
      </p>
    </div>
  );
}

export default E;
