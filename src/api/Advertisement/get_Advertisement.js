import axios from "axios"
import { getAdvertisement } from "../route_api"
import { API } from "../api_key"
import React from "react"


const AdvertisementListImage = async () => {
    let List = []
    await axios.get(API + getAdvertisement).then((response) => {
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