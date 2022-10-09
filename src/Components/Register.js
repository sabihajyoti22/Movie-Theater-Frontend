import React, { useContext, useRef, useState } from 'react'
import Header from './Layouts/Header'
import Footer from './Layouts/Footer'
import ErrorMessage from './Layouts/ErrorMessage'
import SuccessMessage from './Layouts/SuccessMessage'

import "./CSS/Auth.Module.css"

import { UserContext } from "../UserContext"
import axios from "axios"

import { Form, Button, InputGroup } from 'react-bootstrap'


export default function Register() {
  const { serverURL } = useContext(UserContext)
  const Password = useRef()
  const CPassword = useRef()
  const [error, setError] = useState("")
  const [errorMessage, setErrorMessage] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [showPass, setShowPass] = useState(false)
  const [CshowPass, setCShowPass] = useState(false)
  
  const [registerData, setRegisterData] = useState({
    name: "",
    phone: "",
    email: "",
    gender: "",
    password: "",
    image: "",
  })

  const handleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value })
  }

  const handleImage = (e) => {
    if (e.target.files[0].type === "image/png" || e.target.files[0].type === "image/jpg" || e.target.files[0].type === "image/jpeg") {
      setErrorMessage(false)
      setRegisterData({ ...registerData, [e.target.name]: e.target.files[0] })
    }
    else {
      setErrorMessage(true)
    }
  }

  const handleSubmit = (e) => {
    if (Password.current.value !== CPassword.current.value) {
      e.preventDefault()
      setPasswordError(true)
    }
    else {
      setPasswordError(false)
      e.preventDefault()

      const formData = new FormData()

      formData.append("fullname", registerData.name)
      formData.append("mobileNo", registerData.phone)
      formData.append("email", registerData.email)
      formData.append("gender", registerData.gender)
      formData.append("password", registerData.password)
      registerData.image && formData.append("image", registerData.image, registerData.image.name)

      axios.post(serverURL + "/api/client/register", formData)
        .then((res) => {
          if (res.status === 201) {
            setSuccessMessage(true)
            setTimeout(()=>{
            setSuccessMessage(false)
            }, 2000)
          }
          else {
            throw new Error("Couldn't create review")
          }
        })
        .catch((error) => {
          setError(error.message)
        })

        setRegisterData({
        name: "",
        phone: "",
        email: "",
        gender: "",
        password: "",
        image: "",
      })
      CPassword.current.value = ""
    }
  }

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

  const clickHandlerConfirm = () => {
    if (CshowPass) {
      CPassword.current.type = "password"
      setCShowPass(false)
    }
    else {
      CPassword.current.type = "text"
      setCShowPass(true)
    }
  }
  

  return (
    <>
      <Header />

      {error && <h1 className='text-white'>{error}</h1>}

      <div className='login-div d-flex justify-content-center align-items-center'>
        <div className='login-form my-5 pb-4'>

          <h4 className='login-header text-center py-3'>Register Here</h4>

          <Form className='px-4 pt-4' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Enter Full Name:</Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter Full Name" onChange={handleChange} value={registerData.name} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Enter Phone No:</Form.Label>
              <Form.Control type="text" name="phone" placeholder="Enter Phone No" onChange={handleChange} value={registerData.phone} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Email Address:</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleChange} value={registerData.email} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicGender">
              <Form.Label>Gender:</Form.Label>
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="Male"
                    name="gender"
                    type={type}
                    value="Male"
                    id={`inline-${type}-1`}
                    onChange={handleChange}
                  />
                  <Form.Check
                    inline
                    label="Female"
                    name="gender"
                    type={type}
                    value="Female"
                    id={`inline-${type}-2`}
                    onChange={handleChange}
                  />
                </div>
              ))}
            </Form.Group>

            <Form.Label>Password</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                type='password'
                name="password"
                placeholder="Password"
                aria-label="password"
                aria-describedby="basic-addon2"
                value={registerData.password}
                onChange={handleChange} ref={Password}
              />
              <InputGroup.Text>
                <i onClick={clickHandler} className={showPass ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
              </InputGroup.Text>
            </InputGroup>

            <Form.Label>Confirm Password</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                type='password'
                placeholder="Confirm Password"
                aria-label="Confirm Password"
                aria-describedby="basic-addon2" ref={CPassword}
              />
              <InputGroup.Text>
                <i onClick={clickHandlerConfirm} className={CshowPass ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
              </InputGroup.Text>
            </InputGroup>

            {passwordError && <ErrorMessage msg="Paswords didn't match" />}

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Choose An Image(optional)</Form.Label>
              <Form.Control type="file" name="image" onChange={handleImage} />
            </Form.Group>

            {errorMessage && <ErrorMessage msg="Please Insert only PNG, JPG, or JPEG Files" />}

            {successMessage && <SuccessMessage msg="New User has Created" />}


            <Button variant="primary" type="submit" className='w-100 mb-3 mt-3'>
              Submit
            </Button>

            <hr />

          </Form>
          <div className='text-center'>
            <small>Already have an account? </small>
            <a href='/login' className='text-decoration-none' style={{ color: '#A358D1' }}>Login here</a>
          </div>
          
        </div>
      </div>
      <Footer />
    </>
  )
}
