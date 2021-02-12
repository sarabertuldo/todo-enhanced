import React, { useState } from "react";
import TodoList from "./TodoList";

// TodoApp is my entry page

const TodoApp = (props) => {
  // username, title, todos
  const [username, setUsername] = useState("");
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
      />
      <label
        htmlFor="task"
        id="task"
        value={task}
        type="text"
        onChange={(e) => setTask(e.target.value)}
      >
        Task
      </label>
      <input />
      <button
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
      {/* <TodoList childName = {} */}
      {/* // first todos how to access in child, todos in TodoList would have to changed
// second is the value, what i want  */}
      {/* <TodoList todoProps= {todos} /> */}
      <TodoList todos={todos} />
    </>
  );
};

export default TodoApp;
