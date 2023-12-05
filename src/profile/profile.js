import React, { useEffect, useState } from "react";
import DisplayAllPost from "./posts/posts";
import { AddNewProfile } from './edit_profile'
import { Link, useNavigate } from "react-router-dom";
import ProfileImg from "../components/profile_img";
import LoadingSpinner from "../components/loading_spinner";
import AxiosInsta from "../api/axios";
import { useDispatch, useSelector } from "react-redux";
import LoadingScreen from "../components/Loadind_Screen";
import EditProfile from "./edit_profile";
import { addPost, home } from "../routes/string_routes";
import { setProfileImg } from "../app/data/data";

const Profile = () => {

    const Nav = useNavigate()
    const dispatch = useDispatch()

    const profileData = useSelector((state) => state.data.MyProfile)
    const LoginState = useSelector(state => state.data.LoginState)
    const Token = useSelector(state => state.data.Token)
    const StateChange = useSelector(state => state.data.StateChange)
    const [profile, setProfile] = useState(null)
    useEffect(() => {
        if (profileData) {
            let data = {}
            for (const key in profileData) {
                data[key] = profileData[key]
            }
            setProfile(data)
        }
    }, [profileData, StateChange])

    const AllButtons = ['Add Post', 'Posts', 'Likes', 'Shares', 'Followers', 'Followings']
    const [CurrentButton, setCurrentButton] = useState(AllButtons[1])


    if (!LoginState) {
        Nav(home)
    }

    if (!profile) {
        return <LoadingScreen />
    }

    const UserContacts = profileData.contacts[0]
    dispatch(setProfileImg(<ProfileImg last_name={profile.last_name} profile_url={profile.profile_url} />))
    document.title = profile.name
    return (
        <>
            <div id="profile" className="w-[100vw]  flex justify-center h-[100vh]">
                <div className="w-[60%]">
                    <center>
                        <div title="Change Profile" className=" w-20 pb-20 mt-10 md:w-24 bg-stone-400 md:pb-24 relative rounded-full overflow-hidden">
                            <div className="absolute w-full h-full inset-0">
                                <ProfileImg last_name={profile.last_name} profile_url={profile.profile_url} />
                            </div>

                        </div>
                        <div>
                            <AddNewProfile dispatch={dispatch} uuid={profile.uuid} token={Token} />
                        </div>

                        <p className="mt-5 text-2xl flex w-full justify-center font-bold font-Playpen"><p>{profile.name}</p></p>

                    </center>
                    <div className=" w-full  mt-10">
                        <ul className="text-slate-500">
                            {UserContacts  &&
                                <Link to={`tel: +855 ${UserContacts.phone}`}><li className="flex items-center">
                                    <i class="fa-solid fa-phone mr-5"></i>
                                    <p>{UserContacts.phone}</p>
                                </li></Link>
                            }
                            {/* <li className="flex items-center mt-5">
                                <i class="fa-solid fa-location-dot mr-5"></i>
                                <p>{Location}</p>
                            </li> */}
                            {
                                UserContacts  &&
                                <Link to={`mailto: ${UserContacts.email}`}>
                                    <li className="flex items-center mt-5">
                                        <i class="fa-regular fa-envelope mr-5"></i>
                                        <p>{UserContacts.email}</p>
                                    </li>
                                </Link>
                            }
                            <li className="flex hover:text-blue-500 hover:italic hover:cursor-pointer items-center mt-5">
                                <i class="fa-solid fa-triangle-exclamation mr-5"></i>
                                <p className="" onClick={HandleShowProfileEdit}>Edit Profile</p>
                            </li>

                        </ul>
                    </div>
                    <hr className="mt-5"></hr>

                    {/* <hr className=" mt-5 md:hidden"></hr>
                    <ul className="w-full z-[1] sticky top-14 flex mt-2 justify-between  md:hidden">
                        <li className="bg-yellow-500 hover:cursor-pointer hover:text-slate-100 w-1/2 text-center active:text-white underline" onClick={() => HandleChangeButton(AllButtons[1])}><i class="fa-solid fa-signs-post text-slate-400"></i></li>
                        <li className="bg-blue-200 w-1/2 hover:cursor-pointer hover:text-slate-100 text-center " onClick={() => HandleChangeButton(AllButtons[2])}><i class="fa-solid fa-thumbs-up text-slate-400"></i></li>
                        <li className="w-1/2 bg-yellow-500 hover:cursor-pointer hover:text-slate-100 text-center" onClick={() => HandleChangeButton(AllButtons[3])}><i class="fa-solid fa-share text-slate-400"></i></li>
                        <li className="w-1/2 bg-blue-200 hover:cursor-pointer hover:text-slate-100 text-center" onClick={() => HandleChangeButton(AllButtons[5])}><i class="fa-solid fa-heart text-slate-400"> </i></li>
                    </ul>
                    <hr className="mt-2 md:mt-10"></hr> */}
                    {CurrentButton === AllButtons[1] && <div className="pb-20"><DisplayAllPost  /></div>}
                    {/* <Posts />
                    {CurrentButton === AllButtons[2] && <DisplayAllLiked />}
                    {CurrentButton === AllButtons[3] && <DisplayAllShares />}
                    {CurrentButton === AllButtons[5] && <DisplayAllFollowings />} */}
                </div>
            </div>
            <div id="edit-profile" className="top-[15%] justify-center hidden flex w-full h-[80%] absolute">
                <div className="w-[80%] max-w-lg">
                    <EditProfile func={HandleShowProfileEdit} />
                </div>
            </div>
        </>
    )
}

const HandleShowProfileEdit = () => {
    const Profile = document.getElementById('profile')
    const EditProfile = document.getElementById('edit-profile')
    if (Profile && EditProfile) {
        if (EditProfile.classList.contains('hidden')) {
            EditProfile.classList.remove('hidden')
        } else {
            EditProfile.classList.add('hidden')
        }
    }
}



export default Profile