import React, { useState } from 'react'

const TodoItem = ({todo}) => {
  const [check,setCheck] = useState(todo.complete);
  const isComplete =(e)=>{
        setCheck(e);
        todo.isComplete = e;
  } 
  
  return (
    <div>
        <span>{todo.name}</span>
        <input type="checkbox" value={check} onChange={(e)=>isComplete(e.target.value)}/>
    </div>
  )
}

export default TodoItem;