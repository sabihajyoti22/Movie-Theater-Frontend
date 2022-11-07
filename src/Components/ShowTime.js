import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { AiTwotoneStar } from 'react-icons/ai'

import NavBar from './Layouts/NavBar'
import Footer from "./Layouts/Footer"

import { UserContext } from '../UserContext'
import "./CSS/ShowTime.Module.css"
import axios from 'axios'

export default function ShowTime() {
  const { serverURL } = useContext(UserContext)
  const [allMovies, setAllMovies] = useState([])
  const [error, setError] = useState("")

  var j = -1;
  const date = new Date()
  const arrayDay = []

  const week = ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  const day = date.getDay()
  const today = date.getDate()
  const month = date.getMonth()

  for (let i = day; i < week.length; i++) {
    arrayDay.push(i)
  }

  const getAllMovies = () => {
    axios.get(serverURL + "/api/admin")
      .then((res) => {
        if (res.status === 200) {
          setAllMovies(res.data)
        }
        else {
          throw new Error("Couldn't find user")
        }
      })
      .catch((err) => {
        setError(err.message)
      })
  }

  useEffect(() => {
    getAllMovies()
  }, [])

  return (
    <>
      <NavBar />
      {error && <h1>{error}</h1>}
      <Container className='text-white mt-5 d-flex justify-content-between'>
        <div>
          <h1>Weekly ShowTime</h1>
          <p> 1004, Marcov Street
            San Diago, Eastcoast</p>
        </div>
        <div>
          <AiTwotoneStar style={{ backgroundColor: '#55C8FF', height: '40px', width: '40px', borderRadius: '5px' }} className='p-2 mb-3 me-2' /> <p className='d-inline text-center me-1'>Star VIP</p>
          <AiTwotoneStar style={{ backgroundColor: '#5BDF83', height: '40px', width: '40px', borderRadius: '5px' }} className='p-2 mb-3 me-2' /> <p className='d-inline text-center me-1'>Star Premium</p>
          <AiTwotoneStar style={{ backgroundColor: '#FFD564', height: '40px', width: '40px', borderRadius: '5px' }} className='p-2 mb-3 me-2' /> <p className='d-inline text-center me-1'>Other Halls</p>
        </div>
      </Container>
      {allMovies.map((data, index) => {
        const { name, duration, releaseDate, genre, price, category, location, hall, image } = data
        hall.hall1.map((item)=>{
          console.log("Show Item")
        })
        return <Container key={index} fluid className='show-movies'>
          <Row className='my-3'>
            <Col lg={3} md={6} sm={6}>
              <img alt="Movie" className='p-3' src={serverURL + "/Uploads/Images/Movies/" + image} height='400px' width='330px' />
            </Col>
            <Col lg={3} md={6} sm={6} className='col-border text-white'>
              <div className='p-3'>
                <h5 className='mb-3'>{name}</h5>
                <Row>
                  <Col lg={4} md={4} sm={4}>
                    <small className='d-block mb-3'>Category</small>
                    <small className='d-block mb-3'>Genre</small>
                    <small className='d-block mb-3'>Price</small>
                    <small className='d-block mb-3'>Release Date</small>
                    <small className='d-block mb-3'>Duration</small>
                  </Col>
                  <Col lg={8} md={8} sm={8}>
                    <small className='d-block mb-3'>:&emsp;{category}</small>
                    <small className='d-block mb-3'>:&emsp;{genre}</small>
                    <small className='d-block mb-3'>:&emsp;{price}</small>
                    <small className='d-block mb-3'>:&emsp;{releaseDate}</small>
                    <small className='d-block mb-3'>:&emsp;{duration}</small>
                  </Col>
                </Row>
                <Button className='px-4 mt-5'>Watch Trailer</Button>
              </div>
            </Col>
            <Col lg={6} md={12} sm={12} className='col-border text-white'>
              <Row className='h-100'>
                {arrayDay.map((i) => {
                  j++;
                  return <Col key={i} lg={2} className='col-border px-0 mb-3'>
                    <div className='show-times text-center px-2 py-3'>
                      <small className='d-block'>{week[i]}</small>
                      <small className='d-block'>{today + j} {months[month]}</small>
                      <small className='d-block'>{date.getFullYear()}</small>
                    </div>
                    <div className='px-3 py-3'>
                      <div className='show-ticket text-center px-2 py-1 mb-3'>9:30 am</div>
                      <div className='show-ticket text-center px-2 py-1 mb-3'>12:30 am</div>
                    </div>
                    <Button className='mx-3 px-2'>Buy Ticket</Button>

                  </Col>
                })}
              </Row>
            </Col>
          </Row>
        </Container>
      })}
      <Footer />
    </>
  )
}
