import React, { useState } from "react";
import DropdownMenu from "./downDownMenu";
import {ProvincesEnglishLanguage} from '../assets/all_provinces'
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
                <div className=" justify-around flex  w-[90%] h-[70%] items-center  max-[960px]:block">
                    <DropdownMenu arrayData={ProvincesEnglishLanguage} setValue={setDefaultValue} defaultValue={defaultValue} Type={'Location'} />
                    <DropdownMenu arrayData={Prices} setValue={setDefaultPrice} defaultValue={defaultPrice} Type={'Price'} />
                    <DropdownMenu arrayData={Categories} setValue={setDefaultCategory} defaultValue={defaultCategory} Type={'Category'} />
                    <div className="flex items-center hover:shadow-lg rounded-md bg-blue-200 h-11 pr-3 pl-3 text-blue-500 text-center justify-center ">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <p className="text-slate-500 ml-2 max-[960px]: ml-155">Serach</p>
                    </div>
                </div>

            </div>
        </>
    )
}


export default SearchBar