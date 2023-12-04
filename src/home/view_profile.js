import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Post from '../components/SignlePost';
import ProfileImg from '../components/profile_img';
import { useDispatch, useSelector } from 'react-redux';
import { setAnotherProfile } from '../app/data/data';
import AxiosInsta from '../api/axios';
import LoadingScreen from '../components/Loadind_Screen';
import AxiosInstance from '../api/axios';
import { get_user_post_info } from '../routes/string_routes';
const ViewProfile = () => {
    const id = useParams();
    const uuid = id.uuid;

    const [Email, setEmail] = useState('phonkakada@icloud.com')
    const [Phone, setPhone] = useState('089261500')
    const dispatch = useDispatch();

    // dispatch(setAnotherProfile(UserInfo))

    const User = useSelector(state => state.data.AnotherProfile)
    if (!User){
        const GetUserInfomation = async () => {   // If User check profile directly data will be null so we need to request data to server to get data
            await AxiosInstance.get(get_user_post_info + uuid).then((e) => {
                if (e.status === 200){
                    // console.log(e.data.Message)
                    dispatch(setAnotherProfile(e.data.Message))
                }
            }).catch(e => {
                // console.log(e)
            })
        }
        if (uuid){
            GetUserInfomation()
        }
        return <LoadingScreen /> 
    }


    document.title  = User.first_name + " " + User.last_name  // Change Browser tap as user name

    return (
        <>
            <div className='w-full h-auto flex justify-center'>
                <div className='m-10 mx-20 md:m-20 w-full '>
                    <div className=' w-full items-center flex flex-col'>
                        <div className='w-24 h-24 bg-blue-200 rounded-full'>
                            <div className='w-full h-full rounded-full'>
                                <ProfileImg profile_url={User.profile_url} last_name={User.last_name} />
                            </div>
                        </div>
                        <div className='mt-5 font-bold font-Playpen text-slate-600 text-xl'>
                            <p>{User.first_name + " " + User.last_name}</p>
                            <p className='text-sm font-sans font-thin italic'>Member since: {User.created_at.split('T')[0]}</p>
                        </div>

                    </div>
                    <div className='flex-col flex mt-10 hover:cursor-pointer  text-slate-600'>
                        <div className='flex items-center'>
                            <i class="fa-regular fa-envelope mr-3"></i>
                            <p>{Email}</p>
                        </div>
                        <div className='flex items-center mt-3'>
                            <i class="fa-solid fa-phone-volume mr-3"></i>
                            <p>{Phone}</p>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <hr className='mb-5'></hr>
                        <AllPosts />
                    </div>
                </div>
            </div>
        </>
    )

}

const AllPosts = () => {
    let arr = []

    for (let i = 0 ; i < 1 ; i++){
        arr.push(<Post category={'Car'} Owner={false} />)
    }

    const end_screen = document.getElementById('end-screen')
    window.addEventListener('scroll', () => {
        if(end_screen){
            const pos = end_screen.getBoundingClientRect()
            console.log(pos.top)
        }
    })

    return (
        <>
            <div>
                <p className='text'>Post</p>
                {arr}
                <div id='end-screen'>HEllo</div>
            </div>
        </>
    )
}

export default ViewProfile