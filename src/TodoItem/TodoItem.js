import React, { useState } from 'react'
import './TodoItem.css';

const TodoItem = ({todo}) => {
  const [check,setCheck] = useState(todo.complete);
  const isComplete =(e)=>{
        setCheck(e);
        todo.isComplete = e;
  } 
  
  return (
    <div className='container todo-item'>
      <div className='row'>
        <span className='todo-name col col-8'>
          {todo.name}
        </span>
        <span className='col col-2'>
          <input className='todo-checkbox' type="checkbox" value={check} onChange={(e)=>isComplete(e.target.value)}/>
        </span>
      </div>
    </div>
  )
}

export default TodoItem;