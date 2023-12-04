import axios from "axios"
import { getAdvertisement } from "../route_api"
import React from "react"
import AxiosInstance from "../axios"


const AdvertisementListImage = async () => {
    let List = []
    await AxiosInstance.get(getAdvertisement).then((response) => {
        if (response.status === 200){
            
            response.data.Message.map((items , index) => (
                List.push({url : items.image_url})
            ))
            
        }
    }).catch((e) => {
        console.log(e)
    })
    return List
}

export default AdvertisementListImage