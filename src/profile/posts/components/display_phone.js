import React from "react"

const DisplayPhonePost = ({ phones, setphone_number }) => {

    let arr = []
    phones.map((items, index) => (
        arr.push(<div key={index} className="w-[70%] ml-3 italic text-sm flex justify-between">
            <p>{items}</p>
            <i onClick={() => HandleRemove(items)} class="fa-solid hover:cursor-pointer text-slate-500 fa-xmark"></i>
        </div>)

    ))

    const HandleRemove = (items) => {
        for (let i = 0; i < phones.length; i++) {
            if (items === phones[i]) {
                let newphone = [...phones]
                newphone.splice(i, 1)
                setphone_number(newphone)
                break
            }
        }
    }

    return (
        <>
            {arr}
        </>
    )
}

export default DisplayPhonePost