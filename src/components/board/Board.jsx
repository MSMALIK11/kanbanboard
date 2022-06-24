import React from "react";
import { MoreHorizontal } from "react-feather";
import Card from "../card/Card";
import Editable from "../Editable/Editable";
import "./board.css";
const Board = ({title}) => {
  return (
    <div className="board">
      <div className="board-top">
        <div className="board-top-title">
          <p>
            {title} <span> 2</span>
          </p>
          <MoreHorizontal />
        </div>
      </div>

      <div className="board-card-container custom-scroll">
        <Card />
      
       
       <div className="editable-container">
        <Editable />
       </div>
      </div>
    </div>
  );
};

export default Board;
