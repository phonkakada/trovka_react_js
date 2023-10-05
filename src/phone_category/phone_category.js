import React, { useState } from "react";
import Logo from '../images/Car.jpeg'
import NumberToK from "../assets/NumberToK.js";

const PhoneCategory = () => {

    let Images = [
        "https://s.yimg.com/uu/api/res/1.2/Y0sdCqqSrXzmtFWgzjwgZg--~B/aD0xMzMzO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-09/280da9d0-33d8-11ed-beeb-9f0777e02779.cf.jpg",
        "https://s.yimg.com/uu/api/res/1.2/C1O_M6tg.IzJbrN.lTrt1g--~B/aD0xMjAwO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-02/ce55c7e0-a87d-11ed-afbb-0cbb082fd5eb.cf.jpg",
        "https://www.trustedreviews.com/wp-content/uploads/sites/54/2023/05/IMG_7621-scaled.jpeg",
        "https://www.cnet.com/a/img/resize/817b012223015cbc2b167c29d243e2bc2a55dd8f/hub/2023/01/21/ec79d7fc-9235-4830-8fc1-77db12800b97/apple-macbook-pro-16-2023-3214.jpg?auto=webp&fit=crop&height=900&width=1200"
    ]
    let Makes = ['Apple', 'Smsung', 'Huawei', 'Apple']
    let Models = ['IPhone 15 Pro Max', 'S23 Ultra', 'P60', 'Macbook Pro']
    let Prices = [1700, 1300, 1100, 2900]
    let Locations = [
        "Phnom Penh",
        "Takeo",
        "Takeo",
        "Phnom Penh"
    ]
    let Likes = [4000000, 200000, 58000, 200000]
    let UnLikes = [10, 20, 40]
    let CPU = [
        "A16 Bionic",
        "Snapdragon 8 Plus Gen 2",
        "Snapdragon 8 Plus Gen 1",
        "M1 Pro",
        890
    ]
    let Storage = [
        "128 GB",
        "128 GB",
        "128 GB",
        "M1 Pro",
        2000,
        12000
    ]
    let Ram = [
        '6 GB',
        '12 GB',
        '16 GB',
    ]
    let Power = [
        '25W',
        '45W',
        '65W',
        '45W',
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
        arr.push(<li className="h-[300px] w-[300px] ml-5" key={index}><Car Image={Images[index]} Price={Prices[index]} Model={Models[index]} Make={Makes[index]} Ram={Ram[index]} Location={Locations[index]} Like={Likes[index]} UnLike={UnLikes[index]} CPU={CPU[index]} Storage={Storage[index]} Power={Power[index]} userLike={userLike[index]} userUnlike={userUnLike[index]} setUserLike={setUserLike[index]} setUserUnLike={setUserUnLike[index]} Year={Year[index]} /></li>)
    ))
    return (
        <>
            <div className="m-10">
                <p className="font-bold text-4xl text-blue-500">Smart Home</p>
                <div className="overflow-auto overflow-y-hidden mt-5 no-scrollbar flex">
                    <ul className="flex">
                        {arr}
                    </ul>
                </div>
            </div>
        </>
    )
}

const Car = ({ Image, Price, Model, Make, Location, CPU, Storage, Ram, Power, Like, UnLike, setUserLike, userLike, setUserUnLike, userUnLike, Year }) => {
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
                                <li>CPU: {CPU}</li>
                                <li>Ram: {Ram}</li>
                                <li>Storage: {Storage}</li>
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

export default PhoneCategory