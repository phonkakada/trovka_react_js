import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { get_post_id } from '../api/route_api';
import DisplayFullImage from './display_image_full';
import { Categories } from '../assets/categories';
import { useSelector } from 'react-redux';
import { setAnotherProfile } from '../app/data/data';


const Post = ({ id, Profile, category, Name, Owner = false }) => {

    const [General_data, setGeneral_data] = useState({
        imgs: ['https://gm-fzc.com/wp-content/uploads/2018/04/3-min-scaled.jpg', 'https://gm-fzc.com/wp-content/uploads/2018/04/6-min-scaled.jpg', 'https://carsguide-res.cloudinary.com/image/upload/f_auto%2Cfl_lossy%2Cq_auto%2Ct_default/v1/editorial/2019-Lexus-LX570-S-SUV-white-Matt-Campbell-1001x565p-%281%29.jpg'],
        make: 'LEXUS',
        model: 'LX 570',
        price: 280000,
        date: '2023-11-14',
        year: '2021',
        color: 'White',
    })



    const [Car, setCar] = useState({
        Hp: 389,
        Cc: 5700,
        Tax: 'Paper',
    })

    const [Motor, setMotor] = useState({
        Hp: 172,
        Cc: 44,
        Tax: 'null',
    })

    const [Phone, setPhone] = useState({
        Cpu: null,
        Gpu: null,
        Ram: null,
        Storage: null,
        Rear_Camera: null,
        Front_Camera: null,
    })

    const profile = useSelector((state) => state.data.AnotherProfile)

    const UserInfo = {
        profile_img : profile.profile_img,
    }


    useEffect(() => {
        const GetPost = async () => {
            await axios.get(get_post_id + id).then((response) => {
                if (response.status === 200) {
                    const data = response.data.Message
                    const product_info = data.getinfo[0]


                }
            }).catch(() => {

            })

        }
        GetPost()
    }, [])


    const [Display, setDisplay] = useState(false);

    const MenuPosts = () => {
        return (
            <>
                <div className="w-full h-full text-slate-600 mt-[-30px]">
                    <div className="flex items-center hover:text-blue-500 hover:cursor-pointer"><i class="fa-regular fa-pen-to-square"></i><p className="ml-3">Edit</p></div>
                    <div className="flex items-center mt-2 hover:text-blue-500 hover:cursor-pointer"><i class="fa-solid fa-trash"></i><p className="ml-3">Delete </p></div>
                </div>
            </>
        )
    }

    const HandleUserClickMenuPost = () => {
        setDisplay(!Display)
    }
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    const AnotherImage = ''

    if (!General_data.imgs) {
        return <div>No Post Found</div>
    }

    return (
        <>
            <div className="h-full w-full flex mt-14" >
                <div className="w-[90%] h-full">
                    <div className="w-full flex h-[15%] items-center">
                        <div className="w-full flex h-[15%] items-center">
                            <div className="w-[13%] h-[0] pb-[13%] md:w-[90px] md:pb-[90px] relative rounded-full bg-black overflow-hidden" id={"post"}>
                                <div className="absolute inset-0">
                                    {/* <Profile /> */}
                                </div>

                            </div>

                            <div className="items-center text-start ml-[4%] text-sm md:text-base xl:text-2xl">
                                <p className="font-semibold">{Name}</p>
                                <p className="font-extralight">{General_data.date.split('T')[0]}</p>
                            </div>
                        </div>
                        {Owner === true && <div className="text-end">
                            {Display && <i><MenuPosts /></i>}
                            <i class="fa-solid fa-ellipsis-vertical hover:cursor-pointer text-2xl md:text-2xl" onClick={(e) => HandleUserClickMenuPost()}></i>

                        </div>}
                    </div>
                    <div className="w-full h-[45%] ">
                        <img className="max-h-full max-w-full h-full w-full object-cover" src={General_data.imgs[0]}></img>

                    </div>
                    <div className="w-full h-[25%] mt-2 flex">
                        <div className="h-full w-[49%] ">
                            <img className="max-h-full max-w-full h-full w-full m-auto object-cover" src={General_data.imgs[1]}></img>
                        </div>
                        <div className="h-full w-[49%] " onClick={(e) => <DisplayFullImage ListImages={General_data.imgs} Start={2} />}>
                            <img className="max-h-full max-w-full h-full w-full m-auto object-cover ml-[4%]" src={General_data.imgs[0]}></img>
                            <p className="text-yellow-500 text-4xl mt-[-45%] ">+{AnotherImage}</p>

                        </div>
                    </div>
                    <div className="w-[95%] mt-2 h-[15%]">
                        <div className="text-start text-xl items-center flex justify-between">
                            <p className="font-semibold text-slate-500">{General_data.make} {General_data.model}</p>
                            <p className=" font-semibold bg-yellow-200 p-1 px-2 -skew-x-12 text-blue-500">{General_data.price} $</p>
                        </div>
                        <ul className="text-start flex mt-2 justify-between font-light text-sm md:text-xl">

                            {category.toUpperCase() === Categories[2].toUpperCase() &&
                                <div>
                                    <li>HP: {Car.Hp}</li>
                                    <li>CC: {Car.Cc}</li>
                                    <li>Tax: {Car.Tax}</li>
                                </div>
                            }
                            {category.toUpperCase() === Categories[3].toUpperCase() &&
                                <div>
                                    <li>HP: {Motor.Cc}</li>
                                    <li>CC: {General_data.color}</li>
                                    <li>Tax: {Motor.Tax}</li>
                                </div>
                            }
                            {category.toUpperCase() === Categories[4].toUpperCase() &&
                                <div>
                                    <li>CPU: {Phone.Cpu}</li>
                                    <li>GPU: {Phone.Gpu}</li>
                                    <li>Ram: {Phone.Ram} GB</li>
                                </div>
                            }


                            <div className="text-start">
                                <li>Year: {General_data.year}</li>
                                <li>Color: {General_data.color}</li>
                            </div>
                            <div>

                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="mt-14 md:mt-5 xl:mt-10"></hr>
        </>
    )
}

export default Post