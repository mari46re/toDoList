import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [tasks, setTasks] = useState([
    { task: "Wash clothes", id: 1 },
    { task: "Eat food", id: 2 },
    { task: "Play music", id: 3 },
    { task: "Drink beers", id: 4 },
  ]);

  function addTask(task) {
    console.log(`New ${task} is added!`);
    const newTask = {
      id: Date.now(),
      task: task,
    };

    setTasks((oldTasks) => oldTasks.concat(newTask));
  }

  function completeTask(id) {
    console.log(`Task ${id} is complete!`);

    setTasks((oldTasks) => oldTasks.filter((task) => task.id !== id));
  }

  return (
    <div className="App">
      <Form addTask={addTask} />
      <List completeTask={completeTask} tasks={tasks} />
    </div>
  );
}

export default App;
