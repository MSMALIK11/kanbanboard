import React,{useState} from "react";
import { MoreHorizontal, X } from "react-feather";
import Card from "../card/Card";
import DropDown from "../common/DropDown";
import Editable from "../Editable/Editable";
import "./board.css";
const Board = ({ board, addCard, removeCard, removeBoards, handleDragEnd,handleDragStart }) => {
  const [show, setShow] = useState(false);
  
  return (
    <div className="board">
      <div className="board-top">
        <div className="board-top-title">
          <p>
            {board?.title} <span> 2</span>
          
          </p>
        </div>
        <div className="board-top-more">
          <MoreHorizontal color="grey" onClick={() => setShow(!show)} />
          {show && (
            <DropDown>
              <div
                className="board-top-dropdown shadow"
                onClick={() => removeBoards(board?.id)}
              >
                <div>delete board</div>
                <div>
                  <X color="crimson" size={20} />
                </div>
              </div>
            </DropDown>
          )}
        </div>
      </div>

      <div className="board-card-container custom-scroll">
        {board &&
          board?.cards.map((item) => (
            <Card
              card={item}
              key={item.id}
              removeCard={removeCard}
              bId={board?.id}
              handleDragEnd={handleDragEnd}
              handleDragStart={handleDragStart}
            />
          ))}

        <div className="editable-container">
          <Editable
            addCard={addCard}
            bId={board?.id}
            btnText="add new card"
            placeText="title"
          />
        </div>
      </div>
    </div>
  );
};

export default Board;
