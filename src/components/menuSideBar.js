import React, { useState } from "react";
import { CarCategories, Categories, LaptopCategories, MotorCategory, PhoneCategory } from "../assets/categories";
import kh_flag from '../assets/images/kh_flag.png'
import { useNavigate } from "react-router-dom";
import { home, post_by_model } from "../routes/string_routes";
const SideMenu = () => {
    const nav = useNavigate()
    return (
        <>
            <div className="w-full h-[100vh] overflow-auto no-scrollbar bg-blue-300" id="ListMenu">
                <div className="h-16 sticky top-0 flex items-center bg-green-600  justify-center text-center">
                    <p onClick={() => nav(home) }>TROVKA</p>
                </div>
                <ul className="overflow-auto">
                    <Menu List={CarCategories} List_Header={Categories[2]}  />
                    <Menu List={MotorCategory} List_Header={Categories[3]}  />
                    <Menu List={LaptopCategories} List_Header={Categories[4]}  />
                    <Menu List={PhoneCategory} List_Header={Categories[5]}  />
                </ul>

                <div className="flex justify-center ml-2 items-center mt-20 sticky bottom-0 font ">
                    <img className="w-6" src={kh_flag}></img>
                    <p className="font-thin italic ml-2">Product of Cambodia</p>
                </div>
            </div>
        </>
    )
}

const Menu = ({ List, List_Header, func }) => {
    const [Display, setDisplay] = useState(false)
    const Nav = useNavigate();
    const HandleChange = () => {
        setDisplay(e => !e)
    }
    return (
        <div  className="hover:cursor-pointer font-Playpen font-medium">
            <div onClick={HandleChange} className="flex p-3 justify-between items-center hover:bg-slate-400">
                <p className="ml-2">{List_Header}</p>
                {Display === false && <i className="fa-solid mr-5 fa-chevron-down"></i>}
                {Display === true && <i className="fa-solid mr-5 fa-chevron-up"></i>}
            </div>
            {Display === true && <div className="ml-5 font-extralight text-sm">
                {List.map((item, index) => (
                    <li key={index} className="hover:text-white" onClick={() => Nav(post_by_model + item)}>{item}</li>
                ))}
            </div>}
            <hr className="bg-slate-100"></hr>
        </div>
    )
}


export default SideMenu