import React from "react";
import Button from "./Button";

function Form(props) {
  function submit(e) {
    e.preventDefault();
    props.addTask(e.target.elements.task.value);
  }

  return (
    <form onSubmit={submit}>
      <input type="text" name="task" />
      <button>Add</button>
    </form>
  );
}

export default Form;
