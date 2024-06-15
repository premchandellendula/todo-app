import React from 'react'

const Appbar = ({firstname="User"}) => {
  return (
    <div className='flex justify-between shadow h-14'>
        <div className='flex flex-col justify-center h-full ml-2 text-2xl font-bold'>
            Todo-app
        </div>
        <div className='flex justify-center h-full ml-4 items-center'>
        Hello, {firstname}
        <div className='rounded-full h-10 w-8 bg-slate-200 flex justify-center mt-1 mr-2 ml-2'>
          <div className='flex flex-col justify-center h-full text-xl'>
            {firstname[0]}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appbar