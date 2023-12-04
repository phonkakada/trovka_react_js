import React from 'react';
import { Categories } from '../assets/categories';
import IsEnglish from './language';


const Post = ({ Image, Price, Model, Make, Location, Hp, CC, Category, Color ,  Year, Cpu, Ram }) => {
    let price =   (+(Price +"").split('.')[1]) > 0 ? Price : (Price+"").split(".")[0]
    return (
        <>
            <div className="w-full h-full shadow-md rounded-lg bg-slate-100 hover:shadow-xl hover:cursor-pointer ">
                <div className="w-full  overflow-hidden h-[60%]">
                    <img src={Image} className="m-auto max-h-full object-cover hover:scale-125 transition duration-500 max-w-full h-full w-full"></img>
                </div>
                <div className=" w-full h-[40%] mt-3">
                    <div className="flex justify-between h-[15] ml-3 w-full mr-5">
                        <p className="text-slate-700 whitespace-nowrap font-Playpen text-lg overflow-hidden  w-[170px] text-ellipsis">{Make} {Model}</p>
                        <p className="text-blue-500 font-Playpen bg-yellow-200 mr-5 text-lg font-extralight">{price} $</p>
                    </div>
                    <div className="font-light w-full ml-3">
                        <p className="font-light font-Playpen text-xs"><i class="fa-solid fa-location-dot mr-2"></i>{Location}</p>
                        <div className="flex justify-between w-full">
                            <ul className=" font-Playpen font-extralight text-xs">
                                {Category == Categories[2].toUpperCase() /* for Car only */ && <div>
                                    <li>HP: {Hp}</li>
                                    <li>CC: {CC}</li>
                                    <li>Year: {Year}</li>
                                </div>}
                                {Category == Categories[3].toUpperCase() && <div>
                                    <li>Color : {Color} </li>
                                    <li>CC: {CC}</li>
                                    <li>Year: {Year}</li>
                                </div>}
                                {Category == Categories[4].toUpperCase() && <div>
                                    <li>{IsEnglish ? "CPU" : "CPU"}: {Cpu}</li>
                                    <li>{IsEnglish ? "Ram" : "រ៉េម"}: {Ram} GB</li>
                                    <li>{IsEnglish ? "Year" : "ឆ្នាំ"}: {Year}</li>
                                </div>}
                            </ul>
                            <button className="bg-slate-400 h-[40px] pl-3 pr-3 font-sans ml-16 rounded-md text-white mr-7 font-extralight hover:bg-blue-300" onClick={(e) => alert()}>View detail</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post