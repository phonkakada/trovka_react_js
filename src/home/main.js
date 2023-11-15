import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Profile from "../profile/profile";
import SearchBar from "../components/searchBar";
import SideMenu from "../components/menuSideBar";
import CarCategory from "../car_category/car_cagetory";
import MotorCategory from "../motor_category/motor_category";
import LaptopCategory from "../laptop_category/laptop_category";
import PhoneCategory from "../phone_category/phone_category";
import DisplayFullImage from "../components/display_image_full";
import CheckHomePage from "../Controllers/CheckLogin";
import Advertisement from "../advertisement/advertisement";
import CheckLogin from "../Controllers/CheckLogin";
import Footer from "../components/footer";
import SlideLogo from "./slide_logo";
import LoadingScreen from "../components/Loadind_Screen";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from 'axios';
import { API } from "../api/api_key";
import { get_all_car } from "../api/route_api";
import GetAllCars from "../api/get_categerys/get_cars";
import GetAllMotors from "../api/get_categerys/get_motors";
import GetAllComputers from "../api/get_categerys/get_all_computers";
import GetAllPhones from "../api/get_categerys/get_all_phones";


const Home = () => {

    const state = useSelector((state) => state.data.HomeData)

    const [Cars, setCars] = useState(null)
    const [Motors , setMotors] = useState(null)
    const [Computers, setComputers] = useState(null)
    const [SmartPhones , setSmartPhones] = useState(null)
    useEffect(() => {
        const getCars = async () => {
            setCars(await GetAllCars())
        }
        const getMotors = async () => {
            setMotors(await GetAllMotors())
        }
        const getComputers = async() => {
            setComputers(await GetAllComputers())
        }
        const getSmartPhones = async() => {
            setSmartPhones(await GetAllPhones())
        }
        getMotors()
        getCars()
        getComputers()
        getSmartPhones()
    }, [])


    if (!Cars || !Motors || !Computers || !SmartPhones) {
        return <LoadingScreen />
    }


    return (
        <>
            {/* <div className="mt-5"><Advertisement /></div> */}
            <div className=" top-20 mt-14 sticky"><SearchBar /></div>
            <div className="z-[2]"><CarCategory data={Cars} /></div>
            <div className="z-[2]"><MotorCategory data={Motors} /></div>
            <div className="z-[2]"><LaptopCategory data={Computers}  /></div>
            <div className="z-[2]"><PhoneCategory data={SmartPhones} /></div>
            <div className="z-[2]"><SlideLogo /></div>
            <div className="w-full h-[10vh]"><Footer /></div>


        </>
    )
}

export default Home