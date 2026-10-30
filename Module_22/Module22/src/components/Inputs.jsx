import { useState, useRef } from "react";

export default function Inputs(){
    const inputRef = useRef(null)
    const [shownValue, setShownValue] = useState("")

    const showValue = ()=>{
        setShownValue(inputRef.current.value)
    }

    const focusInput = ()=>{
        inputRef.current.focus();
    }

    return(
        <div className="ref-box">
            <h2>Using UseRef</h2>
            <input type="text" ref={inputRef} placeholder="Type Here..." />

            <div className="ref-buttons">
                <button className="btn" onClick={showValue}>Show Value</button>
                <button className="btn" onClick={focusInput}>Focus Input</button>
            </div>

            <p>Value: {shownValue}</p>
        </div>
    )
}