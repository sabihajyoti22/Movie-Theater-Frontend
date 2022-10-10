import React from 'react'

export default function ErrorMessage({msg}) {
    return (
        <div className='error-message py-2 mb-3'>
            <small className='ps-2'>{msg}</small>
        </div>
    )
}
