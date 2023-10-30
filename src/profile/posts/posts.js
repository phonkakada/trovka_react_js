import React, { useRef, useState } from "react"
import NumberToK from "../../assets/NumberToK"
import DisplayFullImage from "../../components/display_image_full"
import { useEffect } from "react"
import axios from "axios"
import { API } from "../../api/api_key"
import { get_all_user_posts, get_post_id } from "../../api/route_api"
import { GetUUID } from "../../cookie/cookie"
import { Categories } from "../../assets/categories"


let i = 1;
let Added = false
const DisplayAllPost = ({ profile, Name }) => {

    const [AllPostsId, setAllPostsId] = useState(null)
    const [fetch, setfetch] = useState(false)
    const [CurrentPage, setCurrentPage] = useState(0)
    const [Posts, SetPost] = useState([])

    const GetUserPosts = async () => {
        await axios.get(API + get_all_user_posts + GetUUID()).then((response) => {
            if (response.status === 200) {
                setAllPostsId(response.data.Message.id)
            }
        }).catch(() => {

        })
    }
    useEffect(() => {
        GetUserPosts();
    }, [])

    const HandleNextPost = () => {
        if (AllPostsId) {
            if (CurrentPage < AllPostsId.length) {
                SetPost([...Posts, <Post key={CurrentPage} Profile={profile} id={AllPostsId[CurrentPage]} CurrentPost={CurrentPage} name={Name} />])
                setCurrentPage(CurrentPage + 1)
            }
        }
    }

    if (AllPostsId) {
        if (CurrentPage !== 2 && CurrentPage <= 3) {
            HandleNextPost();
        }
    }


    return (
        <>
            <p className="text-blue-500 text-3xl font-bold ml-7 mt-5">Posts</p>
            <center>

                <div className="w-[350px] h-[400px] sm:w-[500px] sm:h-[650px] md:w-[800px] md:h-[900px] xl:w-[1080px] xl:h-[1080px]">
                    {Posts}
                </div>
                <button id="btn-next" onClick={() => HandleNextPost()}></button>
                <br className="pb-20"></br>
            </center>
        </>
    )
}

const Post = ({ id, Profile, CurrentPost, Name }) => {

    const [price, setPrice] = useState('')
    const [cc, setcc] = useState('')
    const [hp, sethp] = useState('')
    const [date, setdate] = useState('')
    const [make, setmake] = useState('')
    const [model, setmodel] = useState('')
    const [year, setyear] = useState('')
    const [color, setcolor] = useState('')
    const [imgs, setimgs] = useState([])
    const [ram, setram] = useState('')
    const [storage, setstorage] = useState('')
    const [cpu, setcpu] = useState('')
    const [gpu, setgpu] = useState('')
    const [category, setcategory] = useState('')

    useEffect(() => {
        const GetPost = async () => {
            await axios.get(API + get_post_id + id).then((response) => {
                if (response.status === 200) {
                    const data = response.data.Message
                    const product_info = data.getinfo[0]
                    for (let i = 0; i < response.data.Message.products.length; i++) {
                        setimgs([...imgs, data.products[i].product_image_url])
                    }
                    setmake(product_info.make)
                    setmodel(product_info.model)
                    setyear(product_info.year)
                    setcolor(product_info.color)
                    setPrice(data.price)
                    setdate(data.created_at)
                    sethp(product_info.hp)
                    setcc(product_info.cc)
                    setcpu(product_info.cpu)
                    setgpu(product_info.gpu)
                    setram(product_info.ram)
                    setstorage(product_info.storage)
                    setcategory(data.post_category)

                }
            }).catch(() => {

            })

        }
        GetPost()
    }, [])

    let Date = "2023-09-20"
    let AnotherImage = imgs.length > 2 ? 5 : 5
    let arr = []
    let TotalLikes = 20000
    let TotalUnlikes = 500
    let TotalComments = 100
    let TotalShares = 100

    let Hp = 383
    let CC = 5700
    let Year = 2022
    let Color = "White"
    let Tax = "Tax Paper"

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

    window.addEventListener('scroll', () => {
        const post = document.getElementById('post-' + CurrentPost)
        const btn = document.getElementById('btn-next')

        if (post) {
            if (!isInViewport(post)) {
                if (!Added) {
                    if (btn) {
                        // btn.click()

                    }
                    Added = true
                    console.log("Add")
                }

            } else {
                console.log("No Add")
                Added = false
            }
        }
    })



    return (
        <>
            <div className="h-full w-full flex mt-14" >
                <div className="w-[90%] h-full">
                    <div className="w-full flex h-[15%] items-center">
                        <div className="w-full flex h-[15%] items-center">
                            <div className="w-[13%] h-[0] pb-[13%] md:w-[90px] md:pb-[90px] relative rounded-full bg-black overflow-hidden" id={"post-" + CurrentPost}>
                                <div className="absolute inset-0">
                                    <Profile />
                                </div>

                            </div>

                            <div className="items-center text-start ml-[4%] text-sm md:text-base xl:text-2xl">
                                <p className="font-semibold">{Name}</p>
                                <p className="font-extralight">{date.split('T')[0]}</p>
                            </div>
                        </div>
                        <div className="text-end">
                            {Display && <i><MenuPosts /></i>}
                            <i class="fa-solid fa-ellipsis-vertical hover:cursor-pointer text-2xl md:text-2xl" onClick={(e) => HandleUserClickMenuPost()}></i>

                        </div>
                    </div>
                    <div className="w-full h-[45%] ">
                        <img className="max-h-full max-w-full h-full w-full object-cover" src={imgs[0]}></img>

                    </div>
                    <div className="w-full h-[25%] mt-2 flex">
                        <div className="h-full w-[49%] ">
                            <img className="max-h-full max-w-full h-full w-full m-auto object-cover" src={imgs[1]}></img>
                        </div>
                        <div className="h-full w-[49%] " onClick={(e) => <DisplayFullImage ListImages={imgs} Start={2} />}>
                            <img className="max-h-full max-w-full h-full w-full m-auto object-cover ml-[4%]" src={imgs[0]}></img>
                            <p className="text-yellow-500 text-4xl mt-[-45%] ">+{AnotherImage}</p>

                        </div>
                    </div>
                    <div className="w-[95%] h-[15%]">
                        <div className="text-start text-xl flex justify-between">
                            <p className="font-semibold text-slate-500">{make} {model}</p>
                            <p className=" font-semibold text-blue-500">{price} $</p>
                        </div>
                        <ul className="text-start flex justify-between font-light text-sm md:text-xl">

                            {category.toUpperCase() === Categories[2].toUpperCase() &&
                                <div>
                                    <li>HP: {Hp}</li>
                                    <li>CC: {CC}</li>
                                    <li>Tax: {Tax}</li>
                                </div>
                            }
                              {category.toUpperCase() === Categories[3].toUpperCase() &&
                                <div>
                                    <li>HP: {Hp}</li>
                                    <li>CC: {CC}</li>
                                    <li>Tax: {Tax}</li>
                                </div>
                            }
                              {category.toUpperCase() === Categories[4].toUpperCase() &&
                                <div>
                                    <li>CPU: {cpu}</li>
                                    <li>GPU: {gpu}</li>
                                    <li>Ram: {ram} GB</li>
                                </div>
                            }
                            

                            <div className="text-start">
                                <li>Year: {year}</li>
                                <li>Color: {color}</li>
                            </div>
                            <div>

                            </div>
                        </ul>
                    </div>
                </div>
                <div className="mt-[10%] text-center w-[10%] ml-2 h-full ">
                    <ul className="text-[90%] text-blue-500 h-[80%] w-full flex flex-col justify-evenly top-10 sm:text-2xl">
                        <li><i class="fa-regular fa-thumbs-up"></i><p className="text-[90%] font-light">{NumberToK(TotalLikes)}</p></li>
                        <li><i class="fa-regular fa-thumbs-down"></i><p className="text-[90%] font-light">{NumberToK(TotalUnlikes)}</p></li>
                        <li><i class="fa-regular fa-comment"></i><p className="text-[90%] font-light">{NumberToK(TotalComments)}</p></li>
                        <li><i class="fa-solid fa-share"></i><p className="text-[90%] font-light">{NumberToK(TotalShares)}</p></li>
                    </ul>
                </div>
            </div>
            <hr className="mt-14 md:mt-5 xl:mt-10"></hr>
        </>
    )
}


export default DisplayAllPost
