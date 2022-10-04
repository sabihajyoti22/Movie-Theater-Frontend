import React from 'react'
import { Row, Col, Button } from "react-bootstrap"
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter, BsInstagram } from 'react-icons/bs';

import "../CSS/Home.Module.css"

export default function Footer() {
    return (
        <div id='contactUs' className='footer p-4 text-white'>
            <Row>
                <Col lg={5} className='mb-3'>
                    <h3 className='fw-bold'>Essence Drive In</h3>
                    <small className='opacity-75'>Et rebum sadipscing ipsum elitr invidunt  ipsum lorem sea voluptua elitr,<br /> accusam clita accusam consetetur diam consetetur.<br /> Sea gubergren amet.</small>
                </Col>
                <Col lg={1} className='mb-3'>
                    <h5 className='mb-2'>Quick View</h5>
                    <h6 className='opacity-75'>Home</h6>
                    <h6 className='opacity-75'>About</h6>
                    <h6 className='opacity-75'>Now Playing</h6>
                    <h6 className='opacity-75'>Sanck Bar</h6>
                </Col>
                <Col lg={1} className='mb-3'></Col>
                <Col lg={2} className='mb-3'>
                    <h5 className='mb-2'>Contact</h5>
                    <h6 className='opacity-75'>1004, Marcov Street</h6>
                    <h6 className='opacity-75'>San Diago, Eastcoast</h6>
                    <a href="mailto:drivein@gmail.com" className='d-block text-white text-decoration-none opacity-75'>drivein@gmail.com</a>
                    <a href='tel:+024598743' className='text-white text-decoration-none opacity-75'>Tel:+024598743</a>
                </Col>
                <Col lg={3} className='d-flex flex-lg-column justify-content-between align-items-end'>
                    <Button className='py-2 px-4'>
                        Buy Ticket
                    </Button>
                    <div className=''>
                        <FaFacebookF className='text-white opacity-75 me-2 fs-5' />
                        <BsTwitter className='text-white opacity-75 me-2 fs-5' />
                        <BsInstagram className='text-white opacity-75 fs-5' />
                    </div>
                </Col>
            </Row>
            <hr className='opacity-100'/>
            <small>Copyright&#169; 2022, Essence Drive-In All Rights Reserved</small>
        </div>
    )
}
