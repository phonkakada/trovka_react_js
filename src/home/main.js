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


const Home = () => {   
    const [Login , SetLogin] = useState(null)
    const [dataGet , setDataget] = useState({
        car : null,
        motor : null,
        laptop : null,
    })

    const [getCar , setCar] = useState(null)


    return (
        <>
                {/* <div className="mt-5"><Advertisement /></div> */}
                <div className=" top-20 mt-14 sticky"><SearchBar /></div>
                 <div className="z-[2]"><CarCategory setGet={setCar} /></div>
                 <div className="z-[2]"><MotorCategory /></div>
                 <div className="z-[2]"><LaptopCategory /></div>
                 <div className="z-[2]"><PhoneCategory /></div>   
                 <div className="z-[2]"><SlideLogo /></div>       
                 <div className="w-full h-[10vh]"><Footer /></div>    


        </>
    )
}

export default Home