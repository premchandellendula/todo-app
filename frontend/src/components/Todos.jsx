import React, { useEffect, useState } from 'react'
import axios from "axios"

const Todos = () => {
    const [todos, setTodos] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/todos/todo", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
        .then(response => {
            setTodos(response.data.todos)
            // console.log(response.data)
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
    
    return <div className="w-4/5 shadow ml-20 mr-6 my-6 flex border  rounded px-4 py-5">
        <div className='flex items-center mx-4 my-4'>
            <input type="checkbox" name="done" id="done" className='h-5 w-5 accent-green-600'/>
        </div>
        <div className='shadow border rounded mx-5 w-4/5 py-3 px-3'>
            <div className='font-medium text-lg'>
                {todo.title}
            </div>
            <div className='font-normal text-gray-800'>
                {todo.description}
            </div>
        </div>
        <div className='flex justify-center'>
            <div className='flex flex-col justify-center gap-2'>
                <button type='button' className='text-white bg-blue-700 hover:bg-blue-800 rounded px-3 py-1'>Edit</button>
                <button type='button' className='text-white bg-red-600 hover:bg-red-700 rounded px-3 py-1'>Delete</button>
            </div>
        </div>
    </div>
}

export default Todos