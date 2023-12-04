import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { get_post_by_make } from '../api/route_api';
import { useState } from 'react';
import LoadingScreen from '../components/Loadind_Screen';
import Post from '../components/Post_Img';
import AxiosInstance from '../api/axios';

const PostByModel = () => {

    let model = useParams()
    model = model.model

    const [makes, setMakes] = useState([])
    const [prices, setPrices] = useState([])
    const [models, setModels] = useState([])
    const [years, setYears] = useState([])
    const [categories, setCategories] = useState([])
    const [Ids, setIds] = useState([])
    const [Imgs, setImgs] = useState([])
    const [locations, setLocations] = useState([])
    const [rams, setRam] = useState([])

    useEffect(() => {
        setIds([])
        setImgs([])
        setLocations([]) 
        setYears([])
        setMakes([])
        setModels([])
        setPrices([])
        const GetPostModel = async () => {        
            await AxiosInstance.get(get_post_by_make + "/" + model).then((response) => {
                if (response.status === 200) {
                    const data = response.data.Message
                    data.forEach(data => {
                        const info = data.get_post_info[0]
                        setLocations(e => [...e, data.get_location[0].province])
                        setIds(oldValue => [...oldValue, data.post_id]);
                        setPrices(e => [...e, info.price])
                        setMakes(e => [...e, data.make])
                        setModels(e => [...e, data.model])
                        setYears(e => [...e , data.year])
                        setCategories(e => [...e, info.post_category])
                        const imgs = data.get_imgs;
                        imgs.forEach((img, index) => {
                            if (index == 0) {
                                setImgs(e => [...e, img.product_image_url])
                            }
                        })
                    });
                    console.log(response.data)
                }
            }).catch(e => {
                console.log(e)
            })
        }
        GetPostModel()
    }, [model])

    if (Ids.length === 0) {
        return <LoadingScreen />
    }

    return ( 
        <>
            <div className='mt-10'>
           
                <ul className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    {Ids.map((item, index) => (
                        <li className='mx-5 mb-5 h-[400px] xl:h-[300px]'><Post Year={years[index]}  Category={categories[index].toUpperCase()} Location={locations[index]} Image={Imgs[index]} Model={models[index]} Price={prices[index]} Make={makes[index]}></Post></li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default PostByModel