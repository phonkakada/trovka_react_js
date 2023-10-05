import React, { useState } from "react";
import DisplayAllPost from "./posts/posts";
import DisplayAllLiked from "./liked/liked";
import DisplayAllFollowers from "./follows/followers";
import DisplayAllFollowings from "./follows/followings";

const Profile = () => {
    let Name = "PHON KAKADA"
    let Phone = "089261500"
    let Location = "Phnom Penh"
    let Email = "phonkakada@icloud.com"
    let ProfileImage = "https://firebasestorage.googleapis.com/v0/b/personal-website-3a210.appspot.com/o/Pic.png?alt=media&token=fc9b7149-9c5c-4b97-b92e-11face24bf9d"

    document.title = Name

    const AllButtons = ['Add Post', 'Posts', 'Likes', 'Shares', 'Followers', 'Followings']
    const [CurrentButton, setCurrentButton] = useState(AllButtons[1])

    const HandleChangeButton = (Button) => {
        setCurrentButton(Button)
    }
    return (
        <>
            <div>
                <div className="w-[100vw] h-[100vh]">
                    <center>
                        <div className="w-[100px] h-[100px] xl:w-[200px] mt-10 xl:pb-[200px] md:w-[150px] md:pb-[150px] relative rounded-full bg-black overflow-hidden">
                            <div className="absolute inset-0">
                                <img
                                    className="w-full h-full object-cover rounded-full"
                                    src={ProfileImage}
                                    alt="Profile"
                                ></img>
                            </div>
                        </div>
                        <p className="mt-5 text-2xl font-semibold">{Name}</p>
                        <div className="mt-7">
                            <button className="bg-slate-300 p-[15px] rounded-lg md:p-[20px] lg:p-[30px]">Edit Profile</button>
                            <button className="bg-slate-300 ml-10 p-[15px] rounded-lg md:p-[20px] lg:p-[30px]">Profile Setting</button>
                        </div>
                    </center>
                    <div className="m-auto w-full  mt-10 text-center">
                        <ul className=" items-center text-slate-500 ml-20">
                            <li className="flex items-center">
                                <i class="fa-solid fa-phone mr-5"></i>
                                <p>{Phone}</p>
                            </li>
                            <li className="flex items-center mt-5">
                                <i class="fa-solid fa-location-dot mr-5"></i>
                                <p>{Location}</p>
                            </li>
                            <li className="flex items-center mt-5">
                                <i class="fa-solid fa-location-dot mr-5"></i>
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
                    <hr className="mt-5 md:hidden"></hr>
                    <ul className="w-full flex mt-2 justify-between  md:hidden">
                        <li className="bg-yellow-500 w-1/2 text-center active:text-white underline" onClick={() => HandleChangeButton(AllButtons[1])}><i class="fa-solid fa-signs-post text-slate-400"></i></li>
                        <li className="bg-blue-200 w-1/2 text-center " onClick={() => HandleChangeButton(AllButtons[2])}><i class="fa-solid fa-thumbs-up text-slate-400"></i></li>
                        <li className="w-1/2 bg-yellow-500 text-center"><i class="fa-solid fa-share text-slate-400"></i></li>
                        <li className="w-1/2 bg-blue-200 text-center" onClick={() => HandleChangeButton(AllButtons[5])}><i class="fa-solid fa-heart text-slate-400"> </i></li>
                    </ul>
                    <hr className="mt-2 md:mt-10"></hr>
                    {CurrentButton === AllButtons[1] && <DisplayAllPost profile={ProfileImage} />}
                    {CurrentButton === AllButtons[2] && <DisplayAllLiked />}
                    {CurrentButton === AllButtons[4] && <DisplayAllFollowers />}
                    {CurrentButton === AllButtons[5] && <DisplayAllFollowings />}
                </div>
            </div>
        </>
    )
}




export default Profile