import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import "../CSS/Home.Module.css"

export default function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" className='pb-0'>
            <Container className='px-0'>
                <Navbar.Brand style={{ color: "#A358D1" }} className='brand-name fs-1' href="#home">Essence Drive In</Navbar.Brand>
                <Navbar.Toggle className="nav-tog" aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/" className='text-white fw-bold nav-link-headers'>Home</Nav.Link>
                        <Nav.Link href="/showTimes" className='text-white fw-bold nav-link-headers'>Showtimes</Nav.Link>
                        <Nav.Link href="/aboutUs" className='text-white fw-bold nav-link-headers'>About us</Nav.Link>
                        <Nav.Link className='text-white fw-bold nav-link-headers' href="#concession">Concession</Nav.Link>
                        <Nav.Link className='text-white fw-bold nav-link-headers' href="#ticketPrice">Ticket Price</Nav.Link>
                        <Nav.Link className='text-white fw-bold nav-link-headers' href="#contactUs">Contact us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
