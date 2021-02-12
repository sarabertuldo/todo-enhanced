import React, { useState } from "react";
import TodoApp from "./TodoApp";
import TodoList from "./TodoList";

// change the background color of completed items to green
// add a key for completed/incomplete and a button to allow for that item to be toggled together
// the ability to keep track of what item was mostly recently added
// buttons to delete items from the list

const Todo = (props) => {
  return (
    <>
      <li>
        {props.username} - {props.task}
      </li>
      {/* <Todo username={username} />
      <Todo task={task} /> */}
      <label htmlFor=""></label>
    </>
  );
};

export default Todo;
