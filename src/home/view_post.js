import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SimpleImageSlider from "react-simple-image-slider";
import { GoogleMap, useLoadScript, Marker, LoadScript, useJsApiLoader } from '@react-google-maps/api';
import map_api from '../location/api_key';
import axios from 'axios';


import { get_user_post_info, view_post, view_profile } from '../routes/string_routes';
import { Categories } from '../assets/categories';
import ProfileImg from '../components/profile_img';
import LoadingScreen from '../components/Loadind_Screen';
import RelativeProducts from './relative_products';
import { useDispatch } from 'react-redux';
import { setAnotherProfile } from '../app/data/data';
import AxiosInstance from '../api/axios';

const ViewPost = () => {
    const id = useParams();
    const post_id = id.id

    const [Make, setMake] = useState('')
    const [Model, setModel] = useState('')
    const [Imgs, setImgs] = useState([])
    const [Phones, setPhones] = useState([])
    const [Description, setDescription] = useState(null)
    const [post_category, set_post_category] = useState('')
    const Nav = useNavigate();
    const dispatch = useDispatch()

    const [UserProfile, setUserProfile] = useState({
        first_name: null,
        profile_img: null,
        register_date: null,
        last_name: null,
        uuid: null
    })

    const [Car, setCar] = useState({
        make: null,
        model: null,
        hp: null,
        cc: null,
        used: null,
        chair: null,
        warranty: null,
        tax_type: null,
        year: null,
        color: null,
        transmission: null,
        fuel: null,
    })
    const [Motor, setMotor] = useState({
        make: null,
        model: null,
        cc: null,
        used: null,
        warranty: null,
        tax_type: null,
        year: null,
        color: null,
        transmission: null,
    })

    const [Phone, setPhone] = useState({
        make: null,
        model: null,
        year: null,
        used: null,
        warranty: null,
        storage: null,
        ram: null,
        cpu: null,
        gpu: null,
        screen: null,
        rear_camera: null,
        front_camera: null,
        battery: null,
        touch_screen: null,
        color: null,
    })

    const [Computer, setComputer] = useState({
        make: null,
        model: null,
        used: null,
        year: null,
        warranty: null,
        cpu: null,
        gpu: null,
        ram: null,
        storage: null,
        speaker: null,
        color: null,
        touch_screen: null,
        screen: null,
        battery: null,
    })


    const [Price, setPrice] = useState(null)
    const [Location, setLocation] = useState(null)
    const [LocationLink, setLocationLink] = useState(null)


    useEffect(() => {
        const GetUserInfomation = async () => {
            await AxiosInstance.get(get_user_post_info + UserProfile.uuid).then((e) => {
                if (e.status === 200){
                    // console.log(e.data.Message)
                    dispatch(setAnotherProfile(e.data.Message))
                }
            }).catch(e => {
                // console.log(e)
            })
        }
        if (UserProfile.uuid){
            GetUserInfomation()
        }
    }, [UserProfile])


    const GetPost = async () => {
        for (const key in UserProfile) {  // reset value 
            setUserProfile({
                key: null
            })
        }
        await AxiosInstance.get(view_post + post_id).then((e) => {
            if (e.status === 200) {
                const data = e.data.Message;
                const info = data.getinfo[0];
                const user = data.user_info
                setPrice(data.price);
                set_post_category(data.post_category)
                setLocationLink(data.locations[0].locationLink)
                setLocation(data.locations[0].location)

                setUserProfile({
                    first_name: user.first_name,
                    last_name: user.last_name,
                    profile_img: user.profile_url,
                    register_date: user.created_at,
                    uuid: user.uuid
                })

                setMake(info.make)

                setCar({
                    make: info.make,
                    model: info.model,
                    fuel: info.fuel,
                    warranty: info.warranty,
                    color: info.color,
                    tax_type: info.tax_type,
                    transmission: info.transmission,
                    chair: info.chair,
                    year: info.year,
                    hp: info.hp,
                    cc: info.cc,
                    used: info.used,
                })

                setPhone({
                    make: info.make,
                    model: info.model,
                    used: info.used,
                    ram: info.ram,
                    storage: info.storage,
                    screen: info.screen,
                    touch_screen: info.touch_screen,
                    cpu: info.cpu,
                    gpu: info.gpu,
                    battery: info.battery,
                    rear_camera: info.rear_camera,
                    front_camera: info.front_camera,
                    year: info.year,
                    color: info.color,
                    warranty: info.warranty
                })

                setMotor({
                    make: info.make,
                    model: info.model,
                    warranty: info.warranty,
                    color: info.color,
                    tax_type: info.tax_type,
                    transmission: info.transmission,
                    year: info.year,
                    cc: info.cc,
                    used: info.used
                })

                setComputer({
                    make: info.make,
                    model: info.model,
                    ram: info.ram,
                    storage: info.storage,
                    used: info.used,
                    cpu: info.cpu,
                    gpu: info.gpu,
                    touch_screen: info.touch_screen,
                    speaker: info.speaker,
                    screen: info.screen,
                    warranty: info.warranty,
                    year: info.year,
                    color: info.color,
                    battery: info.battery
                })

                setDescription(info.description)

                let arrImgs = []
                for (let i = 0; i < data.products.length; i++) {
                    arrImgs.push({ url: data.products[i].product_image_url })
                }
                setImgs(arrImgs)

                let ArrNum = []
                for (let i = 0; i < data.get_contact.length; i++) {
                    ArrNum.push(data.get_contact[i].number)
                }
                setPhones(ArrNum)


            }
        }).catch((e) => {
            console.log(e)
        })
    }
    useEffect(() => {
        GetPost();
    }, [post_id])

    // const DisplayImgs = () => {
    //     return (
    //         <>
    //             <div className='w-full h-full md:hidden'>
    //                 <SimpleImageSlider onClick={() => alert(1)} images={Imgs} showNavs={true} height={300} width={`400px`} />
    //             </div>
    //             <div className='w-full h-full hidden md:block lg:hidden'>
    //                 <SimpleImageSlider onClick={() => alert(1)} images={Imgs} showNavs={true} height={300} width={`50%`} />
    //             </div>
    //             <div className='w-full h-full hidden lg:block'>
    //                 <SimpleImageSlider onClick={() => alert(1)} images={Imgs} showNavs={true} height={490} width={`50%`} />
    //             </div>



    //         </>
    //     )
    // }
    const ImagePreview = () => {
        const [Index, setIndex] = useState(0)
        if (Imgs.length !== 0) {
            return (
                <>
                    <div className='w-full h-full relative'>
                        <div className='absolute inset-0'>
                            <img className='max-w-full max-h-full h-full w-full object-cover' src={Imgs[Index].url} />

                        </div>
                        <div className='w-full hover:cursor-pointer  absolute items-center h-full flex justify-around text-neutral-50 text-4xl'>
                            <i onClick={() => {
                                if (Index > 0) {
                                    setIndex(Index - 1)
                                }
                                if (Index === 0) {
                                    setIndex(Imgs.length - 1)
                                }
                            }} className="fa-solid fa-arrow-left"></i>
                            <i onClick={() => {
                                if (Index < Imgs.length - 1) {
                                    setIndex(Index + 1)
                                }
                                if (Index === Imgs.length - 1) {
                                    setIndex(0)
                                }
                            }} className="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                </>
            )
        }
    }
    const ProfileAndProduct = () => {
        let price = (+(Price + "").split('.')[1]) > 0 ? Price : (Price + "").split(".")[0]

        const HandleSeeProfile = (uuid) => {
            Nav(`/${view_profile}${uuid}`)
        }
        return (
            <>
                <div className='w-full h-full mt-5 md:mt-0 md:ml-5'>
                    <p className='font-bold font-Playpen text-xl bg-yellow-200 w-32 p-5 py-2 -skew-x-12 text-blue-700 whitespace-nowrap '>{price} $</p>
                    <div onClick={() => HandleSeeProfile(UserProfile.uuid)} title={`View Profile's ${UserProfile.first_name} ${UserProfile.last_name} `} className='flex hover:cursor-pointer items-center mt-5'>
                        <div className='flex items-center bg-cyan-400 h-10 w-10 rounded-full'>
                            <ProfileImg profile_url={UserProfile.profile_img} last_name={UserProfile.last_name} />
                        </div>
                        <div className='ml-4'>
                            <p className='font-bold md:text-base'>{`${UserProfile.first_name} ${UserProfile.last_name}`}</p>
                            <p className='font-thin italic text-sm'>{`Member Since : ${UserProfile.register_date.split('T')[0]}`}</p>
                        </div>
                    </div>
                    <div className=' w-full h-full'>
                        <p className='p-5 pl-0 overflow-auto whitespace-nowrap text-ellipsis'><i className='fa-solid fa-location-dot mr-1'></i>Location : {Location} </p>
                        <Googlemap />
                    </div>
                </div>
            </>
        )


    }
    const ProductInfo = () => {
        return (
            <>
                <div className='mt-5'>
                    <h2 className='font-Playpen text-2xl'>Product specification</h2>
                    {post_category.toLowerCase() === Categories[2].toLowerCase() && <div className='md:flex mt-5 justify-between h-auto'>
                        <ul className=' w-full'>
                            <li className='flex items-center'><div className=' pt-1 pb-1 w-28 md:w-20 text-center text-white bg-slate-400'>Make</div><p className='ml-3'>{Car.make}</p></li>
                            <hr className='mr-2 mt-1'></hr>
                            <li className='flex mt-1 items-center'><div className='w-28 md:w-20 pt-1 pb-1 text-center text-white bg-slate-400'>Model</div><p className='ml-3'>{Car.model}</p></li>
                            <hr className='mr-2 mt-1'></hr>
                            <li className='flex mt-1 items-center'><div className='w-28 md:w-20 pt-1 pb-1 text-center text-white bg-slate-400'>HP</div><p className='ml-3'>{Car.hp}</p></li>
                            <hr className='mr-2 mt-1'></hr>
                            <li className='flex mt-1 items-center'><div className='w-28 md:w-20 pt-1 pb-1 text-center text-white bg-slate-400'>CC</div><p className='ml-3'>{Car.cc}</p></li>

                        </ul>
                        <div className='flex w-full'>
                            <div className='w-[1px] h-full bg-blue-800'></div>
                            <ul className='md:ml-7 w-full'>
                                <li className='flex mt-1 items-center'><div className='w-28 md:w-20 pt-1 pb-1 text-center text-white bg-slate-400'>Used</div><p className='ml-3'>{Car.used}</p></li>
                                <hr className='mr-2 mt-1'></hr>
                                <li className='flex mt-1 items-center'><div className='w-28 md:w-20 pt-1 pb-1 text-center text-white bg-slate-400'>Tax Type</div><p className='ml-3'>{Car.tax_type}</p></li>
                                <hr className='mr-2 mt-1'></hr>
                                <li className='flex mt-1 items-center'><div className='w-28 md:w-20 pt-1 pb-1 text-center text-white bg-slate-400'>Transmission</div><p className='ml-3'>{Car.transmission}</p></li>
                                <hr className='mr-2 mt-1'></hr>
                                <li className='flex mt-1 items-center'><div className='w-28 md:w-20 pt-1 pb-1 text-center text-white bg-slate-400'>Year</div><p className='ml-3'>{Car.year}</p></li>
                                <hr className='mr-2 mt-1'></hr>

                            </ul>
                        </div>
                        <div className='flex  w-full'>
                            <div className='w-[1px] h-full bg-blue-800'></div>
                            <ul className='md:ml-7 w-full'>
                                <li className='flex items-center mt-1 '><div className='text-center pt-1 pb-1 w-28 md:w-20 text-white bg-slate-400'>Color</div><p className='ml-3'>{Car.color}</p></li>
                                <hr className='mr-2 mt-1'></hr>

                                <li className='flex mt-1 items-center'><div className='text-center pt-1 pb-1 w-28 md:w-20 text-white bg-slate-400'>Chair</div><p className='ml-3'>{Car.chair}</p></li>
                                <hr className='mr-2 mt-1'></hr>

                                <li className='flex mt-1 items-center'><div className='text-center pt-1 pb-1 w-28 md:w-20 text-white bg-slate-400'>Fuel</div><p className='ml-3'>{Car.fuel}</p></li>
                                <hr className='mr-2 mt-1'></hr>

                                <li className='flex mt-1 items-center'><div className='text-center pt-1 pb-1 w-28 md:w-20 text-white bg-slate-400'>Warranty</div><p className='ml-3'>{Car.warranty}</p></li>
                            </ul>
                        </div>
                        <div></div>
                    </div>}
                    {post_category.toLowerCase() === Categories[3].toLowerCase() && <div className='md:flex mt-5 justify-between h-auto'>
                        <ul className=' w-full'>
                            <li className='flex items-center'><div className=' pt-1 pb-1 w-28 md:w-20 text-center text-white bg-slate-400'>Make</div><p className='ml-3'>{Motor.make}</p></li>
                            <hr className='mr-2 mt-1'></hr>
                            <li className='flex mt-1 items-center'><div className='w-28 md:w-20 pt-1 pb-1 text-center text-white bg-slate-400'>Model</div><p className='ml-3'>{Motor.model}</p></li>
                            <hr className='mr-2 mt-1'></hr>
                            <li className='flex mt-1 items-center'><div className='w-28 md:w-20 pt-1 pb-1 text-center text-white bg-slate-400'>CC</div><p className='ml-3'>{Motor.cc}</p></li>
                            <hr className='mr-2 mt-1'></hr>

                        </ul>
                        <div className='flex w-full'>
                            <div className='w-[1px] h-full bg-blue-800'></div>
                            <ul className='md:ml-7 w-full'>
                                <li className='flex mt-1 items-center'><div className='w-28 md:w-20 pt-1 pb-1 text-center text-white bg-slate-400'>Used</div><p className='ml-3'>{Motor.used}</p></li>
                                <hr className='mr-2 mt-1'></hr>
                                <li className='flex mt-1 items-center'><div className='w-28 md:w-20 pt-1 pb-1 text-center text-white bg-slate-400'>Tax Type</div><p className='ml-3'>{Motor.tax_type}</p></li>
                                <hr className='mr-2 mt-1'></hr>

                                <li className='flex mt-1 items-center'><div className='w-28 md:w-20 pt-1 pb-1 text-center text-white bg-slate-400'>Year</div><p className='ml-3'>{Motor.year}</p></li>
                                <hr className='mr-2 mt-1'></hr>

                            </ul>
                        </div>
                        <div className='flex  w-full'>
                            <div className='w-[1px] h-full bg-blue-800'></div>
                            <ul className='md:ml-7 w-full'>
                                <li className='flex items-center mt-1 '><div className='text-center pt-1 pb-1 w-28 md:w-20 text-white bg-slate-400'>Color</div><p className='ml-3'>{Motor.color}</p></li>
                                <hr className='mr-2 mt-1'></hr>

                                <li className='flex mt-1 items-center'><div className='w-28 md:w-20 pt-1 pb-1 text-center text-white bg-slate-400'>Transmission</div><p className='ml-3'>{Motor.transmission}</p></li>
                                <hr className='mr-2 mt-1'></hr>

                                <li className='flex mt-1 items-center'><div className='text-center pt-1 pb-1 w-28 md:w-20 text-white bg-slate-400'>Warranty</div><p className='ml-3'>{Motor.warranty}</p></li>
                            </ul>
                        </div>
                        <div></div>
                    </div>}
                    {post_category.toLowerCase() === Categories[5].toLowerCase() && <div className='md:flex mt-5 justify-between h-auto'>
                        <ul className=' w-full'>
                            <li className='flex items-center'><div className=' pt-1 pb-1 w-28 md:w-20 text-center text-white bg-slate-400'>Make</div><p className='ml-3'>{Phone.make}</p></li>
                            <hr className='mr-2 mt-1'></hr>
                            <li className='flex mt-1 items-center'><div className='w-28 md:w-20 pt-1 pb-1 text-center text-white bg-slate-400'>Model</div><p className='ml-3'>{Phone.model}</p></li>
                            <hr className='mr-2 mt-1'></hr>
                            <li className='flex mt-1 items-center'><div className='w-28 md:w-20 pt-1 pb-1 text-center text-white bg-slate-400'>CPU</div><p className='ml-3'>{Phone.cpu}</p></li>
                            <hr className='mr-2 mt-1'></hr>
                            <li className='flex mt-1 items-center'><div className='w-28 md:w-20 pt-1 pb-1 text-center text-white bg-slate-400'>GPU</div><p className='ml-3'>{Phone.gpu}</p></li>
                            <hr className='mr-2 mt-1'></hr>

                            <li className='flex mt-1 items-center'><div className='w-28 md:w-20 pt-1 pb-1 text-center text-white bg-slate-400'>Touch Screen</div><p className='ml-3'>{Phone.touch_screen}</p></li>
                            <hr className='mr-2 mt-1'></hr>

                        </ul>
                        <div className='flex w-full'>
                            <div className='w-[1px] h-full bg-blue-800'></div>
                            <ul className='md:ml-7 w-full'>
                                <li className='flex mt-1 items-center'><div className='w-28 md:w-20 pt-1 pb-1 text-center text-white bg-slate-400'>Ram</div><p className='ml-3'>{Phone.ram} GB</p></li>
                                <hr className='mr-2 mt-1'></hr>
                                <li className='flex mt-1 items-center'><div className='w-28 md:w-20 pt-1 pb-1 text-center text-white bg-slate-400'>Storage</div><p className='ml-3'>{Phone.storage} GB</p></li>
                                <hr className='mr-2 mt-1'></hr>
                                <li className='flex mt-1 items-center'><div className='w-28 md:w-20 pt-1 pb-1 text-center text-white bg-slate-400'>Screen</div><p className='ml-3'>{Phone.screen} "</p></li>
                                <hr className='mr-2 mt-1'></hr>
                                <li className='flex mt-1 items-center'><div className='w-28 md:w-20 pt-1 pb-1 text-center text-white bg-slate-400'>Year</div><p className='ml-3'>{Car.year}</p></li>
                                <hr className='mr-2 mt-1'></hr>
                                <li className='flex mt-1 items-center'><div className='w-28 md:w-20 pt-1 pb-1 text-center text-white bg-slate-400'>Used</div><p className='ml-3'>{Phone.used}</p></li>
                                <hr className='mr-2 mt-1'></hr>

                            </ul>
                        </div>
                        <div className='flex  w-full'>
                            <div className='w-[1px] h-full bg-blue-800'></div>
                            <ul className='md:ml-7 w-full'>
                                <li className='flex items-center mt-1 '><div className='text-center pt-1 pb-1 w-28 md:w-20 text-white bg-slate-400'>Color</div><p className='ml-3'>{Car.color}</p></li>
                                <hr className='mr-2 mt-1'></hr>

                                <li className='flex mt-1 items-center'><div className='text-center pt-1 pb-1 w-28 md:w-20 text-white bg-slate-400'>Rear Camera</div><p className='ml-3'>{Phone.rear_camera}</p></li>
                                <hr className='mr-2 mt-1'></hr>

                                <li className='flex mt-1 items-center'><div className='text-center pt-1 pb-1 w-28 md:w-20 text-white bg-slate-400'>Front Camera</div><p className='ml-3'>{Phone.front_camera}</p></li>
                                <hr className='mr-2 mt-1'></hr>

                                <li className='flex mt-1 items-center'><div className='text-center pt-1 pb-1 w-28 md:w-20 text-white bg-slate-400'>Warranty</div><p className='ml-3'>{Phone.warranty}</p></li>

                            </ul>
                        </div>
                        <div></div>
                    </div>}
                    {post_category.toLowerCase() === Categories[4].toLowerCase() && <div className='md:flex mt-5 justify-between h-auto'>
                        <ul className=' w-full'>
                            <li className='flex items-center'><div className=' pt-1 pb-1 w-28 md:w-20 text-center text-white bg-slate-400'>Make</div><p className='ml-3'>{Computer.make}</p></li>
                            <hr className='mr-2 mt-1'></hr>
                            <li className='flex mt-1 items-center'><div className='w-28 md:w-20 pt-1 pb-1 text-center text-white bg-slate-400'>Model</div><p className='ml-3'>{Computer.model}</p></li>
                            <hr className='mr-2 mt-1'></hr>
                            <li className='flex mt-1 items-center'><div className='w-28 md:w-20 pt-1 pb-1 text-center text-white bg-slate-400'>CPU</div><p className='ml-3'>{Computer.cpu}</p></li>
                            <hr className='mr-2 mt-1'></hr>
                            <li className='flex mt-1 items-center'><div className='w-28 md:w-20 pt-1 pb-1 text-center text-white bg-slate-400'>GPU</div><p className='ml-3'>{Computer.gpu}</p></li>
                            <hr className='mr-2 mt-1'></hr>

                            <li className='flex mt-1 items-center'><div className='w-28 md:w-20 pt-1 pb-1 text-center text-white bg-slate-400'>Touch Screen</div><p className='ml-3'>{Computer.touch_screen}</p></li>
                            <hr className='mr-2 mt-1'></hr>

                        </ul>
                        <div className='flex w-full'>
                            <div className='w-[1px] h-full bg-blue-800'></div>
                            <ul className='md:ml-7 w-full'>
                                <li className='flex mt-1 items-center'><div className='w-28 md:w-20 pt-1 pb-1 text-center text-white bg-slate-400'>Ram</div><p className='ml-3'>{Computer.ram} GB</p></li>
                                <hr className='mr-2 mt-1'></hr>
                                <li className='flex mt-1 items-center'><div className='w-28 md:w-20 pt-1 pb-1 text-center text-white bg-slate-400'>Storage</div><p className='ml-3'>{Computer.storage} GB</p></li>
                                <hr className='mr-2 mt-1'></hr>
                                <li className='flex mt-1 items-center'><div className='w-28 md:w-20 pt-1 pb-1 text-center text-white bg-slate-400'>Screen</div><p className='ml-3'>{Computer.screen} "</p></li>
                                <hr className='mr-2 mt-1'></hr>
                                <li className='flex mt-1 items-center'><div className='w-28 md:w-20 pt-1 pb-1 text-center text-white bg-slate-400'>Year</div><p className='ml-3'>{Computer.year}</p></li>
                                <hr className='mr-2 mt-1'></hr>
                                <li className='flex mt-1 items-center'><div className='w-28 md:w-20 pt-1 pb-1 text-center text-white bg-slate-400'>Used</div><p className='ml-3'>{Computer.used}</p></li>
                                <hr className='mr-2 mt-1'></hr>

                            </ul>
                        </div>
                        <div className='flex  w-full'>
                            <div className='w-[1px] h-full bg-blue-800'></div>
                            <ul className='md:ml-7 w-full'>
                                <li className='flex items-center mt-1 '><div className='text-center pt-1 pb-1 w-28 md:w-20 text-white bg-slate-400'>Color</div><p className='ml-3'>{Computer.color}</p></li>
                                <hr className='mr-2 mt-1'></hr>

                                <li className='flex mt-1 items-center'><div className='text-center pt-1 pb-1 w-28 md:w-20 text-white bg-slate-400'>Battery</div><p className='ml-3'>{Computer.battery} mAh</p></li>
                                <hr className='mr-2 mt-1'></hr>



                                <li className='flex mt-1 items-center'><div className='text-center pt-1 pb-1 w-28 md:w-20 text-white bg-slate-400'>Warranty</div><p className='ml-3'>{Computer.warranty}</p></li>

                            </ul>
                        </div>
                        <div></div>
                    </div>}
                    <h2 className='font-Playpen text-2xl mt-5'>Product Desciption</h2>
                    <p className='ml-5 mt-1'> {Description}</p>
                </div>
            </>
        )
    }

    const Googlemap = () => {
        const libraries = ['places']
        const { isLoaded } = useJsApiLoader({
            googleMapsApiKey: map_api,
            libraries: libraries
        })
        if (LocationLink) {
            const LatLng = LocationLink.split('/')
            const lat_long = {
                lat: +LatLng[LatLng.length - 1].split(',')[0],
                lng: +LatLng[LatLng.length - 1].split(',')[1],

            }
            return (

                <>
                    <div className='w-full relative h-full'>
                        {isLoaded && <div>
                            <div className='md:hidden'>
                                <GoogleMap onClick={() => window.open(LocationLink, '_blank')} mapContainerStyle={{ width: '100%', height: `155px` }} center={lat_long} zoom={10}>
                                    <Marker position={lat_long} />
                                </GoogleMap>
                            </div>
                            <div className='hidden md:block lg:hidden'>
                                <GoogleMap onClick={() => window.open(LocationLink, '_blank')} mapContainerStyle={{ width: '95%', height: `200px` }} center={lat_long} zoom={10}>
                                    <Marker position={lat_long} />
                                </GoogleMap>
                            </div>
                            <div className='w-full h-full hidden lg:block'>
                                <GoogleMap onClick={() => window.open(LocationLink, '_blank')} mapContainerStyle={{ width: '85%', height: `273px` }} center={lat_long} zoom={10}>
                                    <Marker position={lat_long} />
                                </GoogleMap>
                            </div>
                        </div>}

                    </div>

                </>
            )
        }

    }
    const ContactNumber = () => {
        if (Phones) {
            return (
                <>
                    <div className='flex mt-5'>
                        <p className='font-Playpen'>Phone Contact : </p>
                        <ul className='ml-5 flex'>
                            {Phones.map((item, index) => (
                                <li className='ml-1 text-blue-400' key={index}><a href={`tel: ${item}`}>{item} <span className='text-slate-500'>/</span> </a></li>
                            ))}
                        </ul>
                    </div>
                </>
            )
        }
    }

    if (!UserProfile.first_name) {
        return <LoadingScreen />
    }

    return (
        <>
            <div className='ml-[5%] mt-5  mr-20 lg:m-20 lg:mt-10 w-[90%] h-full'>
                <div className='lg:flex '>
                    <div className='w-full h-[300px] sm:h-[500px] md:h-[350px] lg:h-[445px] '>
                        <ImagePreview />
                    </div>
                    <div className='w-full h-full'>
                        <ProfileAndProduct />
                    </div>

                </div>
                <div className='relative'>
                    <ProductInfo />
                    <ContactNumber />
                    <div className='mt-10 pb-20'>
                        <RelativeProducts make={Make} id={post_id} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default ViewPost