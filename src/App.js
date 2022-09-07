import logo from './logo.svg';
import './App.css';
import TodoForm from './TodoForm/TodoForm';
import { useState } from 'react';
import TodoList from './TodoList/TodoList';

function App() {
  const [todos,setTodos] = useState([]);

  return (
    <div className='todo' >
      <h1 className='todo-title'>Todo-List</h1>
      <TodoForm todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div> 
  );
}

export default App;
