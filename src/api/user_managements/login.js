import axios from 'axios';
import API from '../api_key'

import { emailLogin } from '../route_api';
import { SetUUID, setToken } from '../../cookie/cookie';
import { home } from '../../routes/string_routes';
const HandleLogin = async (Data , onError , setLoading) => {
    const emailOrphoneData = Data.emailOrphone
    const password = Data.password

    const validateEmail = (emailOrphoneData) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(emailOrphoneData);
    }

    function validatePhoneNumber(emailOrphoneData) {
        // Regular expression for validating a Phone Number (US format)
        const NineDigitPattern = /^(?:\+855|0)(?:(?:[1-9]?\d|[\d]{2})-?\d{3}-?\d{3})$/;
        const TenDigitPattern = /^(?:\+855|0)(?:(?:\d{9}|\d{2}-\d{3}-\d{4}|\d{3}-\d{2}-\d{4}|\d{4}-\d{2}-\d{3}))$/;

        return (TenDigitPattern.test(emailOrphoneData) || NineDigitPattern.test(emailOrphoneData)) ? true : false;
    }

    const CheckEmail = () => {
        if (emailOrphoneData === '') {
            onError('! Email or Phone number can not empty')
        } else {
            onError('')
        }
        return validateEmail(emailOrphoneData) ? true : false

    }
    if (CheckEmail()) {
        EmailLogin({email : emailOrphoneData , password : password} , onError , setLoading)
    } else {
        
        if (validatePhoneNumber(emailOrphoneData)) {
            onError('')
            try {
                // const response = await PhoneNumberSignup(emailOrphoneData, password, first_name, last_name)
            } catch (_) {
                console.log(_)
            }
        } else {
            setLoading(false)
            onError('! Email and phone number is invalid')
        }
    }
}

const EmailLogin = async (Data , orError , setLoading) => {

    await axios.post(API + emailLogin , Data).then((e) => {
        if (e.status === 200){
            // setToken(e.data.Message.token)
            // SetUUID(e.data.Message.uuid)
            window.location.href = home
            setLoading(false)
        }
    }).catch((e) => {
        orError("! Email or Phone number and password is incorrect")
        setLoading(false)
    })
}

export default HandleLogin