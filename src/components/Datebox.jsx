import React from 'react'
import "./Datebox.css"

const Datebox = (props) => {
  return (
    <div>
      <div className='dateBox'>
        <h4>{props.month[props.raw.date.getMonth()]}</h4>
        <h2>{props.raw.date.getDate()}</h2>
        <p>{props.raw.date.getFullYear()}</p>
      </div>


    </div>
  )
}

export default Datebox;