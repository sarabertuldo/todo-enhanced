import React, { useState } from "react";
import Todos from "./Todos";

// a field to filter certain items
// add a field/button that allows you to sort items

const TodoList = (props) => {
  // console.log(props.todoProps);
  console.log(props.todos);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  // const [completed, setCompleted] = useState(true);
  return (
    <>
      <div class="center">
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
      <div class="center">
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
      </div>
      <div class="listArea">
        {props.todos.map((t, index) => {
          return <Todos todos={t} key={index} />;
        })}
      </div>
    </>
  );
};

export default TodoList;
