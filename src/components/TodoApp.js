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
      <h1 class="center">To Do List:</h1>
      <div class="inputArea center">
        <label htmlFor="username"></label>
        <input
          id="username"
          className="username"
          value={username}
          placeholder="Add name"
          onChange={(e) => setUsername(e.target.value)}
          type="text"
        />
      </div>
      <div class="inputArea center">
        <label htmlFor="task"></label>
        <input
          id="task"
          value={task}
          placeholder="Add task"
          onChange={(e) => setTask(e.target.value)}
          type="text"
        />
      </div>
      <p class="center">
        {username} {task}
      </p>
      <div class="center">
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
          Submit
        </button>
      </div>
      <div>
        <TodoList todos={todos} />
      </div>
      <div class="center">
        <Todos todos={todos} />
      </div>
    </>
  );
};

export default TodoApp;
