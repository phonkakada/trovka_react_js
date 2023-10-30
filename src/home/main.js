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


const Home = () => {   
    const [Login , SetLogin] = useState(null)

    const checkLogin = async () => {
        await CheckLogin().then((e)=> SetLogin(e))
    }
    checkLogin()
    return (
        <>
            {Login === null?<></> :<div>
                {/* <div className="mt-5"><Advertisement /></div> */}
                <div className=" top-20 mt-14 sticky"><SearchBar /></div>
                 <div className="z-[2]"><CarCategory /></div>
                 <div className="z-[2]"><MotorCategory /></div>
                 <div className="z-[2]"><LaptopCategory /></div>
                 <div className="z-[2]"><PhoneCategory /></div>   
                 <div className="z-[2]"><SlideLogo /></div>       
                 <div className="w-full h-[10vh]"><Footer /></div>    
            </div>}

        </>
    )
}

export default Home