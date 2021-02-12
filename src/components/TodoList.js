import React, { useState } from "react";
import Todo from "./Todo";

// a field to filter certain items
// add a field/button that allows you to sort items

const TodoList = (props) => {
  // console.log(props.todoProps);
  console.log(props.todos);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("username");
  return (
    <>
      <li>
        {props.username} {props.task}
      </li>
      <label>Filter</label>
      {props.todos.filter}
      <input />
      <button>Sort By</button>
      {/* take each element and the index of that element
    for each of those represent the {t} component and the key {idx} */}
      {/* {props.todosProps.map}... */}
      {props.todos.map((t, idx) => {
        return <Todo todo={t} k={idx} />;
      })}
    </>
  );
};

export default TodoList;
