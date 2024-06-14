import React from 'react'
import Appbar from '../components/Appbar'
import TodoInputs from '../components/TodoInputs'
import Todos from '../components/Todos'
import { useLocation } from 'react-router-dom'

const Dashboard = () => {
  const location = useLocation();
  const {firstname} = location.state || "";
  return (
    <div>
      <Appbar firstname={firstname} />
      <div>
        <TodoInputs />
        <Todos />
      </div>
    </div>
  )
}

export default Dashboard