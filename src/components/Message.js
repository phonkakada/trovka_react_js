import React from "react";

const Message = () => {
    let ProfileImg = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtXHVy3I2kBSfleYaFBoNPddS6uI29jt_lW8QtSvYGRHQekwRx2ldv3-Wr258Y6KpktWk&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtXHVy3I2kBSfleYaFBoNPddS6uI29jt_lW8QtSvYGRHQekwRx2ldv3-Wr258Y6KpktWk&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtXHVy3I2kBSfleYaFBoNPddS6uI29jt_lW8QtSvYGRHQekwRx2ldv3-Wr258Y6KpktWk&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtXHVy3I2kBSfleYaFBoNPddS6uI29jt_lW8QtSvYGRHQekwRx2ldv3-Wr258Y6KpktWk&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtXHVy3I2kBSfleYaFBoNPddS6uI29jt_lW8QtSvYGRHQekwRx2ldv3-Wr258Y6KpktWk&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtXHVy3I2kBSfleYaFBoNPddS6uI29jt_lW8QtSvYGRHQekwRx2ldv3-Wr258Y6KpktWk&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtXHVy3I2kBSfleYaFBoNPddS6uI29jt_lW8QtSvYGRHQekwRx2ldv3-Wr258Y6KpktWk&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtXHVy3I2kBSfleYaFBoNPddS6uI29jt_lW8QtSvYGRHQekwRx2ldv3-Wr258Y6KpktWk&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtXHVy3I2kBSfleYaFBoNPddS6uI29jt_lW8QtSvYGRHQekwRx2ldv3-Wr258Y6KpktWk&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtXHVy3I2kBSfleYaFBoNPddS6uI29jt_lW8QtSvYGRHQekwRx2ldv3-Wr258Y6KpktWk&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtXHVy3I2kBSfleYaFBoNPddS6uI29jt_lW8QtSvYGRHQekwRx2ldv3-Wr258Y6KpktWk&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtXHVy3I2kBSfleYaFBoNPddS6uI29jt_lW8QtSvYGRHQekwRx2ldv3-Wr258Y6KpktWk&usqp=CAU",
    ]
    let ProfileName = ['Tom',
        "Jerry",
        "Jerry",
        "Jerry",
        "Jerry",
        "Jerry",
        "Jerry",
        "Jerry",
    ]
    let LastMessage = ["Hello my name is Tom"
        , "Hello my name is Jerry",
        , "Hello my name is Jerry",
        , "Hello my name is Jerry",
        , "Hello my name is Jerry",
        , "Hello my name is Jerry",
        , "Hello my name is Jerry",
        , "Hello my name is Jerry",
        , "Hello my name is Jerry",
        , "Hello my name is Jerry",
    ]
    let LastTime = ["3:30", "4:40"]

    let arr = []

    const DisplayDetailMessage = () => {

        const Name = "Tom"

        let SendMessage = [
            'AAAAA', 'C', 'E','E','E','E','E','E','E','E','E','E','E','E','E','E','E','E','E','E','E','E','E','E','E','E',
    ]

        let Response = ["B", 'D', 'F' , 'F', 'F', 'F', 'F']

        let SendMess = []

        SendMessage.map((item, index) => (
            SendMess.push(
                <div key={index} className="flex text-sm mt-10 ml-5 mr-5 justify-between">
                    <p>{item}</p>
                    <p className="mt-7">{Response[index]}</p>
                </div>
            )
        ))

        return (
            <>
                <div className="w-full relative overflow-auto h-full bg-slate-400">
                    <div className="flex items-center sticky bg-black top-0">
                        <i class="ml-5 mt-2 fa-solid fa-arrow-left"></i>
                        <div className="ml-5 mt-2 w-[13%] pb-[13%] rounded-full bg-blue-700">

                        </div>
                        <div className="ml-3 mt-2">
                            {Name}
                        </div>


                    </div>
                    <div>
                        {SendMess}
                    </div>
                    <div className="w-full h-[15%] bg-black bottom-0 sticky">
                        <div className="w-full items-center h-full flex">
                            <input placeholder=" Message" className="h-[60%] rounded-md bg-slate-300 text-xs outline-none w-[80%] ml-3"></input>
                            <div className="w-[20%] flex justify-center">
                            <i class="fa-regular fa-paper-plane"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    ProfileImg.map((item, index) => (
        arr.push(
            <div key={index} onClick={() => alert()} className="flex w-full justify-between mt-5 text-slate-700 pr-10 ml-4 hover:cursor-pointer">
                <div className="flex">
                    <div className="w-12 pb-12 bg-blue-700 relative rounded-full">
                        <div className="absolute inset-0">
                            <img className="max-w-full object-cover rounded-full max-h-full m-0 h-full w-full " src={item}></img>
                        </div>
                    </div>
                    <div className="ml-2">
                        <p className="text-md">{ProfileName[index]}</p>
                        <p className="text-xs font-normal">{LastMessage[index]}</p>
                    </div>
                </div>
                <div className="text-xs font-light mt-5">{LastTime[index]}</div>
            </div>
        )
    ))


    return (
        <>
            <div className="w-full hidden font-sans relative overflow-auto overflow-x-hidden no-scrollbar text-lg font-semibold h-full bg-slate-400">
                <div className="z-[1] h-14 sticky top-0 bg-slate-500 text-white flex items-center"><p className="ml-5">Message</p></div>
                <div className="w-full h-full">
                    {arr}
                </div>

            </div>
            <div className="w-full h-full font-sans relative overflow-auto overflow-x-hidden no-scrollbar text-lg font-semibold">
                <DisplayDetailMessage />
            </div>

        </>
    )
}

export default Message