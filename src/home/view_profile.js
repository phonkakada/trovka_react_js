import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Post from '../components/SignlePost';
import ProfileImg from '../components/profile_img';
import { useDispatch } from 'react-redux';
import { setAnotherProfile } from '../app/data/data';
const ViewProfile = () => {
    const id = useParams();
    const uuid = id.uuid;

    const [Name, setName] = useState('PHON KAKADA')
    const [Regster, setRegister] = useState('2023-11-14')
    const [Email, setEmail] = useState('phonkakada@icloud.com')
    const [Phone, setPhone] = useState('089261500')
    const dispatch = useDispatch();
    const [UserInfo , setUserInfo] = useState({
        profile_img : 'https://storage.googleapis.com/trovka_image/photo_2023-09-16_11-40-21.jpg',
        last_name : null,
        first_name : null,
        register_date : null,
        email : null,
        phone : null
    })

    dispatch(setAnotherProfile(UserInfo))


    document.title  = Name  // Change Browser tap as user name

    return (
        <>
            <div className='w-full h-auto flex justify-center'>
                <div className='m-10 mx-20 md:m-20 w-full '>
                    <div className=' w-full items-center flex flex-col'>
                        <div className='w-24 h-24 bg-blue-200 rounded-full'>
                            <div className='w-full'>
                                <ProfileImg profile_url={UserInfo.profile_img} last_name={UserInfo.last_name} />
                            </div>
                        </div>
                        <div className='mt-5 font-bold font-Playpen text-slate-600 text-xl'>
                            <p>{Name}</p>
                            <p className='text-sm font-sans font-thin italic'>Member since {Regster}</p>
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
    return (
        <>
            <div>
                <p className='text'>Post</p>
                <Post category={'Car'} Owner={false} />
            </div>
        </>
    )
}

export default ViewProfile