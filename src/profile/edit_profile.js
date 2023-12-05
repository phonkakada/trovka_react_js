import React from 'react';
import { useState } from 'react';
import ProfileImg from '../components/profile_img';
import { useRef } from 'react';
import AxiosInsta from '../api/axios';
import { profile_upload, update_info } from '../api/route_api';
import { useDispatch, useSelector } from 'react-redux';
import LoadingSpinner from '../components/loading_spinner';
import { setStateChange, setUuid } from '../app/data/data';
import AxiosInstance from '../api/axios';
import { useEffect } from 'react';

const EditProfile = ({ func }) => {
    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [Uploading, setUploading] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {  // Assign state value from User data
        setFirst_name(User.first_name)
        setLast_name(User.last_name)
        if (UserContacts) {
            setEmail(UserContacts.email)
            setPhone(UserContacts.phone)
        }
    }, [])

    const User = useSelector(state => state.data.MyProfile)

    const HandleUpdateInfo = async () => {

        const data = {
            email: email,
            phone: phone,
            first_name: first_name,
            last_name: last_name
        }

        const Text_Status = document.getElementById('status')
        setUploading(true)
        await AxiosInstance.put(update_info, data).then(res => {
            if (res.status === 200) {
                // console.log(res.data)
                dispatch(setStateChange(true))
                setUploading(false)
                Text_Status.innerHTML = 'Successful'
            }
        }).catch(e => {
            // console.log(e)
            setUploading(false)
            Text_Status.innerHTML = "! Something went wrong "
        })
    }
    if (!User) {
        return <LoadingSpinner />
    }
    const UserContacts = User.contacts[0]
    return (
        <>
            <div className='w-full h-full transition-all duration-500 shadow-md shadow-slate-500'>
                <div className='w-full h-full bg-white overflow-auto no-scrollbar pb-10'>
                    <div className='mx-6'>
                        <div className='flex text-3xl z-[1] sticky top-0 pt-5 bg-white justify-between font-bold w-full'>
                            <i></i>
                            <p className='font-Playpen text-xl font-extralight text-slate-600'>Edit Your Information</p>
                            <i onClick={func} title='Close' class="fa-solid hover:cursor-pointer text-slate-600 hover:-skew-x-12 fa-xmark"></i>
                        </div>
                        <div className='flex justify-center'>
                            <div className='mt-5 flex justify-center relative rounded-full w-20 h-20 bg-stone-400'>
                                <div className='absolute inset-0'>
                                    <ProfileImg profile_url={User.profile_url} last_name={User.last_name} />
                                </div>

                            </div>

                        </div>
                        <div className='flex justify-center'>
                            <AddNewProfile />
                        </div>
                        <div className='flex justify-center font-semibold font-Playpen text-xl'>

                        </div>

                        <div className='mt-5'><InputInformation defualtValue={first_name} label={'First name'} setValue={setFirst_name} /></div>
                        <div className='mt-2'><InputInformation defualtValue={last_name} label={'Last name'} setValue={setLast_name} /></div>
                        <div className='mt-2'><InputInformation defualtValue={email} label={'Email'} setValue={setEmail} /></div>
                        <div className='italic text-red-500 text-xs'>This email is not used for login to your account</div>
                        <div className='mt-2'><InputInformation defualtValue={phone} label={'Phone Number'} setValue={setPhone} /></div>
                        <div className='flex justify-center'>
                            {Uploading ? <button onClick={HandleUpdateInfo} className='w-full text-white bg-slate-300 hover:cursor-not-allowed flex justify-center py-2 mt-5 transition-all duration-500 rounded-3xl border-0 '><LoadingSpinner /></button> : <button onClick={HandleUpdateInfo} className='w-full text-white bg-blue-500 py-2 mt-5 transition-all duration-500 rounded-3xl border-0 hover:text-black hover:bg-transparent hover:border-blue-500 hover:border-2 '>Save Change</button>}
                        </div>
                        <p id='status' className='italic text-red-500 font-thin mt-2 font-Playpen text-sm'></p>

                    </div>
                </div>
            </div>
        </>
    )
}

const InputInformation = ({ defualtValue, setValue, label }) => {
    return (
        <div className='flex flex-col'>
            <label className='font-Playpen'>{label}</label>
            <input spellCheck={false} placeholder={label} onChange={(e) => setValue(e.target.value)} className='mt-2 py-2 pl-2 bg-transparent border border-slate-400 rounded-sm outline-none' value={defualtValue}></input>
        </div>
    )


}

const AddNewProfile = () => {
    const btn_input = useRef(null)
    const [ImgUploading, setImgUploading] = useState(false)
    const fromData = new FormData()
    const dispatch = useDispatch()
    const ChangeProfile = () => {
        if (btn_input.current) {
            btn_input.current.click()
        }

    }
    const HandleChange = async () => {
        if (btn_input.current) {
            const file = btn_input.current.files[0]
            fromData.append('images', file)
            fromData.append('ImageLength', 1)
            console.log(fromData)
            setImgUploading(true)
            await AxiosInstance.post(profile_upload, fromData).then(res => {
                if (res.status === 200) {
                    setImgUploading(false)
                    dispatch(setStateChange())
                    // console.log(res.data)
                }
            }).catch(e => {
                setImgUploading(false)
                // console.log(e)
            })
        }
    }
    return (
        <div onClick={() => ChangeProfile()}>
            <p className='text-blue-500 hover:cursor-pointer italic flex w-full justify-center'>+ Add Profile {ImgUploading === true && <span className='ml-3'><LoadingSpinner /></span>} </p>
            <input onChange={HandleChange} ref={btn_input} id='btn_img' type='file' className='hidden'></input>
        </div>
    )
}


export { AddNewProfile }
export default EditProfile