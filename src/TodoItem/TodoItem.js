import React, { useState } from 'react'
import './TodoItem.css';
import {FaTrashAlt,FaCheckSquare,FaSquare } from 'react-icons/fa';

const TodoItem = ({todo}) => {
  const [check,setCheck] = useState(todo.complete);
  const isComplete =(e)=>{
        setCheck(e);
        todo.isComplete = e;
  } 
  
  return (
    <div className='container pt-2'>
      <div className='row'>
        <div className='col-8'>
          {
            check? <text className='todo-name-line-through'>{todo.name}</text>:  <text className='todo-name'>{todo.name}</text>
          }
        </div>
        <div className='col-4 d-flex justify-content-around align-items-center'>
            {
              check?<FaCheckSquare className='fa-check-square' onClick={()=>setCheck(false)}/>: <FaSquare className='fa-square' onClick={()=>setCheck(true)}/>
            }
          <FaTrashAlt className='fa-trash-alt'/>
        </div>
      </div>
    </div>
  )
}

export default TodoItem;