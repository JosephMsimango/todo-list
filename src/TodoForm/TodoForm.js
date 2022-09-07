import React, { useState } from 'react'
import './TodoForm.css';

const TodoForm = ({setTodos,todos}) => {
    const [todo,setTodo] = useState({name:'',complete:false});
    const addTodos = (todo) =>{
        if (todo.name !== ''){
            setTodos([...todos,todo])
            setTodo({name:'',complete:false})
        }
    }

    return (
        <div className='todo-form'>
            <input 
                type='text' 
                placeholder='Type todo here..' 
                className='todo-input'
                value={todo.name}
                onChange={(e)=>setTodo(
                    {
                        name:e.target.value,
                        complete:false
                    }
                )}
            />
            <button 
                className='todo-add-btn' 
                type='submit'
                onClick={()=>addTodos(todo)}
                
            >
                Add 
            </button>
        </div>
    )
}

export default TodoForm