import React from 'react'
import TodoItem from '../TodoItem/TodoItem'

const TodoList = ({todos,setTodos}) => {

  return (
    <div>
       <ul>
            {todos.map((todo, index) => (
                <TodoItem key={index} todo={todo}/>
            ))}
       </ul>
    </div>
  )
}

export default TodoList