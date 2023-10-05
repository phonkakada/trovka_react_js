import React from "react";
import Image from './assets/images/WebUnderCare.png'
import NavBar from "./components/NavBar";
const PageUnderMaintenance = () => {
    document.title = "Service unavailable"
    return(
        <>
        <NavBar />
        <div>
            <div className=" justify-center flex">
            <img src={Image}></img>
            </div>
            <div className="flex justify-center text-blue-500 font-bold text-2xl mt-20 md:text-4xl">
                We are under maintenance
            </div>
        </div>
        </>
    )
}

export default PageUnderMaintenance