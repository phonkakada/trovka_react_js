import React, { useState } from "react";

const DropdownMenu = ({ arrayData, setValue, defaultValue, Type }) => {
    let arr = [];
    arrayData.map((items, index) => (
        arr.push(<div className="hover:bg-slate-500 h-10 flex items-center hover:text-white hover:cursor-pointer  "><p key={index} className=" ml-5 w-full" onClick={(e) => setValue(items)}>{items}</p></div>)
    ))
    const [Display, setDisplay] = useState(false)
    const HandleClick = () => {
        if (Display) {
            setDisplay(false)
        } else {
            setDisplay(true)
        }
    }
    return (
        <div className=" bg-blue-200 w-full items-center" onClick={(e) => HandleClick()}>
            <div className="w-full">
                <div className="flex h-10 items-center ml-5 mr-5 justify-between w-full">
                    <div className="items-center flex w-[80%] ">
                        {Type === "Location" && <i className="fa-solid fa-location-dot ml-4 mr-5 text-blue-500"></i>}
                        {Type === "Price" && <i className="fa-solid fa-money-bill-wave ml-4 mr-5 text-blue-500"></i>}
                        {Type === "Category" && <i className="fa-solid fa-house ml-4 mr-5 text-blue-500"></i>}
                        {Type === "Condition" && <i className="fa-solid fa-box ml-4 mr-5 text-blue-500"></i>}
                        <p className="text-slate-500 overflow-hidden text-ellipsis whitespace-nowrap">{defaultValue}</p>
                    </div>
                    <div className="mr-10">
                        {!Display ? <i className="fa-solid fa-caret-down text-blue-500 w-[20%] "></i> : <i class="fa-solid  fa-caret-up text-blue-500 w-[40%]"></i>}
                    </div>
                </div>
            </div>
            {Display && <Menu arr={arr} />}
        </div>

    )


}
const Menu = ({ arr }) => {
    return (
        <div className=" bg-blue-100 shadow-md">
            <div className="text-slate-500 h-[40vh] sticky overflow-auto no-scrollbar">
                {arr}
            </div>
        </div>
    )
}

export default DropdownMenu