import React from "react";
import {ADD, SUBTRACT} from "../constants";
import {Input} from "./Input";
import {Operation} from "./Operation";
import {Solution} from "./Solution";

const Calculator = () => {
    const [solution, setSolution] = React.useState(0);
    const [values, setValues] = React.useState(() => ({
        num1: 0,
        num2: 0,
        op: ADD,
    }))

    const handleChange = event => {
        const { name, value } = event.target;

        setValues(prevState => {
            return {...prevState, [name]: isNaN(+value) ? value : +value}
        })
    }

    const {num1, num2, op} = values;

    React.useEffect(() => {
        switch (op) {
            case ADD:
                setSolution(num1 + num2)

                return
            case SUBTRACT:
                setSolution(num1 - num2)

                return
            default:
                setSolution(0)

        }
    }, [num1, num2, op])
    return (
        <div className="Calculator">
            <Input value={num1} onChange={handleChange} labelName='Number 1' name='num1' id='num1' />
            <Operation onChange={handleChange} value={op} />
            <Input value={num2} onChange={handleChange} labelName='Number 2' name='num2' id='num2' />
            <Solution solution={solution} />
        </div>
    );
}

export { Calculator }