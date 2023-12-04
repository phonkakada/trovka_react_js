import axios from "axios";
import { signupwithEmail, signupwithPhone_number } from "../route_api";
import API from '../api_key'

import {SetUUID , setToken} from '../../cookie/cookie'
import { home } from "../../routes/string_routes";

const Signup = async (Data, setInputError , setLoading) => {
    const emailOrphoneData = Data.emailOrphone
    const password = Data.password
    const last_name = Data.last_name
    const first_name = Data.first_name
    setLoading(true)

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
            setInputError('Email or Phone number can not empty')
        } else {
            setInputError('')
        }
        return validateEmail(emailOrphoneData) ? true : false

    }
    if (CheckEmail()) {
        EmailSignup(emailOrphoneData, password, first_name, last_name , setInputError , setLoading)
    } else {
        if (validatePhoneNumber(emailOrphoneData)) {
            setInputError('')
            try {
                const response = await PhoneNumberSignup(emailOrphoneData, password, first_name, last_name)
                alert(response.status)
            } catch (_) {
                console.log(_)
            }
        } else {
            setLoading(false)
            setInputError('Email and phone number is invalid')
        }
    }
}


const EmailSignup = async (email, password, first_name, last_name , setInputError , setLoading) => {
    const Data = {
        email: email,
        password: password,
        first_name: first_name,
        last_name: last_name
    }
        axios.post(API +  signupwithEmail, Data).then((response) => {
            if (response.status === 200){
                setToken(response.data.Message.token)
                SetUUID(response.data.Message.uuid)
                window.location.href = home
                setLoading(false)
            }
        }).catch((e) => {
            if (e){
                setInputError('Error, User exist !')
                setLoading(false)
            }
        })
}

const PhoneNumberSignup = async (phone_number, password, first_name, last_name) => {
    const Data = {
        phone_number: phone_number,
        password: password,
        first_name: first_name,
        last_name: last_name
    }

    try {
        const response = axios.post(API + signupwithPhone_number, Data)
        return response
    } catch (e) {
        console.log(e)
    }
}

export default Signup