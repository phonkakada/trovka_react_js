import React, { useState } from "react";
import DropdownMenu from "./downDownMenu";
import { ProvincesEnglishLanguage } from '../assets/all_provinces'
import { Prices } from "../assets/prices_set";
import { Categories } from "../assets/categories";
import Conditions from "../assets/conditions";
import '../index.css';
const SearchBar = () => {
    document.title = "Home"
    let [defaultValue, setDefaultValue] = useState(ProvincesEnglishLanguage[0])
    let [defaultPrice, setDefaultPrice] = useState(Prices[0])
    let [defaultCategory, setDefaultCategory] = useState(Categories[0])
    let [defaultCondition, setDefaultCondition] = useState(Conditions[0])
    return (
        <>
            <div className=" bg-blue-100 h-16 w-[80%] ml-[10%] flex justify-center items-center max-[960px]:hidden">
                <div className="hidden md:flex justify-between  w-full h-[70%] items-center">
                    <div className="mr-2 ml-2 w-full"><DropdownMenu arrayData={ProvincesEnglishLanguage} setValue={setDefaultValue} defaultValue={defaultValue} Type={'Location'} /></div>
                    <div className="mr-2 ml-2 w-full">  <DropdownMenu arrayData={Prices} setValue={setDefaultPrice} defaultValue={defaultPrice} Type={'Price'} /></div>
                    <div className="mr-2 ml-2  w-full"> <DropdownMenu arrayData={Categories} setValue={setDefaultCategory} defaultValue={defaultCategory} Type={'Category'} /></div>
                    <div className="flex items-center hover:cursor-pointer mr-2  w-full hover:shadow-lg bg-blue-200 h-10 pr-3 pl-3 text-blue-500 text-center justify-center ">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <p className="text-slate-500 ml-2 md: ml-155">Serach</p>
                    </div>
                </div>

            </div>
        </>
    )
}


export default SearchBar