import React, { useState , useEffect } from "react";
import Logo from '../images/Car.jpeg'
import NumberToK from "../assets/NumberToK.js";
import GetAllMotors from "../api/get_categerys/get_motors";
import GetAllComputers from "../api/get_categerys/get_all_computers";
import GetAllPhones from "../api/get_categerys/get_all_phones";
import IsEnglish from "../components/language";
import { useNavigate } from "react-router-dom";
import { view_post } from "../routes/string_routes.js";

const PhoneCategory = ({data}) => {

    const [status, setstatus] = useState(0)
    const [prices, setprice] = useState([])
    const [images, setImage] = useState([]);
    const [models, setModels] = useState([])
    const [makes, setmakes] = useState([]);
    const [years, setyears] = useState([]);
    const [rams, setRam] = useState([]);
    const [cpus, setCpus] = useState([]);
    const [storages, setStorages] = useState([]);
    const [locations, setlocations] = useState([]);
    const Nav = useNavigate()
    const [Id , setId] = useState(null)
    useEffect(() => {
      
            setprice(data[0])
            setModels(data[1])
            setmakes(data[3])
            setImage(data[4])
            setyears(data[5])
            setCpus(data[2])
            setRam(data[6])
            setlocations(data[7])
            setId(data[10])
            console.log(data[10])
    }, [])


    let arr = []
    prices.map((items, index) => (
        arr.push(<li className="h-[300px] w-[300px] ml-5" onClick={() => Nav(`${view_post}${Id[index]}`)  } key={index}><Phone Image={images[index][(images[index]).length - 1]} CPU={cpus[index]} Price={prices[index]} Model={models[index]} Make={makes[index]} Location={locations[index]} Ram={rams[index]} Year={years[index]} /></li>)
    ))
    return (
        <>
            <div className="m-10">
                <p className="font-extralight font-Bayon text-4xl text-blue-500">{IsEnglish ? "Smart Phone" : "ទូរស័ព្ទ"}</p>
                <div className="overflow-auto overflow-y-hidden mt-5 no-scrollbar flex">
                    <ul className="flex">
                        {arr}
                    </ul>
                </div>
            </div>
        </>
    )
}

const Phone = ({ Image, Price, Model, Make, Location, Ram, CPU,   Year }) => {
    return (
        <>
            <div className="w-full h-full shadow-md rounded-lg bg-slate-100 hover:shadow-xl hover:cursor-pointer ">
                <div className="w-full  overflow-hidden h-[60%]">
                    <img src={Image} className="m-auto hover:scale-125 transition duration-500 hover:w-[110%] hover:h-[110%] max-h-full object-cover max-w-full h-full w-full"></img>
                </div>
                <div className=" w-full h-[40%] mt-3">
                    <div className="flex justify-between h-[15] ml-3 mr-5">
                        <p className="text-slate-700 font-Playpen overflow-hidden w-[70%] text-ellipsis whitespace-nowrap text-lg">{Make} {Model}</p>
                        <p className="text-blue-500 font-Playpen font-light text-xl">{Price} $</p>
                    </div>
                    <div className="font-light w-full ml-3">
                        <p className="font-light font-Playpen text-xs"><i class="fa-solid fa-location-dot mr-2"></i>{Location}</p>
                        <div className="flex justify-between w-full">
                            <ul className="font-Playpen font-extralight text-xs">
                                <li className="overflow-auto no-scrollbar whitespace-nowrap ">CPU: {CPU}</li>
                                <li>Ram: {Ram} GB</li>
                                <li>Year: {Year}</li>
                            </ul>
                            <button className="bg-slate-400 h-[40px] pl-3 pr-3 font-sans ml-16 rounded-md text-white mr-7 font-extralight hover:bg-blue-300" onClick={(e) => alert()}>View detail</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default PhoneCategory