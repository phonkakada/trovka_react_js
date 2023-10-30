import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import DropdownMenu from "../../components/downDownMenu";
import { CarCategories, Categories, chairs, fuels, generateArrayOfYears, tax_types, used, warrantys } from "../../assets/categories";
import "../../index.css";
import { GetUUID } from "../../cookie/cookie";
import PostCar from "./addProducts/addCar";
import LoadingSpinner from "../../components/loading_spinner";
import axios from "axios";
import { API } from "../../api/api_key";
import { post_car, post_computer, post_motor, post_phone } from "../../api/route_api";
import LocationPicker from "../../location/location_class"
import DisplayPhonePost from "./components/display_phone";
import HandleAddPhone from "./components/handle_add_phone";
import { ProvincesEnglishLanguage } from "../../assets/all_provinces";
import PostMotor from "./addProducts/addMotor";
import PostComputer from "./addProducts/addComputer";
import PostPhone from "./addProducts/addPhone";

const AddPost = () => {
    let Products = []
    const [img, setimg] = useState([])
    const [imgError, setimgError] = useState(false);
    const [defaultValue, setdefaultValue] = useState(Categories[5]);
    const [Images, setImages] = useState([])
    const [Uploading, setUploading] = useState(false);
    const [OnError, setOnPostError] = useState('')
    const [LocationLink, SetLocationLink] = useState('')
    const [phone_number, setphone_number] = useState([])
    const [Location, SetLocation] = useState('')
    const [province, setProvince] = useState(ProvincesEnglishLanguage[0])
    const [description , setdescription] = useState('')

    const fromData = new FormData();




    const handleAddPost = async () => {
        setUploading(true)
        fromData.append('uuid', GetUUID());
        fromData.append("ImageLength", Images.length)
        fromData.append("locationLink", LocationLink)
        fromData.append("location", Location)
        fromData.append('province', province)
        fromData.append('description' , description)
        Images.map((item, index) => (
            fromData.append(`images${index}`, item)
        ))

        if (defaultValue === Categories[2]) {  // for car
            await axios.post(API + post_car, fromData).then((response) => {
                if (response.status === 200) {
                    setUploading(false)
                    setOnPostError("Successful")
                }
            }).catch((e) => {
                setUploading(false)
                setOnPostError("Post Error Please Check all fields are filled !")
            })
        }
        if (defaultValue === Categories[3]) { // for Motor
            await axios.post(API + post_motor, fromData).then((response) => {
                if (response.status === 200) {
                    setUploading(false)
                    setOnPostError("Successful")
                }
            }).catch((e) => {
              
                setUploading(false)
                setOnPostError("Post Error Please Check all fields are filled !")
            })
        }
        if (defaultValue === Categories[4]){  // for Computer
            await axios.post(API + post_computer, fromData).then((response) => {
                if (response.status === 200) {
                    setUploading(false)
                    setOnPostError("Successful")
                }
            }).catch((e) => {
              
                setUploading(false)
                setOnPostError("Post Error Please Check all fields are filled !")
            })
        }

        if (defaultValue === Categories[5]){
            await axios.post(API + post_phone , fromData).then((response) => {
                if (response.status === 200){
                    setUploading(false)
                    setOnPostError("Successful")
                }
            }).catch((e)=>{
                setUploading(false)
                setOnPostError("Post Error Please Check all fields are filled !")
            })
        }

    }


    useEffect(() => {
        let fileInput = document.getElementById('fileInput');
        fileInput.addEventListener('change', handleFileSelect, false);
        function handleFileSelect(event) {
            let im = []
            const files = event.target.files;
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const reader = new FileReader();

                im.push(file)

                reader.onload = function (e) {
                    if (!Products.includes(e.target.result)) {
                        Products.push(e.target.result)
                        fileInput = ''
                        setimg(Products)
                    }
                    if (Products.length > 10) {
                        setimgError(true)
                        setimg([])
                    } else {
                        setimgError(false)
                    }
                };
                reader.readAsDataURL(file); // Read the file as a data URL
            }
            setImages(im)
        }
    }, [])

    return (
        <>
            <div className="w-full h-full flex justify-center">
                <div className="mt-7  max-w-[800px] overflow-auto .no-scrollbar w-[80%] rounded-md shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] shadow-slate-300  h-[80vh]">
                    <div className="flex justify-end mr-5 mt-5"><i class="fa-solid fa-xmark text-3xl  text-slate-600"></i></div>
                    <div className="w-[80%]  text-slate-800 ml-[10%]">
                        <div>
                            <p>Category <span className="italic text-xs"> *(Required)</span></p>
                            <DropdownMenu arrayData={Categories} defaultValue={defaultValue} setValue={setdefaultValue} />
                        </div>
                        <div>
                            {defaultValue === Categories[2] && <PostCar fromData={fromData} />}
                            {defaultValue === Categories[3] && <PostMotor fromData={fromData} />}
                            {defaultValue === Categories[4] && <PostComputer fromData={fromData} />}
                            {defaultValue === Categories[5] && <PostPhone fromData={fromData} />}
                        </div>
                        <div className="mt-4">
                            <p>Description (Optional)</p>
                            <textarea onChange={(e) => setdescription(e.target.value)} placeholder=" Description" cols={5} rows={5} className="bg-blue-200 w-full outline-none rounded-sm" type="text"></textarea>
                        </div>
                        <div className="mt-4 md:flex justify-between">
                            <div className="md:w-1/2">
                                <p>Province</p>
                                <DropdownMenu defaultValue={province} setValue={setProvince} arrayData={ProvincesEnglishLanguage} />
                            </div>
                            <div className="md:w-1/2 md:ml-2 mt-4 md:mt-0   items-center justify-between" >
                                <p>Phone Contact<span className="italic text-xs"> *(Multiple)</span></p>
                                <div className="flex items-center justify-between">
                                    <input id="input_phone" placeholder=" Phone Number" className="bg-blue-200 italic outline-none h-10 w-[80%]"></input>
                                    <button onClick={() => HandleAddPhone(phone_number, setphone_number, 'input_phone')}>
                                        <i class="fa-solid text-slate-500 fa-plus mr-5 bg-blue-200 p-3 rounded-full"></i>
                                    </button>
                                </div>
                                <div className="mt-2"></div>
                                <DisplayPhonePost phones={phone_number} setphone_number={setphone_number} />
                            </div>
                        </div>
                        <div className="mt-5"><span className="italic">Location : </span>{Location}</div>
                        <div className="w-full mt-2 h-44 bg-blue-400 ">
                            <div className="sticky h-full w-full">
                                <LocationPicker LocationAddreess={SetLocation} LocationLink={SetLocationLink} />
                            </div>
                        </div>

                    </div>
                    <div className="w-[80%] mt-20 ml-[10%] ">
                        {imgError === true && <p className="text-red-500 italic">! Maximun 10 images</p>}
                        <label class="block mb-2 text-sm font-medium text-gray-900 " for="file_input">Upload Images <span className="italic text-xs"> *(Required)</span> </label>
                        <input className="bg-slate-400 w-full p-1 rounded-sm " id="fileInput" placeholder="ff" maxLength={10} multiple type="file" accept="image/*"></input>
                        <p class="mt-1 text-sm text-slate-500 " id="file_input_help">SVG, PNG, JPG or GIF (MAX. 10 Images).</p>
                    </div>
                    <div className="w-[80%] ml-[10%] ">

                        <div className="grid grid-cols-2 md:grid-cols-4">
                            <DisplayImg Imgs={img} />
                        </div>
                    </div>
                    <center>
                        <br></br>
                        {Uploading === false && <div id="post_btn" onClick={() => handleAddPost()} className="flex hover:cursor-pointer w-[80%] rounded-sm hover:shadow-md shadow-slate-500 justify-center p-2 bg-blue-500">
                            <button className="text-white">Post</button>
                        </div>}
                        {Uploading === true && <div className="w-[80%] bg-blue-500 h-10 flex items-center justify-center"><LoadingSpinner /></div>}

                    </center>
                    {OnError && <p className="text-red-500 italic ml-[12%] mt-3">{OnError}</p>}
                    <div className="pb-20"></div>
                </div>
            </div>
        </>
    )
}

const DisplayImg = ({ Imgs }) => {
    let arr = []
    Imgs.map((items, index) => (
        arr.push(
            <>
                <div key={index} className="w-full relative p-1 h-full">
                    <div>
                        <img className="object-cover max-w-full max-h-full w-full h-full" src={items}></img>
                    </div>

                </div>

            </>
        )
    ))
    return (
        <>
            {arr}
        </>
    )

}








export default AddPost