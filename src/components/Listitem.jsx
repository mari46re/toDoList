import React from "react";
import Button from "./Button";

function Listitem(props) {
  return (
    <li>
      <p>{props.task}</p>
      <button onClick={() => props.completeTask(props.id)}>Complete</button>
    </li>
  );
}

export default Listitem;
