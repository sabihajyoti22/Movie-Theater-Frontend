import React, { useState } from 'react'
import Header from './Layouts/Header'
import Footer from './Layouts/Footer'

import { Form, Button, InputGroup } from 'react-bootstrap'
import { BsCalendarRange } from "react-icons/bs"
import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar';

import "./CSS/Auth.Module.css"

export default function Admin() {
  const [date, setDate] = useState(new Date())
  const [toggle, settoggle] = useState(false)

  const handleCalendar = () => {
    settoggle(!toggle)
  }

  return (
    <>
      <Header />
      <div className='login-div py-5 d-flex justify-content-center align-items-center'>
        <div className='login-form'>
          <h4 className='login-header text-center py-3'>Enter New Movie Details</h4>
          <Form className='px-4 py-4'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Movie Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Movie Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Duration</Form.Label>
              <Form.Control type="text" placeholder="Enter Duration" />
            </Form.Group>

            <Form.Label>Release Date</Form.Label>
            <InputGroup className="input-calender mb-3">
              <Form.Control
                placeholder="Enter Relaease Date"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                // onChange={date.toDateString()}
              />
              <Button variant="outline-secondary" className='calendar-button' onClick={handleCalendar}>
                <BsCalendarRange />
              </Button>

              {toggle && <div className="calendar-container">
                <Calendar onChange={setDate} value={date} />
              </div>}
              
            </InputGroup>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Genre</Form.Label>
              <Form.Control type="text" placeholder="Enter Genre" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" placeholder="Enter Price" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Category</Form.Label>
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="2D"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="3D"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Location</Form.Label>
              {['checkbox'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="Location 1"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="Location 2"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Hall</Form.Label>
              {['checkbox'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="Hall 1"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="Hall 2"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
            </Form.Group>

            <Button variant="primary" type="submit" className='w-100 mb-3'>
              Submit
            </Button>
          </Form>
        </div>
      </div>
      <Footer />
    </>
  )
}
