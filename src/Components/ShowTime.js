import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { AiTwotoneStar } from 'react-icons/ai'

import NavBar from './Layouts/NavBar'
import Footer from "./Layouts/Footer"

import "./CSS/ShowTime.Module.css"

export default function ShowTime() {
  return (
    <>
      <NavBar />
      <Container className='text-white mt-5 d-flex justify-content-between'>
        <div>
          <h1>Weekly ShowTime</h1>
          <p> Star Cineplex, SKS Tower, Mohakhali </p>
        </div>
        <div>
          <AiTwotoneStar style={{ backgroundColor: '#55C8FF', height: '40px', width: '40px', borderRadius: '5px' }} className='p-2 mb-3 me-2' /> <p className='d-inline text-center me-1'>Star VIP</p>
          <AiTwotoneStar style={{ backgroundColor: '#5BDF83', height: '40px', width: '40px', borderRadius: '5px' }} className='p-2 mb-3 me-2' /> <p className='d-inline text-center me-1'>Star Premium</p>
          <AiTwotoneStar style={{ backgroundColor: '#FFD564', height: '40px', width: '40px', borderRadius: '5px' }} className='p-2 mb-3 me-2' /> <p className='d-inline text-center me-1'>Other Halls</p>
        </div>
      </Container>
      <Container fluid className='show-movies'>
        <Row className='my-3'>
          <Col lg={3} md={6} sm={6}>
            <img alt="Movie" className='p-3' src='./Images/image1.jpg' height='400px' width='330px' />
          </Col>
          <Col lg={3} md={6} sm={6} className='col-border text-white'>
            <div className='p-3'>
              <h5 className='mb-3'>Spiderman: No Way Home-The More Fun stuff Version</h5>
              <Row>
                <Col lg={4} md={4} sm={4}>
                  <small className='d-block mb-3'>Category</small>
                  <small className='d-block mb-3'>Actor</small>
                  <small className='d-block mb-3'>Genre</small>
                  <small className='d-block mb-3'>Release Date</small>
                  <small className='d-block mb-3'>Duration</small>
                  <small className='d-block mb-3'>Language</small>
                </Col>
                <Col lg={8} md={8} sm={8}>
                  <small className='d-block mb-3'>:&emsp;2D</small>
                  <small className='d-block mb-3'>:&emsp;2D</small>
                  <small className='d-block mb-3'>:&emsp;2D</small>
                  <small className='d-block mb-3'>:&emsp;2D</small>
                  <small className='d-block mb-3'>:&emsp;2D</small>
                  <small className='d-block mb-3'>:&emsp;2D</small>
                </Col>
              </Row>
              <Button className='px-4 mt-3'>Watch Trailer</Button>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12} className='col-border text-white'>
            <Row className='h-100'>
              <Col lg={2} className='col-border px-0'>
                <div className='show-times text-center px-2 py-3'>
                  <small className='d-block'>Saturday</small>
                  <small className='d-block'>10th September</small>
                  <small className='d-block'>2022</small>
                </div>
                <div className='px-3 py-3'>
                  <div className='show-ticket text-center px-2 py-1 mb-3'>9:30 am</div>
                  <div className='show-ticket text-center px-2 py-1 mb-3'>12:30 am</div>
                </div>
                <Button className='mx-3 px-2'>Buy Ticket</Button>
              </Col>
              <Col lg={2} className='col-border px-0'>
                <div className='show-times text-center px-2 py-3'>
                  <small className='d-block'>Saturday</small>
                  <small className='d-block'>10th September</small>
                  <small className='d-block'>2022</small>
                </div>
                <div className='px-3 py-3'>
                  <div className='show-ticket text-center px-2 py-1 mb-3'>9:30 am</div>
                  <div className='show-ticket text-center px-2 py-1 mb-3'>12:30 am</div>
                </div>
                <Button className='mx-3 px-2'>Buy Ticket</Button>
              </Col>
              <Col lg={2} className='col-border px-0'>
                <div className='show-times text-center px-2 py-3'>
                  <small className='d-block'>Saturday</small>
                  <small className='d-block'>10th September</small>
                  <small className='d-block'>2022</small>
                </div>
                <div className='px-3 py-3'>
                  <div className='show-ticket text-center px-2 py-1 mb-3'>9:30 am</div>
                  <div className='show-ticket text-center px-2 py-1 mb-3'>12:30 am</div>
                </div>
                <Button className='mx-3 px-2'>Buy Ticket</Button>
              </Col>
              <Col lg={2} className='col-border px-0'>
                <div className='show-times text-center px-2 py-3'>
                  <small className='d-block'>Saturday</small>
                  <small className='d-block'>10th September</small>
                  <small className='d-block'>2022</small>
                </div>
                <div className='px-3 py-3'>
                  <div className='show-ticket text-center px-2 py-1 mb-3'>9:30 am</div>
                  <div className='show-ticket text-center px-2 py-1 mb-3'>12:30 am</div>
                </div>
                <Button className='mx-3 px-2'>Buy Ticket</Button>
              </Col>
              <Col lg={2} className='col-border px-0'>
                <div className='show-times text-center px-2 py-3'>
                  <small className='d-block'>Saturday</small>
                  <small className='d-block'>10th September</small>
                  <small className='d-block'>2022</small>
                </div>
                <div className='px-3 py-3'>
                  <div className='show-ticket text-center px-2 py-1 mb-3'>9:30 am</div>
                  <div className='show-ticket text-center px-2 py-1 mb-3'>12:30 am</div>
                </div>
                <Button className='mx-3 px-2'>Buy Ticket</Button>
              </Col>
              <Col lg={2} className='col-border px-0'>
                <div className='show-times text-center px-2 py-3'>
                  <small className='d-block'>Saturday</small>
                  <small className='d-block'>10th September</small>
                  <small className='d-block'>2022</small>
                </div>
                <div className='px-3 py-3'>
                  <div className='show-ticket text-center px-2 py-1 mb-3'>9:30 am</div>
                  <div className='show-ticket text-center px-2 py-1 mb-3'>12:30 am</div>
                </div>
                <Button className='mx-3 px-2'>Buy Ticket</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}
