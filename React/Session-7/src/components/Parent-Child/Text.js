import React from "react";

function Text(props) {
  return (
    <div>
      <h3>Text Component</h3>
      <p>{props.data}</p>
    </div>
  );
}

export default Text;
