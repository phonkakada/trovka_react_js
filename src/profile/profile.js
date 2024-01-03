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
            <div id="profile" className="mx-10 w-full h-full flex justify-center">
                <div className="w-full m-20">
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

                   
                    {CurrentButton === AllButtons[1] && <div className="pb-20"><DisplayAllPost  /></div>}
                 
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