import React, { useContext, useRef, useState } from 'react'
import Header from './Layouts/Header'
import Footer from './Layouts/Footer'
import AdminPanel from './AdminPanel'
import ErrorMessage from './Layouts/ErrorMessage'

import { Form, Button, Row, Col } from 'react-bootstrap'
import { TiDelete } from "react-icons/ti"

import 'react-calendar/dist/Calendar.css'
import "./CSS/Auth.Module.css"

import { UserContext } from '../UserContext'
import axios from 'axios'

export default function Admin() {
  const { userLoggedIn, serverURL } = useContext(UserContext)
  const obj = {
    id: "",
    time: ""
  }
  var nodeValue;
  var time;
  const [error, setError] = useState("")
  const [errorMessage, setErrorMessage] = useState()
  const [flag1, setFlag1] = useState(false)
  const [flag2, setFlag2] = useState(false)
  const [flag3, setFlag3] = useState(false)
  const [flag4, setFlag4] = useState(false)
  const [time1, setTime1] = useState([])
  const [time2, setTime2] = useState([])
  const [time3, setTime3] = useState([])
  const [time4, setTime4] = useState([])
  const [movieInfo, setMovieInfo] = useState({
    name: "",
    duration: "",
    release: "",
    genre: "",
    price: "",
    category: "",
    location: [],
    hall: {
      hall1: [],
      hall2: [],
      hall3: [],
      hall4: [],
    },
    image: "",
  })

  const { name, duration, release, genre, price, category, location, hall, image } = movieInfo

  const selectedTime1 = useRef()
  const selectedTime2 = useRef()
  const selectedTime3 = useRef()
  const selectedTime4 = useRef()

  const handleChange = (e) => {
    setMovieInfo({ ...movieInfo, [e.target.name]: e.target.value })
  }

  const handleCheckboxLocation = (e) => {
      location.push(e.target.value)
  }

  const handleAddTime = (e) => {
    nodeValue = e.target.parentElement.parentElement.parentElement.previousElementSibling.firstChild.value
    switch (nodeValue) {
      case "Hall 1":
        time = selectedTime1.current.value

        if (time) {
          if (time.split(":")[0] > 12) {
            obj.id = new Date()
            obj.time = time.split(":")[0] - 12 + ":" + time.split(":")[1] + " PM"
            setTime1((oldArray) => [...oldArray, obj])
          }
          else {
            obj.id = new Date()
            obj.time = time + " AM"
            setTime1((oldArray) => [...oldArray, obj])
          }
        }
        break;

      case "Hall 2":
        time = selectedTime2.current.value

        if (time) {
          if (time.split(":")[0] > 12) {
            obj.id = new Date()
            obj.time = time.split(":")[0] - 12 + ":" + time.split(":")[1] + " PM"
            setTime2((oldArray) => [...oldArray, obj])
          }
          else {
            obj.id = new Date()
            obj.time = time + " AM"
            setTime2((oldArray) => [...oldArray, obj])
          }
        }
        break;

      case "Hall 3":
        time = selectedTime3.current.value

        if (time) {
          if (time.split(":")[0] > 12) {
            obj.id = new Date()
            obj.time = time.split(":")[0] - 12 + ":" + time.split(":")[1] + " PM"
            setTime3((oldArray) => [...oldArray, obj])
          }
          else {
            obj.id = new Date()
            obj.time = time + " AM"
            setTime3((oldArray) => [...oldArray, obj])
          }
        }
        break;

      case "Hall 4":
        time = selectedTime4.current.value

        if (time) {
          if (time.split(":")[0] > 12) {
            obj.id = new Date()
            obj.time = time.split(":")[0] - 12 + ":" + time.split(":")[1] + " PM"
            setTime4((oldArray) => [...oldArray, obj])
          }
          else {
            obj.id = new Date()
            obj.time = time + " AM"
            setTime4((oldArray) => [...oldArray, obj])
          }
        }
        break;
        default:
          break;
    }
  }

  const handleDeleteTime = (id) => {
    setTime1(time1.filter(item => item.id !== id))
  }

  const handleImage = (e) => {
    if (e.target.files[0].type === "image/png" || e.target.files[0].type === "image/jpg" || e.target.files[0].type === "image/jpeg") {
      setErrorMessage(false)
      setMovieInfo({ ...movieInfo, [e.target.name]: e.target.files[0] })
    }
    else {
      setErrorMessage(true)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    hall.hall1 = time1
    hall.hall2 = time2
    hall.hall3 = time3
    hall.hall4 = time4

    const formData = new FormData()

    formData.append("name", name)
    formData.append("duration", duration)
    formData.append("release", release)
    formData.append("genre", genre)
    formData.append("price", price)
    formData.append("category", category)
    location.forEach(loc => {formData.append("location[]", loc)})
    formData.append("hall", JSON.stringify(hall))
    // Object.keys(hall).forEach(key => formData.append(key, object[key]));
    image && formData.append("image", image, image.name)

    axios.post(serverURL + '/api/admin', formData)
    .then((res) => {
      if (res.status === 201) {
        // setSuccessMessage(true)
        // setTimeout(()=>{
        // setSuccessMessage(false)
        // }, 2000)
        console.log("Movie Created")
      }
      else {
        throw new Error("Couldn't create review")
      }
    })
    .catch((error) => {
      setError(error.message)
    })

  }

  return (
    <>
      <Header />
      {error && <h1 className='text-white'>{error}</h1>}
      <div className='login-div py-5 d-flex justify-content-center align-items-center flex-column'>
        <div className='login-form'>
          <h4 className='login-header text-center py-3'>Enter New Movie Details</h4>
          <Form className='px-4 py-4' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Movie Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter Movie Name" required onChange={handleChange} value={name} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDuration">
              <Form.Label>Duration</Form.Label>
              <Form.Control type="text" name="duration" placeholder="Enter Duration" required onChange={handleChange} value={duration} />
            </Form.Group>

            <Form.Label>Release Date</Form.Label>
            <Form.Control type="date" name="release" placeholder="Enter release" required onChange={handleChange} value={release} />

            <Form.Group className="mb-3" controlId="formBasicGenre">
              <Form.Label>Genre</Form.Label>
              <Form.Control type="text" name="genre" placeholder="Enter Genre" required onChange={handleChange} value={genre} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" name="price" placeholder="Enter Price" required onChange={handleChange} value={price} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCategory">
              <Form.Label>Category</Form.Label>
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="2D"
                    value="2D"
                    name="category"
                    type={type}
                    id={`inline-${type}-1`}
                    onChange={handleChange}
                  />
                  <Form.Check
                    inline
                    label="3D"
                    value="3D"
                    name="category"
                    type={type}
                    id={`inline-${type}-2`}
                    onChange={handleChange}
                  />
                </div>
              ))}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLoaction">
              <Form.Label>Location</Form.Label>
              {['checkbox'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="Dhaka"
                    value="Dhaka"
                    name="location"
                    type={type}
                    id={`inline-${type}-1`}
                    onChange={handleCheckboxLocation}
                  />
                  <Form.Check
                    inline
                    label="Chitagong"
                    value="Chitagong"
                    name="location"
                    type={type}
                    id={`inline-${type}-2`}
                    onChange={handleCheckboxLocation}
                  />
                  <Form.Check
                    inline
                    label="Khulna"
                    value="Khulna"
                    name="location"
                    type={type}
                    id={`inline-${type}-3`}
                    onChange={handleCheckboxLocation}
                  />
                  <Form.Check
                    inline
                    label="Rajshahi"
                    value="Rajshahi"
                    name="location"
                    type={type}
                    id={`inline-${type}-4`}
                    onChange={handleCheckboxLocation}
                  />
                </div>
              ))}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicHall">
              <Form.Label>Hall</Form.Label>
              {['checkbox'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    label="Hall 1"
                    value="Hall 1"
                    name="hall"
                    type={type}
                    onClick={() => setFlag1(!flag1)}
                  />
                  {flag1 &&
                    <div>
                      <div className='my-2'>
                        {time1.map((ob) => {
                          const { id, time } = ob
                          return <small key={id} className='me-2 px-2 py-1 bg-secondary text-white rounded-pill'>
                            {time}
                            <TiDelete className='ms-1 fs-5' onClick={() => handleDeleteTime(id)} />
                          </small>
                        })}
                      </div>
                      <Row>
                        <Col lg='10'>
                          <Form.Control type="time" name="time" className='mb-3' ref={selectedTime1} />
                        </Col>
                        <Col lg='2'>
                          <Button onClick={handleAddTime}>Add</Button>
                        </Col>
                      </Row>
                    </div>}
                  <Form.Check
                    label="Hall 2"
                    value="Hall 2"
                    name="hall"
                    type={type}
                    onClick={() => setFlag2(!flag2)}
                  />
                  {flag2 && <div>
                    <div className='my-2'>
                      {time2.map((ob) => {
                        const { id, time } = ob
                        return <small key={id} className='me-2 px-2 py-1 bg-secondary text-white rounded-pill'>
                          {time}
                          <TiDelete className='ms-1 fs-5' onClick={() => handleDeleteTime(id)} />
                        </small>
                      })}
                    </div>
                    <Row>
                      <Col lg='10'>
                        <Form.Control type="time" name="time" className='mb-3' ref={selectedTime2} />
                      </Col>
                      <Col lg='2'>
                        <Button onClick={handleAddTime}>Add</Button>
                      </Col>
                    </Row>
                  </div>}
                  <Form.Check
                    label="Hall 3"
                    value="Hall 3"
                    name="hall"
                    type={type}
                    onClick={() => setFlag3(!flag3)}
                  />
                  {flag3 && <div>
                    <div className='my-2'>
                      {time3.map((ob) => {
                        const { id, time } = ob
                        return <small key={id} className='me-2 px-2 py-1 bg-secondary text-white rounded-pill'>
                          {time}
                          <TiDelete className='ms-1 fs-5' onClick={() => handleDeleteTime(id)} />
                        </small>
                      })}
                    </div>
                    <Row>
                      <Col lg='10'>
                        <Form.Control type="time" name="time" className='mb-3' ref={selectedTime3} />
                      </Col>
                      <Col lg='2'>
                        <Button onClick={handleAddTime}>Add</Button>
                      </Col>
                    </Row>
                  </div>}

                  <Form.Check
                    label="Hall 4"
                    value="Hall 4"
                    name="hall"
                    type={type}
                    onClick={() => setFlag4(!flag4)}
                  />
                  {flag4 && <div>
                    <div className='my-2'>
                      {time4.map((ob) => {
                        const { id, time } = ob
                        return <small key={id} className='me-2 px-2 py-1 bg-secondary text-white rounded-pill'>
                          {time}
                          <TiDelete className='ms-1 fs-5' onClick={() => handleDeleteTime(id)} />
                        </small>
                      })}
                    </div>
                    <Row>
                      <Col lg='10'>
                        <Form.Control type="time" name="time" className='mb-3' ref={selectedTime4} />
                      </Col>
                      <Col lg='2'>
                        <Button onClick={handleAddTime}>Add</Button>
                      </Col>
                    </Row>
                  </div>}
                </div>
              ))}
            </Form.Group>

            {/* <Form.Group controlId="formTime" className="mb-3">
              <Form.Label>Choose Time</Form.Label>
              <Form.Control type="time" name="time" />
            </Form.Group> */}

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Choose An Image</Form.Label>
              <Form.Control type="file" name="image" onChange={handleImage} required/>
            </Form.Group>

            {errorMessage && <ErrorMessage msg="Please Insert only PNG, JPG, or JPEG Files" />}


            <Button variant="primary" type="submit" className='w-100 mb-3'>
              Submit
            </Button>
          </Form>


        </div>
        {/* All Movies */}

        <AdminPanel />
      </div>
      <Footer />
    </>
  )
}
