import React from 'react';
import AxiosInsta from '../api/axios';
import { get_product_by_make } from '../api/route_api';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { view_post } from '../routes/string_routes';
import Post from './Post_Img';
import { useRef } from 'react';

const ProductsByMake = ({ make , id }) => {

    const Nav = useNavigate();

    const [makes , setMakes] = useState([])
    const [prices , setPrices] = useState([])
    const [models , setModels] =useState([])
    const [years , setYears] = useState([])
    const [categories , setCategories] = useState([])
    const [Ids , setIds] = useState([])
    const [Imgs , setImgs] = useState([])
    const [locations , setLocations] =useState([])
    const [rams , setRam] = useState([])


    const GetProducts = async () => {
        setIds([])
        setImgs([])
        setLocations([])
        setYears([])
        setMakes([])
        setModels([])
        setPrices([])
        await AxiosInsta.get(get_product_by_make + '/' + make).then(response => {
            if (response.status === 200) {
                const data = response.data.Message
                data.forEach(data => {
                    const info = data.get_post_info[0]
                    setLocations(e => [...e , data.get_location[0].province])
                    setIds(oldValue => [...oldValue , data.post_id]);
                    setPrices(e => [...e , info.price])
                    setMakes(e => [...e , data.make])
                    setModels(e => [...e , data.model])
                    setCategories(e => [...e , info.post_category])
                    const imgs = data.get_imgs;
                    imgs.forEach((img , index) =>{          
                        if (index == 0){
                            setImgs(e => [...e , img.product_image_url])
                        }
                    })
                });
            }
        }).catch(e => {

        })
    }

    useEffect(() => {
        GetProducts();
    } , [id])

    const ChangePost = (id) => {
            
    }

    if (!Ids){

    }else{
        return (
            <>
            <ul className='flex w-full overflow-auto no-scrollbar'>

                {Ids.map((item , index) => (
                    <li    className="h-[300px] w-[300px] ml-5" onClick={() => Nav("/" + view_post + Ids[index] , 0)} key={index}><Post Category={categories[index].toUpperCase()} Image={Imgs[index]} Price={prices[index]} Model={models[index]} Make={makes[index]} Location={locations[index]} Ram={rams[index]} Year={years[index]} /></li>
                ))}
            </ul>
            
            </>
        )
    }
}

export default ProductsByMake