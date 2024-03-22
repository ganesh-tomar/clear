import React, { useState } from "react";
import style from '../components/styles/customcheckbox.module.css'

const CustomCheckbox = ({ label, labelfor, id, checked, onChange,  }) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handleToggle = (e) => {
        e.target.closest(`.${style.checkboxwrap}`).classList.toggle(style.selected)
        
    };

    return (
        <div className={`${style.checkboxwrap}  w-full flex flex-wrap py-[0.5rem] px-[3rem] sm:px-[2rem] ${isChecked ? 'active' : ''}`} onClick={(e) => handleToggle(e)} id={id}>
            <input type="checkbox" checked={isChecked} onChange={onChange} className="w-[2.5rem] h-[2.5rem] check-border relative border-2 border-solid border-black" />
            <label htmlFor={labelfor} className="w-[calc(100%-2.5rem)] pl-[2rem] text-[1.6rem] font-normal">{label}</label>
        </div>
    );
};

export default CustomCheckbox;
