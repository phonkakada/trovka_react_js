import React, { useState } from "react";

const DisplayFullImage = ({ ListImages ,  Start }) => {
   alert()
    return (
        <>
            <Image Image={ListImages} Start={Start} />
        </>
    )
}

const Image = ({ Image, Start }) => {
    let image = Array.from(Image)

    const [index, setIndex] = useState(+Start)
    const [CurrentImage, setCurrentImage] = useState(image[index])
    const Size = image.length

    const HandleNext = () => {
        if (index < Size) {
            setIndex(index + 1)
            setCurrentImage(image[index])
        }
        if (index === Size - 1) {
            setIndex(0)
            setCurrentImage(image[index])
        }
        console.log(index)
    }
    const HandleBack = () => {
        if (index !== 0) {
            setIndex(index - 1)
            setCurrentImage(image[index])
        } else {
            setIndex(Size - 1)
            setCurrentImage(image[index])
        }
        console.log(index)

    }

    return (
        <>
            <div className="w-full h-[100vh]  justify-center">
                <div className="w-full h-[80%]">
                    <img className="max-w-full mt-20 max-h-full h-full w-full m-auto object-cover" src={CurrentImage}></img>
                    <div className="flex mt-[-50vh] justify-between w-full">
                        <div className="w-[7vh] h-[0] ml-2 pb-[7vh] bg-slate-600 hover:bg-slate-400 flex hover:cursor-pointer justify-center items-center rounded-full" onClick={(e) => HandleBack()}>
                            <i class="fa-solid fa-arrow-left mt-[100%] text-2xl text-white"></i>
                        </div>
                        <div className="w-[7vh] h-[0] mr-2 pb-[7vh] bg-slate-600 hover:bg-slate-400 hover:cursor-pointer relative flex justify-center items-center rounded-full" onClick={(e) => HandleNext()}>
                            <i class="fa-solid fa-arrow-right mt-[100%] text-white text-2xl"></i>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}


export default DisplayFullImage