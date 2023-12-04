import React, { useState } from 'react';
import LoginImg from '../assets/images/house.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { home, signup } from '../routes/string_routes';
import LoadingSpinner from '../components/loading_spinner';
import { useDispatch } from 'react-redux';
import { setLoginState, setStateChange } from '../app/data/data';
import AxiosInstance from '../api/axios';
import { login } from '../api/route_api';


export default function Login() {
    document.title = "Login"
    const dispatch = useDispatch()

    const Nav = useNavigate();
    const fromData = new FormData()

    const [email, setemail] = useState(null)
    const [password, setpassword] = useState(null)
    const [onError, setonError] = useState('')
    const [Loading, setLoading] = useState(false)

    const Login = async () => {
        setLoading(true)
        if (email && password) {
            fromData.append('email' , email)
            fromData.append('password' , password)

            await AxiosInstance.post(login, fromData).then(res => {
                if (res.status === 200) {
                    dispatch(setStateChange(true))
                    Nav(home)
                    setLoading(false)
                }
            }).catch(e => {
                console.log(e)
                setLoading(false)
            })

        } else {
            setonError('Email and Password Can\'t be empty')
            setLoading(false)
        }

    }

    return (
        <div className="grid grid-color-1 sm:grid-cols-2 h-screen w-full">
            <div className='hidden sm:block bg-indigo-300'>
                <img className='w-full h-full object-cover rounded-lg' src={LoginImg} alt="" />
            </div>

            <div className='flex flex-col justify-center'>
                <center><div className="bg-blue-300 relative mt-5 w-[95px] pb-[95px] rounded-full overflow-auto sm:hidden">
                    <div className=" absolute inset-0">
                        <img className=" object-cover w-max-full h-max-full w-full h-full m-0" src="http://localhost:3000/static/media/Car.8d9aa121599634834c8d.jpeg"></img>
                    </div>
                </div></center>
                <div className='max-w-[450px] w-full mx-auto p-8 px-8'>
                    <h1 className='text-4xl dark:text font-bold text-center'>Welcome Back!</h1>
                    <h1 className='text-sm dark:text-gray-500 text-center p-5 text-bold'>Welcome Back! Login with your data that you entered during registration.</h1>

                    <label className=' text-gray-600'>Email</label>

                    <div className='flex flex-col text-gray-500'>
                        <input onChange={(e) => setemail(e.target.value)} className='mt-2 p-2 border-b-2 focus:outline-none focus:border-blue-500' autoComplete='on' type="email" placeholder='Email' />
                    </div>

                    <div className='flex flex-col text-gray-500'>
                        <label className='text-gray-600'>Password</label>

                        <input onChange={(e) => setpassword(e.target.value)} className='mt-2 p-2 border-b-2 focus:outline-none focus:border-blue-500' type="password" id='password' placeholder='********' />
                        {onError !== '' && <p className='text-red-500 italic mt-2'>{onError}</p>}
                    </div>
                    <div className='flex justify-between text-gray-500 py-2'>
                        <label className='flex items-center' onClick={() => handleCheckPass()}><input className='mr-2' id='checkPass' type='Checkbox'></input>Show Password</label>
                        <button className='border-b-2 border-white focus:outline-none hover:border-blue-500'>Forget Password?</button>
                    </div>
                    <div>

                        {Loading === false && <button className='rounded-sm w-full my-5 py-2 bg-blue-700 text-white shadow-lg shadow-teal-500/50 hover:shadow-blue-500/40' onClick={() => Login()}>LOGIN</button>}
                        {Loading === true && <div className='rounded-sm w-full my-5  bg-blue-700 py-1 text-white shadow-lg shadow-teal-500/50 hover:shadow-blue-500/40 flex justify-center'><LoadingSpinner /></div>}
                    </div>
                    <div className='mt-2 flex justify-end items-center'>
                        <p className='text-gray-500'>Don't have an account?</p>
                        <Link to={signup}><button className='border-white ml-2 flex text-sky-800 font-medium border-b-2 focus:outline-none hover:border-blue-500'>Sign Up</button></Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

const handleCheckPass = () => {
    const Check = document.getElementById('checkPass')
    const pass = document.getElementById('password')
    if (Check) {
        if (Check.checked) {
            pass.type = "text"
        } else {
            pass.type = 'password'
        }
    }
}
