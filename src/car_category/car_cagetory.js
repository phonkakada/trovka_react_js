import React, { useState } from "react";
import { useEffect } from "react";
import { view_post } from "../routes/string_routes";
import IsEnglish from "../components/language";
import { useNavigate } from "react-router-dom";
import { Categories } from "../assets/categories.js";
import Post from "../components/Post_Img.js";
import { setHomeData } from "../app/data/data.js";
import { useDispatch } from "react-redux";




const CarCategory = ({data = []}) => {
    const Eng = IsEnglish

    const Nav = useNavigate();
    const dispatch = useDispatch();
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
            dispatch(setHomeData())
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