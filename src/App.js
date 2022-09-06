import logo from './logo.svg';
import './App.css';
import TodoForm from './TodoForm/TodoForm';
import { useState } from 'react';

function App() {
  const [todo,setTodo] = useState("");
  return (
    <div >
      <TodoForm todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
