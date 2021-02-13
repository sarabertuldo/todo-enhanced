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
      <div>
        <button type="filter" value="filterTodos">
          Filter
        </button>
      </div>
      <input />
      <div>
        <button
          type="submit"
          value="sortTodos"
          onClick={() => {
            let sortedTodos = props.todos.sort((a, b) =>
              a.username > b.username ? 1 : -1
            );
            setSort([sortedTodos]);
            console.log(sortedTodos);
          }}
        >
          Sort By
        </button>
        {props.todos.map((t, index) => {
          return <Todo todos={t} key={index} />;
        })}
      </div>
    </>
  );
};

export default TodoList;
