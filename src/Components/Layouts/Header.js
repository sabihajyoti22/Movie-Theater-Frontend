import React, { useContext } from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'
import { BiLogIn } from "react-icons/bi"
import { UserContext } from '../../UserContext'

import "../CSS/Home.Module.css"

export default function Header() {
  const { serverURL, userLoggedIn } = useContext(UserContext)

  const handleLogOut = ()=>{
    sessionStorage.removeItem("User")
    window.location.reload()
  }

  return (
    <div className='header-top'>
      <Container className='py-2'>
        <div className='d-flex justify-content-between'>
          <h3 className='fw-bold' style={{ color: '#A358D1' }}>Essence Drive In</h3>
          
          {userLoggedIn && <Row>
            <Col lg={3}>
              <Image src={userLoggedIn.image ? serverURL+"/Uploads/Images/Users"+userLoggedIn.image : 'Images/Default_User_Image.jpg'}  height='40' width='40' roundedCircle></Image>
            </Col>
            <Col lg={9}>
              <h4 className='text-white mb-0'>{userLoggedIn.fullname}</h4>
              <div>
              <BiLogIn className='text-white fs-3 me-0' onClick={handleLogOut} style={{cursor: "pointer"}}/>
              </div>
            </Col>
          </Row>}

        </div>
      </Container>
    </div>
  )
}
