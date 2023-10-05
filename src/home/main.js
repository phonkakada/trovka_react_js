import React from "react";
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


const Home = () => {   
    return (
        <>
            <div>
                <div className="z-[1] top-0 sticky"><NavBar /></div>
                <div className="mt-5"><Advertisement /></div>
                <div className="z-[1] top-20 mt-14 sticky"><SearchBar /></div>
                 <div className="z-[2]"><CarCategory /></div>
                 <div className="z-[2]"><MotorCategory /></div>
                 <div className="z-[2]"><LaptopCategory /></div>
                 <div className="z-[2]"><PhoneCategory /></div>       
                {/* <Profile /> */}
                {/* <DisplayFullImage /> */}
            </div>

        </>
    )
}

export default Home