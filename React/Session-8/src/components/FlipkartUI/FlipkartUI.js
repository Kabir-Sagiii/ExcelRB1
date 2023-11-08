import React from "react";

function FlipkartUI(props) {
  return (
    <div>
      <img src={props.image} width={70} height={70} />
      <h4>{props.title}</h4>
    </div>
  );
}

export default FlipkartUI;
