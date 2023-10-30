import axios from "axios";
import { API } from "../api_key";
import { get_user_info } from "../route_api";
import { GetUUID } from "../../cookie/cookie";

const GetUserInformation = async () => {
    let profile_url = ""
    let full_name = "";
    let main_contact = ""
    let last_name = ""
    let first_name = ""

    await axios.get(API + get_user_info + GetUUID()).then((e) => {
        if (e.status === 200) {
            full_name = e.data.Message.name
            profile_url = e.data.Message.profile_url
            main_contact = e.data.Message.contact
            last_name = e.data.Message.last_name
            first_name = e.data.Message.first_name

        }
    }).catch((e) => {
        // Handle Error

    })

    return [full_name, profile_url, first_name, last_name, main_contact]

}

export default GetUserInformation