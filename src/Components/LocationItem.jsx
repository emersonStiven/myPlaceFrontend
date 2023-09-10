import React from 'react'
import "../index.css";

export const LocationItem = ({msg}) => {
  return (
    <div className='location-item'>

      <img className='location-icon' src="/src/assets/location.svg" alt="location icon" />
      
      <li className='li-item'>{msg}</li>

    </div>
  )
}
