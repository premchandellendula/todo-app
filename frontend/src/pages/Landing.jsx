import React from 'react'
import LandingAppbar from '../components/LandingAppbar'
import TodoInputs from '../components/TodoInputs'
import Todos from '../components/Todos'

const Landing = () => {
  return (
    <div>
        <LandingAppbar firstname={"Premchand"} />
        <div>
            <TodoInputs />
            <Todos />
        </div>
    </div>
  )
}

export default Landing