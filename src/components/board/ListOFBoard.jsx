import React from 'react'
import Board from './Board'

const ListOFBoard = () => {
  return (
    <div className='listOfCards'>
        <Board title="to do" />
        <Board title="in progress" />
        <Board title="in Review" />
        <Board title="done" />
      
    </div>
  )
}

export default ListOFBoard