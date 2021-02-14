import React, { useState } from "react";
import Todos from "./Todos";

// a field to filter certain items
// add a field/button that allows you to sort items

const TodoList = (props) => {
  // console.log(props.todoProps);
  console.log(props.todos);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  return (
    <>
      <div>
        <button
          type="submit"
          value="setFilter"
          onClick={() => {
            let filteredTodos;
          }}
        >
          Filter
        </button>
      </div>
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
          Sort A-Z
        </button>
        {props.todos.map((t, index) => {
          return <Todos todos={t} key={index} />;
        })}
      </div>
    </>
  );
};

export default TodoList;
