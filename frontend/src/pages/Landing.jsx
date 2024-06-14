import React from 'react'
import LandingAppbar from '../components/LandingAppbar'
import TodoInputs from '../components/TodoInputs'
import LandingTodos from '../components/LandingTodos'

const Landing = () => {
  return (
    <div>
        <LandingAppbar firstname={"Premchand"} />
        <div>
            <TodoInputs />
            <LandingTodos />
        </div>
    </div>
  )
}

export default Landing