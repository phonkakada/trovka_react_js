import React, { useState , useEffect } from "react";
import Logo from '../images/Car.jpeg'
import NumberToK from "../assets/NumberToK.js";
import GetAllMotors from "../api/get_categerys/get_motors";
import IsEnglish from "../components/language";
import { useNavigate } from "react-router-dom";
import { view_post } from "../routes/string_routes";

const MotorCategory = () => {

    const Nav = useNavigate();
    const [status, setstatus] = useState(0)
    const [prices, setprice] = useState([])
    const [images, setImage] = useState([]);
    const [models, setModels] = useState([])
    const [makes, setmakes] = useState([]);
    const [years, setyears] = useState([]);
    const [Cc, setCc] = useState([]);
    const [locations, setlocations] = useState([]);
    const [locationsLink, setlocationsLink] = useState([]);
    const [Id , setId] = useState(null)
    useEffect(() => {
        const getMotors = async () => {
            const data = await GetAllMotors(setstatus);
            setprice(data[0])
            setModels(data[1])
            setmakes(data[2])
            setImage(data[3])
            setyears(data[4])
            setCc(data[5])
            setlocations(data[6])
            setlocationsLink(data[7])
            setId(data[8])
        }
        getMotors();
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
        arr.push(<li className="h-[300px] w-[300px] ml-5" onClick={() => Nav( `${view_post}${Id[index]}`)} key={index}><Car Image={images[index][(images[index]).length - 1]} Price={prices[index]} Model={models[index]} Make={makes[index]} Location={locations[index]} CC={Cc[index]} Like={Likes[index]} UnLike={UnLikes[index]} userLike={userLike[index]} userUnlike={userUnLike[index]} setUserLike={setUserLike[index]} setUserUnLike={setUserUnLike[index]} Year={years[index]} /></li>)
    ))
    return (
        <>
            <div className="m-10">
                <p className="font-extralight font-Bayon text-4xl text-blue-500">{IsEnglish ? "Motor" : "ម៉ូតូ"}</p>
                <div className="overflow-auto overflow-y-hidden mt-5 no-scrollbar flex">
                    <ul className="flex">
                        {arr}
                    </ul>
                </div>
            </div>
        </>
    )
}

const Car = ({ Image, Price, Model, Make, Location, CC, Like, UnLike, setUserLike, userLike, setUserUnLike, userUnLike, Year }) => {
    return (
        <>
            <div className="w-full h-full shadow-md rounded-lg bg-slate-100 hover:shadow-xl hover:cursor-pointer ">
                <div className="w-full  overflow-hidden h-[60%]">
                    <img src={Image} className="m-auto hover:scale-125 transition duration-500 hover:w-[110%] hover:h-[110%] max-h-full object-cover max-w-full h-full w-full"></img>
                </div>
                <div className=" w-full h-[40%] mt-3">
                    <div className="flex justify-between h-[15] ml-3 mr-5">
                        <p className="text-slate-700 font-Playpen text-lg">{Make} {Model}</p>
                        <p className="text-blue-500 font-Playpen font-light text-xl">{Price} $</p>
                    </div>
                    <div className="font-light w-full ml-3">
                        <p className="font-light font-Playpen text-xs"><i class="fa-solid fa-location-dot mr-2"></i>{Location}</p>
                        <div className="flex justify-between w-full">
                            <ul className="font-Playpen font-extralight text-xs">
                                <li>CC: {CC}</li>
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

const CheckLike = ({ Likeed }) => {
    return (
        <>
            {Likeed ? <i class="fa-solid fa-thumbs-up opacity-70 text-3xl text-blue-800 hover:cursor-pointer"></i> : <i class="fa-regular opacity-70 fa-thumbs-up text-3xl text-blue-800 hover:cursor-pointer"></i>}
        </>
    )
}
const CheckUnlike = ({ Unliked }) => {
    return (
        <>
            {Unliked ? <i class="fa-solid fa-thumbs-down  opacity-70 text-3xl ml-10 text-blue-800 hover:cursor-pointer"></i> : <i class="fa-regular opacity-70 fa-thumbs-down ml-10 text-blue-800 text-3xl hover:cursor-pointer"></i>}
        </>
    )
}

const HandleUserLike = (setUserLike, userLike, setUserUnLike, userUnLike) => {
    if (!userLike && !userUnLike) {
        setUserLike(true)
    }
    if (!userLike && userUnLike) {
        setUserUnLike(false)
        setUserLike(true)
    }
    if (userLike && !userUnLike) {
        setUserLike(true)
    }
}

export default MotorCategory