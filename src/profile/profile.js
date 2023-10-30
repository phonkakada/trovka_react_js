import React, { useEffect, useState } from "react";
import DisplayAllPost from "./posts/posts";
import DisplayAllLiked from "./liked/liked";
import DisplayAllFollowers from "./follows/followers";
import DisplayAllFollowings from "./follows/followings";
import DisplayAllShares from "./follows/followers";
import CheckLogin from "../Controllers/CheckLogin";
import { Link } from "react-router-dom";
import GetUserInformation from "../api/user_managements/get_user_info";
import Posts from "./posts/User_Posted";

const Profile = () => {

    const [name, setName] = useState('')
    const [contact, setContact] = useState('')
    const [profile , setProfile] = useState('')
    const [last_name , setlast_name ] = useState('')

    useEffect(() => {
        const GetInfo = async () => {
            const data = await GetUserInformation();
            setName(data[0])
            setProfile(data[1])
            
        }
        GetInfo();
    } , [])

    const ProfileImg = () => {
        return (
            profile? <>
                <img className="object-cover rounded-full max-h-full max-w-full h-full w-full" src={profile}></img>
            </> : <>
                <div className="flex font-bold text-2xl text-white justify-center items-center w-full h-full">
                    <p>{last_name?(last_name[0] + "").toUpperCase() : ""}</p>
                </div>
            </>
        )
    }


    let Phone = "089261500"
    let Location = "Phnom Penh"
    let Email = "phonkakada@icloud.com"

    document.title = name

    const AllButtons = ['Add Post', 'Posts', 'Likes', 'Shares', 'Followers', 'Followings']
    const [CurrentButton, setCurrentButton] = useState(AllButtons[1])

    const HandleChangeButton = (Button) => {
        setCurrentButton(Button)
    }

    return (
        <>
            <div  className="w-[100vw] flex justify-center h-[100vh]">
                <div className="w-[60%]">
                    <center>
                        <div className=" w-20 pb-20 mt-10 md:w-24 md:pb-24 relative rounded-full bg-blue-300 overflow-hidden">
                            <div className="absolute inset-0">
                                <ProfileImg />
                            </div>
                        </div>
                        <p className="mt-5 text-2xl font-semibold">{name}</p>
                        <div className="mt-7">
                            <button className="bg-slate-300 p-[10px] rounded-lg md:p-[20px] lg:p-[30px]">Edit Profile</button>
                            <button className="bg-slate-300 ml-10 p-[10px] rounded-lg md:p-[20px] lg:p-[30px]">Profile Setting</button>
                        </div>
                    </center>
                    <div className="m-auto w-full  mt-10 text-center">
                        <ul className=" items-center text-slate-500 ml-20">
                            <Link to={`tel: +855 ${Phone}`}><li className="flex items-center">
                                <i class="fa-solid fa-phone mr-5"></i>
                                <p>{Phone}</p>
                            </li></Link>
                            <li className="flex items-center mt-5">
                                <i class="fa-solid fa-location-dot mr-5"></i>
                                <p>{Location}</p>
                            </li>
                            <li className="flex items-center mt-5">
                                <i class="fa-regular fa-envelope mr-5"></i>
                                <p>{Email}</p>
                            </li>
                            <li className="flex items-center mt-5">
                                <i class="fa-solid fa-triangle-exclamation mr-5"></i>
                                <p>Edit Profile</p>
                            </li>
                        </ul>
                    </div>
                    <center className="hidden mt-20 md:block">
                        <button className="bg-slate-300 p-5 rounded-lg mr-5" onClick={() => HandleChangeButton(AllButtons[0])}>{AllButtons[0]}</button>
                        <button className="bg-slate-300 p-5 rounded-lg mr-5" onClick={() => HandleChangeButton(AllButtons[1])}>{AllButtons[1]}</button>
                        <button className="bg-slate-300 p-5 rounded-lg mr-5" onClick={() => HandleChangeButton(AllButtons[2])}> {AllButtons[2]} </button>
                        <button className="bg-slate-300 p-5 rounded-lg mr-5" onClick={() => HandleChangeButton(AllButtons[3])}>{AllButtons[3]}</button>
                        <button className="bg-slate-300 p-5 rounded-lg mr-5" onClick={() => HandleChangeButton(AllButtons[4])}>{AllButtons[4]}</button>
                        <button className="bg-slate-300 p-5 rounded-lg mr-5" onClick={() => HandleChangeButton(AllButtons[5])}>{AllButtons[5]}</button>
                    </center>
                    <hr className=" mt-5 md:hidden"></hr>
                    <ul className="w-full z-[1] sticky top-14 flex mt-2 justify-between  md:hidden">
                        <li className="bg-yellow-500 hover:cursor-pointer hover:text-slate-100 w-1/2 text-center active:text-white underline" onClick={() => HandleChangeButton(AllButtons[1])}><i class="fa-solid fa-signs-post text-slate-400"></i></li>
                        <li className="bg-blue-200 w-1/2 hover:cursor-pointer hover:text-slate-100 text-center " onClick={() => HandleChangeButton(AllButtons[2])}><i class="fa-solid fa-thumbs-up text-slate-400"></i></li>
                        <li className="w-1/2 bg-yellow-500 hover:cursor-pointer hover:text-slate-100 text-center" onClick={() => HandleChangeButton(AllButtons[3])}><i class="fa-solid fa-share text-slate-400"></i></li>
                        <li className="w-1/2 bg-blue-200 hover:cursor-pointer hover:text-slate-100 text-center" onClick={() => HandleChangeButton(AllButtons[5])}><i class="fa-solid fa-heart text-slate-400"> </i></li>
                    </ul>
                    <hr className="mt-2 md:mt-10"></hr>
                    {CurrentButton === AllButtons[1] && <div><DisplayAllPost profile={ProfileImg} Name={name} /></div>}
                    {/* <Posts /> */}
                    {CurrentButton === AllButtons[2] && <DisplayAllLiked />}
                    {CurrentButton === AllButtons[3] && <DisplayAllShares />}
                    {CurrentButton === AllButtons[5] && <DisplayAllFollowings />}
                </div>
            </div>
        </>
    )
}



export default Profile