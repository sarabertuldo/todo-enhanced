import logo from './logo.svg';
import './App.css';
import TodoApp from './components/TodoApp';
import TodoList from './components/Todo';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <TodoApp />
      {/* <TodoList />
      <Todo /> */}
    </div>
  );
}

export default App;
