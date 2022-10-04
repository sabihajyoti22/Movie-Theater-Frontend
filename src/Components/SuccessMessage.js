import React from 'react'

export default function SuccessMessage({msg}) {
    return (
        <div className='success-message py-2'>
            <small className='ps-2'>{msg}</small>
        </div>
    )
}
