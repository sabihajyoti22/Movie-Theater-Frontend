import React from 'react'

export default function ErrorMessage({msg}) {
    return (
        <div className='error-message py-2'>
            <small className='ps-2'>{msg}</small>
        </div>
    )
}
