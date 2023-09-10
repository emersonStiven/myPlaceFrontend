import React from 'react'

export const Day = ({dayNum, setDay, firstDay, secondDay}) => {

  return (
    <div 
    className={firstDay === dayNum || secondDay === dayNum ? 'day-selected trueDay' : 'day-selected'} 
    onClick={()=> setDay(dayNum)}> {dayNum}
     </div>
  )
}
