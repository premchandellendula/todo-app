import React from 'react'
import Appbar from '../components/Appbar'
import TodoInputs from '../components/TodoInputs'
import Todos from '../components/Todos'

const Dashboard = () => {
  return (
    <div>
      <Appbar />
      <div>
        <TodoInputs />
        <Todos />
      </div>
    </div>
  )
}

export default Dashboard