import React, { useState } from "react";

const DropdownMenu = ({ arrayData, setValue, defaultValue , Type}) => {
    let arr = [];
    arrayData.map((items, index) => (
        arr.push(<div className="hover:bg-slate-500 h-10 items-center hover:text-white hover:cursor-pointer "><p key={index} className=" ml-5 w-[100%]" onClick={(e) => setValue(items)}>{items}</p></div>)
    ))
    const [Display, setDisplay] = useState(false)
    const HandleClick = () => {
        let ArrowKey = document.getElementById('arrow')
        if (Display) {
            setDisplay(false)
        } else {
            setDisplay(true)
        }
    }
    return (
        <div className=" bg-blue-200 h-[100%]  rounded-md pr-5 items-center" onClick={(e) => HandleClick()}>
            <div className="items-center">
                <div className="flex items-center mt-2 justify-evenly max-[960px]:justify-normal">
                    <div className="items-center flex justify-center">
                        {Type === "Location" && <i class="fa-solid fa-location-dot ml-4 text-blue-500"></i>}
                        {Type === "Price" && <i class="fa-solid fa-money-bill-wave ml-4 text-blue-500"></i>}
                        {Type === "Category" && <i class="fa-solid fa-house ml-4 text-blue-500"></i>}
                        {Type === "Condition" && <i class="fa-solid fa-box ml-4 text-blue-500"></i>}
                        <p className="text-slate-500 ml-2">{defaultValue}</p>
                    </div>
                 {!Display ? <i class="fa-solid fa-caret-down ml-10 text-blue-500"></i> : <i class="fa-solid fa-caret-up ml-10 text-blue-500"></i>}   
                </div>
            </div>
            {Display && <Menu arr={arr} />}
        </div>

    )


}
const Menu = ({ arr }) => {
    return (
        <div className=" bg-blue-200 mt-5 shadow-md">
            <div className="text-slate-500 h-[40vh] overflow-auto no-scrollbar">
                {arr}
            </div>
        </div>
    )
}

export default DropdownMenu