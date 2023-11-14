import axios from 'axios';
const { API } = require("./api_key");
const { GetToken } = require("../cookie/cookie");

const AxiosInsta = axios.create(
    {
        baseURL: API,
        headers: {'Authorization' : 'Bearer ' + GetToken()}
    }
)

export default AxiosInsta