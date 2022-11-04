import React from "react";
import Listitem from "./Listitem";

function List(props) {
  console.log("here are my tasks:", props.tasks);
  return (
    <>
      <h1>To-do list</h1>
      <ul>
        {props.tasks.map((task) => (
          <Listitem
            completeTask={props.completeTask}
            task={task.task}
            id={task.id}
            key={task.id}
          />
        ))}
      </ul>
    </>
  );
}

export default List;
