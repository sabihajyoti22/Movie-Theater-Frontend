import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row, Modal, Button } from 'react-bootstrap'
import Footer from './Layouts/Footer'
import Header from './Layouts/Header'
import VerticalModal from './Layouts/VerticalModal'

import { IoIosArrowDropdownCircle } from "react-icons/io"
import { ImLocation2 } from "react-icons/im"
import { RiParkingBoxLine } from "react-icons/ri"
import { BsSquareHalf } from "react-icons/bs"
import { SiVirustotal } from "react-icons/si"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { MdOutlineBedroomChild, MdOutlineConfirmationNumber, MdAirlineSeatReclineNormal } from "react-icons/md"
import { CgTimer } from "react-icons/cg"
import { FiCheckCircle } from "react-icons/fi"
import { AiOutlineMinus, AiOutlinePlus, AiOutlineCalendar } from "react-icons/ai"

import "./CSS/BuyTicket.Module.css"

const resetSeat = () => {
  const seatButton = document.querySelectorAll(".seat-div")
  for (let i = 0; i < seatButton.length; i++) {
    if (!seatButton[i].classList.contains("seat-sold")) {
      seatButton[i].classList.contains("seat-selected") && seatButton[i].classList.remove("seat-selected")
    }
  }
}

const purchase = () => {
  const seatButton = document.querySelectorAll(".seat-div")
  for (let i = 0; i < seatButton.length; i++) {
    if (seatButton[i].classList.contains("seat-selected")) {
      seatButton[i].classList.remove("seat-selected")
      seatButton[i].classList.add("seat-sold")
    }
  }
}

export default function BuyTicket() {
  const ticketData = {
    location: {
      flag: false,
      text: "",
    },
    schedule: {
      flag: false,
      text: "",
      index: 0,
    },
    movie: {
      flag: false,
      text: "",
      index: 0,
    },
    place: {
      text: "",
      index: 0,
    },
    show: {
      flag: false,
      text: "",
    },
    type: {
      flag: false,
      text: "",
      bill: 0,
      index: 0,
    },
    ticketQuantity: {
      flag: false,
      text: "",
    }
  }
  const getTicketData = window.localStorage.getItem("TicketData") ? JSON.parse(window.localStorage.getItem("TicketData")) : ticketData;

  var j = -1;
  var x;
  const arrayDay = []
  const date = new Date()

  const week = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"]
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const test = ["A1", "A2", "A3", "A4", "B1"]

  const day = date.getDay()
  const today = date.getDate()
  const month = date.getMonth()

  const [selectLocation, setSelectLocation] = useState(getTicketData.location.text ? getTicketData.location.text : "Select a Loacation")
  const [selectDate, setSelectDate] = useState(getTicketData.schedule.flag ? getTicketData.schedule.flag : false)
  const [selectMovie, setSelectMovie] = useState(getTicketData.movie.flag ? getTicketData.movie.flag : false)
  const [selectShow, setSelectShow] = useState(getTicketData.show.flag ? getTicketData.show.flag : false)
  const [selectType, setSelectType] = useState(getTicketData.type.flag ? getTicketData.type.flag : false)
  const [quantity, setQuantity] = useState(getTicketData.ticketQuantity.flag ? getTicketData.ticketQuantity.flag : false)

  const [show, setShow] = useState(false);  //Modal Show
  const [schedule, setSchedule] = useState(getTicketData.schedule.text ? getTicketData.schedule.text : "- -")
  const [palceName, setPlaceName] = useState(getTicketData.place.text ? getTicketData.place.text : "- -")
  const [showTime, setShowTime] = useState(getTicketData.show.text ? getTicketData.show.text : "- -")
  const [type, setType] = useState(getTicketData.type.text ? getTicketData.type.text : "- -")
  const [quantityText, setQuantityText] = useState(0)
  const [bill, setBill] = useState(getTicketData.type.bill ? getTicketData.type.bill : 0)
  const [seat, setSeat] = useState([])
  const [flag, setFlag] = useState(0)
  const [modalShow, setModalShow] = useState(false);

  const dateBack = useRef()
  const ticketSummeryImage = useRef()
  const hallDiv = useRef()
  const typeDiv = useRef()
  const purchaseButton = useRef()

  useEffect(() => {
    if (getTicketData.schedule.text) {
      dateBack.current.childNodes[getTicketData.schedule.index].classList.add("selected");
    }
    if (getTicketData.movie.text){
      ticketSummeryImage.current.childNodes[getTicketData.movie.index].classList.add("selected");

      ticketSummeryImage.current.childNodes[getTicketData.movie.index].firstChild.nextElementSibling.style.display = "block";
    }
    if (getTicketData.place.text){
      hallDiv.current.classList.add("selected");
    }
    if (getTicketData.type.text){
      typeDiv.current.childNodes[getTicketData.type.index].firstChild.checked = true
    }
    
  }, [])

  const handleClose = () => setShow(false);

  const handleModal = () => {
    setShow(true)
  }

  const getElementIndex = (el) => {
    return [...el.parentElement.children].indexOf(el);
  }

  const handleModalElement = (e) => {
    if (e.target.firstChild.tagName === "H5") {
      setSelectDate(true)
      setSelectLocation(e.target.firstChild.innerHTML)
      handleClose()
      window.localStorage.setItem("TicketData", JSON.stringify({
        ...getTicketData, location: {
          flag: true,
          text: e.target.firstChild.innerHTML,
        }
      }))
    }
  }

  const handleSchedule = (e) => {
    const children = e.target.childNodes
    var scheduleToSet = ""
    var el = e.target.parentElement.firstChild
    for (let i = 0; i < children.length; i++) {
      scheduleToSet += children[i].innerHTML + " "
    }
    while (el) {
      el.classList.remove("selected")
      el = el.nextElementSibling
    }
    e.target.classList.add("selected")
    setSelectMovie(true)
    setSchedule(scheduleToSet)
    window.localStorage.setItem("TicketData", JSON.stringify({
      ...getTicketData, schedule: {
        flag: true,
        text: scheduleToSet,
        index: getElementIndex(e.target)
      }
    }))
  }

  const handleSelectMovie = (e) => {
    var el = e.target.parentElement.firstChild
    while (el) {
      el.firstChild.nextElementSibling.style.display = "none"
      el.classList.remove("selected")
      el = el.nextElementSibling
    }
    e.target.classList.add("selected")
    e.target.firstChild.nextElementSibling.style.display = "block"
    setSelectShow(true)
    window.localStorage.setItem("TicketData", JSON.stringify({
      ...getTicketData, movie: {
        flag: true,
        text: "Movie Name",
        index: getElementIndex(e.target)
      }
    }))
  }

  const handlePlaceName = (e) => {
    var el = e.target.parentElement.firstChild
    while (el) {
      el.classList.remove("selected")
      el = el.nextElementSibling
    }
    e.target.classList.add("selected")
    setPlaceName(e.target.firstChild.innerHTML)
    window.localStorage.setItem("TicketData", JSON.stringify({
      ...getTicketData, place: {
        text: e.target.firstChild.innerHTML,
        index: getElementIndex(e.target)
      }
    }))
  }

  const handleShowTime = (e) => {
    e.stopPropagation()
    setSelectType(true)
    setShowTime(e.target.innerHTML)
    window.localStorage.setItem("TicketData", JSON.stringify({
      ...getTicketData, show: {
        flag: true,
        text: e.target.innerHTML,
      }
    }))
  }

  const handleType = (e) => {
    e.target.firstChild.checked = true;
    setQuantity(true)
    setType(e.target.firstChild.value)
    setBill(parseInt(e.target.firstChild.nextElementSibling.nextElementSibling.innerHTML.split(" ")[1]))
    window.localStorage.setItem("TicketData", JSON.stringify({
      ...getTicketData, type: {
        flag: true,
        text: e.target.firstChild.value,
        bill: parseInt(e.target.firstChild.nextElementSibling.nextElementSibling.innerHTML.split(" ")[1]),
        index: getElementIndex(e.target)
      }
    }))
  }

  const handlePlus = () => {
    if (quantityText < 10) {
      setQuantityText(quantityText + 1);
      setSeat([])
      resetSeat()
      x = 0;
      setFlag(x)
      setSeat([])
      window.localStorage.setItem("TicketData", JSON.stringify({
        ...getTicketData, ticketQuantity: {
          flag: true,
          text: quantityText,
        }
      }))
    }
  }

  const handleMinus = () => {
    if (quantityText > 0) {
      setQuantityText(quantityText - 1);
      resetSeat()
      x = 0;
      setFlag(x)
      setSeat([])
      window.localStorage.setItem("TicketData", JSON.stringify({
        ...getTicketData, ticketQuantity: {
          flag: true,
          text: quantityText,
        }
      }))
    }
    
  }

  const handleSlot = (e) => {
    if (flag < quantityText) {
      if (!e.target.classList.contains("seat-sold")) {
        e.target.classList.contains("seat-selected") ? e.target.classList.remove("seat-selected") : e.target.classList.add("seat-selected");
        x = flag + 1
        setFlag(x)
        setSeat(oldArray => [...oldArray, `${e.target.innerHTML}`])
      }
    }
    else {
      setModalShow(true)
    }
  }

  const handlePurchase = () => {
    purchase()
  }

  for (let i = day; i < week.length; i++) {
    arrayDay.push(i)
  }

  return (
    <>
      <Header />
      <div className='buy-ticket-back'>
        <Container>
          <Row className="py-5">
            <Col lg={8} sm={12}>
              <h4>Location<IoIosArrowDropdownCircle className='icon-down ms-2' onClick={handleModal} /></h4>
              <h5 style={{ color: "purple" }}>{selectLocation}</h5>
              <hr />

              {selectDate && <div>
                <h4>Select Date</h4>
                <h5 style={{ color: "purple" }}>Movie's Schedule For This Week</h5>
                <div className='d-flex' ref={dateBack}>
                  {
                    arrayDay.map((i) => {
                      j++;
                      return <div key={i} className='date-back px-2 pe-4 me-2' onClick={handleSchedule}>
                        <small className='opacity-75'>{week[i]}</small><br />
                        <small className='fs-2 me-2'>{today + j}</small>
                        <small className='opacity-75'>{months[month]}</small>
                      </div>
                    })
                  }
                </div>
              </div>}

              {selectMovie && <div>
                <h4 className='mt-3'>Select Movies</h4>
                <div className='d-flex' ref={ticketSummeryImage}>
                  {
                    test.map((i) => {
                      return <div key={i} className="ticket-summary-image me-4" onClick={handleSelectMovie}>
                        <img alt="Movie" className='ticket-summary-single-image rounded' src='./Images/image1.jpg' height='220px' width='150px' />
                        <FiCheckCircle className='ticket-summary-image-icon fs-1' />
                      </div>
                    })
                  }
                </div>
              </div>}

              {selectShow && <div>
                <h4 className='mt-3'>Select Show Time</h4>
                <div>
                  <div className='hall-div p-3 d-flex justify-content-between mb-2 rounded' onClick={handlePlaceName} ref={hallDiv}>
                    <h4>Place 1</h4>
                    <div className='hall-time-div'>
                      <div className='px-3 py-2 fw-bold' onClick={handleShowTime}>2:30 pm</div>
                    </div>
                  </div>
                </div>
              </div>}


              <Row>
                {selectType && <Col lg={7}>
                  <h4 className='mt-3'>Select Seat Type</h4>
                  <div className='d-flex justify-content-between py-3 px-5 rounded' style={{ backgroundColor: "white" }} ref={typeDiv}>

                    <div className='type-div' onClick={handleType} >
                      <input style={{ height: "18px", width: "18px" }} className='me-1' id="regular" type="radio" name='seat' value="Regular" />
                      <label className='me-4 fs-5'>Regular</label>
                      <small style={{ color: "purple" }}>BDT 250</small>
                    </div>

                    <div className='type-div' onClick={handleType}>
                      <input style={{ height: "18px", width: "18px" }} className='me-1' id="premium" type="radio" name='seat' value="Premium" />
                      <label className='me-4 fs-5'>Premium</label>
                      <small style={{ color: "purple" }}>BDT 350</small>
                    </div>
                  </div>
                </Col>}
                <Col lg={1}></Col>
                {quantity && <Col lg={4}>
                  <h4 className='mt-3'>Ticket Quantity</h4>
                  <div className='d-flex justify-content-between py-2 px-3' style={{ backgroundColor: "white" }}>
                    <Button className='minus-button' onClick={handleMinus}><AiOutlineMinus className='fs-3' /></Button>

                    <div className='text-center'>
                      <p className='mb-0'>{quantityText} Tickets</p>
                      <small className='opacity-75'>Max 10 Tickets</small>
                    </div>

                    <Button className='plus-button' onClick={handlePlus}><AiOutlinePlus className='fs-3' /></Button>
                  </div>
                </Col>}
              </Row>

              {quantityText > 0 && quantityText <= 10 && <div>
                <h4 className='mt-3'>Select Seat</h4>
                <div className='py-2 px-3' style={{ backgroundColor: "white" }}>
                  <div className='my-3 d-flex justify-content-end'>
                    <BsSquareHalf style={{ color: "purple" }} className='fs-5 me-2' /><small className='opacity-75 me-2'>Selected</small>
                    <BsSquareHalf style={{ color: "green" }} className='fs-5 me-2' /><small className='opacity-75 me-2'>Available</small>
                    <BsSquareHalf style={{ color: "gray" }} className='fs-5 me-2' /><small className='opacity-75 me-2'>Not Available</small>
                  </div>
                  <hr />

                  {seat && <div className='d-flex justify-content-around'>
                    <div>
                      <div className='seat-div seat-sold' onClick={handleSlot}>A1</div>
                      <div className='seat-div' onClick={handleSlot}>A2</div>
                      <div className='seat-div' onClick={handleSlot}>A3</div>
                      <div className='seat-div' onClick={handleSlot}>A4</div>
                    </div>
                    <div className='d-flex'>
                      <div className='me-3'>
                        <div className='seat-div seat-sold' onClick={handleSlot}>B1</div>
                        <div className='seat-div' onClick={handleSlot}>B2</div>
                        <div className='seat-div' onClick={handleSlot}>B3</div>
                        <div className='seat-div' onClick={handleSlot}>B4</div>
                      </div>
                      <div>
                        <div className='seat-div' onClick={handleSlot}>C1</div>
                        <div className='seat-div seat-sold' onClick={handleSlot}>C2</div>
                        <div className='seat-div' onClick={handleSlot}>C3</div>
                        <div className='seat-div' onClick={handleSlot}>C4</div>
                      </div>
                    </div>
                    <div>
                      <div className='seat-div' onClick={handleSlot}>D1</div>
                      <div className='seat-div seat-sold' onClick={handleSlot}>D2</div>
                      <div className='seat-div seat-sold' onClick={handleSlot}>D3</div>
                      <div className='seat-div' onClick={handleSlot}>D4</div>
                    </div>
                  </div>}
                </div>
              </div>}
            </Col>

            <Col lg={4} sm={12}>
              <h4 className='mt-3'>Ticket Summary</h4>
              <div className='py-2 px-3 rounded' style={{ backgroundColor: "white" }}>
                {selectShow && <Row>
                  <Col lg={12} className="d-flex">
                    <img alt="Movie" className='rounded' src='./Images/image1.jpg' height='120px' width='85px' />
                    <div className='ms-3'>
                      <small className='category-div'>2D</small>
                      <p className='mb-0'>Name</p>
                      <small className='opacity-50'>Duration - 130 Min</small>
                    </div>
                  </Col>
                </Row>}

                <hr />

                <div className='d-flex justify-content-between opacity-75' style={{ color: "purple" }}>
                  <div>
                    <div className='mb-2 fs-5'>
                      <HiOutlineLocationMarker className='me-2' />
                      <small>Location</small>
                    </div>
                    <div className='mb-2 fs-5'>
                      <AiOutlineCalendar className='me-2' />
                      <small>Show Date</small>
                    </div>
                    <div className='mb-2 fs-5'>
                      <MdOutlineBedroomChild className='me-2' />
                      <small>Place Name</small>
                    </div>
                    <div className='mb-2 fs-5'>
                      <CgTimer className='me-2' />
                      <small>Show Time</small>
                    </div>
                    <div className='mb-2 fs-5'>
                      <RiParkingBoxLine className='me-2' />
                      <small>Place Type</small>
                    </div>
                    <div className='mb-2 fs-5'>
                      <MdOutlineConfirmationNumber className='me-2' />
                      <small>Ticket Quantity</small>
                    </div>
                    <div className='mb-2 fs-5'>
                      <MdAirlineSeatReclineNormal className='me-2' />
                      <small>Selected Lot</small>
                    </div>
                    <div className='mb-2 fs-5'>
                      <SiVirustotal className='me-2' />
                      <small>Total Amount</small>
                    </div>
                  </div>
                  <div>
                    <div className='mb-2 fs-5'>
                      <small>{selectLocation}</small>
                    </div>
                    <div className='mb-2 fs-5'>
                      <small>{schedule}</small>
                    </div>
                    <div className='mb-2 fs-5'>
                      <small>{palceName}</small>
                    </div>
                    <div className='mb-2 fs-5'>
                      <small>{showTime}</small>
                    </div>
                    <div className='mb-2 fs-5'>
                      <small>{type}</small>
                    </div>
                    <div className='mb-2 fs-5'>
                      <small>{quantityText}</small>
                    </div>
                    <div className='mb-2 fs-5'>
                      <small>{seat.length === 0 ? "- -" : seat + ","}</small>
                    </div>
                    <div className='mb-2 fs-5'>
                      <small>{bill * quantityText}</small>
                    </div>
                  </div>
                </div>

                <hr />
                <small className='opacity-75'>Ticket For</small><br />
                <input placeholder='Full Name' className='w-100 py-2 px-2 mb-3' />
                <input placeholder='Mobile Number' className='w-100 py-2 px-2 mb-3' />
                <Button className='w-100 mb-3 fw-bold' style={{ backgroundColor: "purple", border: "none" }} onClick={handlePurchase} disabled={seat.length !== 0 ? false : true}>PURCHASE TICKET</Button>
              </div>
            </Col>

          </Row>
        </Container>
      </div>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select Theater Loation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-div mx-3 mb-2 p-3" onClick={handleModalElement}>
            <Row>
              <Col lg={1}><ImLocation2 /></Col>
              <Col lg={11}>
                <h5>Location1</h5>
                <small disabled>Address1</small><br />
                <small>Address1</small><br />
                <small>Address1</small>
              </Col>
            </Row>
          </div>
          <div className="modal-div mx-3 mb-2 p-3">
            <Row>
              <Col lg={1}><ImLocation2 /></Col>
              <Col lg={11}>
                <h5>Location1</h5>
                <small>Address1</small><br />
                <small>Address1</small><br />
                <small>Address1</small>
              </Col>
            </Row>
          </div>
        </Modal.Body>
      </Modal>

      {/* Verical Modal */}
      <VerticalModal show={modalShow}
        onHide={() => setModalShow(false)}
        msg={`You have already selected seats for ${quantityText}`} />

      <Footer />
    </>
  )
}