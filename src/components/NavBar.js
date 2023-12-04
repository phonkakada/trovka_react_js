import React, { useState, useEffect } from "react";
import './style.css';
import SideMenu from "./menuSideBar";
import { Link } from "react-router-dom";
import { home, login, profile, signup } from "../routes/string_routes";
import { setMyProfile, setToken, setUuid } from "../app/data/data";
import axios from 'axios'
import { CarCategories, Categories, LaptopCategories, MotorCategory, PhoneCategory, PropertiesCategories } from "../assets/categories";
import { HandleCloseElement, HandleDisplayElement } from "./handle_display_element";
import kh_flag from "../assets/images/kh_flag.png";
import en_flag from "../assets/images/en_flag.png";
import { setLoginState } from "../app/data/data";
import ProfileImg from "./profile_img";
import { useDispatch, useSelector } from "react-redux";
import { get_user_info, logout } from "../api/route_api";
import AxiosInstance from "../api/axios";
import API from "../api/api_key";


const NavBar = () => {

    const dispatch = useDispatch();

    try {
        const language = localStorage.getItem('ln')
        if (!language) {
            localStorage.setItem('ln', 'en')
        }
    } catch (e) {
        console.log("e")
    }

    const token = useSelector(state => state.data.Token)
    const StateChange = useSelector(state => state.data.StateChange)

    useEffect(() => {
        const GetUserInfo = async () => {
            
                await AxiosInstance.get(get_user_info).then((e) => {
                    if (e.status === 200) {
                        dispatch(setMyProfile(e.data.Message))
                        dispatch(setLoginState(true))
                        // console.log(e.data)
                    }
                }).catch(e => { 
                    // console.log(e)

                })
            
        }
        GetUserInfo()
    }, [token , StateChange])


    const LanaguageSelete = () => {

        const [LanaguageUpdate, setLanguageUpdate] = useState(false)
        const language = localStorage.getItem('ln')

        const ChangeLanguage = () => {
            const language = localStorage.getItem('ln')
            localStorage.removeItem('ln')
            if (language == 'en') {
                localStorage.setItem('ln', 'kh')
            } else {
                localStorage.setItem('ln', 'en')
            }
            setLanguageUpdate(!LanaguageUpdate)
            window.location.href = window.location.href
        }

        return (
            language === 'en' ? <>
                <div onClick={ChangeLanguage} className="w-7 hover:cursor-pointer">
                    <div className="flex items-center w-full font-Bayon">
                        <img src={kh_flag}></img>
                        <p className="ml-2 hidden md:block text-slate-700 text-sm w-1/2">ភាសាខ្មែរ</p>
                    </div>
                </div>
            </> : <>
                <div onClick={ChangeLanguage} className="w-7 hover:cursor-pointer">
                    <div className="flex items-center w-full font-Bayon">
                        <img src={en_flag}></img>
                        <p className="ml-2 hidden md:block text-slate-700 text-sm w-1/2">English</p>
                    </div>
                </div>
            </>
        )
    }


    const MyProfile = useSelector(state => state.data.MyProfile)
    const LoginStatus = useSelector(state => state.data.LoginState)

    

    const Logout  = async() => {
        await AxiosInstance.delete(logout).then(res => {
            if (res.status === 200){
                dispatch(setLoginState(false))
                dispatch(setMyProfile(null))
            }
        }).catch(e => {
            console.log(e)
        })
    }
    return (
        <>
            <div className="w-full flex h-16 bg-blue-400 items-center">
                <div className="h-full w-full hidden" onMouseOver={(e) => HandleMouseOver()} onMouseOut={(e) => HandleMouseOut()} id="ListMenu">
                    <SideMenu></SideMenu>
                </div>
                <div className="flex justify-between mr-10 h-full w-full items-center" >
                    <div className="flex ml-10 items-center" >
                        <i class="block fa-solid fa-bars text-3xl text-white md:hidden" id="MenuBar" onMouseOver={(e) => HandleMouseOver()} onMouseOut={(e) => HandleMouseOut()} onClick={(_) => HandleNavbar()}></i>
                        <Link to={home}><p className="hidden text-3xl ml-5 md:block">Logo</p></Link>
                    </div>
                    <div className="hidden h-full w-1/3 md:block">
                        <ul className="flex ml-5 h-full items-center w-full justify-between" >
                            <li className="flex"><button onMouseOver={() => HandleDisplayCategories('CategoryBtn')} onClick={() => HandleDisplayCategories('CategoryBtn')}>Categories

                            </button>
                                <div id="CategoryBtn" className="hidden absolute mt-11 w-[200px] h-60">
                                    <CategoriesMenu />
                                </div></li>
                            <li className="ml-10"><button onClick={() => HandleDisplayCategories('ConditionBtn')} onMouseOver={() => HandleDisplayCategories('ConditionBtn')}>Conditions

                            </button>
                                <div id="ConditionBtn" className="hidden absolute mt-5 w-[150px] h-20">
                                    <ConditionsMenu />
                                </div></li>
                            <li className="ml-5 md:hidden lg:flex items-center"><input className="h-9 outline-none bg-slate-200 transition-all duration-100 hover:pr-20 rounded-sm text-sm shadow-md" placeholder=" Find Your Products" type="text"></input>
                                <button className="bg-blue-400 h-full w-10 text-slate-900"><i class="fa-solid fa-magnifying-glass"></i></button>
                            </li>
                        </ul>
                    </div>
                    {MyProfile ? <div className="flex items-center">
                        <i className="fa-regular fa-message text-2xl text-white">
                        </i>
                        <i className="fa-regular fa-bell ml-5 text-2xl text-white"></i>
                        <div className="">
                            <div onClick={() => handleProfileMenu()} className="w-10 h-10 ml-5 relative rounded-full bg-stone-400  hover:cursor-pointer"  >

                                <div className="absolute inset-0">
                                    <ProfileImg last_name={MyProfile.last_name} profile_url={MyProfile.profile_url} />
                                </div>
                            </div>
                            <div onMouseOut={() => setTimeout(() => HandleCloseElement('profileMenu'), 4000)} onMouseOver={() => HandleDisplayElement('profileMenu')} id="profileMenu" className="hidden bg-white justify-around absolute flex-col ml-[-5%] h-[250%] text-center w-32 rounded-md shadow-sm shadow-blue-700 text-slate-600">
                                <Link className="hover:bg-slate-500 w-full h-[30%] decoration-blue-500 hover:text-white flex items-center" to={profile}><div className="flex items-center"><i class="fa-solid fa-user ml-5"></i><p className="ml-2">Profile</p></div></Link>
                                <Link className="hover:bg-slate-500 w-full h-[30%] decoration-blue-500 hover:text-white flex items-center"><div className="flex items-center"><i class="fa-solid fa-gear ml-5"></i><p className="ml-2">Setting</p></div></Link>
                                <Link onClick={Logout} className="hover:bg-slate-500 w-full h-[30%] decoration-blue-500 hover:text-white flex items-center"><div className="flex items-center"><i class="fa-solid fa-right-from-bracket ml-5"></i><p className="ml-2">Logout</p></div></Link>
                            </div>
                        </div>


                    </div> : <LoginUI />}

                </div>
                <div className="mr-20"><LanaguageSelete /> </div>

            </div>
        </>
    )
}

const CategoriesMenu = () => {
    return (
        <>
            <div className=" bg-blue-300 w-full h-full overflow-auto overflow-x-hidden no-scrollbar text-start">
                <p onClick={() => HandleDisplayCategories('Properties')} className="h-10 w-full items-center flex hover:bg-slate-600 hover:text-white justify-between p-5">
                    <p>Properties</p>
                    <i className="fa-solid fa-angle-down"></i></p>
                <p id="Properties" className="hidden w-full ml-7 mr-5">
                    <ProductMenu Product={PropertiesCategories} />
                </p>
                <p onClick={() => HandleDisplayCategories('Car')} className="h-10 w-full items-center flex hover:bg-slate-600 hover:text-white justify-between p-5">
                    <p>Car</p>
                    <i className="fa-solid fa-angle-down"></i>
                </p>
                <p id="Car" className="hidden w-full ml-7 mr-5">
                    <ProductMenu Product={CarCategories} />
                </p>
                <p onClick={() => HandleDisplayCategories('Motor')} className="h-10 w-full items-center flex hover:bg-slate-600 hover:text-white justify-between p-5">
                    <p>Motor</p>
                    <i className="fa-solid fa-angle-down"></i>
                </p>
                <p id="Motor" className="hidden w-full ml-7 mr-5">
                    <ProductMenu Product={MotorCategory} />
                </p>
                <p onClick={() => HandleDisplayCategories('Laptop')} className="h-10 w-full items-center flex hover:bg-slate-600 hover:text-white justify-between p-5">
                    <p>Laptop</p>
                    <i class="fa-solid fa-angle-down"></i>
                </p>
                <p id="Laptop" className="hidden w-full ml-7 mr-5">
                    <ProductMenu Product={LaptopCategories} />
                </p>
                <p onClick={() => HandleDisplayCategories('SmartPhone')} className="h-10 w-full items-center flex hover:bg-slate-600 hover:text-white justify-between p-5">
                    <p>Smart Phone</p>
                    <i className="fa-solid fa-angle-down"></i>
                </p>
                <p id="SmartPhone" className="hidden w-full ml-7 mr-5">
                    <ProductMenu Product={PhoneCategory} />
                </p>
                <p onClick={() => HandleDisplayCategories('Bike')} className="h-10 w-full items-center flex hover:bg-slate-600 hover:text-white justify-between p-5">
                    <p>Bike</p>
                    <i className="fa-solid fa-angle-down"></i>
                </p>
                <p id="" className="h-10 w-full items-center flex hover:bg-slate-600 hover:text-white justify-between p-5">
                    <p>Smart Phone</p>
                    <i className="fa-solid fa-angle-down"></i>
                </p>
            </div>
        </>
    )
}

const ConditionsMenu = () => {
    return (
        <>
            <div className=" bg-blue-300 w-full h-full text-start">
                <p className="h-10 w-full items-center flex hover:bg-slate-600 hover:text-white"><p className="ml-3">New</p></p>
                <p className="h-10 w-full items-center flex hover:bg-slate-600 hover:text-white"><p className="ml-3">Used</p></p>

            </div>
        </>
    )
}

const ProductMenu = ({ Product }) => {
    let arr = []

    Product.map((items, index) => (
        arr.push(<div className="hover:text-white" key={index}>{items}</div>)
    ))
    return (
        <>
            <div className="text-sm">
                <ul>
                    {arr}
                </ul>
            </div>
        </>
    )
}

const HandleDisplayCategories = (id) => {
    const Node = document.getElementById(id)
    if (Node) {
        if (Node.classList.contains('hidden')) {
            Node.classList.remove('hidden')
            // Node.classList.add('block')
        } else {
            Node.classList.add('hidden')
        }
    }
}

const handleProfileMenu = () => {
    const Menu = document.getElementById('profileMenu')
    if (Menu) {
        if (Menu.classList.contains('hidden')) {
            Menu.classList.remove('hidden')
            Menu.classList.add('flex')
        } else {
            Menu.classList.remove('flex')
            Menu.classList.add('hidden')
        }
    }
}

const LoginUI = () => {
    return (
        <>
            <div className="relative">
                <div className=" hover:cursor-pointer relative text-white"><p onClick={() => HandleLoginClick()} className="font-semibold text-xl" onMouseOver={() => HandleLoginClick()}> Login</p>
                    <div className=" hidden mt-5  rounded-md absolute  w-36  bg-white shadow-blue-500 shadow-md flex-col ml-[-60px] text-slate-500  transition-all duration-200 
                ease-in-out" id="loginList" onMouseOut={() => HandleLoginClick()}>
                        <Link to={signup}><p className="h-1/2 hover:bg-slate-600 hover:pr-10 flex  items-center hover:text-white hover:cursor-pointer"><i class="fa-solid fa-user-plus mr-3 ml-3"></i>Register</p></Link>
                        <Link to={login}><p className="h-1/2 hover:bg-slate-600 hover:pr-10 flex  items-center hover:text-white hover:cursor-pointer"><i class="fa-solid fa-right-to-bracket mr-3 ml-3"></i>Login</p></Link>

                    </div>
                </div>

            </div>
        </>
    )
}

const HandleMouseOver = () => {
    let i = document.getElementById('ListMenu')
    if (i) {
        if (i.classList.contains('hidden')) {
            i.classList.remove('hidden')
            i.classList.add('block')
            i.classList.add("w-full")

        }
    }
    let Menu = document.getElementById('MenuBar')
    if (Menu) {
        Menu.classList.remove('fa-bars')
        Menu.classList.add('fa-xmark')
    }
}

const HandleLoginClick = () => {
    const L = document.getElementById('loginList')
    if (L) {
        if (L.classList.contains('hidden')) {
            L.classList.remove('hidden')
            L.classList.add('h-36')
            L.classList.add('block')
        } else {
            L.classList.remove('block')
            L.classList.remove('h-36')
            L.classList.add('hidden')
        }
    }
}

const HandleMouseOut = () => {
    let i = document.getElementById('ListMenu')
    if (i.classList.contains('block')) {
        i.classList.remove('block')
        i.classList.add('hidden')
    }
    let Menu = document.getElementById('MenuBar')
    if (Menu) {
        Menu.classList.remove('fa-xmark')
        Menu.classList.add('fa-bars')
    }

}
const HandleNavbar = () => {
    let Menu = document.getElementById('MenuBar')
    if (Menu) {
        if (Menu.classList.contains('fa-bars')) {
            Menu.classList.remove('fa-bars')
            Menu.classList.add('fa-xmark')
        } else {
            Menu.classList.remove('fa-xmark')
            Menu.classList.add('fa-bars')
        }
    }
    let List = document.getElementById('ListMenu')
    if (List) {
        if (List.classList.contains('hidden')) {
            List.classList.remove('hidden')
            List.classList.add('block')
        } else {
            List.classList.remove('block')
            List.classList.add('hidden')
        }
    }
}

export default NavBar
