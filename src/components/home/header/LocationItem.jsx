import React from 'react'
import "./header.css"

export const LocationItem = ({msg}) => {
  return (
    <div className='location-item'>

      <img className='location-icon' src="/src/assets/home/location.svg" alt="location icon" />
      
      <li className='li-item'>{msg}</li>

    </div>
  )
}
