import React from 'react'
import { Container, Nav, Button, Card, Row, Col, Image } from "react-bootstrap"

import { FaFacebookF, FaUserCircle, FaCar } from 'react-icons/fa';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { SiBbciplayer } from 'react-icons/si';
import { RiSlideshow3Fill } from 'react-icons/ri';
import { ImTicket, ImMusic } from 'react-icons/im';
import { Link } from "react-router-dom"

import NavBar from './Layouts/NavBar';
import Footer from './Layouts/Footer';

import "./CSS/Home.Module.css"

export default function Home() {
    return (
        <>
            {/* Header */}
            <div className='background-header'>
                <NavBar />
                <Container>
                    <hr className='horizontal-line my-0 mb-2' />
                    <FaFacebookF className='text-white opacity-75 me-2 fs-5' />
                    <BsTwitter className='text-white opacity-75 me-2 fs-5' />
                    <BsInstagram className='text-white opacity-75 fs-5' />
                    <div className='d-inline float-end'>
                        <FaUserCircle style={{ color: "#A358D1" }} className='fs-5' />
                        <a href="/login" className='d-inline text-white ms-1 text-decoration-none'>
                            LogIn
                        </a>
                    </div>
                    <div className='header-content text-white'>
                        <h1 className='header-h1'>Essence Drive In</h1>
                        <h1 className='header-h1'>Movie Theater</h1>
                        <p className='header-p'>Dolor at tempor sadipscing lorem sed. Gubergren sit dolor takimata rebum magna sed,<br />
                            at dolores voluptua elitr aliquyam dolore invidunt Et takimata erat clita dolores <br />et et vero labore ipsum no, nonumy clita at labore et lorem ut gubergren</p>
                        <Button className='header-button py-2 mt-2'>
                            Primary
                        </Button>
                    </div>
                </Container>
            </div>
            {/* Movies Section */}
            <div className='movies-section'>
                <Nav className='container' defaultActiveKey="/home" as="ul">
                    <Nav.Item as="li" className='movies-nav pb-0'>
                        <Nav.Link className='text-white fs-5 fw-bold ' href="/home">Now Showing
                        </Nav.Link>
                        <hr className='movie-hr m-0 mx-3' />
                    </Nav.Item>
                    <Nav.Item as="li" className='movies-nav pb-0'>
                        <Nav.Link className='text-white fs-5 fw-bold' href="/home">Coming Soon</Nav.Link>
                        <hr className='movie-hr m-0 mx-3' />
                    </Nav.Item>
                    <Nav.Item as="li" className='movies-nav pb-0'>
                        <Nav.Link className='text-white fs-5 fw-bold' eventKey="link-2">Show Times</Nav.Link>
                        <hr className='movie-hr m-0 mx-3' />
                    </Nav.Item>
                </Nav>
                <Container className='mt-3'>
                    <Row>
                        <Col lg={3} className='mb-3'>
                            <Card className='movies-card border border-0'>
                                <Card.Img src="./Images/image1.jpg" />
                                <div className='movies-rectangle'>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <SiBbciplayer className='movies-icon' />
                                </div>
                                <div className='movie-name'>
                                    <p className='fw-bold'>Name</p><br />
                                    <p>Release: 25.08.22</p>
                                    <p>Genre: Drama</p>
                                </div>
                                <Link className='movie-get-ticket text-center text-decoration-none text-white' to="/buyTicket">Get Ticket</Link>
                                <div className='movie-get-deails text-center'>Get Details</div>
                            </Card>
                        </Col>
                        <Col lg={3} className='mb-3'>
                            <Card className='movies-card border border-0'>
                                <Card.Img src="./Images/image1.jpg" />
                                <div className='movies-rectangle'>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <SiBbciplayer className='movies-icon' />
                                </div>
                                <div className='movie-name'>
                                    <p className='fw-bold'>Name</p><br />
                                    <p>Release: 25.08.22</p>
                                    <p>Genre: Drama</p>
                                </div>
                                <div className='movie-get-ticket text-center'>Get Ticket</div>
                                <div className='movie-get-deails text-center'>Get Details</div>
                            </Card>
                        </Col>
                        <Col lg={3} className='mb-3'>
                            <Card className='movies-card border border-0'>
                                <Card.Img src="./Images/image1.jpg" />
                                <div className='movies-rectangle'>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <SiBbciplayer className='movies-icon' />
                                </div>
                                <div className='movie-name'>
                                    <p className='fw-bold'>Name</p><br />
                                    <p>Release: 25.08.22</p>
                                    <p>Genre: Drama</p>
                                </div>
                                <div className='movie-get-ticket text-center'>Get Ticket</div>
                                <div className='movie-get-deails text-center'>Get Details</div>
                            </Card>
                        </Col>
                        <Col lg={3} className='mb-3'>
                            <Card className='movies-card border border-0'>
                                <Card.Img src="./Images/image1.jpg" />
                                <div className='movies-rectangle'>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <SiBbciplayer className='movies-icon' />
                                </div>
                                <div className='movie-name'>
                                    <p className='fw-bold'>Name</p><br />
                                    <p>Release: 25.08.22</p>
                                    <p>Genre: Drama</p>
                                </div>
                                <div className='movie-get-ticket text-center'>Get Ticket</div>
                                <div className='movie-get-deails text-center'>Get Details</div>
                            </Card>
                        </Col>
                    </Row>
                    <div className='d-flex align-items-center justify-content-center'>
                        <Button className='my-3 movie-button'>
                            View All Movies
                        </Button>
                    </div>
                </Container>
            </div>

            {/* How It Works Section */}
            <div className='how-works pb-5'>
                <Container className='mb-5'>
                    <h4 className='text-center text-white py-4 fw-bold'>How It Works</h4>
                    <Row>
                        <Col lg={3} className='text-center'>
                            <p className='works-number pb-2 fs-4'>01</p>
                            <div className='d-flex justify-content-center align-items-center'>
                                <hr className='works-hr' />
                                <div className='works-div'></div>
                                <hr className='works-hr' />
                            </div>
                            <ImTicket className='works-icons my-4' />
                            <h5 className='works-h4'>Buy Your Ticket</h5>
                            <small className="text-white">Sit dolor lorem sanctus sit sanctus amet invidunt diam invidunt takimata. Sadipscing lorem at</small>
                        </Col>
                        <Col lg={3} className='text-center'>
                            <p className='works-number pb-2 fs-4'>02</p>
                            <div className='d-flex justify-content-center align-items-center'>
                                <hr className='works-hr' />
                                <div className='works-div'></div>
                                <hr className='works-hr' />
                            </div>
                            <FaCar className='works-icons my-4' />
                            <h5 className='works-h4'>Park Your Car</h5>
                            <small className="text-white">Sit dolor lorem sanctus sit sanctus amet invidunt diam invidunt takimata. Sadipscing lorem at</small>
                        </Col>
                        <Col lg={3} className='text-center'>
                            <p className='works-number pb-2 fs-4'>03</p>
                            <div className='d-flex justify-content-center align-items-center'>
                                <hr className='works-hr' />
                                <div className='works-div'></div>
                                <hr className='works-hr' />
                            </div>
                            <ImMusic className='works-icons my-4' />
                            <h5 className='works-h4'>Set Up Tunes</h5>
                            <small className="text-white">Sit dolor lorem sanctus sit sanctus amet invidunt diam invidunt takimata. Sadipscing lorem at</small>
                        </Col>
                        <Col lg={3} className='text-center'>
                            <p className='works-number pb-2 fs-4'>04</p>
                            <div className='d-flex justify-content-center align-items-center'>
                                <hr className='works-hr' />
                                <div className='works-div'></div>
                                <hr className='works-hr' />
                            </div>
                            <RiSlideshow3Fill className='works-icons my-4' />
                            <h5 className='works-h4'>Enjoy The Show</h5>
                            <small className="text-white">Sit dolor lorem sanctus sit sanctus amet invidunt diam invidunt takimata. Sadipscing lorem at</small>
                        </Col>
                    </Row>
                </Container>
                {/* Ticket Price */}
                <div id="ticketPrice" className="d-flex justify-content-center align-items-center">
                    <div className='ticket-price mt-5 pb-5'>
                        <h4 className='text-center py-4 mx-3 fw-bold'>Ticket Price</h4>
                        <Row className='ticket-row mx-3'>
                            <Col lg={4} className="text-center">
                                <h5 className='py-4 fw-bold'>General <br /> Tickets:</h5>
                            </Col>
                            <Col lg={4} className="text-center">
                                <h5 className='py-4 fw-bold'>Children 5~10 <br /> Years Old:</h5>
                            </Col>
                            <Col lg={4} className="text-center">
                                <h5 className='py-4 fw-bold'>Under  5<br /> Years Old:</h5>
                            </Col>
                        </Row>
                        <Row className='mx-3 pb-3'>
                            <Col lg={4} className="text-center">
                                <h1 className='py-4 fw-bold'>$11</h1>
                            </Col>
                            <Col lg={4} className="text-center">
                                <h1 className='py-4 fw-bold'>$3-5</h1>
                            </Col>
                            <Col lg={4} className="text-center">
                                <h1 className='py-4 fw-bold'>Free</h1>
                            </Col>
                        </Row>
                    </div>
                </div>
                {/* Concession */}
                <Container id="concession" className='concession pb-5'>
                    <div className='ticket-design text-center d-flex justify-content-center align-items-center'>
                        <div className='ticket-circles me-3'></div>
                        <div className='ticket-circles me-3'></div>
                        <div className='ticket-circles me-3'></div>
                        <div className='ticket-circles me-3'></div>
                        <div className='ticket-circles me-3'></div>
                        <div className='ticket-circles me-3'></div>
                        <div className='ticket-circles me-3'></div>
                        <div className='ticket-circles me-3'></div>
                    </div>
                    <Row className='d-flex justify-content-evenly'>
                        <Col lg={4} className='text-center text-white'>
                            <h5 className='text-center py-4 mx-5'>Delicious Snacks</h5>
                            <h1 className='fw-bold pt-3'>Popcorn</h1>
                            <h1 className='fw-bold'>Nachos</h1>
                            <h1 className='fw-bold'>Pretzels</h1>
                            <h1 className='fw-bold'>Candy</h1>
                            <h1 className='fw-bold'>Ice Cream</h1>
                            <Button className='concession-button px-4 py-3'>
                                View All Snacks
                            </Button>
                        </Col>
                        <Col lg={4} className='text-center text-white'>
                            <h5 className='text-center py-4 mx-5'>Delightful Drinks</h5>
                            <h1 className='fw-bold pt-3'>Water</h1>
                            <h1 className='fw-bold'>Soda</h1>
                            <h1 className='fw-bold'>Lemonade</h1>
                            <h1 className='fw-bold'>Milksake</h1>
                            <h1 className='fw-bold'>Coffee</h1>
                            <Button className='concession-button px-4 py-3'>
                                View All Drinks
                            </Button>
                        </Col>
                    </Row>
                </Container>
                <Container className='text-center concesion-image'>
                    <Image src="./Images/Icecream2.png" />
                </Container>
                {/* Join */}
                <Container className='text-center'>
                    <h4 className='text-white my-5 fw-bold'>Stay Up-To-Date</h4>
                    <p className='text-white'>Aliquyam invidunt eos takimata accusam et lorem, rebum labore duo sea elitr <br/> sanctus ipsum  sed no</p>
                    <input type="text" className='join-div mx-auto py-3 text-center fw-bold' placeholder='Enter Your Email'/>
                    <Button className='join-button d-block mx-auto mt-2 w-50 py-3 fw-bold'>
                        Join
                    </Button>
                </Container>
            </div>
            {/* Footer */}
            <Footer />
        </>
    )
}
