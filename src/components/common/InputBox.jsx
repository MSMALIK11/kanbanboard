import React from 'react'
import './Input.css'
const InputBox = ({placeText,name,handleChange}) => {
  return (
    <input
      type="text"
   
      placeholder={placeText}
      className="shadow"
      onChange={handleChange}
      name={name}
    />
  );
}

export default InputBox