import React from 'react'

const TodoForm = ({setTodo,todo}) => {
  return (
    <div>
        <input type='text' placeholder='Type todo here..' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
        <button> + </button>
    </div>
  )
}
s
export default TodoForm