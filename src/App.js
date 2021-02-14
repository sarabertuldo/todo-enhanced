import logo from "./logo.svg";
import "./App.css";
import TodoApp from "./components/TodoApp";
import TodoList from "./components/Todos";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App background">
      <TodoApp />
      {/* <TodoList />
      <Todos /> */}
    </div>
  );
}

export default App;
