import React from 'react'
import { X } from 'react-feather'
import './chip.css'
const Chip = ({color,title,close}) => {
  return (
    <div className='card_chips'>
        <span style={{backgroundColor:color}}>{title} {close && <X size={15} color="black" />}</span>

    </div>
  )
}

export default Chip