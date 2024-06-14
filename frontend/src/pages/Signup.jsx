import React, { useState } from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  return (
    <div className='bg-slate-300 h-screen flex justify-center'>
        <div className='flex flex-col justify-center'>
            <div className='bg-white rounded-lg w-80 text-center p-2 h-max px-4'>
                <Heading label={"Signup"} />
                <SubHeading label={"Enter your information to create your account"} />
                <InputBox onChange={(e) => {
                  setFirstname(e.target.value)
                }} label={"First Name"} placeholder={"John"} />

                <InputBox onChange={(e) => {
                  setLastname(e.target.value)
                }} label={"Last Name"} placeholder={"Doe"} />

                <InputBox onChange={(e) => {
                  setUsername(e.target.value)
                }} label={"Username"} placeholder={"johndoe@gmail.com"} />

                <InputBox onChange={(e) => {
                  setPassword(e.target.value)
                }} label={"Password"} placeholder={"1234abcd"} />

                <div className='pt-4'>
                    <Button onClick={async () =>{
                      try {
                        const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                          username,
                          password,
                          firstname,
                          lastname
                        });
                        console.log('ok')
                        console.log(response.data.token)
                        // localStorage.setItem("token", response.data.token)
                      } catch (err) {
                        console.log('not ok')
                        console.log(err)
                      }
                      navigate("/dashboard");
                    }} label={"Sign Up"} />
                </div>
                <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"}/>
            </div>
        </div>
    </div>
  )
}

export default Signup