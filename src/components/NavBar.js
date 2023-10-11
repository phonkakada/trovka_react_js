import React, { useState, useEffect } from "react";
import './style.css';
import SideMenu from "./menuSideBar";
import { Link } from "react-router-dom";
import { login, signup } from "../routes/string_routes";
import CheckHomePage from "../Controllers/CheckLogin";
import { GetToken } from "../cookie/cookie";
import HandleLogout from "../api/logout";
import CheckLogin from "../Controllers/CheckLogin";

const NavBar = ({ style }) => {
    const [Login, setLogin] = useState(false)

    useEffect(() => {
        const Login = async () => {
            CheckLogin().then((e) => {
                setLogin(e)
            })
        }
        Login();
    }, [])

    return (
        <>
            <div className="w-full flex h-16 bg-blue-400 items-center" style={style}>
                <div className="h-full hidden " onMouseOver={(e) => HandleMouseOver()} onMouseOut={(e) => HandleMouseOut()} id="ListMenu">
                    <SideMenu></SideMenu>
                </div>
                <div className="flex justify-between mr-10 w-[100vw] items-center" >
                    <div className="flex ml-10 items-center" >
                        <i class="fa-solid fa-bars text-3xl text-white hidden max-[960px]:block" id="MenuBar" onMouseOver={(e) => HandleMouseOver()} onMouseOut={(e) => HandleMouseOut()} onClick={(_) => HandleNavbar()}></i>
                        <p className="text-3xl ml-5">Logo</p>
                    </div>
                    <div className="max-[960px]:hidden">
                        <ul className="flex justify-between" >
                            <li className="ml-10">Categories</li>
                            <li className="ml-10">Conditions</li>
                        </ul>
                    </div>
                    {Login ? <div className="flex items-center">
                        <i class="fa-regular fa-message text-2xl text-white"></i>
                        <i class="fa-regular fa-bell ml-5 text-2xl text-white"></i>
                        <div>
                            <div onClick={() => handleProfileMenu()} className="w-12 h-12 ml-5 rounded-full bg-blue-500  hover:cursor-pointer" onMouseOver={() => handleProfileMenu()}></div>
                            <div id="profileMenu" className="hidden bg-white justify-around absolute flex-col ml-[-5%] h-[250%] text-center w-32 rounded-md shadow-sm shadow-blue-700 text-slate-600">
                                <Link className="hover:bg-slate-500 w-full h-[30%] decoration-blue-500 hover:text-white flex items-center"><div className="flex items-center"><i class="fa-solid fa-user ml-5"></i><p className="ml-2">Profile</p></div></Link>
                                <Link className="hover:bg-slate-500 w-full h-[30%] decoration-blue-500 hover:text-white flex items-center"><div className="flex items-center"><i class="fa-solid fa-gear ml-5"></i><p className="ml-2">Setting</p></div></Link>
                                <Link onClick={() => HandleLogout()} className="hover:bg-slate-500 w-full h-[30%] decoration-blue-500 hover:text-white flex items-center"><div className="flex items-center"><i class="fa-solid fa-right-from-bracket ml-5"></i><p className="ml-2">Logout</p></div></Link>
                            </div>
                        </div>

                    </div> : <LoginUI />}
                </div>

            </div>
        </>
    )
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
