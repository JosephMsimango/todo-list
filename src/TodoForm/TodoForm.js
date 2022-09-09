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
        <div className='container'>
           <div className='row'>
                <div className='col-8'>
                <input 
                    type='text'
                    placeholder='Type todo here..'
                    className='todo-input'
                    maxLength={20}
                    value={todo.name}
                    onChange={(e)=>setTodo(
                        {
                            name:e.target.value,
                            complete:false
                        }
                        )}
                    autoFocus
                    />
                </div>
                <div className='col-2'>
                <button 
                    className='todo-add-btn' 
                    type='submit'
                    onClick={()=>addTodos(todo)}
                    >
                    Add 
                </button>
                </div>
           </div>
        </div>
    )
}

export default TodoForm