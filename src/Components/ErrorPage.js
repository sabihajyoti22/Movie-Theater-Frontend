import React from 'react'
import Footer from './Layouts/Footer'
import Header from './Layouts/Header'

export default function ErrorPage() {
  return (
    <>
    <Header />
        <div className='error-div'>
            <h1 className='text-center pt-3 text-danger'>404 Page Not Found</h1>
        </div>
    <Footer />
    </>
  )
}
