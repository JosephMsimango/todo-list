import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import './TodoList.css';


const TodoList = ({todos,setTodos}) => {

  return (
    <div className='container pt-4'>
       <ul className='row row-no-padding'>
            {todos.map((todo, index) => (
                <TodoItem key={index} todo={todo}/>
            ))}
       </ul>
    </div>
  )
}

export default TodoList