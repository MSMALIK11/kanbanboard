import React from 'react'
import { Clock, Edit,MoreHorizontal } from 'react-feather'
import Chip from '../chips/Chip';
import './Card.css'
const Card = () => {
  return (
    <div className="card">
      <div className="card-header">
        <Chip color="indigo" title="frontend" />
        <Chip color="green" title="urgent" />
        <Chip color="magenta" title="backend" />
        <Chip color="palevioletred" title="required" close />
       
        <div className="card-top-right-icon">
          <MoreHorizontal />
        </div>
      </div>

      <p className="card-title">add a date functio and optimize</p>

      <div className="card-footer">
        <span>
          <Clock size={16} />
          25 jun
        </span>
        <span>
          <Edit size={16} />
          1/2
        </span>
      </div>
    </div>
  );
}

export default Card