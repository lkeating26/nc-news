import React from 'react'

export default function Error({ error }) {
  return (
    <div className='error-msg'>
        <h1>{error}</h1>
    </div>
  )
}
