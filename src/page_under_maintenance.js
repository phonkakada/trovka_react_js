// import React from "react";
// import Image from './assets/images/WebUnderCare.png'
// import NavBar from "./components/NavBar";
// const PageUnderMaintenance = () => {
//     document.title = "Service unavailable"
//     return(
//         <>
//         <NavBar />
//         <div>
//             <div className=" justify-center flex">
//             <img src={Image}></img>
//             </div>
//             <div className="flex justify-center text-blue-500 font-bold text-2xl mt-20 md:text-4xl">
//                 We are under maintenance
//             </div>
//         </div>
//         </>
//     )
// }

import { useEffect, useState } from "react"
import LocationPicker from "./location/location_class"

// export default PageUnderMaintenance

const PageUnderMaintenance = () => {

  const [Location , SetLocation] = useState('')
  const [LocationLink , SetLocationLink] = useState('')

    return(
        <>
        <p>{Location}</p>
        <p>{LocationLink}</p>
        <div className="w-1/2 h-1/2 absolute">
        <LocationPicker LocationAddreess = {SetLocation} LocationLink = {SetLocationLink} />
        </div>
        </>
    )
}

export default PageUnderMaintenance

