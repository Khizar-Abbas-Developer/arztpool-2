import React, { useState } from 'react';
import "@/assets/css/_components/Password.css";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const Password = ({ name, label, value, onChange }) => {
    const [hide, setHide] = useState(false);
    const handlePasswordVisiblitiy = () => {
        setHide((prev) => !prev)
    }
    return (
        <>
            <div className="sub-container">
                <div className="entryarea flex">
                    <input
                        className='input-item-k'
                        type={hide ? "text" : "password"}
                        name={name}
                        value={value}
                        onChange={onChange}
                        required
                    />
                    <div className="labelline">
                        {label}
                    </div>
                </div>
                <div className="eye-icon" onClick={handlePasswordVisiblitiy}>
                    {hide ? <IoEyeOutline className='icon' /> : <IoEyeOffOutline className='icon' />}
                </div>
            </div>
        </>
    )
}

export default Password;