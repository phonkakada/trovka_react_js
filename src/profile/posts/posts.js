import React, { useRef, useState } from "react"
import NumberToK from "../../assets/NumberToK"
import DisplayFullImage from "../../components/display_image_full"
import { useEffect } from "react"
import axios from "axios"
import { get_all_user_posts, getThreePost } from "../../api/route_api"
import Post from "../../components/SignlePost"
import AxiosInsta from "../../api/axios"
import AddPost from "./addPost"
import { useNavigate } from "react-router-dom"
import { addPost } from "../../routes/string_routes"
import AxiosInstance from "../../api/axios"

const DisplayAllPost = ({ profile, Name }) => {
    const [AllPostsId, setAllPostsId] = useState(null)
    const [PostsData, SetPostData] = useState([])
    const Nav = useNavigate()

    const GetUserPosts = async () => {
        setAllPostsId([])
        await AxiosInsta.get(get_all_user_posts).then((response) => {
            if (response.status === 200) {
                setAllPostsId(response.data.Message)
            }
        }).catch((e) => {

        })
    }
    const GetThreePost = async () => {
        if (AllPostsId) {
            await AxiosInstance.get(getThreePost + AllPostsId[11]).then(res => {
                if (res.status === 200) {
                    SetPostData(e => [...e, res.data])
                }
            }).catch(e => {

            })
        }
    }
    useEffect(() => {
        GetUserPosts();
    }, [])
    useEffect(() => {
        GetThreePost();
    }, [AllPostsId])

    return (
        <>
            <p className="text-blue-500 text-3xl font-bold mt-5">Posts</p>
            <button title="Add your Product now" className="flex font-Playpen hover:text-white text-slate-600 items-center justify-center mt-5 w-full bg-transparent border border-blue-500 hover:bg-blue-500 transition-all duration-500  py-1 rounded-md" onClick={() => Nav(addPost)}>
                <i class="fa-solid fa-plus mr-2"></i>
                <p>Post</p>
            </button>
            <ListPosts PostsData={PostsData} Profile={profile} name={Name} />
        </>
    )
}

const ListPosts = ({ PostsData }) => {
    if (!PostsData || PostsData.length === 0) {
        return <center><div className="font-bold text-2xl text-blue-500 mt-20">No Post</div></center>
    } else {

        var makes = [];
        var prices = [];
        var models = [];
        var provinces = []
        var Imgs = [];
        var ListImgs = [];
        var dates = [];
        var Hps = [];
        var Cc  = [];
        var years = [];

        PostsData.forEach((data, index) => {
            if (data.Message[index]) {
                makes.push(data.Message[index].get_info[0].make)
                models.push(data.Message[index].get_info[0].model)
                Hps.push(data.Message[index].get_info[0].hp)
                Cc.push(data.Message[index].get_info[0].cc)
                years.push(data.Message[index].get_info[0].year)
                dates.push(data.Message[index].created_at)
                prices.push(data.Message[index].price)
                if (data.Message[index].locations.length != 0) {
                    provinces.push(data.Message[index].locations[0].province)
                }
                data.Message[index].products.map((e) => Imgs.push(e.product_image_url))
                ListImgs.push(Imgs)
                Imgs = [];
            }
        });
        const scrollDetect = document.getElementById(`scroll-detect`);
        window.addEventListener('scroll' , () => {
            if (scrollDetect){
                const ps = scrollDetect.getBoundingClientRect();
                console.log(ps.bottom / 2)
            }
        })
        return (
            <>
                {/* <center> */}
                    <div className="w-full h-[400px] sm:w-[500px] sm:h-[650px] md:w-[800px] md:h-[900px] xl:w-[1080px] xl:h-[1080px]">
                        <div className="py-5">{prices.map((value, index) => <div id="scroll-detect"><Post Owner={true}  Key={index} Year = {years[index]} category={'Car'} CC={Cc[index]} Hp={Hps[index]}  Date={dates[index]} Price={prices[index]} ListImg={ListImgs[index]} Make={makes[index]} Model={models[index]}  /></div>)}</div>
                    </div>
                    <div className="pb-20"></div>

                {/* </center> */}
            </>
        )
    }
}



export default DisplayAllPost
