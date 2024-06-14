import React from 'react'

const LandingAppbar = ({firstname}) => {
  return (
    <div className='flex justify-between shadow h-14'>
        <div className='flex flex-col justify-center h-full ml-2 text-2xl font-bold'>
            Todo-app
        </div>
        <div className='flex justify-center'>
            <button type='button' className='w-full text-gray-800 bg-gray-300 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-4 mb-4'>Signin</button>
            <button type='button' className='w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-4 mb-4'>Signup</button>
        </div>
    </div>
  )
}

export default LandingAppbar