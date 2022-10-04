import React from 'react'
import { Container } from 'react-bootstrap'

import "../CSS/Home.Module.css"

export default function Header() {
  return (
    <div className='header-top'>
      <Container className='py-2'>
        <h3 className='fw-bold' style={{color: '#A358D1'}}>Essence Drive In</h3>
      </Container>
    </div>
  )
}
