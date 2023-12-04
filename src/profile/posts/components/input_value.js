import React from "react"
const InputValue = ({ setValue, type, required }) => {
    return (
        <>
            <div className="w-full h-full">
                <p>{type}{required === true && <span className="italic text-xs"> *(Required)</span>}</p>
                <input placeholder={type} className="bg-blue-200 pl-4 rounded-sm italic outline-none h-10 w-full " onChange={(e) => setValue(e.target.value)}></input>
            </div>
        </>
    )
}

export default InputValue
