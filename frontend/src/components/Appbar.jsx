import React from 'react'

const Appbar = () => {
  return (
    <div>
        <div className='flex justify-center h-full ml-4 items-center p-2 text-md'>
            Hello, {firstname}
            <div className='rounded-full h-10 w-10 bg-slate-200 flex justify-center mt-1 mr-2 ml-2'>
                <div className='flex flex-col justify-center text-xl h-full'>
                    {firstname[0]}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Appbar