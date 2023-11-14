import React, { useState } from "react";
import Logo from '../images/Car.jpeg'
import NumberToK from "../assets/NumberToK.js";
import Advertisement from "../advertisement/advertisement";
import { useEffect } from "react";
import GetAllCars from "../api/get_categerys/get_cars";
import { view_post } from "../routes/string_routes";
import IsEnglish from "../components/language";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "../components/Loadind_Screen.js";
import LoadingSpinner from "../components/loading_spinner.js";
import { Categories } from "../assets/categories.js";
import Post from "../components/Post_Img.js";




const CarCategory = ({setGet}) => {
    const Eng = IsEnglish

    const Nav = useNavigate();
    const [status, setstatus] = useState(0)
    const [prices, setprice] = useState([])
    const [images, setImage] = useState([]);
    const [models, setModels] = useState([])
    const [makes, setmakes] = useState([]);
    const [years , setyears] = useState([]);
    const [Cc , setCc] = useState([]);
    const [Hp , setHp] = useState([]);
    const [Id, setId] = useState(null)
    const [locations , setlocations] = useState([]);
    const [locationsLink , setlocationsLink] = useState([]);
    useEffect(() => {
        const getCars = async () => {
            const data = await GetAllCars(setstatus);
            setprice(data[0])
            setModels(data[1])
            setmakes(data[2])
            setImage(data[3])
            setyears(data[4])
            setHp(data[5])
            setCc(data[6])
            setlocations(data[7])
            setlocationsLink(data[8])
            setId(data[9])
            setGet('')
        }
        getCars();
    }, [])
    


    if (prices.length !== 0) {
        let arr = []
        prices.map((items, index) => (
            arr.push(<li className="h-[300px] w-[300px] ml-5"  onClick={() => Nav(`${view_post}${Id[index]}`) } key={index}><Post Category={Categories[2].toUpperCase()} Image={images[index][(images[index]).length - 1]} Price={prices[index]} Model={models[index]} Make={makes[index]} Location={locations[index]} Hp={Hp[index]} CC={Cc[index]} Year={years[index]} /></li>)
        ))
        return (
            <>
                <div className="m-10">

                    <p className=" text-4xl font-Bayon font-extralight text-blue-500">{Eng ? "Car" : "ឡាន"}</p>
                    <div className="overflow-auto overflow-y-hidden mt-5 no-scrollbar flex">
                        <ul className="flex">
                            {arr}
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}





export default CarCategory