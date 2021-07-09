import React from "react";

import {ADD, SUBTRACT} from "../constants";


const Operation = ({ value, onChange }) => {
    return (
        <>
            <label htmlFor='op'>Operation</label>
            <select id='op' name='op' value={value} onChange={onChange} data-testid='op-select'>
                <option value={ADD} data-testid='op-select-option'>+</option>
                <option value={SUBTRACT} data-testid='op-select-option'>-</option>
            </select>
        </>
    )
}

export { Operation }