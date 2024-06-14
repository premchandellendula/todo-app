import React from 'react'

const Appbar = ({firstname}) => {
  return (
    <div className='flex justify-between shadow h-14'>
        <div className='flex flex-col justify-center h-full ml-2 text-2xl font-bold'>
            Todo-app
        </div>
        <div>
          Hello, {firstname}
        </div>
    </div>
  )
}

export default Appbar