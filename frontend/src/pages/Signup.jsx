import React from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'

const Signup = () => {
  return (
    <div className='bg-slate-300 h-screen flex justify-center'>
        <div className='flex flex-col justify-center'>
            <div className='bg-white rounded-lg w-80 text-center p-2 h-max px-4'>
                <Heading label={"Signup"} />
                <SubHeading label={"Enter your information to create your account"} />
                <InputBox label={"First Name"} placeholder={"John"} />
                <InputBox label={"Last Name"} placeholder={"Doe"} />
                <InputBox label={"Username"} placeholder={"johndoe@gmail.com"} />
                <InputBox label={"Password"} placeholder={"1234abcd"} />
                <div className='pt-4'>
                    <Button label={"Sign Up"} />
                </div>
                <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"}/>
            </div>
        </div>
    </div>
  )
}

export default Signup