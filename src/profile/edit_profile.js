import React from 'react';
import { useState } from 'react';
import ProfileImg from '../components/profile_img';

const EditProfile = ({func}) => {
    const [first_name, setFirst_name] = useState('PHON')
    const [last_name, setLast_name] = useState('Kakada')
    const [email, setEmail] = useState('phonkakada@icloud.com')
    const [phone, setPhone] = useState('089261500')
    return (
        <>
            <div className='w-full h-full transition-all duration-500 flex justify-center'>
                <div className='w-full h-full bg-white overflow-auto no-scrollbar pb-10'>
                    <div className='mx-6'>
                        <div className='flex text-3xl sticky top-0 pt-5 bg-white justify-between font-bold w-full'>
                            <i></i>
                            <i onClick={func} title='Close' class="fa-solid hover:cursor-pointer fa-xmark"></i>
                        </div>
                        <div className='flex justify-center'>
                            <div className='mt-5 flex justify-center rounded-full w-20 h-20 bg-stone-400'>
                                <div>
                                    <ProfileImg profile_url={null} last_name={last_name} />
                                </div>
                                
                            </div>

                        </div>
                        <div className='flex justify-center'>
                            <AddNewProfile />
                        </div>
                        <div className='flex justify-center font-semibold font-Playpen text-xl'>
                            <p>Edit Your Infomation</p>

                        </div>
                        
                        <div className='mt-5'><InputInformation defualtValue={first_name} label={'First name'} setValue={setFirst_name} /></div>
                        <div className='mt-2'><InputInformation defualtValue={last_name} label={'Last name'} setValue={setLast_name} /></div>
                        <div className='mt-2'><InputInformation defualtValue={email} label={'Email'} setValue={setEmail} /></div>
                        <div className='mt-2'><InputInformation defualtValue={phone} label={'Phone Number'} setValue={setPhone} /></div>
                        <div className='flex justify-center'>
                            <button className='w-full text-white bg-blue-500 py-2 mt-5 transition-all duration-500 rounded-3xl border-0 hover:text-black hover:bg-transparent hover:border-blue-500 hover:border-2 '>Save Change</button>
                        </div>

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
            <input spellCheck={false} onChange={(e) => setValue(e.target.value)} className='mt-2 py-2 pl-2 bg-transparent border border-slate-400 rounded-sm outline-none' value={defualtValue}></input>
        </div>
    )


}

const AddNewProfile = () => {
    return(
        <div>
            <p className='text-blue-500 hover:cursor-pointer italic'>+ Add Profile</p>
        </div>
    )
}

export {AddNewProfile}
export default EditProfile