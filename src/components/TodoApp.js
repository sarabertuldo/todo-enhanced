import React, { useState } from "react";
import Todos from "./Todos";
import TodoList from "./TodoList";

// TodoApp is my entry page

const TodoApp = (props) => {
  // username, title, todos
  const [username, setUsername] = useState("");
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <>
      <div class="inputArea">
        <label htmlFor="username">Name</label>
        <input
          id="username"
          className="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
        />
        {/* </div>
      <div> */}
        <label htmlFor="task">Task</label>
        <input
          id="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          type="text"
        />
      </div>
      <p>
        {username} - {task}
      </p>
      <input />
      <button
        type="submit"
        value="addTodo"
        onClick={() => {
          let newTodo = {
            task,
            username,
          };
          console.log(newTodo);
          setTodos([...todos, newTodo]);
          setUsername("");
          setTask("");
        }}
      >
        {" "}
        Add Todo
      </button>
      <TodoList todos={todos} />
      <Todos todos={todos} />
    </>
  );
};

export default TodoApp;
