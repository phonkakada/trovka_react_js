import axios from "axios"
import { API } from "../api_key"
import { post_car } from "../route_api"

const postCar = async (data , setUploaded) => {
    console.log(data)
    await axios.post(API + post_car , data).then((e) => {
        if (e.status === 200){
            setUploaded(true)
            console.log("Ok")
        }
    }).catch((e) => {
        setUploaded(false)
        console.log(e.response.data.message)
    })
}

export default postCar