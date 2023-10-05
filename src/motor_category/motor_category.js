import React, { useState } from "react";
import Logo from '../images/Car.jpeg'
import NumberToK from "../assets/NumberToK.js";

const MotorCategory = () => {

    let Images = [
        "https://planetban.com/media/blog/post/image_small/2023010916475338608O61170.png",
        "https://images.khmer24.co/22-08-02/607934-honda-scoopy-2021-ud83e-udd0d-1659423580-63820496-b.jpg",
        "https://jabarekspres.com/wp-content/uploads/2022/12/scoopy1.jpg",
        "https://images.khmer24.co/22-08-27/224887-dream-2021-1661572245-66024216-b.jpg"
    ]
    let Makes = ['Honda', 'Honda', 'Honda', 'Honda']
    let Models = ['KonTea', 'Scopy', 'Scopy', 'Dream']
    let Prices = [1200, 2800, 2900, 2400]
    let Locations = [
        "Phnom Penh",
        "Takeo",
        "Takeo",
        "Phnom Penh"
    ]
    let Likes = [4000000, 200000, 58000, 200000]
    let UnLikes = [10, 20, 40]
    let Hp = [
        383,
        149,
        249,
        890
    ]
    let CC = [
        5700,
        1500,
        2000,
        12000
    ]
    let Fuel = [
        'Diesel',
        'Gasoline',
        'Gasoline',
        'Gasoline',
    ]

    const Year = [
        2022,
        2023,
        2024,
        2024,
    ]

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
    Makes.map((items, index) => (
        arr.push(<li className="h-[300px] w-[300px] ml-5" key={index}><Car Image={Images[index]} Price={Prices[index]} Model={Models[index]} Make={Makes[index]} Location={Locations[index]} Like={Likes[index]} UnLike={UnLikes[index]} Hp={Hp[index]} CC={CC[index]} Fuel={Fuel[index]} userLike={userLike[index]} userUnlike={userUnLike[index]} setUserLike={setUserLike[index]} setUserUnLike={setUserUnLike[index]} Year={Year[index]} /></li>)
    ))
    return (
        <>
            <div className="m-10">
                <p className="font-bold text-4xl text-blue-500">Motor</p>
                <div className="overflow-auto overflow-y-hidden mt-5 no-scrollbar flex">
                    <ul className="flex">
                        {arr}
                    </ul>
                </div>
            </div>
        </>
    )
}

const Car = ({ Image, Price, Model, Make, Location, Hp, CC, Fuel, Like, UnLike, setUserLike, userLike, setUserUnLike, userUnLike , Year }) => {
    return (
        <>
            <div className="w-full h-full shadow-md rounded-lg bg-slate-100 hover:shadow-xl hover:cursor-pointer ">
            <div className="w-full  overflow-hidden h-[60%]">
                    <img src={Image} className="m-auto max-h-full object-cover max-w-full h-full w-full"></img>
                </div>
                <div className=" w-full h-[40%] mt-3">
                    <div className="flex justify-between h-[15] ml-3 mr-5">
                        <p className="text-slate-700 font-medium text-base">{Make} {Model}</p>
                        <p className="text-blue-500  font-light text-xl">{Price} $</p>
                    </div>
                    <div className="font-light w-full ml-3">
                        <p className="font-light text-xs"><i class="fa-solid fa-location-dot mr-2"></i>{Location}</p>
                        <div className="flex justify-between w-full">
                            <ul className=" text-xs">
                                <li>CC: {Hp}</li>
                                <li>HP: {CC}</li>
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