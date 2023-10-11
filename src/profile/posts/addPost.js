import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import DropdownMenu from "../../components/downDownMenu";
import { CarCategories, Categories, chairs, fuels, generateArrayOfYears, tax_types, used, warrantys } from "../../assets/categories";
import "../../index.css";
import { GetUUID } from "../../cookie/cookie";
import postCar from "../../api/get_categerys/post_car";

import PostCar from "./addProducts/addCar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddPost = () => {
    let Products = []
    const [img, setimg] = useState([])
    const [imgError, setimgError] = useState(false);
    const [defaultValue, setdefaultValue] = useState(Categories[2]);
    const [Images, setImages] = useState([])
    const [products, setproducts] = useState({})
    const [Uploaded, setUploaded] = useState(false);

    const handleAddPost = async () => {
        if (defaultValue === Categories[2]) {  // for car
            products.uuid =  GetUUID();
            products.products = ["222" , "222"]
            console.log(Uploaded)
            const response = postCar(products, setUploaded);
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
                    <div className="w-[80%] ml-[10%]">
                        <div>
                            <p>Category <span className="italic text-xs"> *(Required)</span></p>
                            <DropdownMenu arrayData={Categories} defaultValue={defaultValue} setValue={setdefaultValue} />
                        </div>
                        <div>
                            <PostCar setcar={setproducts} />
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
                        <div id="post_btn" onClick={() => handleAddPost()} className="flex hover:cursor-pointer w-[80%] rounded-sm hover:shadow-md shadow-slate-500 justify-center p-2 bg-blue-500">
                            <button className="text-white">Post</button>
                        </div>
                    </center>
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