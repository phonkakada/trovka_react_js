import React, { useState , useEffect } from "react";
import Logo from '../images/Car.jpeg'
import NumberToK from "../assets/NumberToK.js";
import GetAllMotors from "../api/get_categerys/get_motors";
import IsEnglish from "../components/language";
import { useNavigate } from "react-router-dom";
import { view_post } from "../routes/string_routes";
import Post from "../components/Post_Img.js";
import { Categories } from "../assets/categories.js";

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
    const [colors, setColors] = useState([]);
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
            setColors(data[7])
            setId(data[8])
        }
        getMotors();
    }, [])



    let arr = []
    prices.map((items, index) => (
        arr.push(<li className="h-[300px] w-[300px] ml-5" onClick={() => Nav( `${view_post}${Id[index]}` , {replace : true})} key={index}><Post Category={Categories[3].toUpperCase()} Image={images[index][(images[index]).length - 1]} Price={prices[index]} Model={models[index]} Make={makes[index]} Location={locations[index]} CC={Cc[index]} Color={colors[index]}  Year={years[index]} /></li>)
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



export default MotorCategory