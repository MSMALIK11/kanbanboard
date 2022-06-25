import React, { useState } from 'react'
import './Card.css';
import { Clock, Edit,MoreHorizontal, X } from 'react-feather'
import Chip from '../chips/Chip';
import DropDown from '../common/DropDown';

const Card = ({ card, removeCard,bId,handleDragEnd,handleDragStart }) => {
  const [show, setShow] = useState(true);
  return (
    <div
      className="card"
      style={{ position: "relative" }}
      onMouseLeave={() => setShow(false)}
      draggable
      onDragEnd={()=>handleDragEnd(card.id,bId)}
      onDragEnter={()=>handleDragStart(card.id,bId)}
    >
      <div className="card-header">
      
        {card &&
          card.labels.map((item, i) => (
            <Chip color={item.color} title={item.text} key={item + i} />
          ))}

        <div className="card-top-right-icon">
          <MoreHorizontal onClick={() => setShow(!show)} />

          {show && (
            <DropDown>
              <div
                className="card-dropDown shadow"
                style={{ cursor: "pointer" }}
                onClick={() => removeCard(card.id, bId)}
              >
                <div>delete </div>
                <div>
                  <X size={20} color="crimson" className="icon" />
                </div>{" "}
              </div>
            </DropDown>
          )}
        </div>
      </div>

      <p className="card-title">{card?.title}</p>

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
};

export default Card