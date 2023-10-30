import React, { useState } from "react";
import { Link } from "react-router-dom";
import { gotoSignupPage1, login } from "../routes/string_routes";
import Signup from "../api/user_managements/user_signup";
import LoadingSpinner from "../components/loading_spinner";
import axios from "axios";
import { API } from "../api/api_key";
import { signup } from "../api/route_api";

const SecondPage = ({ setPage, first_name, last_name }) => {
    const [EmailPhoneNumber, setEmailPhoneNumber] = useState('');
    const [Password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('')
    const [InputError, setInputError] = useState('')
    const [Loading, setLoading] = useState(false)

    document.addEventListener('keypress', async (e) => {
        if (e.key === "Enter") {
            await HandleSignup();
        }
    })

    const Data = {
        email: EmailPhoneNumber,
        password: Password,
        last_name: last_name,
        first_name: first_name,

    }

    const CheckPasswordMatch = () => {
        return Password === ConfirmPassword ? false : true
    }
    const HandleSignup = async () => {

        if (CheckPasswordMatch()) {
            setInputError("Password not match !")
        } else {
            setInputError('')
            await axios.post(API + signup , Data).then((response) => {
                if (response.status === 200){
                    console.log(response.data)
                }
            }).catch((e) => {
                
            })
        }
    }
    return (
        <>
            <div class="bg-white w-full h-full flex items-center justify-center">
                <div class="w-full h-full">
                    <h1 class="text-xl md:text-2xl font-bold leading-tight">Create your account</h1>
                    <div>
                        <label class="block text-gray-700 pt-10">Email or Phone Number</label>
                        <input value={EmailPhoneNumber} onChange={(e) => setEmailPhoneNumber(e.target.value)} type="email" name="" placeholder="Email or Phone Number" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required></input>
                    </div>

                    <div class="mt-4">
                        <label class="block text-gray-700 pt-5" >Password</label>
                        <input value={Password} onChange={(e) => setPassword(e.target.value)} type="password" name="" id="Pass" placeholder="Password" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none" required></input>
                    </div>
                    <div class="mt-4">
                        {InputError !== '' && <p className="text-red-700 italic ml-5">{InputError}</p>}
                        <label class="block text-gray-700 pt-5">Confirm Password</label>
                        <input value={ConfirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" name="" id="ConfirmPass" placeholder="Confirm Password" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-whit e focus:outline-none" required></input>
                    </div>
                    <div className="flex items-center mt-3"><input type="checkbox" id="checkPass" onClick={(e) => HandleShowPassword()}></input><label className="ml-3" onClick={(e) => HandleShowPassword()} id="showPassText">Show Password</label></div>

                    <br></br>
                    {Loading === false && <button type="submit" class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6" onClick={() => HandleSignup()}>Sign up</button>}

                    {Loading === true && <div className="bg-blue-500 py-2 rounded-lg flex justify-center items-center">
                        <LoadingSpinner />
                    </div>}
                    <div className="flex items-center justify-between  mt-5 mr-5 ml-5">
                        <p className="text-blue-500 font-semibold hover:cursor-pointer " onClick={(e) => setPage(1)}><i class="fa-solid fa-arrow-left mr-1"></i>Back</p>
                        <div className="flex justify-end">
                            <p>Have Already Account ? </p>
                            <Link to={login}><p className="ml-2 font-semibold text-blue-600 hover:cursor-pointer">Login</p></Link>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

const HandleShowPassword = () => {
    let Pass = document.getElementById("Pass")
    let Confirm = document.getElementById("ConfirmPass")
    let Check = document.getElementById('checkPass')
    let showPass = document.getElementById('showPassText')
    if (Pass.type === "password") {
        Pass.type = "text"
        Confirm.type = "text"
        Check.checked = !Check.checked
    } else {
        Pass.type = 'password'
        Confirm.type = 'password'
        Check.checked = !Check.checked
    }
}

export default SecondPage