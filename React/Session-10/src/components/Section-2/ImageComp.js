import React from "react";

function ImageComp(props) {
  return (
    <div>
      <img
        style={{ borderRadius: "50%" }}
        src={props.image}
        width="150"
        height={150}
      />
      <h3>{props.title}</h3>
    </div>
  );
}

export default ImageComp;
