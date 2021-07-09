import React from "react";

const Input = ({ id, labelName, name, value, onChange }) => {
    return (
        <>
            <label htmlFor={id}>{labelName}</label>
            <input type="number" id={id} name={name} value={value} onChange={onChange} data-testid={name} />
        </>
    )
}

export { Input }
