import React from 'react'
import Editable from '../Editable/Editable'
import Board from './Board';
import { boards } from '../boardData/board';
import { useState } from 'react';

const ListOFBoard = () => {
  const [board,setBoard]=useState(boards);
  const [target,setTarget]=useState({
    cid:'',
    bid:''
  })
  

  const addCard=(title,bId)=>{
  

const card={
  id:Date.now()+Math.random()*2,
  title,
  labels:[],
  task:[],
  date:"",
  desc:""
}
const index=board.findIndex((item)=>item.id===bId);
if(index<0) return;

const tempBoards=[...board];
tempBoards[index].cards.push(card);
setBoard(tempBoards)


  }

  // remove card

  const removeCard=(cId,bId)=>{
   
    const bIndex=board.findIndex((item)=>item.id===bId);
    if(bIndex<0) return;
    const cIndex=board[bIndex].cards.findIndex((item)=>item.id===cId);
    if(cIndex<0) return;
   
const tempBoards=[...board];
tempBoards[bIndex].cards.splice(cIndex,1);

setBoard(tempBoards)

  }

  // add board

  const addBoard=(title)=>{
    setBoard([
      ...board,
      {
        id:Date.now()+ Math.random()*2,
        title,
        cards:[],
      }
    ])
 

  };

  // remove boards

  const removeBoards=(bId)=>{
    const tempBoards=board.filter((item)=>item.id!==bId);
    setBoard(tempBoards)
   



  }
  

  // drag end drop function
  const handleDragStart=(cid,bid)=>{
    setTarget({cid,bid})

  }

  const handleDragEnd=(cid,bid)=>{
    console.log(' cid',cid,bid)
    let s_bIndex,s_cardIndex,t_bIndex,t_cardIndex;
    s_bIndex=board.findIndex(item=>item.id===bid);
    if(s_bIndex<0)return;
    s_cardIndex=board[s_bIndex].cards?.findIndex(item=>item.id===cid);
     if (s_cardIndex < 0) return;
    t_bIndex=board.findIndex(item=>item.id===target.bid);
     if (t_bIndex < 0) return;
    t_cardIndex=board[t_bIndex].cards?.findIndex(item=>item.id===target.cid)
     if (t_cardIndex < 0) return;
    const tempBoards=[...board];
    const tempCard=tempBoards[s_bIndex].cards[s_cardIndex];
    tempBoards[s_bIndex]?.cards.splice(s_cardIndex,1);
    tempBoards[t_bIndex]?.cards.splice(t_cardIndex,0,tempCard)
    setBoard(tempBoards)

  }

  return (
    <div className="listOfCards">
      {board &&
        board.map((item) => (
          <Board
            title={item?.title}
            board={item}
            key={item.id}
            addCard={addCard}
            removeCard={removeCard}
            removeBoards={removeBoards}
            handleDragStart={handleDragStart}
            handleDragEnd={handleDragEnd}
          />
        ))}
      {/* <Board title="to do" />
      <Board title="in progress" /> */}

      <div className="editable-container " style={{ width: "300px" }}>
        <Editable
          addCard={addBoard}
          btnText="add new board"
          placeText="new board title"
        />
      </div>
    </div>
  );
}

export default ListOFBoard