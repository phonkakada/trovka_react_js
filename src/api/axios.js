import axios from 'axios';
import API from './api_key';





const AxiosInstance = axios.create(
    {
        baseURL : API,
        withCredentials: true,
    }

    
)
export default AxiosInstance
