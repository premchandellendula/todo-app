import axios from 'axios'
import React, { useState } from 'react'

const TodoInputs = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
  return (
    <div className='flex justify-center'>
        <div className='m-6 w-4/5'>
            <div>
                <div className='text-md font-medium text-left py-2'>
                    Title
                </div>
                <input onChange={(e) => {
                    setTitle(e.target.value)
                }} type="text" placeholder='Enter the title' className='border border-slate-300 rounded w-full px-4 py-2'/>
            </div>
            <div>
                <div className='text-md font-medium text-left py-2'>
                    Description
                </div>
                <input onChange={(e) => {
                    setDescription(e.target.value)
                }} type="text" placeholder='Enter the description' className='border border-slate-300 rounded w-full px-4 py-2'/>
            </div>
        </div>
        <div className='m-6 flex justify-center w-1/5 items-center'>
            <button onClick={() => {
                axios.post("http://localhost:3000/api/v1/todos/todo", {
                    title,
                    description
                },{
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token")
                    }
                })
            }} type='button' className='text-white bg-green-800 hover:bg-green-900 focus:outline-none h-10 rounded-lg font-medium text-md w-20 text-center'>Add</button>
        </div>
    </div>
  )
}

export default TodoInputs