import React, { useContext, useRef, useState } from 'react'
import Header from './Layouts/Header'
import Footer from './Layouts/Footer'
import axios from "axios"

import { Form, Button, InputGroup } from 'react-bootstrap'

import "./CSS/Auth.Module.css"
import { UserContext } from '../UserContext'

export default function Login({ onGetUser}) {
  const { serverURL } = useContext(UserContext)
  const Password = useRef()
  const [error, setError] = useState("")
  const [showPass, setShowPass] = useState(false)
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  })

  const clickHandler = () => {
    if (showPass) {
      Password.current.type = "password"
      setShowPass(false)
    }
    else {
      Password.current.type = "text"
      setShowPass(true)
    }
  }

  const handleChange = (e) => {
    setLoginData({...loginData, [e.target.name]: e.target.value})
  }

  const LoginUser = () => {
    axios.post(serverURL + "/api/client/login", loginData)
    .then((res)=>{
      if(res.status === 202){
        // console.log("Login Successful")
        onGetUser(res.data)
        window.location.reload()
      }
      else {
        throw new Error("Couldn't find user")
      }
    })
    .catch((err)=>{
      setError(err.message)
    })
  }

  const handleSubmit = (e) => {
     e.preventDefault()
    //  console.log(loginData)
     LoginUser()
     setLoginData({
      email: "",
      password: ""
     })
  }

  return (
    <>
      <Header />
      {error && <h1 className='text-white'>{error}</h1>}
      <div className='login-div d-flex justify-content-center align-items-center'>
        <div className='login-form my-5'>
          <h4 className='login-header text-center py-3'>Login To Buy Ticket</h4>
          <Form className='px-4 pt-4' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control name='email' type="email" placeholder="Enter email" onChange={handleChange} value={loginData.email}/>
            </Form.Group>

            <Form.Label>Password</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                type='password'
                name="password"
                placeholder="Password"
                aria-label="password"
                aria-describedby="basic-addon2"
                value={loginData.password}
                onChange={handleChange} ref={Password}
              />
              <InputGroup.Text>
                <i onClick={clickHandler} className={showPass ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
              </InputGroup.Text>
            </InputGroup>

            <Button variant="primary" type="submit" className='w-100 mb-3'>
              Submit
            </Button>
            <hr />
          </Form>
          <div className='text-center pb-4'>
            <small>Did you haven't an account yet? </small>
            <a href='/register' className='fs-6' style={{ color: '#A358D1', textDecoration: "none" }}>Register Now</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
