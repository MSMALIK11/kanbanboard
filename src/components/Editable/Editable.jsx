import React,{useState} from 'react'
import {Plus,  X} from 'react-feather'
import InputBox from '../common/InputBox'
import './Editable.css'
const Editable=()=>{
    const [isClick,setIsClick]=useState(false)
    return (
      <div className="editable-wraper">
        {!isClick && (
          <div className="editbale " onClick={() => setIsClick(true)}>
            <span>Add new Card</span>
          </div>
        )}
        {isClick && (
          <div className="editable_edit shadow">
        <InputBox />
            <div className="editable_button">
              <div className="add shadow">
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