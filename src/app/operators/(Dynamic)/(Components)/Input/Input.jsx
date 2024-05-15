import React from 'react';
import "./InputF.css";

const Input = ({ name, label, value, onChange, type = "text" }) => {
  return (
    <>
      <div className="sub-container">
        <div className="entryarea">
          {/* 
            Set the name, value, and onChange attributes 
            to properly handle input value and changes
          */}
          <input
            className='input-item-k'
            type={type}
            name={name}
            value={value} // Ensure the value prop is applied here
            onChange={onChange}
            required
            autoComplete="off"
          />
          <div className="labelline">
            {label}
          </div>
        </div>
      </div>
    </>
  )
}
export default Input;