import React, { useState } from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  return (
    <div className='bg-slate-300 h-screen flex justify-center'>
        <div className='flex flex-col justify-center'>
            <div className='bg-white rounded-lg w-80 text-center p-2 h-max px-4'>
                <Heading label={"Signin"} />
                <SubHeading label={"Enter you credentials to access your account"} />
                <InputBox onChange={(e) => {
                  setUsername(e.target.value)
                }} label={"Username"} placeholder={"johndoe@gmail.com"} />

                <InputBox onChange={(e) => {
                  setPassword(e.target.value)
                }} label={"Password"} placeholder={"1234abcd"} />

                <div className='pt-4'>
                    <Button onClick={async () => {
                      const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                        username,
                        password
                      })

                      // console.log(response.data)
                      localStorage.setItem("token", response.data.token)
                      navigate('/dashboard')
                    }} label={"Sign In"} />
                </div>
                <BottomWarning label={"Don't have an account?"} buttonText={"Sign Up"} to={"/signup"} />
            </div>
        </div>
    </div>
  )
}

export default Signin