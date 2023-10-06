import React from 'react'

export const Day = ({day, date, style}) => {

    let selected = false;


  return (
    <div className= {style} onClick={null}>
      {day}
    </div>
  )
}
