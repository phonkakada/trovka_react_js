import axios from "axios";
import { checkTokenUUID } from "./route_api";
import { API } from "./api_key";
import { useState } from "react";

const VerifyTokenUUID = async (UUID , Token) => {
    let statusOk = false
    const Data = {
        uuid : UUID,
        token : Token
    }
    await axios.post(API + checkTokenUUID , Data).then(async (response) => {
        if (response.status === 200){
            statusOk = true
        }else{
            
        }
    }).catch((e) => {
        console.log(e)
    })
    return statusOk
}

export default VerifyTokenUUID