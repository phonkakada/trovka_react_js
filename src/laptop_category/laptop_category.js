import React, { useState  , useEffect } from "react";
import Logo from '../images/Car.jpeg'
import NumberToK from "../assets/NumberToK.js";
import GetAllMotors from "../api/get_categerys/get_motors";
import GetAllComputers from "../api/get_categerys/get_all_computers";
import IsEnglish from "../components/language";
import { view_post } from "../routes/string_routes";
import { useNavigate } from 'react-router-dom';
import Post from "../components/Post_Img.js";
import { Categories } from "../assets/categories.js";

const MotorCategory = ({data}) => {

    const Nav =  useNavigate();
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
    const [locationsLink, setlocationsLink] = useState([]);
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
            setlocationsLink(data[8])
            setId(data[12])
    }, [])


   
    let Likes = [4000000, 200000, 58000, 200000]
    let UnLikes = [10, 20, 40]


    const [userLike, setUserLike] = useState([
        false,
        false,
        false,
        false,
    ])
    const [userUnLike, setUserUnLike] = useState([
        false,
        false,
        false,
        false,
    ])

    let arr = []
    prices.map((items, index) => (
        arr.push(<li className="h-[300px] w-[300px] ml-5" onClick={() => Nav(`${view_post}${Id[index]}`) } key={index}><Post Category={Categories[4].toUpperCase()} Image={images[index][(images[index]).length - 1]} Cpu={cpus[index]} Price={prices[index]} Model={models[index]} Make={makes[index]} Location={locations[index]} Ram={rams[index]} Year={years[index]} /></li>)
    ))
    return (
        <>
            <div className="m-10">
                <p className="font-extralight font-Bayon text-4xl text-blue-500">{IsEnglish ? "Computer" : "កំព្យូរទ័រ"}</p>
                <div className="overflow-auto overflow-y-hidden mt-5 no-scrollbar flex">
                    <ul className="flex">
                        {arr}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MotorCategory