import React, { useEffect, useState } from 'react'

const Todos = () => {
    const [todos, setTodos] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/todos/todo")
            .then(response => {
                setTodos(response.data.todos)
            })
    },[])
  return (
    <div className='m-6'>
        <div className="font-bold mt-6 text-lg">
            Todos
        </div>
        <div>
            {todos.map(todo => <Todo key={todo._id} todo={todo} />)}
        </div>
    </div>
  )
}

function Todo({todo}) {
    
    return <div className="flex justify-between">
            
    </div>
}

export default Todos