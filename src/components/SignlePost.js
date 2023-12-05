import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { get_post_id } from '../api/route_api';
import DisplayFullImage from './display_image_full';
import { Categories } from '../assets/categories';
import { useSelector } from 'react-redux';
import { setAnotherProfile } from '../app/data/data';
import LoadingSpinner from './loading_spinner';


const Post = ({ Make, Model, Year, Date, Hp, CC, category, Price, ListImg, Owner = false }) => {
    Price = (+(Price + "").split('.')[1]) > 0 ? Price : (Price + "").split(".")[0]

    const ProfileImg = useSelector(state => state.data.ProfileImg)
    const Profile = useSelector(state => state.data.MyProfile)

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
    if (!ListImg) {
        return <LoadingSpinner />
    }
    return (
        <>
            <div className="h-full w-full flex mt-14 " >
                <div className="w-[90%] h-full">
                    <div className="w-full flex h-[15%] items-center">
                        <div className="w-full flex h-[15%] items-center text-start">
                            <div className="w-[13%] pb-[13%] md:w-[60px] md:pb-[60px] relative rounded-full bg-black overflow-hidden" id={"post"}>
                                <div className="absolute inset-0">
                                    {ProfileImg}
                                </div>
                            </div>
                            <div className='ml-3 '>
                                <p className='font-Playpen md:text-xl md:font-semibold'>{Profile.name}</p>
                                <p className='font-thin italic text-xs'>{Date.split('T')[0]}</p>
                            </div>

                        </div>
                        {Owner === true && <div className="text-end">
                            {Display && <i><MenuPosts /></i>}
                            <i class="fa-solid fa-ellipsis-vertical hover:cursor-pointer text-2xl md:text-2xl" onClick={(e) => HandleUserClickMenuPost()}></i>

                        </div>}
                    </div>

                    <div className="w-full h-[45%] ">
                        <img className="max-h-full max-w-full h-full w-full object-cover" src={ListImg[0]}></img>

                    </div>
                    {ListImg.length == 2 && (
                        <div className='mt-2'>
                            <img src={ListImg[1]}></img>
                        </div>
                    )
                    }
                    {ListImg.length > 2 && <div className="w-full h-[25%] mt-2 flex">
                        <div className="h-full w-[49%] ">
                            <img className="max-h-full max-w-full h-full w-full m-auto object-cover" src={ListImg[1]}></img>
                        </div>
                        <div className="bg-yellow-500 w-[49%] relative h-full " onClick={(e) => <DisplayFullImage ListImages={ListImg} Start={2} />}>

                            <img className="max-h-full max-w-full m-auto object-cover ml-3" src={ListImg[2]}></img>

                            {/* <p className="text-yellow-500 text-4xl mt-[-45%] ">{ListImg.length - 3 == 0 ? '' : + " " + ListImg.length}</p> */}

                        </div>
                    </div>}
                    <div className="w-[95%] mt-2 h-[15%]">
                        <div className="text-start text-xl items-center flex justify-between">
                            <p className="font-semibold text-slate-500">{Make} {Model}</p>
                            <p className=" font-semibold bg-yellow-200 p-1 px-2 -skew-x-12 text-blue-500">{Price} $</p>
                        </div>
                        <ul className="text-start flex mt-2 justify-between font-light text-sm md:text-xl">

                            {category.toUpperCase() === Categories[2].toUpperCase() &&
                                <div className='flex justify-between w-full'>
                                    <div>
                                        <li>HP: {Hp}</li>
                                        <li>CC: {CC}</li>
                                    </div>
                                    <div>
                                        <li>Year: {Year}</li>
                                    </div>
                                    <div>
                                        {/*  */}
                                    </div>
                                </div>
                            }
                            {category.toUpperCase() === Categories[3].toUpperCase() &&
                                <div>
                                    {/* <li>HP: {Motor.Cc}</li>
                                    <li>CC: {General_data.color}</li>
                                    <li>Tax: {Motor.Tax}</li> */}
                                </div>
                            }
                            {category.toUpperCase() === Categories[4].toUpperCase() &&
                                <div>
                                    {/* <li>CPU: {Phone.Cpu}</li>
                                    <li>GPU: {Phone.Gpu}</li>
                                    <li>Ram: {Phone.Ram} GB</li> */}
                                </div>
                            }


                            <div className="text-start">
                                {/* <li>Year: {General_data.year}</li>
                                <li>Color: {General_data.color}</li> */}
                            </div>
                            <div>

                            </div>
                        </ul>
                        <p className='italic text-blue-500'>See more</p>
                    </div>
                </div>
            </div>
            <hr className="mt-14 md:mt-5 xl:mt-10"></hr>
        </>
    )
}

export default Post