import React from "react";

const DisplayAllFollowers = ({ UUID, Token }) => {
    let arr = []

    for  (let i = 0 ; i < 10 ; i++){
        arr.push(<Followers />)
    }
    return (
        <>
            <p className="text-blue-500 sticky top-6 text-3xl font-bold ml-7 mt-5">Followers</p>
            <div>
                {arr}
            </div>
        </>
    )
}

const Followers = ({ UUID }) => {
    let image = "https://firebasestorage.googleapis.com/v0/b/personal-website-3a210.appspot.com/o/Pic.png?alt=media&token=fc9b7149-9c5c-4b97-b92e-11face24bf9d"
    let fromName = "PHON KAKADA"
    let date = "2019-09-24"
    return (
        <>
            <div className="w-full h-full">
                <div className="flex text-center items-center mt-10 justify-center" >
                    <div className="flex items-center w-full justify-evenly">

                        <div className="flex items-center">
                            <div className="w-[50px] pb-[50px] relative overflow-hidden  bg-blue-400 rounded-full md:w-[75px] md:pb-[75px]">
                                <div className=" absolute inset-0">
                                    <img className=" h-full w-full object-cover m-auto rounded-full" src={image}></img>
                                </div>

                            </div>
                            <div className="text-start ml-5">
                                <p className="text-sm md:text-xl">{fromName}</p>
                                <p className="text-xs md:text-sm font-light">{date}</p>
                            </div>
                        </div>

                        <div className="bg-blue-400 p-2 rounded-md text-white hover:shadow-lg md:p-4"><button>Remove</button></div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default DisplayAllFollowers