import React,{useState} from 'react';
import {Plus,  X} from 'react-feather';
import InputBox from '../common/InputBox';
import './Editable.css';
const Editable=({btnText,placeText,addCard,bId})=>{
    const [isClick,setIsClick]=useState(false)
  
    const[title,setTitle]=useState('');
    const handleChange=(e)=>{

setTitle(e.target.value)
    }
    const handleCard=(e)=>{
      e.preventDefault();
      
      addCard(title,bId)

setTitle(e.target.value=null)
setIsClick(false)

    }
   
    return (
      <div className="editable-wraper">
        {!isClick && (
          <div className="editbale  shadow" onClick={() => setIsClick(true)}>
            <span>{btnText}</span>
          </div>
        )}
        {isClick && (
          <div className="editable_edit shadow">
            <InputBox  placeText={placeText} handleChange={handleChange} name="title" />
            <div className="editable_button">
              <div className="add shadow" onClick={handleCard}>
                <Plus color="green" size={25} />
              </div>
              <div
                className="close add shadow"
                onClick={() => setIsClick(false)}
              >
                <X size={25} />
              </div>
            </div>
          </div>
        )}
      </div>
    );
}

export default Editable